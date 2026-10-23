/* Philodyssey · study.js — BATCH D of the build plan
   #7 The Tide (spaced review) · #8 Captain's Log (#log) · #9 Share card + sea certificate

   HOOK-UP: `<script src="js/study.js"></script>` right before `</body>`, after the main app script.
   The app's state and helpers live in its closure, so this module reads them live through the app's
   window.PHILO bridge (P.S is re-read on every access, because the app reassigns S on import, reset and sync).
   It needs PHILO to carry: S, after, save, render, route, esc, $, $$, toast, openDrawer, VOY, voyState,
   deckSlides, deckState, deckScore, missedAll, islandsOf, islDone, LIB, slugT, TH, QM; and optionally rich, DK,
   QZ, life, labelOf, matches, deepest, SHORT, ROOTS, allTensions, secDone, agStarted, answeredCount,
   chartedStars, skyStarTotal, sealsNow, sealSVG, numWord, cap, CAP, EX, AG, C, ROUTE_ALIAS.
   If a required key is missing it logs one warning and does nothing.

   HOOKS this module installs (all at load time, nothing in index.html is edited):
   - VIEWS.tide (#tide, #tide-missed = the old "all missed checks" list), VIEWS.log (#log)
   - VIEWS.voyage wrapped: #voyage-review is replaced in history by #tide
   - ROUTE_ALIAS: review→tide, progress→log, captain→log, captains→log
   - ACT.dkAnswer / ACT.voyTrial / ACT.quizPick wrapped: a miss adds a Tide card (no behaviour change otherwise)
   - ACT.shareCard replaced (rebranded, compass card + sea certificate), plus ACT.saveCard / scShare / scCopy
   - ACT.tideReveal / tideGrade / tidePick / tideNext / tideAdd / tideAddMany / tideMore
   - window.tideDue() for the "Your next heading" home: the number of cards due today (max 20)
   - window.progressStats() (the six Bearings numbers), for any page that wants them
   - S.tide, S.act (+ S.actV, S.actPruned) persisted with the app's save()
   - document listeners: click (capture) counts activity into S.act; click (bubble) adds "+ Tide" to #glPop;
     keydown drives the Tide with the keyboard
   - a MutationObserver on #view and #drawer patches rendered HTML (every patch is idempotent and checks
     that its target exists): Home module cards and place count, Voyage hero "N due on the Tide", the
     Voyage log line in My Positions, the My Positions header link, dictionary "+ Tide" pins, island finish
     "Add these words", Compass results / Quick Compass "Share your card", the sea certificate button on
     #voyage-uN, the account drawer "Open your log" link; and the Library ▾ menu gets Tide and Log entries.
*/
(function () {
"use strict";
// window.PHILO is the app's bridge. Every lookup is live, so P.S is always the current state object.
const SRC = [window.PHILO].filter(Boolean);
const P = new Proxy({}, { get(_, k) { for (const o of SRC) { try { const v = o[k]; if (v !== undefined) return v; } catch (e) { } } return undefined; } });
if (!SRC.length || !P.VIEWS || !P.ACT) { console.warn("study.js: window.PHILO is missing, so the Tide, the Log and the share card are off."); return; }
const NEED = ["S", "after", "save", "render", "route", "esc", "$", "$$", "toast", "openDrawer", "VOY", "voyState", "deckSlides", "deckState", "deckScore", "missedAll", "islandsOf", "islDone", "LIB", "slugT", "TH", "QM"];
const gap = NEED.filter(k => P[k] === undefined);
if (gap.length) { console.warn("study.js: the bridge lacks " + gap.join(", ") + "; the Tide, the Log and the share card are off."); return; }
const VIEWS = P.VIEWS, ACT = P.ACT;
const esc = P.esc, $ = P.$, $$ = P.$$;
const opt = (k, d) => { try { const v = P[k]; return v === undefined ? d : v; } catch (e) { return d; } };
const S = () => P.S;
const save = () => { try { P.save(); } catch (e) { console.error(e); } };
const toast = m => { try { P.toast(m); } catch (e) { } };
const rich = s => { const f = opt("rich"); return f ? f(s) : esc(s); };
const VOY = () => opt("VOY", { units: [], islands: {} });
const ROMANS = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"];
const ROMAN = n => ROMANS[n] || String(n);
// copies of the app's small pure helpers (same algorithms, so ids and option orders match)
function hash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function optOrder(key, n) { const R = rng(hash(key)), a = [...Array(n).keys()]; for (let i = n - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const LIB = () => opt("LIB", { glossary: [], eras: [] });
const on = (r, names) => names.includes(r.name);
const plural = (n, a, b) => n + " " + (n === 1 ? a : (b || a + "s"));

/* ------------------------------------------------------------ dates (local, like todayKey) */
const pad = n => String(n).padStart(2, "0");
const fmtKey = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
const today = () => fmtKey(new Date());
const keyDate = k => { const [y, m, d] = String(k).split("-").map(Number); return new Date(y, m - 1, d); };
function addDays(key, n) { const d = keyDate(key); d.setDate(d.getDate() + n); return fmtKey(d); }
const dayDiff = (a, b) => Math.round((keyDate(b) - keyDate(a)) / 864e5);
const dShort = d => d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
const dLong = d => d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
function whenKey(k) { const n = dayDiff(today(), k); return n <= 0 ? "today" : n === 1 ? "tomorrow" : "in " + n + " days, " + dShort(keyDate(k)); }

/* ================================================================ THE TIDE */
function TS() { const s = S(); if (!s.tide || typeof s.tide !== "object") s.tide = { c: {} }; if (!s.tide.c) s.tide.c = {}; return s.tide; }
function tideAdd(cid, k, r) { const t = TS(); if (t.c[cid]) return false; t.c[cid] = { k, r, due: today(), iv: 0, e: 2.5, n: 0, l: 0 }; return true; }
function tideHas(cid) { return !!TS().c[cid]; }
const splitLast = s => { const i = String(s).lastIndexOf(":"); return [s.slice(0, i), +s.slice(i + 1)]; };
// first visit with an old save: every missed island check joins the Tide, due today (once per save)
function ensureTide() {
  const t = TS(); if (t.seeded) return;
  try { (P.missedAll() || []).forEach(m => tideAdd("check:" + m.I.id + ":" + m.k, "check", m.I.id + ":" + m.k)); } catch (e) { }
  t.seeded = 1; save();
}
let TERMS = null;
function termBySlug(slug) {
  if (!TERMS) { TERMS = new Map(); (LIB().glossary || []).forEach(g => { const k = P.slugT(g.term); if (!TERMS.has(k)) TERMS.set(k, g); }); }
  return TERMS.get(slug) || null;
}
function trialQs(key) { const V = VOY(); if (/^u\d+$/.test(key)) { const u = V.units.find(x => "u" + x.id === key); return u ? { qs: u.trial || [], where: "Sea " + ROMAN(u.id) + " trial", href: "#voyage-" + key } : null; }
  const I = V.islands[key]; return I ? { qs: I.trial || [], where: I.name + " · trial", href: "#voyage-" + key } : null; }

// a card's content, resolved from refs; null when the content is gone (the card is then dropped silently)
function resolve(cid, c) {
  try {
    if (c.k === "check") { const [id, k] = splitLast(c.r); const I = VOY().islands[id]; if (!I || I.sem) return null; const s = P.deckSlides(I)[k];
      if (!s || s.t !== "quiz" || !Array.isArray(s.options) || s.answer == null) return null;
      return { type: "mc", kind: "check", label: "Quick check", where: I.name, q: s.q, options: s.options, answer: s.answer, why: s.why, island: id, k }; }
    if (c.k === "trial") { const [key, i] = splitLast(c.r); const T = trialQs(key); const q = T && T.qs[i];
      if (!q || !Array.isArray(q.options) || q.answer == null) return null;
      return { type: "mc", kind: "trial", label: "Sea trial", where: T.where, q: q.q, options: q.options, answer: q.answer, why: q.why, href: T.href }; }
    if (c.k === "term") { const g = termBySlug(c.r); return g ? { type: "self", kind: "term", label: "Word", where: g.field || "", g, slug: c.r } : null; }
    if (c.k === "idea") {
      const p = String(c.r).split(":");
      if (p[0] === "c") { const h = +p[1], a = p.slice(2).join(":"); const it = (opt("EX", {}).quiz || []).find(x => x.answer === a && hash(String(x.idea)) === h);
        return it ? { type: "self", kind: "idea", label: "Who held this idea?", where: "Quiz", idea: it.idea, who: it.answer, explain: it.explain } : null; }
      if (p[0] === "s") { const [, q, a, who] = p; const Q = P.QM[q]; if (!Q || !P.TH[who]) return null;
        return { type: "self", kind: "stand", label: "Who holds this view?", where: "Quiz", q, a, who, Q, view: P.labelOf(q, a) }; }
    }
  } catch (e) { console.error(e); }
  return null;
}
let dueMemo = { k: "", v: [] };
function tideDue() {
  ensureTide();
  const mk = (S().updated || 0) + "|" + Object.keys(TS().c).length + "|" + today();
  if (dueMemo.k === mk) return dueMemo.v.slice();
  const v = tideDueNow(); dueMemo = { k: mk, v }; return v.slice();
}
function tideDueNow() {
  const t = TS(), d = today();
  const L = Object.keys(t.c).filter(id => { const c = t.c[id]; if (!c || !c.due) return false; if (!resolve(id, c)) { delete t.c[id]; return false; } return c.due <= d; })
    .sort((a, b) => (t.c[a].due < t.c[b].due ? -1 : t.c[a].due > t.c[b].due ? 1 : (t.c[b].l || 0) - (t.c[a].l || 0)));
  return L.slice(0, 20);
}
window.tideDue = () => { try { return tideDue().length; } catch (e) { return 0; } }; // a number, for the home page
function nextDue() { const d = today(); let m = null, n = 0; Object.values(TS().c).forEach(c => { if (c.due > d) { if (!m || c.due < m) { m = c.due; n = 1; } else if (c.due === m) n++; } }); return m ? { key: m, n } : null; }

// SM-2-lite. Again resets the run (n = 0) so the next Good starts again at two days.
function schedule(c, g) {
  let iv = c.iv || 0, e = c.e || 2.5, n = c.n || 0, l = c.l || 0;
  if (g === "again") { iv = 0; e = Math.max(1.3, e - .2); l++; n = 0; }
  else if (g === "hard") { iv = Math.max(1, Math.round(iv * 1.2)); e = Math.max(1.3, e - .15); n++; }
  else if (g === "good") { iv = n === 0 ? 2 : n === 1 ? 3 : Math.max(1, Math.round(iv * e)); n++; } // a new card: Hard 1 day, Good 2, Easy 3
  else { iv = Math.max(2, Math.round(Math.max(1, iv) * e * 1.3)); e += .15; n++; }
  iv = Math.min(365, iv);
  return { iv, e: Math.round(e * 100) / 100, n, l };
}
const ivLabel = iv => iv <= 0 ? "today" : iv === 1 ? "1 day" : iv < 14 ? iv + " days" : iv < 60 ? Math.round(iv / 7) + " wk" : Math.round(iv / 30) + " mo";
function tideGrade(cid, g) {
  const t = TS(), c = t.c[cid]; if (!c) return null;
  Object.assign(c, schedule(c, g)); c.due = addDays(today(), c.iv);
  t.days = t.days || {}; const d = today(); t.days[d] = (t.days[d] || 0) + 1;
  const ks = Object.keys(t.days).sort(); while (ks.length > 120) delete t.days[ks.shift()];
  dueMemo.k = ""; bump(); save(); return c;
}

/* ---- the session: an in-memory queue, rebuilt each day */
let TQ = null;
function sessionStart() { const due = tideDue(); TQ = { day: today(), q: due.slice(), pos: 0, total: due.length, right: 0, again: 0, done: 0, reps: {}, cur: null, notes: {} }; }
function sessionMerge() {
  if (!TQ || TQ.day !== today()) return sessionStart();
  const uniq = new Set(TQ.q); if (uniq.size >= 20) return;
  tideDue().forEach(id => { if (!uniq.has(id) && uniq.size < 20) { uniq.add(id); TQ.q.push(id); TQ.total++; } });
}
function curCard() {
  const t = TS();
  while (TQ.pos < TQ.q.length) {
    const cid = TQ.q[TQ.pos], c = t.c[cid], R = c && resolve(cid, c);
    if (R) { if (!TQ.cur || TQ.cur.pos !== TQ.pos) TQ.cur = { pos: TQ.pos, cid, revealed: false, pick: null, grade: null }; return { cid, c, R }; }
    if (c) delete t.c[cid];
    TQ.pos++;
  }
  return null;
}
function advance() { TQ.pos++; TQ.cur = null; P.render(true); const st = $(".td-card"); if (st) { const r = st.getBoundingClientRect(); if (r.top < 60 || r.top > innerHeight * .6) window.scrollTo({ top: Math.max(0, r.top + scrollY - 90) }); } }
function graded(cid, g) {
  tideGrade(cid, g); TQ.done++;
  if (g === "again") { TQ.again++; TQ.reps[cid] = (TQ.reps[cid] || 0) + 1; if (TQ.reps[cid] <= 3) TQ.q.push(cid); }
  else if (!TQ.reps[cid]) TQ.right++;
}
ACT.tideReveal = () => { if (!TQ || !TQ.cur) return; const ta = $("#tdOwn"); if (ta) TQ.notes[TQ.cur.cid] = ta.value; TQ.cur.revealed = true; P.render(true); const g = $(".td-grades button"); if (g) try { g.focus({ preventScroll: true }); } catch (e) { } };
ACT.tideGrade = el => { if (!TQ || !TQ.cur || TQ.cur.grade) return; const g = el.dataset.g; TQ.cur.grade = g; graded(TQ.cur.cid, g); advance(); };
ACT.tidePick = el => {
  if (!TQ || !TQ.cur || TQ.cur.pick != null) return; const cc = curCard(); if (!cc) return;
  const j = +el.dataset.j, ok = j === cc.R.answer; TQ.cur.pick = j; TQ.cur.grade = ok ? "good" : "again";
  if (ok && cc.R.kind === "check") { try { const V = P.deckState(cc.R.island); V.quiz[cc.R.island][cc.R.k] = cc.R.answer; } catch (e) { } }
  graded(cc.cid, TQ.cur.grade); P.render(true);
  const w = $(".td-card .sl-why"); if (w) { const r = w.getBoundingClientRect(); if (r.bottom > innerHeight - 40) window.scrollBy({ top: r.bottom - innerHeight + 120, behavior: "smooth" }); }
};
ACT.tideNext = () => { if (TQ) advance(); };
ACT.tideMore = () => { sessionStart(); P.render(false); };
ACT.tideAdd = el => {
  const cid = el.dataset.cid; if (!cid) return;
  if (tideHas(cid)) { delete TS().c[cid]; save(); pinState(el, false); toast("Taken out of your Tide"); return; }
  tideAdd(cid, el.dataset.k, el.dataset.r); save(); pinState(el, true); toast("In your Tide · it comes up today");
};
ACT.tideAddMany = el => {
  const L = String(el.dataset.slugs || "").split(",").filter(Boolean); let n = 0;
  L.forEach(s => { if (tideAdd("term:" + s, "term", s)) n++; }); save();
  el.disabled = true; el.setAttribute("aria-pressed", "true"); el.innerHTML = "✓ " + plural(L.length, "word") + " in your Tide";
  toast(n ? plural(n, "word") + " added to your Tide" : "Already in your Tide");
};
function pinHTML(cid, k, r, extra) { const inT = tideHas(cid);
  return '<button type="button" class="td-pin' + (extra ? " " + extra : "") + '" data-act="tideAdd" data-cid="' + esc(cid) + '" data-k="' + esc(k) + '" data-r="' + esc(r) + '" aria-pressed="' + inT + '" title="' + (inT ? "In your Tide. Click to take it out." : "Add to your Tide for spaced review") + '">' + (inT ? "✓ In your Tide" : "＋ Tide") + "</button>"; }
function pinState(el, inT) { el.setAttribute("aria-pressed", String(inT)); el.textContent = inT ? "✓ In your Tide" : "＋ Tide"; el.title = inT ? "In your Tide. Click to take it out." : "Add to your Tide for spaced review"; }

/* ---- view */
const KIND = { check: "td-k-check", trial: "td-k-check", term: "td-k-term", idea: "td-k-idea", stand: "td-k-idea" };
function deckCounts() { const c = Object.values(TS().c); const n = k => c.filter(x => x.k === k).length; return { all: c.length, check: n("check") + n("trial"), term: n("term"), idea: n("idea") }; }
function deckLine() {
  const D = deckCounts(), nd = nextDue();
  if (!D.all) return "";
  const parts = [D.check && plural(D.check, "check"), D.term && plural(D.term, "word"), D.idea && plural(D.idea, "idea")].filter(Boolean);
  return '<p class="td-deck faint"><b>' + plural(D.all, "card") + "</b> in your Tide" + (parts.length ? " · " + parts.join(", ") : "") + (nd ? " · next tide " + esc(whenKey(nd.key)) : "") + "</p>";
}
function hero(eb, h1, lede, prog) {
  return '<section class="vy-hero vy-hero-sm td-hero"><div class="wrap stack" style="--g:10px"><a class="vy-back" href="#home">← Home</a><span class="eyebrow vy-eb">' + eb + "</span><h1>" + h1 + '</h1><p class="vy-lede">' + lede + "</p>" + (prog != null ? '<div class="td-prog" role="progressbar" aria-label="Session progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(prog * 100) + '"><i style="width:' + Math.round(prog * 100) + '%"></i></div>' : "") + "</div></section>";
}
function howTo() {
  return '<ul class="td-how"><li><b>Quick checks you miss</b> on an island, in a sea trial or in the Quiz join on their own.</li><li><b>Words:</b> press <span class="td-pin td-pin-demo">＋ Tide</span> on any dictionary entry, on a word’s pop-up inside a lesson, or on an island’s last card.</li><li>Each card comes back just before you would forget it: after a day, then three, then longer each time you remember it.</li></ul>';
}
function tideView() {
  ensureTide();
  P.after.push(() => { document.title = "The Tide · Philodyssey"; const v = $("#view"); if (v) v.classList.add("flush"); });
  sessionMerge();
  const cc = curCard();
  const missed = (() => { try { return P.missedAll().length; } catch (e) { return 0; } })();
  const allMissed = missed ? '<a class="cq-mono linkish-quiet" href="#tide-missed">See every missed check at once (' + missed + ")</a>" : "";
  let h = '<div class="voy td">';
  if (!cc) {
    const nd = nextDue(), D = deckCounts();
    if (TQ.done) {
      h += hero("The Tide · spaced review", "The tide is out", "You reviewed " + plural(TQ.total, "card") + ". " + (TQ.right ? TQ.right + " you knew first time" : "None first time, and that is what the Tide is for") + (TQ.again ? "; " + plural(TQ.again, "miss", "misses") + " came back round." : "."), 1);
      h += '<div class="wrap td-wrap"><div class="td-card td-end stack" style="--g:14px"><div class="td-endwave" aria-hidden="true">' + waveSVG() + '</div><h2>Well sailed.</h2><p class="muted">' + (nd ? "The next tide brings back " + plural(nd.n, "card") + " " + esc(whenKey(nd.key)) + "." : "Nothing is scheduled yet.") + "</p>" +
        (tideDue().length ? '<button class="btn primary" data-act="tideMore" style="align-self:flex-start">Review ' + tideDue().length + " more due today</button>" : "") +
        '<div class="row"><a class="btn" href="#home">Home</a><a class="btn ghost" href="#voyage">The Voyage</a><a class="btn ghost" href="#log">Captain’s log</a></div></div>' + deckLine() + allMissed + "</div>";
    } else {
      h += hero("The Tide · spaced review", "Calm seas. Nothing due.", D.all ? "Every card in your Tide is resting until its day comes round. " + (nd ? "The next tide brings back " + plural(nd.n, "card") + " " + esc(whenKey(nd.key)) + "." : "") : "The Tide brings back what you missed and the words you pinned, just before you would forget them.", null);
      h += '<div class="wrap td-wrap"><div class="td-card td-end stack" style="--g:14px"><div class="td-endwave" aria-hidden="true">' + waveSVG() + "</div><h2>" + (D.all ? plural(D.all, "card") + " in your deck" : "Your Tide is empty") + "</h2>" + howTo() +
        '<div class="row"><a class="btn primary" href="#voyage">Sail to an island</a><a class="btn ghost" href="#library">Open the dictionary</a><a class="btn ghost" href="#quiz">Play the Quiz</a></div></div>' + deckLine() + allMissed + "</div>";
    }
    return h + "</div>";
  }
  const uniqLeft = new Set(TQ.q.slice(TQ.pos)).size;
  h += hero("The Tide · spaced review", "The tide brings back " + plural(TQ.total, "card") + " today", uniqLeft === TQ.total ? "Answer, or say it to yourself, then grade how well you knew it. A card you miss comes back at the end of this session." : plural(uniqLeft, "card") + " left in this tide. A card you miss comes back at the end.", TQ.done / Math.max(1, TQ.done + (TQ.q.length - TQ.pos)));
  h += '<div class="wrap td-wrap">' + cardHTML(cc) + deckLine() + allMissed + "</div>";
  return h + "</div>";
}
function waveSVG() { return '<svg viewBox="0 0 120 28" width="120" height="28"><path d="M2 10q7-8 14 0t14 0 14 0 14 0 14 0 14 0 14 0 14 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M2 20q7-8 14 0t14 0 14 0 14 0 14 0 14 0 14 0 14 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".45"/></svg>'; }
function cardHTML({ cid, c, R }) {
  const cur = TQ.cur, n = TQ.done + 1, of = TQ.done + (TQ.q.length - TQ.pos);
  const meta = '<div class="td-meta"><span class="td-kind ' + KIND[R.kind] + '">' + esc(R.label) + "</span>" + (R.where ? '<span class="td-where">' + esc(R.where) + "</span>" : "") + (c.l ? '<span class="td-lapse" title="Times you have missed it">missed ' + c.l + "×</span>" : "") + '<span class="td-count cq-mono">' + n + " / " + of + "</span></div>";
  let b = "";
  if (R.type === "mc") {
    const pick = cur.pick, done = pick != null;
    b += '<p class="sl-q td-q">' + rich(R.q) + '</p><div class="sl-opts">' + optOrder("tide:" + cid + ":" + (c.n + c.l), R.options.length).map((j, k) =>
      '<button class="sl-opt' + (done && j === R.answer ? " right" : "") + (done && j === pick && pick !== R.answer ? " wrong" : "") + '" data-act="tidePick" data-j="' + j + '"' + (done ? " disabled" : "") + '><span class="sl-ol">' + "ABCDE"[k] + "</span>" + rich(R.options[j]) + "</button>").join("") + "</div>";
    if (done) {
      const ok = pick === R.answer, tc = TS().c[cid];
      b += '<p class="sl-why ' + (ok ? "ok" : "no") + '"><b>' + (ok ? (R.kind === "check" ? "Mended. " : "Right. ") + "Back " + (tc ? (tc.iv === 1 ? "tomorrow" : "in " + ivLabel(tc.iv)) : "later") + "." : "Not yet. It comes back before this tide is out.") + "</b> " + rich(R.why || "") + "</p>" +
        '<div class="td-after">' + (R.kind === "check" ? '<a class="linkish" href="#voyage-' + esc(R.island) + '" data-act="revGo" data-id="' + esc(R.island) + '" data-i="' + Math.max(0, R.k - 1) + '">Reread the slide</a>' : '<a class="linkish" href="' + esc(R.href) + '">Open the sea</a>') +
        '<button class="btn primary td-next" data-act="tideNext">' + (TQ.pos + 1 >= TQ.q.length ? "Finish" : "Next card →") + "</button></div>";
    } else b += '<p class="faint td-keys">Keys: A to ' + "ABCDE"[R.options.length - 1] + "</p>";
  } else {
    if (R.kind === "term") b += '<h2 class="td-term">' + esc(R.g.term) + "</h2>" + (R.g.etym ? '<p class="td-etym">' + esc(R.g.etym) + "</p>" : "");
    else if (R.kind === "idea") b += '<p class="td-prompt faint">Whose idea is this?</p><p class="td-idea">' + esc(R.idea) + "</p>";
    else b += '<p class="td-prompt faint">' + esc((P.SHORT || {})[R.q] || "") + '</p><p class="td-idea">Who holds this view: <b>' + esc(R.view) + '</b>?</p><p class="muted td-qtext">' + rich(R.Q.text) + "</p>";
    const note = TQ.notes[cid] || "";
    if (!cur.revealed) {
      b += '<label class="td-own"><span>' + (R.kind === "term" ? "Say it in your own words" : "Your answer") + ' <i>(optional, never saved)</i></span><textarea id="tdOwn" rows="2" placeholder="' + (R.kind === "term" ? "It means…" : "I think it was…") + '">' + esc(note) + "</textarea></label>" +
        '<div class="td-after"><span class="faint td-keys">Space to show</span><button class="btn primary td-show" data-act="tideReveal">' + (R.kind === "term" ? "Show the meaning" : "Show the answer") + "</button></div>";
    } else {
      b += '<div class="td-back">';
      if (R.kind === "term") b += '<p class="td-def">' + esc(R.g.def) + "</p>" + (R.g.example ? '<p class="td-eg"><b>Example.</b> ' + esc(R.g.example) + "</p>" : "") + '<a class="cq-mono linkish-quiet" href="#dictionary-' + esc(R.slug) + '">In the dictionary →</a>';
      else { const t = P.TH[R.who]; b += '<p class="td-who">' + esc(P.nameOf(R.who)) + (t && P.life && P.life(t) ? ' <span class="faint">' + esc(P.life(t)) + "</span>" : "") + "</p>";
        if (R.kind === "idea") b += R.explain ? "<p>" + esc(R.explain) + "</p>" : "";
        else { const pos = t && t.positions && t.positions[R.q]; b += pos && pos.src ? '<p class="faint" style="font-size:.86rem">Source: ' + esc(pos.src) + "</p>" : ""; }
        b += '<a class="cq-mono linkish-quiet" href="#thinker-' + esc(R.who) + '">Their page →</a>'; }
      if (note.trim()) b += '<p class="td-yours"><span class="cq-mono">You wrote</span>' + esc(note) + "</p>";
      b += "</div>";
      b += '<p class="td-ask">How well did you know it?</p><div class="td-grades" role="group" aria-label="Grade your answer">' +
        [["again", "Again", 1], ["hard", "Hard", 2], ["good", "Good", 3], ["easy", "Easy", 4]].map(([g, l, k]) => { const s = schedule(c, g);
          return '<button class="td-g td-g-' + g + '" data-act="tideGrade" data-g="' + g + '"><b>' + l + "</b><small>" + (g === "again" ? "this tide" : ivLabel(s.iv)) + '</small><kbd aria-hidden="true">' + k + "</kbd></button>"; }).join("") + "</div>";
    }
  }
  return '<article class="td-card" data-cid="' + esc(cid) + '">' + meta + b + "</article>";
}
document.addEventListener("input", e => { if (e.target && e.target.id === "tdOwn" && TQ && TQ.cur) TQ.notes[TQ.cur.cid] = e.target.value; });
document.addEventListener("keydown", e => {
  if (!$(".td-card") || e.metaKey || e.ctrlKey || e.altKey || !TQ || !TQ.cur) return;
  if ($("#drawer") && $("#drawer").classList.contains("open")) return;
  if (e.target.closest && e.target.closest("textarea,input,select")) { if (e.key === "Enter" && e.target.id === "tdOwn" && !e.shiftKey) { e.preventDefault(); ACT.tideReveal(); } return; }
  const k = e.key;
  if ($(".td-grades")) { const m = { "1": "again", "2": "hard", "3": "good", "4": "easy" }[k]; if (m) { e.preventDefault(); ACT.tideGrade({ dataset: { g: m } }); } return; }
  if ($(".td-show") && (k === " " || k === "Enter")) { if (e.target.closest("a,button") && k === "Enter") return; e.preventDefault(); ACT.tideReveal(); return; }
  if ($(".td-next") && (k === "Enter" || k === "ArrowRight") && !(e.target.closest && e.target.closest("a,button"))) { e.preventDefault(); ACT.tideNext(); return; }
  if (/^[a-eA-E1-5]$/.test(k)) { const n = /\d/.test(k) ? +k - 1 : k.toLowerCase().charCodeAt(0) - 97; const b = $$(".td-card .sl-opt:not([disabled])")[n]; if (b) { e.preventDefault(); b.click(); } }
});

/* ---- automatic cards: wrap the app's answer actions (the original runs first, unchanged) */
function wrapAct(name, fn) { const o = ACT[name]; if (typeof o !== "function") return; ACT[name] = function (el, ev) { return fn(o, el, ev); }; }
let missToast = 0;
function missed(cid, k, r) { if (tideAdd(cid, k, r)) { save(); if (Date.now() - missToast > 8000) { missToast = Date.now(); setTimeout(() => toast("Missed one. The Tide will bring it back."), 900); } } }
wrapAct("dkAnswer", (o, el, ev) => {
  const id = el && el.dataset && el.dataset.id, i = +(el && el.dataset && el.dataset.i);
  let before = null; try { const V = P.voyState(); before = V.quiz && V.quiz[id] ? V.quiz[id][i] : null; } catch (e) { }
  const out = o(el, ev);
  try { const I = VOY().islands[id]; if (I && !I.sem && before == null) { const s = P.deckSlides(I)[i], pick = P.voyState().quiz[id][i];
    if (s && s.t === "quiz" && pick != null && pick !== s.answer) missed("check:" + id + ":" + i, "check", id + ":" + i); } } catch (e) { console.error(e); }
  return out;
});
wrapAct("voyTrial", (o, el, ev) => {
  const k = el.dataset.k, i = +el.dataset.i; let before = null; try { const T = P.voyState().trial[k]; before = T ? T[i] : null; } catch (e) { }
  const out = o(el, ev);
  try { const T = trialQs(k), q = T && T.qs[i], pick = (P.voyState().trial[k] || {})[i]; if (q && before == null && pick != null && pick !== q.answer) missed("trial:" + k + ":" + i, "trial", k + ":" + i); } catch (e) { console.error(e); }
  return out;
});
wrapAct("quizPick", (o, el, ev) => {
  let it = null; try { const Q = P.QZ; if (Q && !Q.picked) it = Q.items[Q.i]; } catch (e) { }
  const out = o(el, ev);
  try { if (it && it.got === false && it.answer) {
    if (it.kind === "stand" && it.q) missed("idea:s:" + it.q + ":" + it.a, "idea", "s:" + it.q + ":" + it.a + ":" + it.answer);
    else if (it.idea) { const h = hash(String(it.idea)); missed("idea:" + it.answer + ":" + h, "idea", "c:" + h + ":" + it.answer); } } } catch (e) { console.error(e); }
  return out;
});

/* ---- routes */
const _voy = VIEWS.voyage;
if (typeof _voy === "function") VIEWS.voyage = arg => { if (arg === "review") { try { history.replaceState(null, "", "#tide"); } catch (e) { } return tideView(); } return _voy(arg); };
VIEWS.tide = arg => {
  if (arg === "missed" && typeof _voy === "function") { P.after.push(() => { document.title = "Missed checks · Philodyssey"; const v = $("#view"); if (v) v.classList.add("flush"); const b = $("#view .vy-back"); if (b) { b.setAttribute("href", "#tide"); b.textContent = "← The Tide"; } }); return _voy("review"); }
  return tideView();
};
try { Object.assign(P.ROUTE_ALIAS, { review: "tide", progress: "log", captain: "log", captains: "log" }); } catch (e) { }

/* ============================================================ CAPTAIN'S LOG */
// activity: one tick per action you take (a data-act click), counted per local day
const QUIET = new Set(["closeDrawer", "navLib", "account", "closeModal", "theme", "tideGrade", "tidePick"]);
function ensureAct() {
  const s = S(); if (!s.act || typeof s.act !== "object") s.act = {};
  if (s.actV !== 1) { // one-time backfill from the timestamps the app already keeps
    const mark = t => { if (typeof t === "number" && t > 1e12) { const k = fmtKey(new Date(t)); s.act[k] = s.act[k] || 1; } };
    try { const V = P.voyState(); Object.values(V.seen || {}).forEach(mark); } catch (e) { }
    Object.values(s.semDone || {}).forEach(mark); Object.values(s.semSeen || {}).forEach(mark); Object.values(s.eras || {}).forEach(mark);
    Object.keys(s.daily || {}).forEach(k => { if (/^\d{4}-\d\d-\d\d$/.test(k)) s.act[k] = s.act[k] || 1; });
    Object.keys((s.tide && s.tide.days) || {}).forEach(k => { s.act[k] = s.act[k] || 1; });
    s.actV = 1; save();
  }
  const d = today();
  if (s.actPruned !== d) { const cut = addDays(d, -120); Object.keys(s.act).forEach(k => { if (k < cut) delete s.act[k]; }); s.actPruned = d; }
  return s.act;
}
let bumpT = null;
function bump() { try { const A = ensureAct(), k = today(); A[k] = Math.min(999, (A[k] || 0) + 1); } catch (e) { } }
document.addEventListener("click", e => {
  const el = e.target.closest && e.target.closest("[data-act]"); if (!el || QUIET.has(el.dataset.act)) return;
  bump(); clearTimeout(bumpT); bumpT = setTimeout(save, 1200); // the app's own save() usually lands first and carries it
}, true);

const LABK = P.LABK || ["odyssey", "gauntlet", "pd", "veil", "heap", "ship", "machine", "trolley", "drop", "myths", "marys"];
function progressStats() {
  const s = S(), V = VOY(), C = opt("C", { sections: [] }), AG = opt("AG", { questions: [] });
  const safe = (f, d) => { try { return f(); } catch (e) { return d; } };
  return {
    islands: { n: Object.keys((P.voyState().done) || {}).length, of: Object.keys(V.islands).length, href: "#voyage", t: "Islands charted" },
    chapters: { n: safe(() => C.sections.filter(x => P.secDone(x.id)).length, 0), of: C.sections.length, href: "#compass", t: "Compass chapters" },
    debates: { n: safe(() => AG.questions.filter(q => P.agStarted(q.id)).length, 0), of: AG.questions.length, href: "#agora", t: "Debates started" },
    games: { n: LABK.filter(k => s.lab && s.lab[k] && s.lab[k].done).length, of: LABK.length, href: "#lab", t: "Games played" },
    quiz: { n: ((s.quiz && s.quiz.rounds) || 0) + Object.keys((s.quiz && s.quiz.daily) || {}).length, of: null, href: "#quiz", t: "Quiz rounds", sub: s.quiz && s.quiz.best ? "best " + s.quiz.best + " of 10" : "" },
    stars: { n: safe(() => P.chartedStars().size, 0), of: safe(() => P.skyStarTotal(), null), href: "#firmament", t: "Stars charted" },
    answered: safe(() => P.answeredCount(), 0)
  };
}
window.progressStats = progressStats;
function streaks(A) {
  const d = today(); let cur = 0, k = A[d] ? d : addDays(d, -1);
  while (A[k]) { cur++; k = addDays(k, -1); }
  const keys = Object.keys(A).filter(x => A[x] > 0).sort(); let best = 0, run = 0, prev = null;
  keys.forEach(x => { run = prev && dayDiff(prev, x) === 1 ? run + 1 : 1; best = Math.max(best, run); prev = x; });
  return { cur, best: Math.max(best, cur) };
}
const lvl = n => !n ? 0 : n <= 3 ? 1 : n <= 9 ? 2 : n <= 24 ? 3 : 4;
function heatHTML(A) {
  const d0 = keyDate(today()), dow = (d0.getDay() + 6) % 7; // Monday = 0
  const start = new Date(d0); start.setDate(start.getDate() - dow - 7 * 11);
  let cells = "", months = "", rows = "", active = 0, total = 0, lastM = -1;
  for (let w = 0; w < 12; w++) {
    let wk = 0;
    for (let r = 0; r < 7; r++) {
      const dt = new Date(start); dt.setDate(start.getDate() + w * 7 + r); const k = fmtKey(dt), fut = dt > d0, n = A[k] || 0;
      if (r === 0 && dt.getMonth() !== lastM) { if (w === 0 || dt.getDate() <= 7) months += '<span style="grid-column:' + (w + 2) + '">' + dt.toLocaleDateString("en-GB", { month: "short" }) + "</span>"; lastM = dt.getMonth(); }
      if (!fut) { total++; if (n) { active++; wk += n; } }
      cells += '<i class="lg-c l' + (fut ? "x" : lvl(n)) + (k === today() ? " now" : "") + '" style="grid-column:' + (w + 2) + ";grid-row:" + (r + 2) + '"' + (fut ? ' aria-hidden="true"' : ' role="img" aria-label="' + esc(dShort(dt) + ": " + (n ? plural(n, "action") : "no activity")) + '" title="' + esc(dShort(dt) + " · " + (n ? plural(n, "action") : "quiet")) + '"') + "></i>";
    }
    const ws = new Date(start); ws.setDate(start.getDate() + w * 7);
    rows += "<tr><th scope=\"row\">Week of " + esc(dShort(ws)) + "</th><td>" + wk + "</td></tr>";
  }
  const lab = ["Mon", "", "Wed", "", "Fri", "", "Sun"].map((t, r) => '<b style="grid-row:' + (r + 2) + '">' + t + "</b>").join("");
  return { html: '<div class="lg-heat" aria-label="Activity over the last twelve weeks">' + months + lab + cells + '</div><table class="lg-sr"><caption>Actions per week, last twelve weeks</caption><tbody>' + rows + "</tbody></table>", active, total };
}
function recent() {
  const s = S(), V = VOY(), ev = [];
  try { const Vs = P.voyState(); Object.entries(Vs.seen || {}).forEach(([id, t]) => { const I = V.islands[id]; if (I && t) ev.push({ t, txt: (P.islDone(id) ? "Charted " : "Landed on ") + I.name, href: "#voyage-" + id }); }); } catch (e) { }
  Object.entries(s.semDone || {}).forEach(([id, t]) => { let nm = id; try { const D = P.DK(id); nm = (D && (D.title || D.name)) || id; } catch (e) { } if (t) ev.push({ t, txt: "Held the seminar “" + nm + "”", href: "#seminar-" + String(id).replace(/^sem_/, "") }); });
  Object.entries(s.eras || {}).forEach(([id, t]) => { const e = (LIB().eras || []).find(x => x.id === id); if (t && e) ev.push({ t, txt: "Walked the era: " + (e.name || e.title || id), href: "#stoa" }); });
  Object.keys(s.daily || {}).forEach(k => { if (/^\d{4}-\d\d-\d\d$/.test(k)) ev.push({ t: keyDate(k).getTime() + 12 * 36e5, txt: "Answered the question of the day", href: "#home" }); });
  Object.entries((s.tide && s.tide.days) || {}).forEach(([k, n]) => ev.push({ t: keyDate(k).getTime() + 20 * 36e5, txt: "Reviewed " + plural(n, "card") + " on the Tide", href: "#tide" }));
  return ev.sort((a, b) => b.t - a.t).slice(0, 10);
}
function logView() {
  P.after.push(() => { document.title = "Captain’s log · Philodyssey"; });
  const A = ensureAct(), st = progressStats(), H = heatHTML(A), sk = streaks(A), D = deckCounts(), due = tideDue().length;
  const tiles = ["islands", "chapters", "debates", "games", "quiz", "stars"].map(k => { const x = st[k];
    return '<a class="lg-tile" href="' + x.href + '"><span class="lg-n">' + (x.n ? x.n : "—") + "</span><span class=\"lg-t\">" + esc(x.t) + '</span><span class="lg-of faint">' + (x.of ? "of " + x.of : esc(x.sub || "")) + "</span></a>"; }).join("");
  const fresh = !Object.keys(A).length && !st.islands.n && !st.answered;
  let h = '<div class="wrap"><div class="lg stack" style="--g:34px">';
  h += '<header class="lg-head"><div class="stack" style="--g:6px"><span class="eyebrow">Captain’s log</span><h1>Everything you have charted</h1><p class="muted read" style="margin:0">Your voyage so far, from the first island to the last quiz round. Kept in this browser' + (opt("CAP", {}).uid ? " and your account" : "") + ".</p></div>" +
    '<div class="row lg-acts"><a class="btn primary" href="#tide">' + (due ? "Review " + plural(due, "card") : "Open the Tide") + "</a>" + (st.answered >= 4 ? '<button class="btn" data-act="shareCard" data-kind="compass">Share your card</button>' : '<a class="btn" href="#quick-start">Take the Quick Compass</a>') + "</div></header>";
  if (fresh) h += '<div class="panel lg-fresh row" style="justify-content:space-between"><div class="stack" style="--g:4px"><b>The log is blank. Every voyage starts that way.</b><span class="muted">Land on the first island and the first line goes in.</span></div><a class="btn primary" href="#voyage">Set sail</a></div>';
  h += '<section class="stack" style="--g:12px" aria-labelledby="lgB"><h2 id="lgB">Bearings</h2><div class="lg-tiles">' + tiles + "</div></section>";
  h += '<section class="stack" style="--g:12px" aria-labelledby="lgW"><h2 id="lgW">Twelve weeks at sea</h2><div class="lg-heatwrap"><div class="lg-heatbox">' + H.html +
    '<div class="lg-key faint" aria-hidden="true">Quiet <i class="lg-c l0"></i><i class="lg-c l1"></i><i class="lg-c l2"></i><i class="lg-c l3"></i><i class="lg-c l4"></i> Busy</div></div>' +
    '<dl class="lg-streak"><div><dt>Current streak</dt><dd>' + (sk.cur ? plural(sk.cur, "day") : "—") + "</dd></div><div><dt>Longest streak</dt><dd>" + (sk.best ? plural(sk.best, "day") : "—") + "</dd></div><div><dt>Days at sea</dt><dd>" + H.active + ' <span class="faint">of ' + H.total + "</span></dd></div><div><dt>Today</dt><dd>" + (A[today()] ? plural(A[today()], "action") : "—") + "</dd></div></dl></div></section>";
  const V = VOY();
  h += '<section class="stack" style="--g:12px" aria-labelledby="lgS"><h2 id="lgS">The seas</h2><ol class="lg-seas">' + V.units.map(u => { const isl = P.islandsOf(u), dn = isl.filter(i => P.islDone(i.id)).length, full = isl.length && dn === isl.length;
    return '<li class="lg-sea' + (full ? " full" : "") + '"><span class="lg-num">' + ROMAN(u.id) + '</span><span class="lg-st"><a href="#voyage-u' + u.id + '">' + esc(u.title) + '</a><span class="vy-bar" role="img" aria-label="' + dn + " of " + isl.length + ' islands"><i style="width:' + (isl.length ? Math.round(100 * dn / isl.length) : 0) + '%"></i></span></span><span class="lg-cnt cq-mono">' + dn + "/" + isl.length + "</span>" +
      (full ? '<button class="td-pin lg-cert" data-act="shareCard" data-kind="sea" data-u="' + u.id + '">Certificate</button>' : "") + "</li>"; }).join("") + "</ol></section>";
  const R = recent();
  h += '<div class="lg-two"><section class="stack" style="--g:12px" aria-labelledby="lgR"><h2 id="lgR">Recent entries</h2>' + (R.length ? '<ol class="lg-recent">' + R.map(e => '<li><time class="cq-mono" datetime="' + fmtKey(new Date(e.t)) + '">' + esc(dShort(new Date(e.t))) + '</time><a href="' + esc(e.href) + '">' + esc(e.txt) + "</a></li>").join("") + "</ol>" : '<p class="muted">Nothing written yet. Islands you open, seminars you finish, eras you walk and Tides you review appear here.</p>') + "</section>" +
    '<section class="stack" style="--g:12px" aria-labelledby="lgT"><h2 id="lgT">The Tide</h2><div class="panel stack lg-tide" style="--g:8px"><div class="row" style="justify-content:space-between"><b>' + (due ? plural(due, "card") + " due today" : "Calm seas") + '</b><a class="cq-mono linkish-quiet" href="#tide">Open →</a></div><p class="muted" style="margin:0">' + (D.all ? plural(D.all, "card") + " in your deck: " + [D.check && plural(D.check, "check"), D.term && plural(D.term, "word"), D.idea && plural(D.idea, "idea")].filter(Boolean).join(", ") + "." : "No cards yet. Missed checks and pinned words land here.") + "</p></div></section></div>";
  try { const S2 = P.sealsNow();
    h += '<section class="stack" style="--g:12px" aria-labelledby="lgSe"><div class="row" style="justify-content:space-between"><h2 id="lgSe">Seals</h2><span class="faint">' + S2.filter(s => s.on).length + " of " + S2.length + ' earned</span></div><div class="seals">' + S2.map(s => '<div class="seal' + (s.on ? " on" : "") + '">' + P.sealSVG(s.on, s.k) + "<div><b>" + esc(s.n) + '</b><div style="font-size:.78rem">' + esc(s.d) + "</div></div></div>").join("") + "</div></section>"; } catch (e) { }
  return h + "</div></div>";
}
VIEWS.log = logView;

/* ============================================================== SHARE CARD */
const CARD_INK = { night: "#15203A", deep: "#0B1328", night2: "#1D2B4A", gold: "#E8B04A", goldHi: "#F4D58D", ink: "#EDE6D2", mute: "#AEB4C4", faint: "#7F879E", crack: "#EE7562", star: "#F4E3B5" };
const F_D = "Fraunces, 'Iowan Old Style', Georgia, serif", F_U = "'IBM Plex Sans', 'Segoe UI', system-ui, sans-serif";
let CARD = null;
function lines(g, text, maxW) { const out = []; let line = ""; String(text).split(/\s+/).forEach(w => { const t = line ? line + " " + w : w; if (g.measureText(t).width > maxW && line) { out.push(line); line = w; } else line = t; }); if (line) out.push(line); return out; }
function clampLines(g, text, maxW, n) { const L = lines(g, text, maxW); if (L.length <= n) return L; const out = L.slice(0, n); let last = out[n - 1]; while (last && g.measureText(last + "…").width > maxW) last = last.replace(/\s*\S+$/, ""); out[n - 1] = last.replace(/[\s,;·:]+$/, "") + "…"; return out; }
function fit(g, text, maxW, size, font, min) { let s = size; do { g.font = font.replace("@", s + "px"); if (g.measureText(text).width <= maxW) break; s -= 2; } while (s > (min || 14)); return s; }
function spaced(g, px) { try { g.letterSpacing = px + "px"; } catch (e) { } }
function sky(g, W, H, seed) {
  const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, CARD_INK.night2); gr.addColorStop(.45, CARD_INK.night); gr.addColorStop(1, CARD_INK.deep); g.fillStyle = gr; g.fillRect(0, 0, W, H);
  const rg = g.createRadialGradient(W * .82, H * .08, 10, W * .82, H * .08, W * .9); rg.addColorStop(0, "rgba(232,176,74,.16)"); rg.addColorStop(1, "rgba(232,176,74,0)"); g.fillStyle = rg; g.fillRect(0, 0, W, H);
  const R = rng(seed);
  for (let i = 0; i < 380; i++) { g.globalAlpha = .15 + R() * .55; g.fillStyle = R() < .12 ? CARD_INK.gold : CARD_INK.star; g.beginPath(); g.arc(R() * W, R() * H, R() < .9 ? R() * 1.5 + .3 : R() * 2.6 + 1, 0, 7); g.fill(); }
  g.globalAlpha = 1;
}
function frame(g, W, H, inset) { g.strokeStyle = "rgba(232,176,74,.55)"; g.lineWidth = 2; g.strokeRect(inset, inset, W - 2 * inset, H - 2 * inset); g.strokeStyle = "rgba(232,176,74,.22)"; g.lineWidth = 1; g.strokeRect(inset + 12, inset + 12, W - 2 * inset - 24, H - 2 * inset - 24); }
function brand(g, x, y, align) { g.textAlign = align || "left"; g.fillStyle = CARD_INK.gold; g.font = "600 26px " + F_U; spaced(g, 8); g.fillText("PHILODYSSEY", x, y); spaced(g, 0); g.textAlign = "left"; }
function footerText(lead) { const h = location.protocol.startsWith("http") ? location.host : ""; const ok = h && !/claude|anthropic|usercontent|localhost|127\.0\.0\.1|^\[|^0\.0/.test(h); return lead + " · Philodyssey" + (ok ? " · " + h : ""); }
function drawCompassCard(g) {
  const W = 1080, H = 1350, s = S();
  sky(g, W, H, hash(JSON.stringify(s.answers || {})) || 7); frame(g, W, H, 34);
  brand(g, 80, 118);
  g.fillStyle = CARD_INK.ink; g.font = "400 76px " + F_D; g.fillText("Where I stand", 80, 206);
  let M = []; try { M = P.matches() || []; } catch (e) { }
  const top = M.slice(0, 3);
  const pts = top.map((m, i) => ({ m, x: top.length === 1 ? W / 2 : 200 + i * (680 / Math.max(1, top.length - 1)), y: 352 + (i % 2 ? 56 : -8) }));
  if (pts.length > 1) { g.strokeStyle = CARD_INK.gold; g.globalAlpha = .7; g.lineWidth = 2; g.beginPath(); pts.forEach((p, i) => i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)); g.stroke(); g.globalAlpha = 1; }
  pts.forEach((p, i) => {
    g.fillStyle = "rgba(232,176,74,.16)"; g.beginPath(); g.arc(p.x, p.y, 38, 0, 7); g.fill(); g.fillStyle = "#F6E7BD"; g.beginPath(); g.arc(p.x, p.y, i ? 10 : 14, 0, 7); g.fill();
    g.textAlign = "center"; g.fillStyle = CARD_INK.ink; fit(g, p.m.t.name, 300, 36, "400 @ " + F_D, 22); g.fillText(p.m.t.name, p.x, p.y + 78);
    g.fillStyle = CARD_INK.gold; g.font = "600 30px " + F_U; g.fillText(p.m.pct + "% alike", p.x, p.y + 118); g.textAlign = "left";
  });
  if (!top.length) { g.fillStyle = CARD_INK.mute; g.font = "400 34px " + F_D; g.fillText("My philosophers are still to be found.", 80, 380); }
  let y = 630;
  g.fillStyle = CARD_INK.faint; g.font = "600 22px " + F_U; spaced(g, 5); g.fillText("MY STANCES", 80, y); spaced(g, 0); y += 54;
  let qs = []; try { const pref = ["e4", "e5", "m1", "m3", "m4", "k9"].filter(q => P.deepest(q)); qs = pref.length >= 3 ? pref : pref.concat((P.ROOTS || []).filter(q => !pref.includes(q) && P.deepest(q))); } catch (e) { }
  qs = qs.slice(0, 5);
  if (!qs.length) { g.fillStyle = CARD_INK.mute; g.font = "400 32px " + F_U; g.fillText("Still at the harbour. The Compass awaits.", 80, y); }
  for (const q of qs) {
    const d = P.deepest(q); if (!d) continue; const L = (g.font = "400 38px " + F_D, clampLines(g, d.label || d.text || "", W - 160, 2));
    if (y + 30 + L.length * 46 > H - 190) break;
    g.fillStyle = CARD_INK.faint; g.font = "400 24px " + F_U; g.fillText(String((P.SHORT || {})[q] || "").slice(0, 70), 80, y);
    g.fillStyle = CARD_INK.ink; g.font = "400 38px " + F_D; L.forEach((l, i) => g.fillText(l, 80, y + 48 + i * 46)); y += 48 + L.length * 46 + 26;
  }
  let open = 0; try { open = P.allTensions().filter(t => !(s.resolutions || {})[t.key]).length; } catch (e) { }
  g.fillStyle = CARD_INK.crack; g.font = "600 30px " + F_U; g.fillText(open ? open + " crack" + (open > 1 ? "s" : "") + " in my worldview. Can you find yours?" : "No cracks in my worldview. Can you say the same?", 80, H - 128);
  g.fillStyle = CARD_INK.mute; g.font = "400 24px " + F_U; g.fillText(footerText("Take the Compass"), 80, H - 78);
}
function drawSeaCard(g, u) {
  const W = 1080, H = 1350, isl = P.islandsOf(u), cx = W / 2;
  sky(g, W, H, 991 + u.id * 31); frame(g, W, H, 40);
  g.textAlign = "center"; brand(g, cx, 132, "center"); g.textAlign = "center";
  g.fillStyle = CARD_INK.mute; g.font = "600 20px " + F_U; spaced(g, 6); g.fillText("CERTIFICATE OF PASSAGE", cx, 174); spaced(g, 0);
  g.fillStyle = CARD_INK.gold; g.font = "400 210px " + F_D; g.fillText(ROMAN(u.id), cx, 410);
  g.fillStyle = CARD_INK.ink; let y = 500; g.font = "400 62px " + F_D; clampLines(g, u.title, W - 220, 2).forEach(l => { g.fillText(l, cx, y); y += 70; });
  if (u.sub) { g.fillStyle = CARD_INK.mute; g.font = "italic 400 30px " + F_D; clampLines(g, u.sub, W - 260, 3).forEach(l => { g.fillText(l, cx, y); y += 40; }); }
  y += 26; g.fillStyle = CARD_INK.gold; g.font = "400 30px " + F_D; g.fillText("✦", cx, y); g.strokeStyle = "rgba(232,176,74,.5)"; g.lineWidth = 1.5; g.beginPath(); g.moveTo(cx - 220, y - 10); g.lineTo(cx - 34, y - 10); g.moveTo(cx + 34, y - 10); g.lineTo(cx + 220, y - 10); g.stroke();
  y += 62; g.fillStyle = CARD_INK.faint; g.font = "600 21px " + F_U; spaced(g, 5); g.fillText("ISLANDS CHARTED", cx, y); spaced(g, 0); y += 54;
  const names = isl.map(i => i.name), two = names.length > 5, rows = two ? Math.ceil(names.length / 2) : names.length, lh = Math.min(50, Math.floor(330 / Math.max(1, rows)));
  g.fillStyle = CARD_INK.ink;
  names.forEach((n, i) => { const col = two ? (i < rows ? 0 : 1) : 0, r = two ? i % rows : i, x = two ? (col ? cx + 230 : cx - 230) : cx;
    fit(g, n, two ? 420 : 760, 34, "400 @ " + F_D, 20); g.fillText(n, x, y + r * lh); });
  y += rows * lh + 30;
  let n = 0, ok = 0; isl.forEach(i => { try { const sc = P.deckScore(i); n += sc.n; ok += sc.ok; } catch (e) { } });
  g.fillStyle = CARD_INK.gold; g.font = "600 30px " + F_U; g.fillText(n ? "Quick checks: " + ok + " of " + n + " right · " + Math.round(100 * ok / n) + "%" : "Every island charted", cx, Math.min(y, H - 200));
  // a brass seal fills the space above the date when the island list is short
  const top = Math.min(y, H - 200) + 24, bot = H - 196, sr = Math.min(66, (bot - top - 24) / 2 - 10), sy = Math.round((top + bot) / 2);
  if (sr >= 36) {
    const k = sr / 66; g.save(); g.translate(cx, sy); g.scale(k, k); g.strokeStyle = CARD_INK.gold; g.fillStyle = "rgba(232,176,74,.10)";
    g.lineWidth = 3; g.beginPath(); g.arc(0, 0, 66, 0, 7); g.fill(); g.stroke();
    g.lineWidth = 1.2; g.setLineDash([3, 5]); g.beginPath(); g.arc(0, 0, 56, 0, 7); g.stroke(); g.setLineDash([]);
    for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8; g.beginPath(); g.moveTo(Math.cos(a) * 68, Math.sin(a) * 68); g.lineTo(Math.cos(a) * 76, Math.sin(a) * 76); g.stroke(); }
    g.fillStyle = CARD_INK.gold; g.font = "400 46px " + F_D; g.textBaseline = "middle"; g.fillText(ROMAN(u.id), 0, 2); g.textBaseline = "alphabetic"; g.restore();
  }
  g.fillStyle = CARD_INK.ink; g.font = "italic 400 30px " + F_D; g.fillText("Charted " + dLong(new Date()), cx, H - 140);
  g.fillStyle = CARD_INK.mute; g.font = "400 22px " + F_U; g.fillText(footerText("Sail it yourself"), cx, H - 86);
  g.textAlign = "left";
}
async function fontsReady() {
  const load = f => document.fonts && document.fonts.load ? document.fonts.load(f).catch(() => null) : null;
  const all = Promise.all([load("400 76px Fraunces"), load("italic 400 30px Fraunces"), load("600 26px 'IBM Plex Sans'"), load("400 24px 'IBM Plex Sans'")]).then(() => document.fonts.ready);
  try { await Promise.race([all, new Promise(r => setTimeout(r, 2500))]); } catch (e) { }
}
ACT.shareCard = async el => {
  const ds = (el && el.dataset) || {}, kind = ds.kind === "sea" ? "sea" : "compass";
  const u = kind === "sea" ? VOY().units.find(x => x.id === +ds.u) : null; if (kind === "sea" && !u) return;
  if (el && el.setAttribute) el.setAttribute("aria-busy", "true");
  await fontsReady();
  const cv = document.createElement("canvas"); cv.width = 1080; cv.height = 1350; const g = cv.getContext("2d");
  try { kind === "sea" ? drawSeaCard(g, u) : drawCompassCard(g); } catch (e) { console.error(e); toast("The card could not be drawn here."); return; }
  const url = cv.toDataURL("image/png");
  const name = kind === "sea" ? "philodyssey-sea-" + ROMAN(u.id).toLowerCase() + "-certificate.png" : "philodyssey-card.png";
  let blob = null; try { blob = await new Promise(res => cv.toBlob(b => res(b), "image/png")); } catch (e) { }
  if (CARD && CARD.href) try { URL.revokeObjectURL(CARD.href); } catch (e) { }
  const file = blob && typeof File === "function" ? new File([blob], name, { type: "image/png" }) : null;
  CARD = { blob, file, name, url, href: blob ? URL.createObjectURL(blob) : url, title: kind === "sea" ? "Sea " + ROMAN(u.id) + " · " + u.title : "Where I stand" };
  if (el && el.removeAttribute) el.removeAttribute("aria-busy");
  let canShare = false; try { canShare = !!(file && navigator.canShare && navigator.canShare({ files: [file] })); } catch (e) { }
  const canCopy = !!(blob && navigator.clipboard && navigator.clipboard.write && typeof window.ClipboardItem === "function");
  const CAP = opt("CAP", {});
  const saveBtn = CAP && CAP.downloads ? '<button class="btn' + (canShare ? "" : " primary") + '" data-act="saveCard">Save image</button>' : '<a class="btn' + (canShare ? "" : " primary") + '" href="' + CARD.href + '" download="' + esc(name) + '">Save image</a>';
  try {
    P.openDrawer('<div class="sc stack" style="--g:14px"><span class="eyebrow">' + (kind === "sea" ? "Your certificate" : "Share card") + "</span><h2>" + (kind === "sea" ? "Sea " + ROMAN(u.id) + ": " + esc(u.title) : "Your Philodyssey card") + "</h2>" +
      '<img class="sc-img" src="' + url + '" alt="' + esc(kind === "sea" ? "Certificate for Sea " + ROMAN(u.id) + ", " + u.title + ", listing the islands you charted" : "Your Philodyssey card: your closest thinkers and your stances") + '" width="1080" height="1350">' +
      '<div class="row sc-acts">' + (canShare ? '<button class="btn primary" data-act="scShare">Share…</button>' : "") + saveBtn + (canCopy ? '<button class="btn ghost" data-act="scCopy">Copy image</button>' : "") + "</div>" +
      '<p class="faint sc-hint">If saving is blocked here, press and hold the image (or right-click it) and choose “Save image”.</p>' +
      '<p class="faint sc-hint">' + (kind === "sea" ? "The card shows the sea, its islands, your quick-check score and today’s date." : "Only your closest thinkers, your stances and your crack count are on the card. Nothing you typed is.") + "</p></div>");
  } catch (e) { console.error(e); }
};
ACT.scShare = () => { if (!CARD || !CARD.file || !navigator.share) return;
  navigator.share({ files: [CARD.file], title: "Philodyssey", text: CARD.title + " · Philodyssey" }).catch(e => { if (e && e.name !== "AbortError") toast("Sharing isn’t available here. Save the image instead."); }); };
ACT.scCopy = () => { if (!CARD || !CARD.blob) return;
  navigator.clipboard.write([new ClipboardItem({ "image/png": CARD.blob })]).then(() => toast("Image copied"), () => toast("Copying isn’t allowed here. Press and hold the image instead.")); };
ACT.saveCard = async () => { const CAP = opt("CAP", {}); if (!CARD) return;
  try { if (!CAP.downloads) throw { code: "x" }; await CAP.downloads.save({ filename: CARD.name, data: CARD.blob }); } catch (e) { if (!e || e.code !== "declined") toast("Saving isn’t available here. Press and hold the image instead."); } };

/* ================================================================== PATCHES */
const mark = (el, k) => { if (!el || el.dataset["st" + k]) return false; el.dataset["st" + k] = "1"; return true; };
function patchView() {
  let r; try { r = P.route(); } catch (e) { return; }
  const view = $("#view"); if (!view) return;
  // Library ▾ menu: two more places
  const menu = $(".navlib-menu");
  if (menu && mark(menu, "m")) menu.insertAdjacentHTML("beforeend", '<a href="#tide" class="st-menu"><b>The Tide</b><small id="stMenuTide">Spaced review</small></a><a href="#log" class="st-menu"><b>Captain’s log</b><small>Your progress</small></a>');
  // Voyage links to the old review list now open the Tide
  $$('#view a[href="#voyage-review"]').forEach(a => {
    if (!mark(a, "rv")) return; const n = tideDue().length; a.setAttribute("href", "#tide");
    if (a.closest(".vy-count")) a.textContent = n ? n + " due on the Tide" : "your Tide";
    const p = a.closest("p"); if (p && /still to mend/.test(p.textContent) && !p.closest(".vy-count")) p.innerHTML = (n ? "<b>" + plural(n, "card") + "</b> due on the Tide." : "Your Tide is calm.") + ' <a href="#tide">Open the Tide</a>';
  });
  if (on(r, ["home"]) && !r.arg) {
    const grid = $("#view .modules");
    if (grid && mark(grid, "h")) {
      const n = tideDue().length, D = deckCounts(), sk = streaks(ensureAct());
      grid.insertAdjacentHTML("beforeend", '<a class="mod st-mod" href="#tide"><h3><span>The Tide</span><span class="glyph">≈</span></h3><p>Spaced review. The checks you missed, the words you pinned and the ideas you mixed up come back just before you forget them.</p><span class="faint" style="font-size:.8rem">' + (n ? "Review " + plural(n, "card") + " today" : D.all ? "Calm seas · " + plural(D.all, "card") + " resting" : "Empty for now") + "</span></a>" +
        '<a class="mod st-mod" href="#log"><h3><span>Captain’s log</span><span class="glyph">✦</span></h3><p>Everything you have charted: twelve weeks at sea, the seas you have crossed, your seals and your share card.</p><span class="faint" style="font-size:.8rem">' + (sk.cur ? plural(sk.cur, "day") + " streak" : "Your progress at a glance") + "</span></a>");
      const sec = grid.closest("section"), f = sec && $(".row .faint", sec), cnt = $$("#view .modules .mod").length;
      if (f && /places/.test(f.textContent)) try { f.textContent = (P.cap && P.numWord ? P.cap(P.numWord(cnt)) : String(cnt).replace(/^\w/, c => c.toUpperCase())) + " places"; } catch (e) { }
    }
  }
  if (on(r, ["voyage"]) && !r.arg) {
    const c = $("#view .vy-count");
    if (c && !$('a[href="#tide"]', c) && mark(c, "t")) { const n = tideDue().length; if (n) c.insertAdjacentHTML("beforeend", ' · <a href="#tide" style="color:inherit">' + n + " due on the Tide</a>"); }
  }
  if (on(r, ["voyage"]) && /^u\d+$/.test(r.arg)) {
    const u = VOY().units.find(x => x.id === +r.arg.slice(1)), w = $("#view .vy-hero-sm .wrap");
    if (u && w && mark(w, "c")) { const isl = P.islandsOf(u); if (isl.length && isl.every(i => P.islDone(i.id)))
      w.insertAdjacentHTML("beforeend", '<div class="row st-cert"><span class="st-seal" aria-hidden="true">✦</span><span>Every island of this sea is charted.</span><button class="btn primary small" data-act="shareCard" data-kind="sea" data-u="' + u.id + '">Your certificate</button></div>'); }
  }
  if (on(r, ["voyage"]) && r.arg && !/^u\d+$/.test(r.arg)) {
    $$("#view .sl-night .sl-orig").forEach(p => { if (!/Words you met/.test(p.textContent) || !mark(p, "w")) return;
      const slugs = $$('a[href^="#dictionary-"]', p).map(a => a.getAttribute("href").slice(12)).filter(s => termBySlug(s));
      if (slugs.length < 2) return; const all = slugs.every(s => tideHas("term:" + s));
      p.insertAdjacentHTML("afterend", '<p class="st-words"><button type="button" class="td-pin" data-act="tideAddMany" data-slugs="' + esc(slugs.join(",")) + '"' + (all ? ' disabled aria-pressed="true">✓ ' + plural(slugs.length, "word") + " in your Tide" : ' aria-pressed="false">＋ Add these ' + slugs.length + " words to your Tide") + "</button></p>"); });
  }
  if (on(r, ["library", "dictionary"])) {
    $$("#view article.dterm:not([data-sttd])").forEach(a => { a.dataset.sttd = "1"; const slug = (a.id || "").replace(/^d-/, ""), hd = $(".d-head", a); if (!slug || !hd) return;
      hd.insertAdjacentHTML("beforeend", pinHTML("term:" + slug, "term", slug)); });
  }
  if (on(r, ["codex"]) && !r.arg) {
    const hd = $("#view .lb-page > .stack:first-child");
    if (hd && mark(hd, "l")) hd.insertAdjacentHTML("beforeend", '<p class="st-xlink"><a href="#log">Open your Captain’s log →</a><span class="faint"> · progress, streaks and seals</span></p>');
  }
  if (on(r, ["compass"]) && r.arg === "results") {
    const row = $('#view .rhero .row a.btn.primary[href^="#thinker-"]'), acts = $("#view .rhero-actions");
    if (row && mark(row.parentElement, "s")) row.parentElement.insertAdjacentHTML("beforeend", '<button class="btn ghost rhero-ghost st-share" data-act="shareCard" data-kind="compass">Share your card</button>');
    else if (!row && acts && mark(acts, "s")) acts.insertAdjacentHTML("beforeend", '<button data-act="shareCard" data-kind="compass">Share your card</button>');
  }
  if (on(r, ["compass", "quick"])) {
    const b = $$('#view a.btn.primary[href="#codex"]').find(a => /My Positions/.test(a.textContent));
    if (b && mark(b, "s")) b.insertAdjacentHTML("afterend", '<button class="btn" data-act="shareCard" data-kind="compass">Share your card</button>');
  }
  const ms = $("#stMenuTide"); if (ms) { const n = tideDue().length; ms.textContent = n ? plural(n, "card") + " due today" : "Spaced review"; }
}
function patchDrawer() {
  const d = $("#drawer"); if (!d || !d.classList.contains("open")) return;
  if ($('[data-act="askReset"]', d)) {
    const pn = $(".panel", d);
    if (pn && mark(pn, "a")) { const D = deckCounts(), n = tideDue().length;
      pn.insertAdjacentHTML("beforeend", '<div class="page-line"><span>Cards in your Tide</span><b>' + D.all + (n ? " · " + n + " due" : "") + "</b></div>");
      pn.insertAdjacentHTML("afterend", '<div class="row st-acct"><a class="btn small primary" href="#log">Open your log →</a><a class="btn small ghost" href="#tide">The Tide</a>' + ((() => { try { return P.answeredCount() >= 4; } catch (e) { return false; } })() ? '<button class="btn small ghost" data-act="shareCard" data-kind="compass">Share your card</button>' : "") + "</div>"); }
  }
}
function patchAll() { try { patchView(); } catch (e) { console.error(e); } try { patchDrawer(); } catch (e) { console.error(e); } }
const mo = new MutationObserver(patchAll);
const vw = $("#view"); if (vw) mo.observe(vw, { childList: true, subtree: true });
const dw = $("#drawer"); if (dw) mo.observe(dw, { childList: true, subtree: false, attributes: true, attributeFilter: ["class"] });
// the glossary pop-up is built by the app's click listener (registered earlier, so it runs first)
document.addEventListener("click", () => {
  const pop = document.getElementById("glPop"); if (!pop || pop.dataset.sttd) return; pop.dataset.sttd = "1";
  const a = $(".gl-more", pop), slug = a && (a.getAttribute("href") || "").replace(/^#dictionary-/, ""); if (!slug || !termBySlug(slug)) return;
  a.insertAdjacentHTML("afterend", '<div class="st-glpin">' + pinHTML("term:" + slug, "term", slug) + "</div>");
});

/* =================================================================== STYLE */
const css = `
.td-hero h1{max-width:22ch}
.td-prog{height:4px;border-radius:2px;background:var(--night-line,rgba(255,255,255,.14));overflow:hidden;max-width:520px;margin-top:6px}
.td-prog i{display:block;height:100%;background:var(--gold,#E8B04A);transition:width var(--dur-2,.26s) var(--ease,ease)}
.td-wrap{max-width:760px;padding-block:26px 40px;display:flex;flex-direction:column;gap:14px}
.td-card{background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:var(--r-lg,16px);box-shadow:var(--shadow-2,var(--shadow-1));padding:22px 24px 24px;display:flex;flex-direction:column;gap:16px;margin-top:-46px;position:relative;z-index:1}
.td-meta{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;font-size:var(--fs-sm,.875rem)}
.td-kind{font:500 var(--fs-2xs,.6875rem)/1 var(--font-mono);letter-spacing:.14em;text-transform:uppercase;padding:5px 9px;border-radius:var(--r-pill,999px);border:1px solid currentColor}
.td-k-check{color:var(--lapis)}.td-k-term{color:var(--lamp-text)}.td-k-idea{color:var(--ok)}
.td-where{color:var(--ink-2)}.td-lapse{color:var(--crack);font-size:var(--fs-xs,.75rem)}
.td-count{margin-left:auto}
.td-q{margin:0}
.td-term{font-size:clamp(2rem,6vw,2.8rem);line-height:1.05;margin:4px 0 0}
.td-etym{margin:-6px 0 0;color:var(--ink-3);font-style:italic;font-family:var(--font-read)}
.td-prompt{margin:0;font-size:var(--fs-sm,.875rem)}
.td-idea{font-family:var(--font-display);font-size:clamp(1.3rem,3.4vw,1.7rem);line-height:1.3;margin:-6px 0 0}
.td-qtext{margin:-6px 0 0;font-size:.95rem}
.td-own{display:flex;flex-direction:column;gap:6px;font-size:var(--fs-sm,.875rem);color:var(--ink-2)}
.td-own i{color:var(--ink-3);font-style:normal}
.td-own textarea{width:100%;resize:vertical;min-height:64px;border:1px solid var(--line-input,var(--line));border-radius:var(--r-sm,8px);background:var(--surface);padding:10px 12px;font-family:var(--font-read);font-size:1rem;line-height:1.5}
.td-own textarea:focus{outline:2px solid var(--lamp);outline-offset:1px}
.td-after{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px 16px}
.td-after .btn{margin-left:auto}
.td-keys{font-size:var(--fs-xs,.75rem);margin:0}
@media (hover:none),(max-width:560px){.td-keys,.td-g kbd{display:none}}
.td-back{display:flex;flex-direction:column;gap:10px;padding:16px 18px;border-radius:var(--r-md,12px);background:var(--surface);border:1px solid var(--line-2,var(--line));animation:tdIn var(--dur-2,.26s) var(--ease,ease)}
.td-back p{margin:0}
.td-def{font-family:var(--font-read);font-size:1.12rem;line-height:1.55}
.td-eg{color:var(--ink-2)}
.td-who{font-family:var(--font-display);font-size:1.45rem;line-height:1.2}
.td-yours{display:flex;flex-direction:column;gap:4px;padding-top:10px;border-top:1px dashed var(--line);color:var(--ink-2);font-family:var(--font-read);white-space:pre-wrap}
.td-ask{margin:0;font-size:var(--fs-sm,.875rem);color:var(--ink-2)}
.td-grades{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:-6px}
.td-g{position:relative;display:flex;flex-direction:column;align-items:center;gap:2px;padding:12px 6px 10px;border-radius:var(--r-md,12px);border:1.5px solid var(--line);background:var(--surface);color:var(--ink);cursor:pointer;min-height:58px;transition:border-color var(--dur-1,.15s),transform var(--dur-1,.15s),background var(--dur-1,.15s)}
.td-g b{font-weight:600;font-size:.95rem}.td-g small{font-size:var(--fs-xs,.75rem);color:var(--ink-3)}
.td-g kbd{position:absolute;top:5px;right:7px;font:500 .62rem var(--font-mono);color:var(--ink-3);opacity:.7}
.td-g:hover{transform:translateY(-1px)}
.td-g-again{border-color:color-mix(in srgb,var(--crack) 55%,var(--line))}.td-g-again:hover{background:var(--crack-soft)}.td-g-again b{color:var(--crack)}
.td-g-hard:hover{border-color:var(--ink-3)}
.td-g-good{border-color:color-mix(in srgb,var(--ok) 60%,var(--line))}.td-g-good:hover{background:color-mix(in srgb,var(--ok) 12%,var(--surface))}.td-g-good b{color:var(--ok)}
.td-g-easy{border-color:color-mix(in srgb,var(--lapis) 55%,var(--line))}.td-g-easy:hover{background:var(--lapis-soft)}.td-g-easy b{color:var(--lapis)}
.td-g:focus-visible,.td-pin:focus-visible{outline:2px solid var(--lamp);outline-offset:2px}
.td-end{align-items:flex-start}
.td-end h2{margin:0}
.td-endwave{color:var(--lamp-text)}
.td-how{margin:0;padding-left:1.1em;display:flex;flex-direction:column;gap:6px;color:var(--ink-2)}
.td-deck{margin:0;font-size:var(--fs-sm,.875rem)}
.td-pin{display:inline-flex;align-items:center;gap:4px;border:1px solid var(--line);background:var(--surface);color:var(--ink-2);border-radius:var(--r-pill,999px);padding:3px 10px;font:500 var(--fs-xs,.75rem)/1.5 var(--font-ui);cursor:pointer;white-space:nowrap;min-height:28px;transition:border-color var(--dur-1,.15s),color var(--dur-1,.15s)}
.td-pin:hover{border-color:var(--lamp);color:var(--lamp-text)}
.td-pin[aria-pressed="true"]{border-color:color-mix(in srgb,var(--ok) 60%,var(--line));color:var(--ok);background:color-mix(in srgb,var(--ok) 8%,var(--surface))}
.td-pin[disabled]{cursor:default}
.td-pin-demo{pointer-events:none}
@media (pointer:coarse){.td-pin{min-height:36px;padding-inline:12px}}
.dterm .d-head{flex-wrap:wrap}.dterm .d-head .td-pin{margin-left:auto}
.st-glpin{margin-top:8px}
.sl-night .td-pin{background:transparent;color:var(--night-ink,#EDE6D2);border-color:var(--night-line,rgba(237,230,210,.2))}
.sl-night .td-pin:hover{color:var(--gold,#E8B04A);border-color:var(--gold,#E8B04A)}
.sl-night .td-pin[aria-pressed="true"]{color:var(--gold-hi,#F4D58D);border-color:var(--gold,#E8B04A);background:transparent}
.st-words{margin:-4px 0 0;display:flex;justify-content:center}
.st-cert{gap:10px;margin-top:6px;padding:10px 14px;border:1px solid var(--night-line,rgba(255,255,255,.14));border-radius:var(--r-md,12px);background:rgba(255,255,255,.04);color:var(--night-ink,#EDE6D2);align-self:flex-start;font-size:var(--fs-sm,.875rem)}
.st-seal{color:var(--gold,#E8B04A);font-size:1.1rem}
.st-xlink{margin:4px 0 0;font-size:var(--fs-sm,.875rem)}
.st-acct{gap:8px}
.st-mod .glyph{font-family:var(--font-display)}
.lg{padding-bottom:20px}
.lg-head{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:16px}
.lg-head h1{font-size:clamp(1.9rem,4vw,2.6rem)}
.lg-acts{gap:8px}
.lg-fresh{gap:12px}
.lg-tiles{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px}
@media (max-width:980px){.lg-tiles{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:520px){.lg-tiles{grid-template-columns:repeat(2,minmax(0,1fr))}}
.lg-tile{display:flex;flex-direction:column;gap:2px;padding:14px 14px 12px;border:1px solid var(--line);border-radius:var(--r-md,12px);background:var(--card);box-shadow:var(--shadow-1);text-decoration:none;color:var(--ink);transition:border-color var(--dur-1,.15s),transform var(--dur-1,.15s)}
.lg-tile:hover{border-color:var(--lamp);transform:translateY(-1px)}
.lg-n{font-family:var(--font-display);font-size:2.1rem;line-height:1.05;color:var(--lamp-text);font-variant-numeric:tabular-nums}
.lg-t{font-weight:600;font-size:var(--fs-sm,.875rem)}
.lg-of{font-size:var(--fs-xs,.75rem);min-height:1.2em}
.lg-heatwrap{display:grid;grid-template-columns:minmax(0,470px) minmax(200px,300px);justify-content:space-between;gap:20px;align-items:start;padding:18px;border:1px solid var(--line);border-radius:var(--r-lg,16px);background:var(--card);box-shadow:var(--shadow-1)}
@media (max-width:720px){.lg-heatwrap{grid-template-columns:1fr;padding:14px}}
.lg-heat{display:grid;grid-template-columns:30px repeat(12,minmax(0,1fr));gap:4px;max-width:470px}
.lg-heat>span{grid-row:1;font:500 var(--fs-2xs,.6875rem) var(--font-mono);color:var(--ink-3);letter-spacing:.06em;white-space:nowrap;overflow:visible}
.lg-heat>b{grid-column:1;font:400 var(--fs-2xs,.6875rem) var(--font-mono);color:var(--ink-3);align-self:center}
.lg-c{display:block;aspect-ratio:1;border-radius:5px;background:var(--line-2,var(--line));position:relative}
.lg-c::after{content:"";position:absolute;inset:16%;background:currentColor;-webkit-mask:var(--lg-wave) center/contain no-repeat;mask:var(--lg-wave) center/contain no-repeat;opacity:0}
.lg-c.l1{background:color-mix(in srgb,var(--lamp) 26%,var(--card));color:var(--lamp-text)}
.lg-c.l2{background:color-mix(in srgb,var(--lamp) 50%,var(--card));color:var(--on-lamp,#1F1A0E)}
.lg-c.l3{background:color-mix(in srgb,var(--lamp) 76%,var(--card));color:var(--on-lamp,#1F1A0E)}
.lg-c.l4{background:var(--lamp);color:var(--on-lamp,#1F1A0E)}
.lg-c.l1::after,.lg-c.l2::after,.lg-c.l3::after,.lg-c.l4::after{opacity:.55}
.lg-c.lx{background:transparent;border:1px dashed var(--line-2,var(--line))}
.lg-c.now{outline:2px solid var(--lamp-text);outline-offset:1px}
:root{--lg-wave:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1 8q2.25-3 4.5 0t4.5 0 4.5 0 4.5 0M1 13.5q2.25-3 4.5 0t4.5 0 4.5 0 4.5 0' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")}
.lg-key{display:flex;align-items:center;gap:4px;margin-top:10px;font-size:var(--fs-xs,.75rem)}.lg-key .lg-c{width:14px;border-radius:3px}.lg-key .lg-c::after{display:none}
.lg-streak{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:0}
.lg-streak div{border-left:2px solid var(--lamp);padding-left:10px}
.lg-streak dt{font:500 var(--fs-2xs,.6875rem) var(--font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3)}
.lg-streak dd{margin:2px 0 0;font-family:var(--font-display);font-size:1.35rem;line-height:1.2;color:var(--ink)}
.lg-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}
.lg-seas{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 28px}
@media (max-width:720px){.lg-seas{grid-template-columns:1fr}}
.lg-sea{display:grid;grid-template-columns:42px minmax(0,1fr) auto auto;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--line)}
.lg-num{font-family:var(--font-display);font-size:1.15rem;color:var(--lamp-text);text-align:center}
.lg-st{display:flex;flex-direction:column;gap:3px;min-width:0}
.lg-st a{color:var(--ink);text-decoration:none;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lg-st a:hover{color:var(--lamp-text)}
.lg-st .vy-bar{margin-top:2px}
.lg-sea.full .lg-num::after{content:" ✓";color:var(--ok);font-size:.8rem}
.lg-two{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:28px;align-items:start}
@media (max-width:820px){.lg-two{grid-template-columns:1fr}}
.lg-recent{list-style:none;margin:0;padding:0}
.lg-recent li{display:grid;grid-template-columns:96px minmax(0,1fr);gap:12px;align-items:baseline;padding:9px 0;border-bottom:1px solid var(--line)}
.lg-recent li:last-child{border-bottom:0}
.lg-recent time{white-space:nowrap;letter-spacing:.08em}
.lg-recent a{color:var(--ink);text-decoration:none}.lg-recent a:hover{color:var(--lamp-text);text-decoration:underline;text-underline-offset:3px}
.lg-tide{background:var(--card)}
.sc-img{display:block;width:100%;height:auto;border-radius:var(--r-md,12px);box-shadow:var(--shadow-2,var(--shadow-1));background:#15203A;-webkit-touch-callout:default;user-select:auto}
.sc-acts{gap:8px}
.sc-hint{margin:0;font-size:var(--fs-sm,.875rem)}
[aria-busy="true"]{cursor:progress;opacity:.7}
@keyframes tdIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.td-back{animation:none}.td-g,.lg-tile{transition:none}}
@media (max-width:560px){.td-card{padding:18px 16px 20px;margin-top:-34px;border-radius:var(--r-md,12px)}.td-g{padding:10px 4px 8px}.td-g b{font-size:.88rem}.lg-recent li{grid-template-columns:92px minmax(0,1fr);gap:8px}.lg-recent time{letter-spacing:.04em}.lg-sea{gap:8px;grid-template-columns:44px minmax(0,1fr) auto auto}}
`;
const st = document.createElement("style"); st.id = "study-css"; st.textContent = css; document.body.appendChild(st); // after the app's own <style> (which sits in <body>), so equal-specificity rules win

/* ---------------------------------------------------------------- boot */
try { ensureTide(); ensureAct(); } catch (e) { console.error(e); }
let r0 = null; try { r0 = P.route(); } catch (e) { }
if (r0 && (["tide", "log"].includes(r0.name) || (r0.name === "voyage" && r0.arg === "review"))) {
  P.render(false);
  // the first render ran before this file loaded and queued a "no page at #tide" toast: take it back
  [230, 420].forEach(ms => setTimeout(() => { const t = $("#toast"); if (t && /There is no page at/.test(t.textContent)) t.hidden = true; }, ms));
}
else {
  patchAll();
  // Home's first render ran before the Tide existed: draw it again so "Your next heading" can count the cards due
  if (r0 && r0.name === "home") try { P.render(true); } catch (e) { console.error(e); }
}
})();
