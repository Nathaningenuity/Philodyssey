/* Philodyssey: three new experiences for the Shipyard.
 *   #lab-drop   Timeline Drop     (also #stoa-drop)   put five thinkers in order of birth
 *   #lab-myths  Myth or truth?                         call each statement: what they held, or the straw man?
 *   #lab-mary   Mary's Room       (also #lab-marys)   learn every fact about red, then open the door
 *
 * Load with <script src="js/experiences.js"></script> right before </body>, after the main app script.
 *
 * The main app lives inside an IIFE and exposes a bridge, window.PHILO (VIEWS, ACT, save, render, get S, get after...).
 * With the bridge (the normal case):
 *  - routing: VIEWS.lab is wrapped so "drop", "myths", "mary"/"marys" render our games; VIEWS.stoa("drop") too;
 *  - state: progress lives in PHILO.S.lab.drop / .myths / .marys (read live each time: S is reassigned), saved with PHILO.save();
 *  - re-rendering is PHILO.render(true); after-render work goes on PHILO.after.
 * Without the bridge (an older index.html) the module still works on its own: a MutationObserver mounts our page
 * over the app's Shipyard fallback, and state is merged into the app's localStorage key by patching Storage#setItem.
 * In both modes: decoration of #lab, #stoa, #quiz and #thinker-* pages is done on the DOM after each render, and all
 * UI events use data-x="..." (the app's delegation uses data-act, so the two never collide).
 */
(function () {
  "use strict";
  if (window.__PHILO_EXPERIENCES__) return;
  window.__PHILO_EXPERIENCES__ = true;

  const KEY = "philosopher-atlas.v1";
  const P = window.PHILO && window.PHILO.VIEWS && typeof window.PHILO.render === "function" ? window.PHILO : null;
  const W = window, D = document;
  const $ = (s, r) => (r || D).querySelector(s);
  const $$ = (s, r) => Array.from((r || D).querySelectorAll(s));
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = () => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = a => a[Math.floor(Math.random() * a.length)];

  /* ------------------------------------------------------------------ data */
  const T = [].concat(W.ATLAS_THINKERS_A || [], W.ATLAS_THINKERS_B || [], W.ATLAS_THINKERS_C || [], W.ATLAS_THINKERS_D || [], W.ATLAS_THINKERS_E || [], W.ATLAS_PEOPLE_EXTRA || []);
  const TH = {}; T.forEach(t => { if (t && t.id && !TH[t.id]) TH[t.id] = t; });
  const CORE = new Set([].concat(W.ATLAS_THINKERS_A || [], W.ATLAS_THINKERS_B || []).map(t => t.id));
  let PX = W.ATLAS_PROFILES_EXT || {}; // thinker profiles load on demand (P.pxLoad); Myth or truth waits for them
  const LIB = Object.assign({ glossary: [], experiments: [], eras: [] }, W.ATLAS_LIBRARY || {});
  const GLOSS = Array.isArray(W.ATLAS_DICT) && W.ATLAS_DICT.length ? W.ATLAS_DICT : LIB.glossary;
  const AGQ = ((W.ATLAS_AGORA || {}).questions) || [];
  const COMPASS_Q = ((W.ATLAS_COMPASS || {}).questions) || [];

  // same tradition table as the app (tradOf), so colours match the Timeline and the Thinkers page
  const TRAD = [
    { id: "classical", name: "Greek and Roman", color: "#E8B04A", test: t => /Greek|Roman|Hellen/i.test(t) },
    { id: "eastasia", name: "Chinese and Japanese", color: "#EE7562", test: t => /Chinese|Japan|Kyoto|Confuc|Dao/i.test(t) },
    { id: "southasia", name: "Indian", color: "#C49BF0", test: t => /India|Buddh|Vedant/i.test(t) },
    { id: "islamic", name: "Islamic and Jewish", color: "#6CC596", test: t => /Islam|Jewish|Persian|Arab/i.test(t) },
    { id: "medieval", name: "Medieval Christian", color: "#93ABF0", test: t => /Medieval|Scholast|Christian/i.test(t) },
    { id: "africana", name: "Africana", color: "#F2A3C6", test: t => /Africa/i.test(t) },
    { id: "western", name: "Modern Western", color: "#ECE3CB", test: () => true }
  ];
  const tradOf = t => { const s = (t.tradition || "").trim() || (t.schools || []).join(" "); return TRAD.find(x => x.test(s)); };
  const tradLabel = t => (t.tradition || "").trim() || tradOf(t).name;
  const SHORTNAME = { zeno_elea: "Zeno of Elea", zeno_citium: "Zeno (Stoic)", marcus_aurelius: "Marcus Aurelius", buddha: "the Buddha", du_bois: "Du Bois", vaninwagen: "van Inwagen", gstrawson: "G. Strawson", pfstrawson: "P. F. Strawson", ockham: "Ockham", elisabeth: "Elisabeth" };
  function shortName(t) {
    if (!t) return "";
    if (SHORTNAME[t.id]) return SHORTNAME[t.id];
    const n = String(t.name).replace(/\s*\(.*?\)\s*/g, " ").trim();
    if (/ of /.test(n)) return n.split(" of ")[0];
    if (/Chinese|Japan|Indian/i.test(t.tradition || "")) return n;
    return n.split(" ").slice(-1)[0];
  }
  const capFirst = s => s.charAt(0).toUpperCase() + s.slice(1);
  function initials(n) { const w = String(n).replace(/\(.*?\)/g, "").replace(/\s+of\s+.*$/, "").split(/\s+/).filter(x => x && /^[A-ZÀ-ɏ]/.test(x)); return (w.length > 1 ? w[0][0] + w[w.length - 1][0] : (w[0] || "?").slice(0, 2)).toUpperCase(); }
  const yr = (n, approx) => n == null ? "" : (approx ? "c. " : "") + (n < 0 ? (-n) + " BCE" : String(n));
  function life(t) { if (!t || t.born == null) return ""; if (t.died == null) return "born " + yr(t.born, t.approximate) + (t.born < 1900 ? ", death unknown" : ""); return yr(t.born, t.approximate) + " – " + yr(t.died, t.approximate && t.died < 1500); }
  const fame = t => (CORE.has(t.id) ? 100 : 0) + Object.keys(t.positions || {}).length;
  const slugT = s => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  let GSET_ = null, GSET_N = 0; // rebuilt once the full dictionary has arrived
  const gset = () => { const G = Array.isArray(W.ATLAS_DICT) && W.ATLAS_DICT.length ? W.ATLAS_DICT : GLOSS; if (!GSET_ || GSET_N !== G.length) { GSET_ = new Set(G.map(g => slugT(g.term))); GSET_N = G.length; } return GSET_; };

  /* -------------------------------------------------------------- icons */
  const svg = (body, cls, vb) => '<svg class="' + (cls || "xp-ic") + '" viewBox="' + (vb || "0 0 24 24") + '" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + body + "</svg>";
  const IC = {
    drop: (c) => svg('<path d="M3 25h26"/><path d="M7 22v6M16 22v6M25 22v6"/><rect x="11.5" y="3" width="9" height="11" rx="1.6"/><path d="M16 14.5v5"/><path d="M13.5 17.5 16 20l2.5-2.5"/>', c, "0 0 32 32"),
    myth: (c) => svg('<path d="M4 6.5h24v15H15l-6.5 5v-5H4z"/><path d="m9 12.5 2.6 2.6L16 10.6"/><path d="m19 11 4.6 4.6M23.6 11 19 15.6"/>', c, "0 0 32 32"),
    eye: (c) => svg('<path d="M2.5 16S8 7.5 16 7.5 29.5 16 29.5 16 24 24.5 16 24.5 2.5 16 2.5 16Z"/><circle cx="16" cy="16" r="4.6"/><circle cx="16" cy="16" r="1.4" fill="currentColor" stroke="none"/>', c, "0 0 32 32"),
    check: (c) => svg('<path d="m5 12.5 4.5 4.5L19 7.5"/>', c),
    cross: (c) => svg('<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>', c),
    streak: (c) => svg('<path d="M12 21c-3.9 0-6.5-2.6-6.5-6.1 0-3.4 2.4-5.4 3.6-8.2.5 1.6 1.4 2.6 2.4 3.1C11.6 6.6 13.1 4.2 15.6 3c-.4 3.1 3 5.4 3 10.4 0 4.6-2.8 7.6-6.6 7.6Z"/>', c),
    star: (c) => svg('<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z"/>', c),
    arrow: (c) => svg('<path d="M4 12h15M14 6.5 19.5 12 14 17.5"/>', c),
    door: (c) => svg('<path d="M6 21V4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21"/><path d="M3.5 21h17"/><circle cx="15" cy="12.5" r=".9" fill="currentColor" stroke="none"/>', c),
    book: (c) => svg('<path d="M4 5.5C6.5 4.5 9.5 4.6 12 6.2c2.5-1.6 5.5-1.7 8-.7v13c-2.5-1-5.5-.9-8 .7-2.5-1.6-5.5-1.7-8-.7z"/><path d="M12 6.2v13"/>', c),
    scales: (c) => svg('<path d="M12 4v16M7.5 20h9M5 7.5h14"/><path d="m5 7.5-2.5 6a2.6 2.6 0 0 0 5 0Z"/><path d="m19 7.5-2.5 6a2.6 2.6 0 0 0 5 0Z"/>', c),
    compass: (c) => svg('<circle cx="12" cy="12" r="8.5"/><path d="m14.8 9.2-1.6 4-4 1.6 1.6-4Z"/>', c),
    person: (c) => svg('<circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c.6-3.6 3.2-5.6 6.5-5.6s5.9 2 6.5 5.6"/>', c),
    replay: (c) => svg('<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.5 4.5v4h4"/>', c),
    keys: (c) => svg('<rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 10.5h.01M10 10.5h.01M13 10.5h.01M16.5 10.5h.01M8 14h8"/>', c)
  };

  /* ---------------------------------------------------------- link helpers */
  const chip = (href, label, icon, extra) => '<a class="xp-link' + (extra ? " " + extra : "") + '" href="' + esc(href) + '">' + (icon || "") + "<span>" + label + "</span></a>";
  const dictChip = (term, label) => { const s = slugT(term); return gset().has(s) ? chip("#library-" + s, esc(label || term), IC.book()) : ""; };
  const thinkerChipX = (id, label) => TH[id] ? chip("#thinker-" + id, esc(label || TH[id].name), IC.person()) : "";
  const debateChip = id => { const q = AGQ.find(x => x.id === id); return q ? chip("#agora-" + id, "Debate: " + esc(q.title), IC.scales()) : ""; };
  const compassChip = (qid, label) => COMPASS_Q.some(q => q.id === qid) ? chip("#compass-" + qid, esc(label), IC.compass()) : "";
  const medal = (t, cls) => { const tr = tradOf(t); return '<span class="xp-med ' + (cls || "") + '" style="--tc:' + tr.color + '" aria-hidden="true">' + esc(initials(t.name)) + "</span>"; };

  /* --------------------------------------------------------------- state */
  // Our three sub-objects of S.lab. Each carries t (last change) so an imported, newer save wins over ours.
  const MINE = ["drop", "myths", "marys"];
  const MY = {};
  let LS = null; if (!P) { try { LS = W.localStorage; LS.getItem(KEY); } catch (e) { LS = null; } }
  function readSaved() { if (!LS) return null; try { return JSON.parse(LS.getItem(KEY) || "null"); } catch (e) { return null; } }
  { const s = readSaved(); const lab = (s && s.lab) || {}; MINE.forEach(k => { if (lab[k] && typeof lab[k] === "object") MY[k] = lab[k]; }); }
  if (LS) {
    const orig = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      if (k === KEY && typeof v === "string" && this === LS) {
        try {
          const o = JSON.parse(v);
          if (o && typeof o === "object") {
            o.lab = o.lab && typeof o.lab === "object" ? o.lab : {};
            MINE.forEach(x => {
              const theirs = o.lab[x];
              if (theirs && typeof theirs === "object" && (theirs.t || 0) > ((MY[x] && MY[x].t) || 0)) MY[x] = theirs; // an imported newer save
              else if (MY[x]) o.lab[x] = MY[x];
            });
            v = JSON.stringify(o);
          }
        } catch (e) { /* not JSON: leave it alone */ }
      }
      return orig.call(this, k, v);
    };
  }
  const st = k => { if (P) { const S = P.S; S.lab = S.lab || {}; return (S.lab[k] = S.lab[k] || {}); } return (MY[k] = MY[k] || {}); };
  const got = k => P ? ((P.S.lab || {})[k] || null) : (MY[k] || null);
  const setState = (k, v) => { if (P) { P.S.lab = P.S.lab || {}; P.S.lab[k] = v; } else MY[k] = v; };
  function persist(k) {
    if (k) st(k).t = Date.now();
    if (P) { try { P.save(); } catch (e) { console.error(e); } return; }
    if (!LS) return;
    try { const o = readSaved() || {}; LS.setItem(KEY, JSON.stringify(o)); } catch (e) { /* storage blocked: progress lives in memory */ }
  }
  // "Clear everything" in the app's settings must clear ours too, or the setItem merge would bring it back
  D.addEventListener("click", e => {
    const el = e.target.closest && e.target.closest('[data-act="doReset"]');
    if (el && el.dataset.kind === "all") { MINE.forEach(k => { delete MY[k]; }); DROP = null; MYTH = null; }
  }, true);
  // the app's Compass answer to "Is your mind just your brain at work?", for Mary's Room
  const savedAnswer = qid => { const s = P ? P.S : readSaved(); const a = s && s.answers && s.answers[qid]; return a && a.a != null ? a.a : null; };

  /* --------------------------------------------------------------- styles */
  const CSS = `
.xp-ic{width:1.15em;height:1.15em;flex:none;vertical-align:-.2em}
.xp-sr{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
.xp-wide{max-width:980px;margin:0 auto}
.xp-head{display:flex;flex-direction:column;gap:6px}
.xp-head .lede{margin:0;color:var(--ink-2);max-width:62ch}
.xp-links{display:flex;flex-wrap:wrap;gap:8px}
.xp-link{display:inline-flex;align-items:center;gap:6px;min-height:36px;padding:6px 12px;border:1px solid var(--line);border-radius:var(--r-pill,999px);background:var(--surface);color:var(--ink);text-decoration:none;font-size:var(--fs-sm,.875rem);font-weight:500;line-height:1.25;transition:border-color .15s,background .15s}
.xp-link:hover{border-color:var(--lamp);background:var(--lamp-soft)}
.xp-link .xp-ic{color:var(--lamp-text)}
.xp-link.primary{background:var(--lamp);border-color:var(--lamp);color:var(--on-lamp,#1F1A0E)}.xp-link.primary .xp-ic{color:inherit}
.xp-btn-ic{display:inline-flex;align-items:center;gap:8px}
.xp-hud{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.xp-hud .gprog{min-width:90px}
.xp-stat{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:var(--r-pill,999px);background:var(--surface);border:1px solid var(--line);font-size:var(--fs-sm,.875rem);font-variant-numeric:tabular-nums;color:var(--ink-2);white-space:nowrap}
.xp-stat b{color:var(--ink);font-weight:700}
.xp-stat.hot{border-color:color-mix(in srgb,var(--lamp) 60%,transparent);background:var(--lamp-soft);color:var(--ink)}
.xp-stat.hot .xp-ic{color:var(--lamp-text)}
.xp-pop{animation:xpPop .45s var(--ease,ease) both}
@keyframes xpPop{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.12);opacity:1}100%{transform:scale(1)}}
.xp-med{display:inline-grid;place-items:center;width:46px;height:46px;border-radius:50%;flex:none;background:radial-gradient(circle at 35% 30%,color-mix(in srgb,var(--tc) 70%,#fff),var(--tc) 72%);color:#1a1405;font-family:var(--font-display);font-size:1.02rem;letter-spacing:.02em;box-shadow:0 0 0 2px var(--card,var(--raised)),0 0 0 3px color-mix(in srgb,var(--tc) 55%,var(--line))}
.xp-med.lg{width:64px;height:64px;font-size:1.35rem}
.xp-card{background:var(--card,var(--raised));border:1px solid var(--line);border-radius:var(--r-lg,16px);padding:20px;box-shadow:var(--shadow-1,none)}
.xp-end{display:flex;flex-direction:column;gap:14px;text-align:left}
.xp-big{font-family:var(--font-display);font-size:clamp(2.6rem,9vw,4rem);line-height:1;color:var(--ink)}
.xp-big small{font-size:.38em;color:var(--ink-3);margin-left:6px}
.xp-note{border-left:3px solid var(--lamp);padding:8px 12px;background:var(--lamp-soft);border-radius:0 var(--r-md,12px) var(--r-md,12px) 0;font-family:var(--font-read);line-height:1.55}
.xp-cta{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:14px 16px;border:1px solid var(--line);border-radius:var(--r-lg,16px);background:var(--card,var(--raised));box-shadow:var(--shadow-1,none)}
.xp-cta .xp-cta-ic{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;background:var(--lamp-soft);color:var(--lamp-text);flex:none}
.xp-cta .xp-cta-ic svg{width:28px;height:28px}
.xp-cta .xp-cta-tx{flex:1 1 220px;min-width:0;display:flex;flex-direction:column;gap:2px}
.xp-cta .xp-cta-tx b{font-family:var(--font-display);font-weight:500;font-size:1.1rem}
.xp-cta .xp-cta-tx span{color:var(--ink-2);font-size:.92rem}
.gtile .gemo .xp-ic,.gtile .gemo svg{width:2.1rem;height:2.1rem;color:#E8B04A}
.mod .xp-modic{color:var(--lamp-text)}

/* ---------- Timeline Drop */
.xd-board{display:flex;flex-direction:column;gap:12px}
.xd-ends{display:flex;justify-content:space-between;align-items:center;font-family:var(--font-mono);font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3)}
.xd-ends .xd-arrow{flex:1;height:1px;margin:0 12px;background:linear-gradient(90deg,var(--line),var(--lamp));position:relative}
.xd-ends .xd-arrow::after{content:"";position:absolute;right:-1px;top:-4px;border:4.5px solid transparent;border-left:7px solid var(--lamp);border-right:0}
.xd-river{position:relative;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin:0;padding:0;list-style:none}
.xd-river::before{content:"";position:absolute;left:4%;right:4%;top:47px;height:2px;border-radius:2px;background:repeating-linear-gradient(90deg,color-mix(in srgb,var(--lapis) 45%,transparent) 0 10px,transparent 10px 16px);pointer-events:none}
.xd-card{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0;padding:22px 8px 14px;border:1.5px solid var(--line);border-radius:var(--r-md,12px);background:var(--card,var(--raised));color:var(--ink);text-align:center;font:inherit;cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none;transition:transform .22s var(--ease,ease),box-shadow .2s,border-color .15s,background .15s;box-shadow:var(--shadow-1,none);text-decoration:none}
.xd-card:hover{border-color:var(--ink-3)}
.xd-card:focus-visible{outline:3px solid var(--lapis);outline-offset:2px}
.xd-card .xd-name{font-weight:600;font-size:.95rem;line-height:1.2;overflow-wrap:anywhere}
.xd-card .xd-trad{font-size:.76rem;color:var(--ink-3);line-height:1.2}
.xd-card .xd-pos{position:absolute;top:6px;left:8px;font-family:var(--font-mono);font-size:.68rem;color:var(--ink-3)}
.xd-card.is-sel{border-color:var(--lamp);background:var(--lamp-soft);box-shadow:0 0 0 3px color-mix(in srgb,var(--lamp) 35%,transparent)}
.xd-card.is-drag{z-index:5;cursor:grabbing;transition:box-shadow .2s,border-color .15s;box-shadow:var(--shadow-3,0 20px 50px rgba(0,0,0,.3));border-color:var(--lamp)}
.xd-river.is-dragging .xd-card:not(.is-drag){opacity:.92}
.xd-card.is-done{cursor:pointer;touch-action:auto}
.xd-card .xd-year{font-family:var(--font-mono);font-size:.82rem;font-weight:600;color:var(--ink);font-variant-numeric:tabular-nums}
.xd-badge{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:999px;font-size:.72rem;font-weight:600}
.xd-badge.ok{background:color-mix(in srgb,var(--ok) 16%,transparent);color:var(--ok)}
.xd-badge.near{background:var(--lamp-soft);color:var(--lamp-text)}
.xd-badge.far{background:var(--crack-soft);color:var(--crack)}
.xd-card.is-done.ok{border-color:color-mix(in srgb,var(--ok) 60%,var(--line))}
.xd-card.is-done.far{border-color:color-mix(in srgb,var(--crack) 55%,var(--line))}
.xd-card .xd-go{font-size:.74rem;color:var(--lapis);display:inline-flex;align-items:center;gap:3px}
.xd-help{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:.84rem;color:var(--ink-3)}
.xd-help span{display:inline-flex;align-items:center;gap:6px}
.xd-axis{position:relative;height:118px;margin:6px 6px 0}
.xd-axis .xd-line{position:absolute;left:0;right:0;top:58px;height:2px;background:var(--line);border-radius:2px}
.xd-axis .xd-tick{position:absolute;top:52px;width:14px;height:14px;margin-left:-7px;border-radius:50%;background:var(--tc);box-shadow:0 0 0 2px var(--card,var(--raised)),0 0 0 3px var(--ink-3)}
.xd-axis .xd-lab{position:absolute;transform:translateX(-50%);white-space:nowrap;font-size:.74rem;line-height:1.15;text-align:center;color:var(--ink-2)}
.xd-axis .xd-lab.lft{transform:translateX(-10px);text-align:left}.xd-axis .xd-lab.rgt{transform:translateX(calc(-100% + 10px));text-align:right}
.xd-axis .xd-lab b{display:block;color:var(--ink);font-weight:600;font-size:.78rem}
.xd-axis .xd-lab.up{bottom:68px}.xd-axis .xd-lab.up2{bottom:96px}
.xd-axis .xd-lab.dn{top:72px}.xd-axis .xd-lab.dn2{top:100px}
.xd-axis.tall{height:150px}.xd-axis.tall .xd-line{top:74px}.xd-axis.tall .xd-tick{top:68px}.xd-axis.tall .xd-lab.up{bottom:84px}.xd-axis.tall .xd-lab.up2{bottom:114px}.xd-axis.tall .xd-lab.dn{top:88px}.xd-axis.tall .xd-lab.dn2{top:118px}
.xd-verdict{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}
.xd-verdict h2{margin:0}
.xd-rounds{display:flex;gap:6px;flex-wrap:wrap}
.xd-rounds span{display:inline-grid;place-items:center;min-width:34px;height:34px;padding:0 8px;border-radius:10px;border:1px solid var(--line);font-family:var(--font-mono);font-size:.8rem;background:var(--surface)}
.xd-rounds span.ok{background:color-mix(in srgb,var(--ok) 16%,var(--surface));border-color:color-mix(in srgb,var(--ok) 50%,var(--line));color:var(--ok)}
@media (max-width:640px){
  .xd-river{grid-template-columns:1fr;gap:8px}
  .xd-river::before{left:35px;right:auto;top:6%;bottom:6%;width:2px;height:auto;background:repeating-linear-gradient(180deg,color-mix(in srgb,var(--lapis) 45%,transparent) 0 10px,transparent 10px 16px)}
  .xd-card{flex-direction:row;align-items:center;text-align:left;padding:10px 12px;gap:12px}
  .xd-card .xd-pos{position:static;order:-1;width:12px;text-align:center}
  .xd-card .xd-txt{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}
  .xd-card .xd-side{display:flex;flex-direction:column;align-items:flex-end;gap:4px}
  .xd-ends.h{display:none}
}
@media (min-width:641px){.xd-ends.v{display:none}.xd-card .xd-txt{display:flex;flex-direction:column;gap:4px;align-items:center}.xd-card .xd-side{display:flex;flex-direction:column;align-items:center;gap:6px}}

/* ---------- Myth or truth? */
.xt-q{display:flex;flex-direction:column;gap:16px}
.xt-who{display:flex;align-items:center;gap:14px}
.xt-who b{font-family:var(--font-display);font-weight:500;font-size:1.25rem;display:block}
.xt-who span{color:var(--ink-3);font-size:.86rem}
.xt-statement{position:relative;margin:0;padding:20px 22px 20px 26px;border-radius:var(--r-lg,16px);background:var(--surface);border:1px solid var(--line);font-family:var(--font-read);font-size:clamp(1.12rem,2.6vw,1.32rem);line-height:1.5;color:var(--ink)}
.xt-statement::before{content:"\\201C";position:absolute;left:8px;top:2px;font-family:var(--font-display);font-size:3rem;color:var(--lamp);line-height:1}
.xt-statement.myth{background:var(--crack-soft);border-color:color-mix(in srgb,var(--crack) 40%,var(--line))}
.xt-statement.truth{background:color-mix(in srgb,var(--ok) 12%,var(--surface));border-color:color-mix(in srgb,var(--ok) 45%,var(--line))}
.xt-picks{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.xt-pick{display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:14px 16px;border-radius:var(--r-md,12px);border:1.5px solid var(--line);background:var(--card,var(--raised));color:var(--ink);font:inherit;text-align:left;cursor:pointer;transition:border-color .15s,background .15s,transform .12s}
.xt-pick:hover:not([disabled]){transform:translateY(-1px)}
.xt-pick b{font-size:1.05rem;display:inline-flex;align-items:center;gap:8px}
.xt-pick small{color:var(--ink-3);font-size:.8rem}
.xt-pick kbd{font-family:var(--font-mono);font-size:.7rem;border:1px solid var(--line);border-radius:4px;padding:0 5px;color:var(--ink-3);margin-left:auto}
.xt-pick.myth b .xp-ic{color:var(--crack)}.xt-pick.truth b .xp-ic{color:var(--ok)}
.xt-pick.myth:hover:not([disabled]){border-color:var(--crack)}.xt-pick.truth:hover:not([disabled]){border-color:var(--ok)}
.xt-pick[disabled]{cursor:default;opacity:.55}
.xt-pick.chosen.right{opacity:1;border-color:var(--ok);background:color-mix(in srgb,var(--ok) 14%,var(--card,var(--raised)))}
.xt-pick.chosen.wrong{opacity:1;border-color:var(--crack);background:var(--crack-soft)}
.xt-verdict{display:flex;align-items:center;gap:10px;font-weight:700;font-size:1.05rem}
.xt-verdict .xp-ic{width:1.5em;height:1.5em;padding:3px;border-radius:50%}
.xt-verdict.right{color:var(--ok)}.xt-verdict.right .xp-ic{background:color-mix(in srgb,var(--ok) 16%,transparent)}
.xt-verdict.wrong{color:var(--crack)}.xt-verdict.wrong .xp-ic{background:var(--crack-soft)}
.xt-verdict .xt-pts{margin-left:auto;font-family:var(--font-mono);font-size:.85rem;color:var(--lamp-text)}
.xt-pair{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.xt-pair>div{border-radius:var(--r-md,12px);padding:12px 14px;background:var(--surface);border:1px solid var(--line-2,var(--line))}
.xt-pair>div:first-child{background:var(--crack-soft);border-color:transparent}
.xt-pair p{margin:6px 0 0;font-family:var(--font-read);line-height:1.5}
.xt-actual{border-radius:var(--r-md,12px);padding:12px 16px;background:color-mix(in srgb,var(--ok) 10%,var(--surface));border:1px solid color-mix(in srgb,var(--ok) 35%,var(--line))}.xt-actual p{margin:6px 0 0;font-family:var(--font-read);line-height:1.55}
.xd-meet summary{cursor:pointer;color:var(--lapis);font-weight:500}
.xt-q>.eyebrow{margin-bottom:-8px}
.xt-from{font-size:.82rem;color:var(--ink-3);margin:6px 0 0}
.xt-list{display:flex;flex-direction:column;gap:6px;margin:0;padding:0;list-style:none}
.xt-list li a{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;border:1px solid var(--line);background:var(--surface);color:var(--ink);text-decoration:none}
.xt-list li a:hover{border-color:var(--lamp)}
.xt-list .xp-ic{width:1.3em;height:1.3em}
.xt-list .ok{color:var(--ok)}.xt-list .no{color:var(--crack)}
.xt-list .xt-k{margin-left:auto;font-size:.74rem;color:var(--ink-3);font-family:var(--font-mono);text-transform:uppercase;letter-spacing:.08em}
.xt-list .xt-t{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.xp-mythcta{display:flex;justify-content:flex-end;margin-top:-6px}
@media (max-width:560px){.xt-pair{grid-template-columns:1fr}.xt-pick kbd{display:none}.xt-statement{padding:18px 16px 18px 22px}}

/* ---------- Mary's Room */
.xr-room{display:flex;flex-direction:column;gap:18px;transition:filter 1.6s ease-in-out;--xr-red:#D3263A;--xr-red-2:#9E1428}
:root[data-theme="dark"] .xr-room{--xr-red:#E8485A;--xr-red-2:#B31B30}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .xr-room{--xr-red:#E8485A;--xr-red-2:#B31B30}}
.xr-room.is-grey{filter:grayscale(1)}
.xr-intro{display:flex;gap:16px;align-items:flex-start}
.xr-intro p{margin:0}
.xr-counter{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.xr-counter b{font-variant-numeric:tabular-nums}
.xr-meter{flex:1 1 160px;height:8px;border-radius:999px;background:var(--line-2,var(--line));overflow:hidden}
.xr-meter i{display:block;height:100%;background:var(--xr-red);transition:width .4s var(--ease,ease)}
.xr-facts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.xr-fact{display:flex;flex-direction:column;align-items:flex-start;gap:8px;min-height:112px;padding:14px;border:1.5px solid var(--line);border-radius:var(--r-md,12px);background:var(--card,var(--raised));color:var(--ink);font:inherit;text-align:left;cursor:pointer;transition:border-color .15s,background .15s,transform .15s}
.xr-fact:hover:not(.known){border-color:var(--ink-3);transform:translateY(-1px)}
.xr-fact .xr-n{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3)}
.xr-fact h3{font-size:1.05rem;margin:0}
.xr-fact .xr-tap{margin-top:auto;font-size:.8rem;color:var(--lapis);display:inline-flex;align-items:center;gap:6px}
.xr-fact.known{cursor:default;background:var(--surface)}
.xr-fact.known p{margin:0;font-size:.92rem;line-height:1.5;color:var(--ink-2)}
.xr-fact.fresh{animation:xrIn .45s var(--ease,ease)}
@keyframes xrIn{from{opacity:.2;transform:rotateX(70deg)}to{opacity:1;transform:none}}
.xr-vis{display:flex;align-items:center;gap:8px;min-height:22px;width:100%}
.xr-spec{flex:1;height:14px;border-radius:4px;background:linear-gradient(90deg,#7b2fbe,#3b4cca 18%,#1e90ff 32%,#22a35a 48%,#e2d02b 62%,#f08a24 74%,var(--xr-red) 86%,#7a0f1f);position:relative}
.xr-spec i{position:absolute;top:-4px;bottom:-4px;left:78%;right:3%;border:2px solid var(--ink);border-radius:5px}
.xr-bars{display:flex;align-items:flex-end;gap:6px;height:30px}
.xr-bars i{display:block;width:16px;border-radius:3px 3px 0 0}
.xr-bars em{font-style:normal;font-size:.7rem;color:var(--ink-3);margin-right:4px}
.xr-words{display:flex;flex-wrap:wrap;gap:4px 10px;font-family:var(--font-display);font-size:1.05rem;color:var(--xr-red)}
.xr-sw{width:22px;height:22px;border-radius:50%;flex:none;border:1px solid var(--line)}
.xr-door{display:flex;align-items:center;gap:18px;flex-wrap:wrap;padding:18px;border-radius:var(--r-lg,16px);border:1px dashed var(--line);background:var(--surface)}
.xr-door svg.xr-doorart{width:84px;height:120px;flex:none}
.xr-door .xr-door-tx{flex:1 1 220px;display:flex;flex-direction:column;gap:8px}
.xr-door .xr-door-tx p{margin:0}
.xr-scene{position:relative;overflow:hidden;border-radius:var(--r-lg,16px);border:1px solid var(--line);background:#2d2a6e}
.xr-scene svg{display:block;width:100%;height:auto}
.xr-scene figcaption{position:absolute;left:0;right:0;bottom:0;padding:16px 18px;background:linear-gradient(180deg,transparent,rgba(12,10,30,.78));color:#FFF6E8;font-family:var(--font-display);font-size:clamp(1.2rem,3.4vw,1.7rem);line-height:1.2}
.xr-scene .xr-rose{transform-origin:122px 200px;animation:xrBloom 1.8s .5s var(--ease,ease) both}
.xr-scene .xr-sun{animation:xrRise 2.2s .2s ease-out both}
@keyframes xrBloom{from{transform:scale(.55) translateY(30px);opacity:0}to{transform:none;opacity:1}}
@keyframes xrRise{from{transform:translateY(40px);opacity:.3}to{transform:none;opacity:1}}
.xr-vote{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.xr-vote button{display:flex;flex-direction:column;gap:6px;align-items:flex-start;text-align:left;padding:16px;border-radius:var(--r-md,12px);border:1.5px solid var(--line);background:var(--card,var(--raised));color:var(--ink);font:inherit;cursor:pointer;transition:border-color .15s,background .15s}
.xr-vote button:hover{border-color:var(--lamp)}
.xr-vote button b{font-family:var(--font-display);font-weight:500;font-size:1.2rem}
.xr-vote button span{font-size:.9rem;color:var(--ink-2)}
.xr-vote button.on{border-color:var(--lamp);background:var(--lamp-soft)}
.xr-reveal p{margin:0}
.xr-replies{display:grid;gap:10px;grid-template-columns:repeat(3,minmax(0,1fr))}
.xr-replies>div{padding:12px 14px;border-radius:var(--r-md,12px);background:var(--surface);border:1px solid var(--line-2,var(--line))}
.xr-replies b{display:block;font-size:.95rem;margin-bottom:4px}
.xr-replies p{font-size:.9rem;line-height:1.5;color:var(--ink-2)}
.xr-replies small{display:block;margin-top:6px;color:var(--ink-3);font-size:.76rem}
@media (max-width:640px){.xr-facts{grid-template-columns:1fr}.xr-fact{min-height:0}.xr-vote{grid-template-columns:1fr}.xr-replies{grid-template-columns:1fr}.xr-intro{flex-direction:column}}
@media (prefers-reduced-motion:reduce){.xr-room{transition:none}.xr-scene .xr-rose,.xr-scene .xr-sun,.xr-fact.fresh,.xp-pop{animation:none}}
`;
  { const s = D.createElement("style"); s.id = "philo-experiences-css"; s.textContent = CSS; D.head.appendChild(s); }

  /* --------------------------------------------------------------- routing */
  const ALIAS = { shipyard: "lab", timeline: "stoa" };
  const ROUTES = { "lab-drop": "drop", "stoa-drop": "drop", "lab-myths": "myths", "lab-myth": "myths", "lab-mary": "mary", "lab-marys": "mary" };
  function hashRoute() { let h = ""; try { h = decodeURIComponent(location.hash.slice(1)); } catch (e) { h = location.hash.slice(1); } const i = h.indexOf("-"); const name = i < 0 ? h : h.slice(0, i), arg = i < 0 ? "" : h.slice(i + 1); return { name: ALIAS[name] || name, arg }; }
  function myRoute() { const r = hashRoute(); return ROUTES[r.name + "-" + r.arg] || null; }
  const XV = {}, XA = {}, TITLE = { drop: "Timeline Drop", myths: "Myth or truth?", mary: "Mary’s Room" };
  let afterX = [];
  const pushAfter = f => { if (P) P.after.push(f); else afterX.push(f); };
  const later = f => setTimeout(f, 0); // the app restores the scroll position after its after-callbacks
  const page = r => { let html; try { html = XV[r](); } catch (e) { console.error(e); html = '<div class="wrap"><p class="muted">Something went wrong loading this game.</p></div>'; }
    pushAfter(() => { D.title = TITLE[r] + " · Philodyssey"; }); return '<div class="xp-root" data-xp="' + r + '">' + html + "</div>"; };
  if (P) {
    const _lab = P.VIEWS.lab, _stoa = P.VIEWS.stoa;
    P.VIEWS.lab = arg => arg === "drop" ? page("drop") : arg === "myths" || arg === "myth" ? page("myths") : arg === "mary" || arg === "marys" ? page("mary") : _lab(arg);
    if (_stoa) P.VIEWS.stoa = arg => arg === "drop" ? page("drop") : _stoa(arg);
  }
  function mount(keepScroll) {
    if (P) { P.render(!!keepScroll); return; }
    const r = myRoute(), v = $("#view"); if (!r || !v) return;
    const y = W.scrollY; afterX = [];
    let html; try { html = XV[r](); } catch (e) { console.error(e); html = '<div class="wrap"><p class="muted">Something went wrong loading this game.</p></div>'; }
    v.innerHTML = '<div class="xp-root" data-xp="' + r + '">' + html + "</div>";
    v.classList.remove("flush");
    D.title = TITLE[r] + " · Philodyssey";
    if (keepScroll) W.scrollTo(0, y);
    afterX.forEach(f => { try { f(); } catch (e) { console.error(e); } });
  }
  function onView() {
    const v = $("#view"); if (!v) return;
    const r = myRoute();
    if (r) { if (P) return; const c = v.firstElementChild; if (!c || c.dataset.xp !== r) mount(true); return; }
    try { decorate(); } catch (e) { console.error(e); }
  }
  D.addEventListener("click", e => {
    const el = e.target.closest && e.target.closest("[data-x]");
    if (el) { const fn = XA[el.dataset.x]; if (fn) { e.preventDefault(); fn(el, e); } return; }
    const j = e.target.closest && e.target.closest("a[data-xjump]");
    if (j) pendingJump = { id: j.dataset.xjump, at: Date.now() };
  });
  let pendingJump = null;

  /* ------------------------------------------------- decorating app pages */
  const TILES = [
    { k: "drop", store: "drop", game: true, t: "Timeline Drop", ic: IC.drop, d: "Five thinkers, no dates. Drag them into the order they were born. Five rounds, and the centuries close in until the gaps are a single generation.", by: "Chronology across every tradition" },
    { k: "myths", store: "myths", game: true, t: "Myth or truth?", ic: IC.myth, d: "Ten things people say about famous philosophers. Some are what they actually held; others are the straw man. Call each one and keep your streak alive.", by: "The principle of charity" },
    { k: "mary", store: "marys", game: false, t: "Mary’s Room", ic: IC.eye, d: "Learn every physical fact about red in a black-and-white room. Then open the door. Did you learn something new?", by: "Frank Jackson, 1982 and 1986" }
  ];
  function decorate() {
    const r = hashRoute(), v = $("#view");
    if (r.name === "lab" && !r.arg) {
      const games = $(".labgames", v), quick = $(".labgrid", v); let added = 0;
      TILES.forEach(x => {
        if ($('a[href="#lab-' + x.k + '"]', v) || (x.k === "mary" && $('a[href="#lab-marys"]', v))) return;
        const done = got(x.store) && got(x.store).done;
        if (x.game && games) { games.insertAdjacentHTML("beforeend", '<a class="gtile" href="#lab-' + x.k + '" data-xp-tile="' + x.k + '"><span class="gemo">' + x.ic() + "</span><h3>" + esc(x.t) + (done ? ' <span class="chip lamp">Played</span>' : "") + "</h3><p>" + esc(x.d) + '</p><span class="faint" style="font-size:.8rem">' + esc(x.by) + "</span></a>"); added++; }
        else if (!x.game && quick) { quick.insertAdjacentHTML("beforeend", '<a class="mod" href="#lab-' + x.k + '" data-xp-tile="' + x.k + '"><h3><span>' + esc(x.t) + "</span>" + (done ? '<span class="chip lamp">Done</span>' : "") + "</h3><p>" + esc(x.d) + '</p><span class="faint" style="font-size:.8rem">' + esc(x.by) + "</span></a>"); added++; }
      });
      if (added) { const p = $$("p.muted", v).find(x => /you can play/.test(x.textContent)); const tn = p && p.firstChild; if (tn && tn.nodeType === 3) tn.nodeValue = tn.nodeValue.replace(/^(\d+)/, m => String(+m + added)); }
    }
    if (r.name === "stoa" && !r.arg && !$("[data-xp-cta]", v)) {
      const head = $(".wrap > .stack > .stack", v) || $(".wrap > .stack > :first-child", v) || $(".page-head", v);
      const b = got("drop") && got("drop").best != null ? "Best game: " + got("drop").best + " off" : "Five rounds, no dates.";
      if (head) head.insertAdjacentHTML("afterend", '<div class="xp-cta" data-xp-cta="drop"><span class="xp-cta-ic">' + IC.drop() + '</span><span class="xp-cta-tx"><b>Play: Timeline Drop</b><span>Put five thinkers in order of birth. Who was alive at the same time as whom? ' + esc(b) + '</span></span><a class="btn primary" href="#stoa-drop">Play</a></div>');
    }
    if (r.name === "quiz" && !$("[data-xp-cta]", v)) {
      const st = $('[data-act="quizStart"][data-mode="stand"]', v), card = st && st.closest(".panel");
      if (card && card.parentElement && !$(".progress", v)) {
        const M = got("myths") || {};
        card.parentElement.insertAdjacentHTML("beforeend", '<div class="panel stack" data-xp-cta="myths" style="--g:10px;flex:1 1 260px"><span class="eyebrow">Myth or truth?</span><p class="muted">A statement about a famous thinker: what they really held, or the popular caricature? Ten calls a round, with a streak bonus.</p><div class="row" style="justify-content:space-between"><span class="faint" style="font-size:.86rem">' + (M.bestCorrect != null ? 'Best round: <b style="color:var(--ink)">' + M.bestCorrect + "</b> of 10" : "Not played yet") + '</span><a class="btn primary" href="#lab-myths">Play</a></div></div>');
      }
    }
    if (r.name === "thinker" && r.arg) {
      const sec = $("#tp-myth", v);
      if (sec && !$("[data-xp-cta]", v)) sec.insertAdjacentHTML("afterend", '<div class="xp-mythcta" data-xp-cta="myths">' + chip("#lab-myths", "Could you spot a myth like this? Play Myth or truth?", IC.myth()) + "</div>");
      if (sec && pendingJump && pendingJump.id === "myth" && Date.now() - pendingJump.at < 4000) {
        pendingJump = null;
        setTimeout(() => { const s = $("#tp-myth"); if (s) W.scrollTo({ top: s.getBoundingClientRect().top + W.scrollY - 90, behavior: reduceMotion() ? "auto" : "smooth" }); }, 60);
      }
    }
  }

  function shell(r, eyebrow, title, lede, body, wide) {
    const back = r === "drop" && hashRoute().name === "stoa" ? '<a class="linkish" href="#stoa">← The Timeline</a>' : '<a class="linkish" href="#lab">← All experiments</a>';
    return '<div class="wrap"><div class="' + (wide ? "xp-wide" : "col") + ' stack" style="--g:18px">' + back +
      '<header class="xp-head"><span class="eyebrow">' + eyebrow + "</span><h1>" + title + "</h1>" + (lede ? '<p class="lede read">' + lede + "</p>" : "") + "</header>" + body + "</div></div>";
  }

  /* ======================================================== TIMELINE DROP */
  // The pool: every thinker with a birth year. Guessed ("approximate") years only appear in the first two rounds,
  // where every card is at least 150 years from the next, so a guess of a few decades cannot change the order.
  const DROP_ALL = Object.values(TH).filter(t => typeof t.born === "number" && isFinite(t.born));
  const DROP_CFG = [
    { gap: 300, top: 90, approx: true, label: "Across the ages" },
    { gap: 150, top: 170, approx: true, label: "Across traditions" },
    { gap: 60, win: 600, approx: false, label: "Six centuries" },
    { gap: 40, win: 260, approx: false, label: "Two or three centuries" },
    { gap: 30, win: 170, approx: false, label: "Near neighbours" }
  ];
  let DROP = null;
  function dropPool(c) { let p = DROP_ALL.filter(t => c.approx || !t.approximate); if (c.top) p = p.slice().sort((a, b) => fame(b) - fame(a)).slice(0, c.top); return p; }
  function dropDeal(n, used) {
    const c = DROP_CFG[n], pool = dropPool(c).filter(t => !used.has(t.id));
    let gap = c.gap;
    for (let attempt = 0; attempt < 600; attempt++) {
      if (attempt && attempt % 150 === 0) gap = Math.max(8, Math.round(gap * 0.75));
      let cand = pool;
      if (c.win) { const a = pick(pool), lo = a.born - Math.random() * c.win; cand = pool.filter(t => t.born >= lo && t.born <= lo + c.win); if (cand.length < 5) continue; }
      cand = shuffle(cand);
      const got = [], trads = new Set();
      const fits = t => got.every(g => Math.abs(g.born - t.born) >= gap);
      // first pass: a new tradition each time; second pass: anyone who fits
      for (const t of cand) { if (got.length >= 5) break; const tr = tradOf(t).id; if (!trads.has(tr) && fits(t)) { got.push(t); trads.add(tr); } }
      for (const t of cand) { if (got.length >= 5) break; if (!got.includes(t) && fits(t)) got.push(t); }
      if (got.length === 5) {
        const truth = got.slice().sort((a, b) => a.born - b.born).map(t => t.id);
        let order = shuffle(truth); let k = 0; while (order.join() === truth.join() && k++ < 10) order = shuffle(truth);
        return { ids: truth.slice(), truth, order, checked: false };
      }
    }
    return null;
  }
  function dropNew() {
    const used = new Set(); const rounds = [];
    for (let i = 0; i < 5; i++) { const r = dropDeal(i, used); if (!r) break; r.ids.forEach(id => used.add(id)); rounds.push(r); }
    DROP = { rounds, i: 0, sel: null, streak: 0, bestStreak: 0, over: false };
  }
  const offOf = (R, id) => Math.abs(R.order.indexOf(id) - R.truth.indexOf(id));
  const roundOff = R => R.truth.reduce((a, id) => a + offOf(R, id), 0);
  const totalOff = () => DROP.rounds.filter(R => R.checked).reduce((a, R) => a + roundOff(R), 0);
  const isVertical = () => { try { return matchMedia("(max-width:640px)").matches; } catch (e) { return false; } };

  function dropCardHTML(R, id, idx) {
    const t = TH[id];
    if (!R.checked) {
      return '<button type="button" class="xd-card" data-x="dropTap" data-id="' + esc(id) + '" aria-label="' + esc(t.name + ", " + tradLabel(t) + ". Position " + (idx + 1) + " of 5") + '">' +
        '<span class="xd-pos" aria-hidden="true">' + (idx + 1) + "</span>" + medal(t) + '<span class="xd-txt"><span class="xd-name">' + esc(t.name) + '</span><span class="xd-trad">' + esc(tradLabel(t)) + "</span></span></button>";
    }
    const off = offOf(R, id), cls = off === 0 ? "ok" : off === 1 ? "near" : "far";
    const badge = off === 0 ? IC.check() + "Right place" : off + (off === 1 ? " place off" : " places off");
    return '<a class="xd-card is-done ' + cls + '" href="#thinker-' + esc(id) + '" data-id="' + esc(id) + '"><span class="xd-pos" aria-hidden="true">' + (idx + 1) + "</span>" + medal(t) +
      '<span class="xd-txt"><span class="xd-name">' + esc(t.name) + '</span><span class="xd-trad">' + esc(tradLabel(t)) + '</span></span><span class="xd-side"><span class="xd-year">born ' + esc(yr(t.born, t.approximate)) + '</span><span class="xd-badge ' + cls + '">' + badge + '</span><span class="xd-go">Meet them ' + IC.arrow() + "</span></span></a>";
  }
  function dropAxis(R) {
    const ts = R.truth.map(id => TH[id]); const lo = ts[0].born, hi = ts[ts.length - 1].born, span = Math.max(1, hi - lo);
    // place each label on the first of four rows where it does not overlap the previous label (widths estimated)
    const wpx = Math.max(240, Math.min(940, (($(".xd-board") || {}).clientWidth || W.innerWidth - 72) - 12));
    const lastEnd = { up: -1e9, dn: -1e9, up2: -1e9, dn2: -1e9 }; let tall = false;
    const items = ts.map(t => {
      const x = 4 + 92 * (t.born - lo) / span;
      const w = 100 * (Math.max(shortName(t).length * 7.2, 52) + 8) / wpx;
      const align = x < 16 ? "lft" : x > 84 ? "rgt" : "";
      const start = align === "lft" ? x - 2 : align === "rgt" ? x - w + 2 : x - w / 2;
      let row = ["up", "dn", "up2", "dn2"].find(rw => start >= lastEnd[rw] + 1.5) || (lastEnd.up <= lastEnd.dn ? "up" : "dn");
      if (row === "up2" || row === "dn2") tall = true;
      lastEnd[row] = start + w;
      return { t, x, row, align };
    });
    return '<div class="xd-axis' + (tall ? " tall" : "") + '" role="img" aria-label="' + esc("Birth years: " + ts.map(t => t.name + " " + yr(t.born, t.approximate)).join(", ")) + '"><div class="xd-line"></div>' +
      items.map(o => '<i class="xd-tick" style="left:' + o.x.toFixed(2) + "%;--tc:" + tradOf(o.t).color + '"></i><span class="xd-lab ' + o.row + (o.align ? " " + o.align : "") + '" style="left:' + o.x.toFixed(2) + '%"><b>' + esc(shortName(o.t)) + "</b>" + esc(yr(o.t.born, o.t.approximate)) + "</span>").join("") + "</div>";
  }
  function dropFact(R) {
    const ts = R.truth.map(id => TH[id]); let best = null;
    for (let i = 0; i < ts.length - 1; i++) {
      const a = ts[i], b = ts[i + 1], g = b.born - a.born, cross = tradOf(a).id !== tradOf(b).id || tradLabel(a) !== tradLabel(b);
      const score = g - (cross ? 1e6 : 0);
      if (!best || score < best.score) best = { a, b, g, cross, score };
    }
    const approx = best.a.approximate || best.b.approximate;
    const gtxt = (approx ? "about " : "only ") + best.g + " years apart";
    let s = capFirst(shortName(best.a)) + (best.cross ? " (" + tradLabel(best.a) + ")" : "") + " and " + shortName(best.b) + (best.cross ? " (" + tradLabel(best.b) + ")" : "") + " were born " + (best.g >= 60 ? (approx ? "about " : "") + best.g + " years apart, the closest pair in this round." : gtxt + ".");
    if (best.g <= 40 && best.cross) s += " Different traditions, the same generation.";
    let worst = null; R.truth.forEach(id => { const o = offOf(R, id); if (o >= 2 && (!worst || o > worst.o)) worst = { id, o }; });
    if (worst) { const t = TH[worst.id], said = R.order.indexOf(worst.id), truly = R.truth.indexOf(worst.id); s += " Biggest slip: " + shortName(t) + ", born " + yr(t.born, t.approximate) + ", belonged " + worst.o + " places " + (truly < said ? "earlier" : "later") + "."; }
    return s;
  }
  XV.drop = () => {
    if (!DROP) dropNew();
    const L = st("drop");
    const lede = "Five thinkers, no dates. Drag each card into the order they were born, earliest first. Then check: every place a card is out counts as one off. Lowest total wins.";
    if (!DROP.rounds.length) return shell("drop", "The Timeline · a game", "Timeline Drop", lede, '<p class="muted">Not enough thinkers with birth years to deal a round.</p>', true);
    if (DROP.over) return shell("drop", "The Timeline · a game", "Timeline Drop", "", dropEnd(L), true);
    const R = DROP.rounds[DROP.i], c = DROP_CFG[DROP.i];
    const hud = '<div class="xp-hud"><span class="faint">Round ' + (DROP.i + 1) + " of " + DROP.rounds.length + '</span><div class="gprog" aria-hidden="true"><i style="width:' + Math.round(100 * (DROP.i + (R.checked ? 1 : 0)) / DROP.rounds.length) + '%"></i></div>' +
      '<span class="xp-stat" title="Places off so far">' + IC.drop() + "<b>" + totalOff() + "</b> off</span>" + (DROP.streak > 1 ? '<span class="xp-stat hot">' + IC.streak() + "<b>" + DROP.streak + "</b> spot-on in a row</span>" : "") + (L.best != null ? '<span class="xp-stat">' + IC.star() + "Best <b>" + L.best + "</b></span>" : "") + "</div>";
    const ends = '<div class="xd-ends h" aria-hidden="true"><span>Earliest</span><span class="xd-arrow"></span><span>Latest</span></div><div class="xd-ends v" aria-hidden="true"><span>Earliest at the top, latest at the bottom</span></div>';
    const cards = '<ol class="xd-river" id="xdRiver" aria-label="Thinkers, earliest born first">' + R.order.map((id, i) => "<li style=\"display:contents\">" + dropCardHTML(R, id, i) + "</li>").join("") + "</ol>";
    let body = hud + '<section class="xp-card xd-board" aria-labelledby="xdH"><div class="row" style="justify-content:space-between"><h2 id="xdH" style="font-size:1.25rem">' + esc(c.label) + '</h2><span class="faint" style="font-size:.84rem">' + (R.checked ? "Tap a card to meet the thinker" : "Order them by birth") + "</span></div>" + ends + cards;
    if (!R.checked) {
      body += '<div class="xd-help"><span>' + IC.drop() + "Drag a card, or tap a card and then the card whose place it should take</span><span>" + IC.keys() + "Keyboard: focus a card, then use the arrow keys</span></div>" +
        '<div class="row" style="justify-content:flex-end"><button class="btn primary" data-x="dropCheck">Check the order</button></div><p class="xp-sr" aria-live="polite" id="xdLive"></p>';
      pushAfter(dropBind);
    } else {
      const off = roundOff(R);
      body += dropAxis(R) + '<div class="xd-verdict"><h2>' + (off === 0 ? "Spot on." : off <= 2 ? "Close." : off <= 5 ? "Not bad." : "Time is slippery.") + '</h2><span class="muted">' + (off === 0 ? "Every card in its place." : off + " off this round.") + "</span></div>" +
        '<p class="xp-note">' + esc(dropFact(R)) + "</p>" +
        '<div class="row" style="justify-content:space-between"><a class="linkish" href="#stoa">Walk these eras on the Timeline</a><button class="btn primary" data-x="dropNext" id="xdNext">' + (DROP.i === DROP.rounds.length - 1 ? "See your score" : "Next round") + "</button></div>";
      pushAfter(() => { const b = $("#xdNext"); if (b && DROP.focusNext) { DROP.focusNext = false; b.focus({ preventScroll: true }); } });
    }
    body += "</section>";
    return shell("drop", "The Timeline · a game", "Timeline Drop", DROP.i === 0 && !R.checked ? lede : "", body, true);
  };
  function dropEnd(L) {
    const tot = totalOff(), perfect = DROP.rounds.filter(R => roundOff(R) === 0).length;
    const isBest = DROP.newBest;
    const verdict = tot === 0 ? "Flawless. Clio, the Muse of history, would hire you." : tot <= 4 ? "A fine sense of time." : tot <= 10 ? "Solid. The near neighbours are the hard part." : "History is long, and it overlaps more than it seems. Another round?";
    return '<section class="xp-card xp-end"><span class="eyebrow">Game over · five rounds</span><div class="xp-big">' + tot + "<small>places off</small></div>" +
      '<p class="read" style="margin:0">' + esc(verdict) + "</p>" +
      '<div class="xd-rounds" aria-label="Places off per round">' + DROP.rounds.map((R, i) => { const o = roundOff(R); return '<span class="' + (o === 0 ? "ok" : "") + '" title="Round ' + (i + 1) + '">' + (o === 0 ? IC.check() : o) + "</span>"; }).join("") + "</div>" +
      '<div class="xp-hud"><span class="xp-stat">' + IC.check() + "<b>" + perfect + "</b> of " + DROP.rounds.length + " spot on</span><span class=\"xp-stat\">" + IC.streak() + "Best streak <b>" + DROP.bestStreak + '</b></span><span class="xp-stat' + (isBest ? " hot xp-pop" : "") + '">' + IC.star() + (isBest ? "New best: <b>" + L.best + "</b>" : "Best game <b>" + L.best + "</b> off") + "</span><span class=\"xp-stat\">Games <b>" + (L.played || 0) + "</b></span></div>" +
      '<div class="row"><button class="btn primary xp-btn-ic" data-x="dropAgain">' + IC.replay() + "Play again</button><a class=\"btn\" href=\"#stoa\">Walk the Timeline</a><a class=\"btn ghost\" href=\"#thinkers\">All thinkers by date</a></div>" +
      '<details class="xd-meet"><summary>Meet the ' + DROP.rounds.length * 5 + ' thinkers from this game</summary><div class="xp-links" style="margin-top:10px">' + DROP.rounds.flatMap(R => R.truth).map(id => thinkerChipX(id, shortName(TH[id]))).join("") + "</div></details></section>";
  }
  function dropSync() { // DOM order → state, and refresh labels
    const river = $("#xdRiver"); if (!river || !DROP) return;
    const R = DROP.rounds[DROP.i];
    R.order = $$(".xd-card", river).map(c => c.dataset.id);
    $$(".xd-card", river).forEach((c, i) => { const t = TH[c.dataset.id]; const p = $(".xd-pos", c); if (p) p.textContent = i + 1; c.setAttribute("aria-label", t.name + ", " + tradLabel(t) + ". Position " + (i + 1) + " of 5"); });
  }
  function announce(msg) { const l = $("#xdLive"); if (l) { l.textContent = ""; setTimeout(() => { l.textContent = msg; }, 30); } }
  // move a card to a new index with a FLIP animation for the cards that shift
  function dropMove(card, toIdx, skipAnim) {
    const river = $("#xdRiver"); const cards = $$(".xd-card", river); const from = cards.indexOf(card); if (from < 0 || toIdx === from) return;
    const others = cards.filter(c => c !== card && (skipAnim ? true : true));
    const first = new Map(cards.map(c => [c, c.getBoundingClientRect()]));
    const rest = cards.filter(c => c !== card); const ref = rest[toIdx] || null;
    const hadFocus = D.activeElement === card;
    river.insertBefore(card.parentElement && card.parentElement.tagName === "LI" ? card.parentElement : card, ref ? (ref.parentElement && ref.parentElement.tagName === "LI" ? ref.parentElement : ref) : null);
    if (hadFocus) card.focus({ preventScroll: true });
    if (reduceMotion()) return;
    others.forEach(c => {
      if (c === card && skipAnim) return;
      if (c.classList.contains("is-drag")) return;
      const a = first.get(c); c.style.transition = "none"; c.style.transform = ""; const b = c.getBoundingClientRect();
      const dx = a.left - b.left, dy = a.top - b.top; if (!dx && !dy) { c.style.transition = ""; return; }
      c.style.transform = "translate(" + dx + "px," + dy + "px)"; void c.offsetWidth; c.style.transition = ""; c.style.transform = "";
    });
  }
  function dropBind() {
    const river = $("#xdRiver"); if (!river) return;
    let drag = null;
    river.addEventListener("pointerdown", e => {
      const card = e.target.closest(".xd-card"); if (!card || (e.button != null && e.button > 0)) return;
      const r = card.getBoundingClientRect();
      drag = { card, sx: e.clientX, sy: e.clientY, gx: e.clientX - r.left, gy: e.clientY - r.top, moved: false, pid: e.pointerId };
      try { card.setPointerCapture(e.pointerId); } catch (er) { }
    });
    const natural = c => { const rr = river.getBoundingClientRect(); return { left: rr.left + river.clientLeft + c.offsetLeft, top: rr.top + river.clientTop + c.offsetTop, w: c.offsetWidth, h: c.offsetHeight }; };
    // move/up listen on the window: moving the dragged card in the DOM drops its pointer capture
    const move = e => {
      if (!river.isConnected) { cleanup(); return; }
      if (!drag || e.pointerId !== drag.pid) return;
      const vert = isVertical();
      if (!drag.moved) { if (Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) < 6) return; drag.moved = true; drag.card.classList.add("is-drag"); river.classList.add("is-dragging"); clearSel(); }
      e.preventDefault();
      const cards = $$(".xd-card", river), others = cards.filter(c => c !== drag.card);
      const p = vert ? e.clientY : e.clientX;
      let idx = others.length;
      for (let i = 0; i < others.length; i++) { const n = natural(others[i]); const mid = vert ? n.top + n.h / 2 : n.left + n.w / 2; if (p < mid) { idx = i; break; } }
      if (idx !== cards.indexOf(drag.card)) { dropMove(drag.card, idx, true); try { drag.card.setPointerCapture(drag.pid); } catch (er) { } }
      const n = natural(drag.card);
      const dx = vert ? 0 : e.clientX - drag.gx - n.left, dy = vert ? e.clientY - drag.gy - n.top : Math.max(-14, Math.min(14, e.clientY - drag.gy - n.top));
      drag.card.style.transform = "translate(" + dx + "px," + dy + "px) scale(1.03)";
    };
    const end = e => {
      if (!river.isConnected) { cleanup(); return; }
      if (!drag || (e && e.pointerId !== drag.pid)) return;
      const d = drag; drag = null;
      if (!river.isConnected) { cleanup(); return; }
      if (d.moved) {
        d.card.classList.remove("is-drag"); river.classList.remove("is-dragging");
        d.card.style.transform = ""; d.suppress = true; dropSync(); dropTapSuppress = Date.now();
        const idx = DROP.rounds[DROP.i].order.indexOf(d.card.dataset.id);
        announce(TH[d.card.dataset.id].name + " placed at position " + (idx + 1) + " of 5.");
      }
    };
    const cleanup = () => { W.removeEventListener("pointermove", move); W.removeEventListener("pointerup", end); W.removeEventListener("pointercancel", end); };
    W.addEventListener("pointermove", move, { passive: false }); W.addEventListener("pointerup", end); W.addEventListener("pointercancel", end);
    river.addEventListener("keydown", e => {
      const card = e.target.closest(".xd-card"); if (!card) return;
      const k = e.key; const d = k === "ArrowLeft" || k === "ArrowUp" ? -1 : k === "ArrowRight" || k === "ArrowDown" ? 1 : 0;
      if (!d) { if (k === "Escape") clearSel(); return; }
      e.preventDefault();
      const cards = $$(".xd-card", river), i = cards.indexOf(card), j = Math.max(0, Math.min(cards.length - 1, i + d));
      if (j === i) return;
      dropMove(card, j); dropSync(); announce(TH[card.dataset.id].name + " moved to position " + (j + 1) + " of 5.");
    });
  }
  let dropTapSuppress = 0;
  function clearSel() { if (!DROP) return; DROP.sel = null; $$(".xd-card.is-sel").forEach(c => { c.classList.remove("is-sel"); c.removeAttribute("aria-pressed"); }); }
  XA.dropTap = el => {
    if (Date.now() - dropTapSuppress < 350) return;
    const id = el.dataset.id;
    if (!DROP.sel) { DROP.sel = id; el.classList.add("is-sel"); el.setAttribute("aria-pressed", "true"); announce(TH[id].name + " picked up. Choose the card whose place it should take."); return; }
    if (DROP.sel === id) { clearSel(); return; }
    const a = $$('.xd-card[data-id="' + DROP.sel + '"]')[0]; clearSel(); if (!a) return;
    const cards = $$("#xdRiver .xd-card"), to = cards.indexOf(el);
    dropMove(a, to); dropSync(); announce(TH[a.dataset.id].name + " moved to position " + (to + 1) + " of 5.");
  };
  XA.dropCheck = () => {
    dropSync();
    const R = DROP.rounds[DROP.i]; if (R.checked) return;
    const before = new Map($$("#xdRiver .xd-card").map(c => [c.dataset.id, c.getBoundingClientRect()]));
    R.checked = true; const off = roundOff(R);
    if (off === 0) { DROP.streak++; DROP.bestStreak = Math.max(DROP.bestStreak, DROP.streak); } else DROP.streak = 0;
    DROP.focusNext = true;
    mount(true);
    if (reduceMotion()) return;
    // FLIP: slide each card from where the player put it to its true place
    $$("#xdRiver .xd-card").forEach(c => {
      const a = before.get(c.dataset.id); if (!a) return; const b = c.getBoundingClientRect();
      const dx = a.left - b.left, dy = a.top - b.top; if (!dx && !dy) return;
      c.style.transition = "none"; c.style.transform = "translate(" + dx + "px," + dy + "px)"; void c.offsetWidth;
      c.style.transition = "transform .45s cubic-bezier(.2,.7,.2,1)"; c.style.transform = "";
      setTimeout(() => { c.style.transition = ""; }, 500);
    });
  };
  XA.dropNext = () => {
    if (DROP.i < DROP.rounds.length - 1) { DROP.i++; mount(false); W.scrollTo(0, 0); const f = $("#xdRiver .xd-card"); if (f) f.focus({ preventScroll: true }); return; }
    const L = st("drop"), tot = totalOff();
    DROP.newBest = L.best == null || tot < L.best;
    if (DROP.newBest) L.best = tot;
    L.played = (L.played || 0) + 1; L.last = tot; L.done = true;
    L.bestStreak = Math.max(L.bestStreak || 0, DROP.bestStreak);
    persist("drop");
    DROP.over = true; mount(false); W.scrollTo(0, 0);
  };
  XA.dropAgain = () => { dropNew(); mount(false); W.scrollTo(0, 0); };

  /* ======================================================== MYTH OR TRUTH */
  // Each item is one statement about a thinker. A myth is a profile's misconception.myth (the popular caricature);
  // a truth is a sentence from the same profile's "ideas" that names what the thinker actually argued.
  // Pairing the two as side-by-side options would give the answer away (the corrections run 2.5 times longer
  // than the myths), so the player judges one statement at a time.
  let MYTH_POOL = [];
  const VERB = /^(argued|held|thought|believed|claimed|taught|insisted|maintained|defended|proposed|denied|rejected|wrote|saw|said|urged|warned|treated|called|described|distinguished|developed|introduced|showed)\b/;
  const TRUTHS = {};
  function mythPrep() { if (MYTH_POOL.length || !W.ATLAS_PROFILES_EXT) return; PX = W.ATLAS_PROFILES_EXT;
  MYTH_POOL = Object.keys(PX).filter(id => TH[id] && PX[id].misconception && PX[id].misconception.myth && PX[id].misconception.truth);
  MYTH_POOL.forEach(id => {
    const t = TH[id], sn = shortName(t), names = [sn, t.name, capFirst(sn)].filter(Boolean);
    const out = [];
    (PX[id].ideas || []).forEach(idea => String(idea.body || "").split(/(?<=[.!?])\s+(?=[A-Z])/).forEach(s => {
      s = s.trim(); if (s.length < 45 || s.length > 160) return;
      // drop sentences that lean on the one before ("this", "it", "also", a pronoun after the subject...)
      const pro = s.match(/^(He|She|They) (.*)$/);
      if (/\b(these|those|this|such|also|too|then|there|again|instead|however|later|here|it|its|they|them|their|he|she|him|her|his)\b/i.test(pro ? pro[2] : s)) return;
      let body = null;
      if (pro && VERB.test(pro[2])) body = capFirst(sn) + " " + pro[2];
      else { const nm = names.find(n => s.startsWith(n + " ")); if (nm && VERB.test(s.slice(nm.length + 1))) body = s; }
      if (body && !/[:;"“”]/.test(body)) out.push({ text: body, head: idea.head || "" });
    }));
    if (out.length) TRUTHS[id] = out;
  }); }
  let MYTH = null;
  const MYTH_N = 10;
  function mythNew() {
    const canTruth = shuffle(MYTH_POOL.filter(id => TRUTHS[id]));
    const nTruth = Math.min(canTruth.length, 3 + Math.floor(Math.random() * 3)); // 3 to 5 truths a round
    const truthIds = canTruth.slice(0, nTruth);
    const mythIds = shuffle(MYTH_POOL.filter(id => !truthIds.includes(id))).slice(0, MYTH_N - truthIds.length);
    const items = shuffle(truthIds.map(id => { const tr = pick(TRUTHS[id]); return { id, kind: "truth", text: tr.text, head: tr.head }; })
      .concat(mythIds.map(id => ({ id, kind: "myth", text: PX[id].misconception.myth }))));
    MYTH = { items, i: 0, picked: null, points: 0, correct: 0, streak: 0, bestStreak: 0, over: false, started: true };
  }
  const mythPts = streak => 100 + Math.min(100, 20 * Math.max(0, streak - 1));
  XV.myths = () => {
    if (!W.ATLAS_PROFILES_EXT && P && P.pxLoad) { P.pxLoad().then(() => mount(true), () => {}); return '<div class="wrap"><p class="muted" role="status">Gathering the myths…</p></div>'; }
    mythPrep();
    const L = st("myths");
    const ey = "The Shipyard · a game";
    if (!MYTH || !MYTH.started) {
      const intro = '<section class="xp-card stack" style="--g:14px"><p class="read" style="margin:0">Philosophers are easy to caricature. Nietzsche “the proto-Nazi”, Machiavelli “the villain”, Epicurus “the party animal”. Each card shows one statement about a thinker. Decide: is it what they <b>actually held</b>, or the <b>popular myth</b>?</p>' +
        '<div class="xp-hud"><span class="xp-stat">' + IC.check() + "100 points a correct call</span><span class=\"xp-stat\">" + IC.streak() + "+20 for every call in a streak</span>" + (L.best != null ? '<span class="xp-stat hot">' + IC.star() + "Best <b>" + L.best + "</b> points</span>" : "") + "</div>" +
        '<div class="row"><button class="btn primary xp-btn-ic" data-x="mythStart">Start a round of ' + MYTH_N + "</button></div>" +
        '<div class="xp-links">' + dictChip("Straw man") + dictChip("Principle of charity") + chip("#thinkers", "All thinkers", IC.person()) + "</div></section>";
      return shell("myths", ey, "Myth or truth?", "Train charitable reading: before you criticise a thinker, make sure it is really their view.", intro);
    }
    if (MYTH.over) return shell("myths", ey, "Myth or truth?", "", mythEnd(L));
    const it = MYTH.items[MYTH.i], t = TH[it.id], picked = MYTH.picked, sn = shortName(t);
    const hud = '<div class="xp-hud"><span class="faint">' + (MYTH.i + 1) + " of " + MYTH.items.length + '</span><div class="progress" style="flex:1;min-width:90px" aria-hidden="true">' + MYTH.items.map((x, i) => '<i class="' + (i < MYTH.i || (i === MYTH.i && picked) ? (x.got ? "done" : "miss") : i === MYTH.i ? "cur" : "") + '"></i>').join("") + "</div>" +
      '<span class="xp-stat"><b>' + MYTH.points + "</b> pts</span>" + (MYTH.streak > 1 ? '<span class="xp-stat hot' + (picked && it.got ? " xp-pop" : "") + '">' + IC.streak() + "<b>" + MYTH.streak + "</b> in a row</span>" : "") + "</div>";
    let h = hud + '<section class="xp-card xt-q" aria-live="polite"><div class="xt-who">' + medal(t, "lg") + "<div><b>" + esc(t.name) + "</b><span>" + esc([tradLabel(t), life(t)].filter(Boolean).join(" · ")) + "</span></div></div>" +
      (picked ? '<span class="eyebrow ' + (it.kind === "myth" ? 'crack">Often said' : 'ok">Actually held') + "</span>" : "") +
      '<p class="xt-statement' + (picked ? " " + it.kind : "") + '">' + esc(it.text) + "</p>";
    const btn = (k, label, sub, key) => '<button class="xt-pick ' + k + (picked === k ? " chosen " + (it.got ? "right" : "wrong") : "") + '" data-x="mythPick" data-v="' + k + '"' + (picked ? " disabled" : "") + "><b>" + (k === "myth" ? IC.cross() : IC.check()) + label + "<kbd>" + key + "</kbd></b><small>" + sub + "</small></button>";
    h += '<div class="xt-picks">' + btn("truth", "Truth", "What " + esc(sn) + " actually held", "T") + btn("myth", "Myth", "The popular caricature", "M") + "</div>";
    if (picked) {
      const m = PX[it.id].misconception;
      h += '<div class="xt-verdict ' + (it.got ? "right" : "wrong") + '">' + (it.got ? IC.check() : IC.cross()) + "<span>" + (it.got ? "Right: " : "Not quite: ") + (it.kind === "myth" ? "that is a myth." : "that is what " + esc(sn) + " held.") + "</span>" + (it.got ? '<span class="xt-pts">+' + it.pts + "</span>" : "") + "</div>";
      if (it.kind === "myth") h += '<div class="xt-actual"><span class="eyebrow ok">Actually</span><p>' + esc(m.truth) + "</p></div>";
      else h += (it.head ? '<p class="xt-from" style="margin-top:-6px">From the idea “' + esc(it.head) + "” on " + esc(capFirst(sn)) + "’s page.</p>" : "") + '<p class="muted" style="margin:0;font-size:.95rem">And the myth people tell about ' + esc(sn) + ':</p><div class="xt-pair"><div><span class="eyebrow crack">Often said</span><p>' + esc(m.myth) + '</p></div><div><span class="eyebrow ok">Actually</span><p>' + esc(m.truth) + "</p></div></div>";
      h += '<div class="row" style="justify-content:space-between"><a class="linkish" href="#thinker-' + esc(it.id) + '" data-xjump="myth">' + esc(capFirst(sn)) + ": myth and truth</a><button class=\"btn primary\" data-x=\"mythNext\" id=\"xtNext\">" + (MYTH.i === MYTH.items.length - 1 ? "See your score" : "Next") + "</button></div>";
      pushAfter(() => { const b = $("#xtNext"); if (b) b.focus({ preventScroll: true }); });
    }
    h += "</section>";
    return shell("myths", ey, "Myth or truth?", "", h);
  };
  function mythEnd(L) {
    const n = MYTH.items.length, c = MYTH.correct;
    const verdict = c === n ? "A perfect round. You read every one of them charitably." : c >= n - 2 ? "Excellent: hardly a straw man got past you." : c >= n / 2 ? "Good. The myths are popular for a reason: they sound right." : "The caricatures are persuasive. Read the corrections, then try again.";
    return '<section class="xp-card xp-end"><span class="eyebrow">Round complete</span><div class="xp-big">' + MYTH.points + "<small>points</small></div>" +
      '<p class="read" style="margin:0">' + c + " of " + n + " right. " + esc(verdict) + "</p>" +
      '<div class="xp-hud"><span class="xp-stat">' + IC.streak() + "Best streak <b>" + MYTH.bestStreak + '</b></span><span class="xp-stat' + (MYTH.newBest ? " hot xp-pop" : "") + '">' + IC.star() + (MYTH.newBest ? "New best: <b>" + L.best + "</b>" : "Best <b>" + L.best + "</b> points") + '</span><span class="xp-stat">Rounds <b>' + (L.played || 0) + "</b></span></div>" +
      '<ul class="xt-list">' + MYTH.items.map(it => '<li><a href="#thinker-' + esc(it.id) + '" data-xjump="myth"><span class="' + (it.got ? "ok" : "no") + '">' + (it.got ? IC.check() : IC.cross()) + "</span>" + '<span class="xt-t"><b>' + esc(shortName(TH[it.id])) + "</b>: " + esc(it.text) + '</span><span class="xt-k">' + it.kind + "</span></a></li>").join("") + "</ul>" +
      '<div class="row"><button class="btn primary xp-btn-ic" data-x="mythStart">' + IC.replay() + 'New round</button><a class="btn ghost" href="#quiz">More quizzes</a></div>' +
      '<div class="xp-links">' + dictChip("Straw man") + dictChip("Principle of charity") + "</div></section>";
  }
  XA.mythStart = () => { mythNew(); mount(false); W.scrollTo(0, 0); };
  XA.mythPick = el => {
    if (!MYTH || MYTH.picked || MYTH.over) return;
    const it = MYTH.items[MYTH.i]; MYTH.picked = el.dataset.v; it.got = MYTH.picked === it.kind;
    if (it.got) { MYTH.streak++; MYTH.bestStreak = Math.max(MYTH.bestStreak, MYTH.streak); it.pts = mythPts(MYTH.streak); MYTH.points += it.pts; MYTH.correct++; } else MYTH.streak = 0;
    mount(true);
  };
  XA.mythNext = () => {
    if (!MYTH || !MYTH.picked) return;
    MYTH.i++; MYTH.picked = null;
    if (MYTH.i >= MYTH.items.length) {
      const L = st("myths");
      MYTH.newBest = L.best == null || MYTH.points > L.best;
      if (MYTH.newBest) L.best = MYTH.points;
      L.bestCorrect = Math.max(L.bestCorrect || 0, MYTH.correct);
      L.bestStreak = Math.max(L.bestStreak || 0, MYTH.bestStreak);
      L.played = (L.played || 0) + 1; L.done = true;
      L.missed = MYTH.items.filter(x => !x.got).map(x => x.id);
      persist("myths"); MYTH.over = true;
    }
    mount(false); W.scrollTo(0, 0);
  };
  D.addEventListener("keydown", e => {
    if (myRoute() !== "myths" || !MYTH || MYTH.over || !MYTH.started || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target.closest && e.target.closest("input,textarea,select,[contenteditable]")) return;
    if (!$("#view [data-xp=myths]") || ($("#modal") && !$("#modal").hidden)) return;
    const k = e.key.toLowerCase();
    if (!MYTH.picked && (k === "t" || k === "m" || k === "1" || k === "2")) { e.preventDefault(); XA.mythPick({ dataset: { v: k === "t" || k === "1" ? "truth" : "myth" } }); }
    // after an answer, N (or Enter, when no button or link has focus) moves on to the next claim
    else if (MYTH.picked && (k === "n" || (k === "enter" && !(e.target.closest && e.target.closest("button,a"))))) { e.preventDefault(); XA.mythNext(); }
  });

  /* ========================================================== MARY'S ROOM */
  const RED_FACTS = [
    { h: "Wavelength", p: "Light that looks red has wavelengths of roughly 620 to 750 nanometres, the long end of the visible spectrum.", v: '<span class="xr-spec"><i></i></span>' },
    { h: "Cone cells", p: "The retina has three kinds of cone. Red light excites the long-wavelength (L) cones far more than the medium (M) ones, and the short (S) ones hardly at all.", v: '<span class="xr-bars"><em>L</em><i style="height:28px;background:var(--xr-red)"></i><em>M</em><i style="height:13px;background:#3f9a54"></i><em>S</em><i style="height:3px;background:#3b5bcc"></i></span>' },
    { h: "Opponent channels", p: "Cells in the retina compare the L and M signals. When L wins by a wide margin, the red–green channel signals red.", v: '<span class="xr-spec" style="background:linear-gradient(90deg,#2e9b4f,#d9d4c4 50%,var(--xr-red))"></span>' },
    { h: "The pathway", p: "Signals run along the optic nerve to the lateral geniculate nucleus, on to primary visual cortex (V1) and then to area V4. Damage near V4 can leave a person seeing only greys (cerebral achromatopsia).", v: '<span class="xr-bars" style="align-items:center;gap:4px;height:auto;font-size:.72rem;color:var(--ink-3)">eye → LGN → V1 → <b style="color:var(--xr-red)">V4</b></span>' },
    { h: "The word", p: "Rouge in French, rojo in Spanish, rot in German, aka (赤) in Japanese, lāl (लाल) in Hindi.", v: '<span class="xr-words"><span>rouge</span><span>rojo</span><span>rot</span><span>赤</span><span>लाल</span></span>' },
    { h: "Ripe tomatoes", p: "As a tomato ripens its chlorophyll breaks down and lycopene, a red pigment, builds up. Lycopene absorbs blue and green light, so mostly long wavelengths bounce back.", v: '<span class="xr-sw" style="background:#4f8f45"></span>' + IC.arrow() + '<span class="xr-sw" style="background:var(--xr-red)"></span>' },
    { h: "Metamers", p: "Two lights with quite different spectra can look exactly the same red, as long as they stimulate the three kinds of cone in the same proportions.", v: '<span class="xr-sw" style="background:var(--xr-red)"></span><span class="faint" style="font-size:.8rem">=</span><span class="xr-sw" style="background:var(--xr-red)"></span>' },
    { h: "Colour words", p: "Berlin and Kay (1969) found that a language with just three basic colour terms almost always has words for black, white and red.", v: '<span class="xr-sw" style="background:#111"></span><span class="xr-sw" style="background:#f6f3ea"></span><span class="xr-sw" style="background:var(--xr-red)"></span>' }
  ];
  let maryFresh = -1, maryJustOpened = false;
  const doorArt = '<svg class="xr-doorart" viewBox="0 0 84 120" aria-hidden="true"><rect x="6" y="4" width="72" height="112" rx="3" fill="var(--surface)" stroke="var(--ink-3)" stroke-width="2"/><rect x="14" y="12" width="56" height="98" rx="2" fill="var(--card,var(--raised))" stroke="var(--ink-3)" stroke-width="1.5"/><rect x="21" y="20" width="42" height="34" rx="1.5" fill="none" stroke="var(--line)" stroke-width="1.5"/><rect x="21" y="64" width="42" height="38" rx="1.5" fill="none" stroke="var(--line)" stroke-width="1.5"/><circle cx="62" cy="62" r="3.4" fill="var(--ink-2)"/></svg>';
  const sceneArt = '<svg viewBox="0 0 640 300" role="img" aria-label="A red rose in front of a sunrise"><defs><linearGradient id="xrSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2d2a6e"/><stop offset=".42" stop-color="#b8487a"/><stop offset=".72" stop-color="#f58f5a"/><stop offset="1" stop-color="#ffd98a"/></linearGradient><radialGradient id="xrSunG"><stop offset="0" stop-color="#fff3c4"/><stop offset=".6" stop-color="#ffc35c"/><stop offset="1" stop-color="#ff9b45" stop-opacity="0"/></radialGradient><radialGradient id="xrPet" cx=".4" cy=".35"><stop offset="0" stop-color="#ff5a6e"/><stop offset=".6" stop-color="#d3263a"/><stop offset="1" stop-color="#8e1024"/></radialGradient></defs>' +
    '<rect width="640" height="300" fill="url(#xrSky)"/><g class="xr-sun"><circle cx="420" cy="232" r="120" fill="url(#xrSunG)"/><circle cx="420" cy="232" r="46" fill="#ffe7a3"/></g>' +
    '<path d="M0 238 C90 214 170 226 250 238 S420 254 520 236 S610 226 640 232 V300 H0Z" fill="#3a2446"/><path d="M0 262 C120 248 230 270 340 262 S540 250 640 266 V300 H0Z" fill="#26172f"/>' +
    '<g class="xr-rose" transform="translate(70 0)"><path d="M122 300 C120 262 128 232 122 196" stroke="#3f7d3a" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M123 252 C100 240 86 244 76 256 C96 262 112 262 123 252Z" fill="#4f8f45"/><path d="M124 230 C146 214 162 218 170 230 C150 238 136 238 124 230Z" fill="#5a9b4e"/>' +
    '<g transform="translate(122 160)"><ellipse cx="-30" cy="10" rx="34" ry="26" fill="url(#xrPet)" transform="rotate(-24 -30 10)"/><ellipse cx="30" cy="10" rx="34" ry="26" fill="url(#xrPet)" transform="rotate(24 30 10)"/><ellipse cx="0" cy="22" rx="38" ry="24" fill="#b81b31"/><ellipse cx="0" cy="-6" rx="34" ry="34" fill="url(#xrPet)"/><path d="M-20 -6 C-18 -26 18 -28 20 -8 C22 10 -6 16 -10 2 C-12 -8 2 -12 6 -4" stroke="#7a0f1f" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M-30 14 C-14 28 14 28 30 14" stroke="#8e1024" stroke-width="2.5" fill="none" stroke-linecap="round"/></g></g></svg>';
  XV.mary = () => {
    const M = st("marys"); const f = M.f || []; const n = f.length, all = n >= RED_FACTS.length;
    const jackson = TH.jackson;
    const grey = !M.open || maryJustOpened;
    let h = "";
    h += '<section class="xp-card stack" style="--g:12px"><div class="xr-intro">' + (jackson ? medal(jackson, "lg") : "") + '<p class="read">Mary is a brilliant scientist who has spent her whole life in a black-and-white room. She has studied colour vision from screens and books and knows <b>every physical fact</b> about it. ' + (M.open ? "Then one day she walked out." : "You are Mary. Study the facts about red, then step outside.") + "</p></div>" +
      '<div class="xr-counter"><span>Mary knows <b>' + n + " of " + RED_FACTS.length + "</b> physical facts about red</span>" + '<span class="xr-meter" aria-hidden="true"><i style="width:' + Math.round(100 * n / RED_FACTS.length) + '%"></i></span>' + (!all ? '<button class="linkish" data-x="maryAll">Study them all</button>' : "") + "</div></section>";
    h += '<div class="xr-facts">' + RED_FACTS.map((x, i) => {
      const known = f.includes(i);
      if (!known) return '<button class="xr-fact" data-x="maryFact" data-i="' + i + '" aria-label="Study fact ' + (i + 1) + ": " + esc(x.h) + '"><span class="xr-n">Fact ' + (i + 1) + "</span><h3>" + esc(x.h) + '</h3><span class="xr-tap">' + IC.book() + "Tap to study</span></button>";
      return '<div class="xr-fact known' + (maryFresh === i ? " fresh" : "") + '"><span class="xr-n">Fact ' + (i + 1) + "</span><h3>" + esc(x.h) + '</h3><div class="xr-vis">' + x.v + "</div><p>" + esc(x.p) + "</p></div>";
    }).join("") + "</div>";
    if (!M.open) {
      h += '<section class="xr-door">' + doorArt + '<div class="xr-door-tx"><p class="read">' + (all ? "Mary knows every physical fact about red. In the thought experiment she knows all of them, not just these eight: every wavelength, every neuron, every word." : "The door stays shut until Mary has studied every fact. " + (RED_FACTS.length - n) + " to go.") + '</p><div class="row"><button class="btn primary xp-btn-ic" data-x="maryDoor"' + (all ? "" : " disabled") + ">" + IC.door() + "Open the door</button></div></div></section>";
    }
    // the filter sits on this inner wrapper, not on #view, so the header keeps its colour: the grey is the room
    if (M.open) h = '<figure class="xr-scene" id="xrScene" style="margin:0">' + sceneArt + "<figcaption>Mary sees red for the first time.</figcaption></figure>" + mary3(M) + h;
    h = '<div class="xr-room' + (grey ? " is-grey" : "") + '" id="xrRoom">' + h + "</div>";
    if (maryJustOpened) pushAfter(() => {
      const room = $("#xrRoom"), sc = $("#xrScene");
      const go = () => { if (room) room.classList.remove("is-grey"); };
      later(() => { if (sc) W.scrollTo({ top: Math.max(0, sc.getBoundingClientRect().top + W.scrollY - 110), behavior: "auto" }); });
      if (reduceMotion()) go(); else requestAnimationFrame(() => requestAnimationFrame(go));
      maryJustOpened = false;
    });
    maryFresh = -1;
    return shell("mary", "The Shipyard · a quick experiment", "Mary’s Room", "", h);
  };
  function mary3(M) {
    let h = '<section class="xp-card stack" style="--g:14px" id="xrVote"><h2 style="font-size:1.45rem">Did Mary learn something new?</h2>' +
      '<div class="xr-vote" role="group" aria-label="Your answer"><button data-x="maryVote" data-v="yes" class="' + (M.v === "yes" ? "on" : "") + '" aria-pressed="' + (M.v === "yes") + '"><b>Yes</b><span>Something no fact could give her: what red looks like.</span></button>' +
      '<button data-x="maryVote" data-v="no" class="' + (M.v === "no" ? "on" : "") + '" aria-pressed="' + (M.v === "no") + '"><b>No</b><span>She only gained a new way of knowing an old fact.</span></button></div>';
    if (M.v) {
      const m1 = savedAnswer("m1");
      const side = M.v === "yes" ? "You side with the Jackson of 1982: if Mary learns a new fact, then the physical facts were not all the facts, and physicalism is false." : "You side with the physicalists, and with Jackson himself in his later work: Mary meets an old fact in a new way.";
      let tension = "";
      if (m1 === "yes" && M.v === "yes") tension = "On the Compass you said the mind is physical. Saying Mary learned a new fact pulls against that; a physicalist needs one of the replies below.";
      else if (m1 === "no" && M.v === "no") tension = "On the Compass you said something about the mind is not physical, yet here Mary learned no new fact. Is there another argument that carries your view?";
      else if (m1 === "yes" || m1 === "no") tension = "That fits your Compass answer on what the mind is.";
      h += '<div class="xr-reveal stack" style="--g:12px"><p class="xp-note">' + esc(side) + (tension ? " " + esc(tension) : "") + "</p>" +
        '<p class="read">This is Frank Jackson’s <b>knowledge argument</b> (“Epiphenomenal Qualia”, 1982; “What Mary Didn’t Know”, 1986). Mary knew every physical fact about colour. If she still learns something when she sees red, namely what it is like, then some facts are not physical. Jackson concluded that experience has non-physical qualities: <i>qualia</i>.</p>' +
        '<div class="xr-replies"><div><b>The ability reply</b><p>Mary gains no new fact, only new abilities: to recognise, imagine and remember red.</p><small>David Lewis, 1988; Laurence Nemirow, 1990</small></div>' +
        '<div><b>Old fact, new guise</b><p>She meets a physical fact she already knew, but now through a new, experiential concept.</p><small>Brian Loar, 1990, and others</small></div>' +
        '<div><b>She would not be surprised</b><p>Someone who truly knew all the physical facts could work out what seeing red is like.</p><small>Daniel Dennett, 1991</small></div></div>' +
        '<p class="read">Jackson himself later changed his mind. By the late 1990s he accepted physicalism, and in “Mind and Illusion” (2003) he argued that the knowledge argument fails.</p>' +
        '<div class="xp-links">' + debateChip("mind") + compassChip("m1", "Compass: what the mind is") + chip("#experiment-marys_room", "Read the full thought experiment", IC.book()) + "</div>" +
        '<div class="xp-links">' + thinkerChipX("jackson") + thinkerChipX("lewis") + thinkerChipX("dennett") + thinkerChipX("chalmers") + dictChip("Knowledge argument") + dictChip("Qualia") + dictChip("Physicalism") + dictChip("Epiphenomenalism") + "</div>" +
        '<div class="row"><button class="linkish" data-x="maryReset">Go back into the room</button></div></div>';
    }
    return h + "</section>";
  }
  XA.maryFact = el => { const M = st("marys"); M.f = M.f || []; const i = +el.dataset.i; if (!M.f.includes(i)) M.f.push(i); maryFresh = i; persist("marys"); mount(true); };
  XA.maryAll = () => { const M = st("marys"); M.f = RED_FACTS.map((x, i) => i); persist("marys"); mount(true); };
  XA.maryDoor = () => { const M = st("marys"); if ((M.f || []).length < RED_FACTS.length) return; M.open = true; maryJustOpened = true; persist("marys"); mount(true); };
  XA.maryVote = el => { const M = st("marys"); M.v = el.dataset.v; M.done = true; persist("marys"); mount(true); later(() => { const v = $("#xrVote"); if (v) W.scrollTo({ top: Math.max(0, v.getBoundingClientRect().top + W.scrollY - 110), behavior: reduceMotion() ? "auto" : "smooth" }); }); };
  XA.maryReset = () => { const M = st("marys"); const done = M.done; setState("marys", { f: [], done, v: null }); persist("marys"); mount(false); W.scrollTo(0, 0); };

  /* ------------------------------------------------------------- start */
  const view = $("#view");
  if (view) new MutationObserver(onView).observe(view, { childList: true });
  // the app has already rendered once before this file loaded: re-render if the current route is one of ours
  if (P && myRoute()) P.render(false); else onView();
})();
