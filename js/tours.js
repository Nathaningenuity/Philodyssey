/* Philodyssey: Guided tours.
 * Travel through the history of philosophy on an illustrated map: a panel on the left tells the story of each stop
 * (place, moment, thinker, one highlighted takeaway, "Tell me more"), and the map flies from stop to stop.
 *
 *   #tours                     every tour as a card, with your progress
 *   #tours-<tourId>            a tour, opened where you left off (first visit: stop 1)
 *   #tours-<tourId>.<n>        a tour at stop n (counting from 1), e.g. #tours-greece.6
 *   #tours-<tourId>.done       the tour's finish card
 *   (#tour and #guided are aliases of #tours)
 *
 * Load right before </body>, after the main app script, in this order:
 *   <script src="data/world-map.js"></script>      window.WORLD_MAP: pre-projected land, rivers, lakes (optional)
 *   <script src="data/atlas-tours.js"></script>    window.ATLAS_TOURS: the tours and their stops
 *   <script src="js/tours.js"></script>            this module
 * Pictures come from window.ATLAS_IMAGES.th[<thinkerId>] = { src, credit, pos } when that file is loaded
 * (read live, so it may load before or after this one); without it the panel shows an ornament instead.
 *
 * Bridge: window.PHILO (VIEWS, ROUTE_ALIAS, render, save, S, after, esc, TH, VOY, WK, LIB, AGQ, life).
 *  - VIEWS.tours renders the pages; ROUTE_ALIAS gains tour / guided.
 *  - Progress lives in PHILO.S.tours = { v: { <tourId>: [visited stop ids] }, last: { <tourId>: index },
 *    done: { <tourId>: timestamp }, cur: <tourId> }, saved with PHILO.save().
 *  - Moving between stops does not re-render the page: the panel is patched in place, the map flies, and the
 *    address is updated with history.replaceState (so no hashchange, and the Back button still leaves the tour).
 *  - All events use data-x="..." or listeners on our own elements (the app's delegation uses data-act).
 *  - The Library menu gains a "Guided tours" entry (DOM patch, idempotent).
 * Keyboard inside a tour: ← / → previous / next stop, + / − zoom, 0 re-centre, Escape back to the list.
 */
(function () {
  "use strict";
  if (window.__PHILO_TOURS__) return;
  window.__PHILO_TOURS__ = true;

  const P = window.PHILO;
  if (!P || !P.VIEWS || typeof P.render !== "function") { console.warn("tours.js: window.PHILO is missing, so Guided tours are off."); return; }
  const D = document, W = window;
  const $ = (s, r) => (r || D).querySelector(s);
  const $$ = (s, r) => Array.from((r || D).querySelectorAll(s));
  const esc = typeof P.esc === "function" ? P.esc : s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = () => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } };
  const opt = (k, d) => { try { const v = P[k]; return v === undefined ? d : v; } catch (e) { return d; } };
  const TH = () => opt("TH", {}) || {};
  const save = () => { try { P.save(); } catch (e) { console.error(e); } };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const NS = "http://www.w3.org/2000/svg";

  const TOURS = (Array.isArray(W.ATLAS_TOURS) ? W.ATLAS_TOURS : []).filter(t => t && t.id && Array.isArray(t.stops) && t.stops.length);
  const BY = {}; TOURS.forEach(t => { BY[t.id] = t; });
  if (!TOURS.length) console.warn("tours.js: window.ATLAS_TOURS is empty; load data/atlas-tours.js before js/tours.js.");

  /* ------------------------------------------------------------------ projection (matches data/world-map.js) */
  const WM = W.WORLD_MAP && W.WORLD_MAP.land ? W.WORLD_MAP : null;
  const SC = WM ? WM.s : 40, LATMAX = WM ? WM.latMax : 78;
  const merc = lat => Math.log(Math.tan(Math.PI / 4 + clamp(lat, -85, 85) * Math.PI / 360)) * 180 / Math.PI;
  const Y0 = merc(LATMAX);
  const proj = (lat, lon) => [(lon + 180) * SC, (Y0 - merc(lat)) * SC];
  const WORLD_W = 360 * SC, Y_TOP = proj(76, 0)[1], Y_BOT = proj(-50, 0)[1];

  /* ------------------------------------------------------------------ state */
  function TS() {
    const s = P.S; if (!s) return { v: {}, last: {}, done: {} };
    if (!s.tours || typeof s.tours !== "object") s.tours = {};
    const t = s.tours; ["v", "last", "done"].forEach(k => { if (!t[k] || typeof t[k] !== "object") t[k] = {}; });
    return t;
  }
  const visitedIds = tour => new Set((TS().v[tour.id] || []).filter(id => tour.stops.some(s => s.id === id)));
  function markVisit(tour, i) {
    const t = TS(), id = tour.stops[i].id, a = t.v[tour.id] || (t.v[tour.id] = []);
    if (!a.includes(id)) a.push(id);
    t.last[tour.id] = i; t.cur = tour.id; save();
  }
  const isDone = tour => !!TS().done[tour.id];

  /* ------------------------------------------------------------------ links and pictures */
  function linkInfo(h) {
    const m = /^#([a-z]+)(?:-(.+))?$/.exec(h || ""); if (!m) return null;
    const name = m[1], arg = m[2] || "";
    const LIB = opt("LIB", {}) || {}, VOY = opt("VOY", null), WK = opt("WK", {}) || {}, AGQ = opt("AGQ", {}) || {};
    switch (name) {
      case "thinker": return TH()[arg] ? { href: h, label: "Read " + shortName(TH()[arg]) + "’s profile" } : null;
      case "voyage": { const I = VOY && VOY.islands && VOY.islands[arg]; return I ? { href: h, label: "Sail to ‘" + I.name + "’ in the Voyage" } : null; }
      case "works": return WK[arg] ? { href: h, label: "Open " + WK[arg].title + " in Works" } : null;
      case "stoa": { const s = (LIB.schools || []).find(x => x.id === arg); return s ? { href: h, label: "Walk " + s.name + " on the Timeline" } : null; }
      case "experiment": { const x = (LIB.experiments || []).find(e => e.id === arg); return x ? { href: h, label: "Try " + (x.name || x.title) } : null; }
      case "agora": return AGQ[arg] ? { href: h, label: "Join the debate" } : null;
      default: return P.VIEWS[name] ? { href: h, label: "Continue in the app" } : null;
    }
  }
  function shortName(t) { const n = String(t.name).replace(/\s*\(.*?\)\s*/g, " ").trim(); if (/^The /.test(n)) return n.replace(/ \(.*$/, ""); if (/ of /.test(n)) return n.split(" of ")[0]; if (/Chinese|Japan|Indian/i.test(t.tradition || "")) return n; return n.split(" ").slice(-1)[0]; }
  function picture(stop) {
    if (stop.img && stop.img.src) return stop.img;
    const I = W.ATLAS_IMAGES && W.ATLAS_IMAGES.th; if (!I) return null;
    for (const id of stop.th || []) { const p = I[id]; if (p && p.src) return Object.assign({ who: id }, p); }
    return null;
  }

  /* ------------------------------------------------------------------ places: stops close together share one pin */
  function groupsOf(tour) {
    if (tour._g) return tour._g;
    const G = [];
    tour.stops.forEach((s, i) => {
      let g = G.find(g => Math.hypot(g.lat - s.lat, (g.lon - s.lon) * Math.cos(s.lat * Math.PI / 180)) < .3);
      if (!g) { g = { lat: s.lat, lon: s.lon, idx: [], name: String(s.place).split(":")[0].replace(/,.*$/, "").trim() }; G.push(g); }
      g.idx.push(i); s._g = g;
    });
    G.forEach(g => { const p = proj(g.lat, g.lon); g.x = p[0]; g.y = p[1]; });
    tour.stops.forEach(s => { const p = proj(s.lat, s.lon); s._x = p[0]; s._y = p[1]; });
    return (tour._g = G);
  }
  function boundsOf(tour) {
    const xs = tour.stops.map(s => proj(s.lat, s.lon)[0]), ys = tour.stops.map(s => proj(s.lat, s.lon)[1]);
    return { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys) };
  }

  /* ------------------------------------------------------------------ map ornaments */
  const REGIONS = [
    // seas (italic) and lands (spaced capitals); [text, lat, lon, minZoom, maxZoom, kind]
    ["Mediterranean Sea", 34.6, 18.2, 2.6, 5.4, "sea"], ["Aegean Sea", 39.2, 25.1, 4.8, 9, "sea"], ["Ionian Sea", 37.6, 18.6, 4.8, 9, "sea"],
    ["Adriatic Sea", 42.9, 15.6, 5, 9, "sea"], ["Black Sea", 43.3, 34.6, 2.6, 6.4, "sea"], ["Caspian Sea", 41.6, 50.7, 2.8, 6.4, "sea"],
    ["Red Sea", 20.6, 38.6, 3, 6.4, "sea"], ["Persian Gulf", 27.0, 51.2, 3.4, 6.4, "sea"], ["Arabian Sea", 15.0, 63.5, 2, 5.4, "sea"],
    ["Bay of Bengal", 14.5, 88.6, 2.2, 5.4, "sea"], ["Indian Ocean", 1.5, 76, 1.4, 4, "sea"], ["Atlantic Ocean", 37, -32, 1.4, 4.6, "sea"],
    ["North Sea", 56.4, 3.4, 3.6, 7, "sea"], ["Baltic Sea", 57.2, 19.2, 3.6, 7, "sea"], ["Yellow Sea", 35.6, 123.6, 3.6, 6.4, "sea"],
    ["East China Sea", 28.6, 125.8, 3.4, 6.4, "sea"], ["South China Sea", 14.8, 114.2, 2.6, 5.4, "sea"], ["Sea of Japan", 40.2, 134.6, 3.6, 6.4, "sea"],
    ["Pacific Ocean", 24, 152, 1.4, 4.4, "sea"], ["Bay of Biscay", 45.4, -4.6, 4.2, 7, "sea"],
    ["Europe", 51.5, 24, 1.4, 3.4, "land"], ["Africa", 8, 20, 1.4, 3.4, "land"], ["Asia", 48, 92, 1.4, 3.4, "land"], ["North America", 45, -100, 1, 3.4, "land"],
    ["Greece", 39.5, 21.9, 4.6, 7.4, "land"], ["Italy", 42.6, 12.9, 4.4, 7, "land"], ["Anatolia", 39.0, 33.2, 3.8, 6.6, "land"],
    ["Egypt", 26.0, 28.2, 3.6, 6.6, "land"], ["Arabia", 23.4, 45.6, 2.8, 5.6, "land"], ["Persia", 32.0, 54.5, 3, 6.2, "land"],
    ["Mesopotamia", 35.3, 41.4, 4.2, 6.8, "land"], ["Central Asia", 41.2, 62.5, 2.8, 5.2, "land"], ["Tibet", 32.6, 88.4, 3, 5.6, "land"],
    ["India", 22.8, 75.6, 2.4, 5.6, "land"], ["China", 30.6, 103.5, 2.4, 5.4, "land"], ["Japan", 37.6, 139.6, 3.4, 6.2, "land"],
    ["France", 46.3, 2.7, 4.2, 7, "land"], ["Iberia", 41.4, -5.6, 3.6, 6.6, "land"], ["Britain", 54.2, -2.2, 4.4, 7, "land"],
    ["Sahara", 23.5, 9.5, 2.6, 5.2, "land"], ["Scandinavia", 63, 14, 2.6, 4.8, "land"]
  ];
  const ROSE = '<svg class="tour-rose" viewBox="-50 -50 100 100" aria-hidden="true"><circle r="34" class="r1"/><circle r="29" class="r2"/>' +
    '<g class="r3"><path d="M0-46 6-6 0 0-6-6Z"/><path d="M0 46 6 6 0 0-6 6Z" class="lo"/><path d="M46 0 6 6 0 0 6-6Z" class="lo"/><path d="M-46 0-6 6 0 0-6-6Z" class="lo"/></g>' +
    '<g class="r4"><path d="M22-22 3 0 0 0 0-3Z"/><path d="M-22 22-3 0 0 0 0 3Z"/><path d="M22 22 0 3 0 0 3 0Z"/><path d="M-22-22 0-3 0 0-3 0Z"/></g>' +
    '<text y="-38" text-anchor="middle">N</text></svg>';
  const ORN = '<svg class="tour-orn" viewBox="0 0 320 44" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><path d="M10 22H128M192 22H310" class="o1"/><path d="M40 27H128M192 27H280" class="o2"/>' +
    '<g transform="translate(160 22)"><circle r="15" class="o3"/><path d="M0-19 4-4 19 0 4 4 0 19-4 4-19 0-4-4Z" class="o4"/><path d="M0-11 2-2 11 0 2 2 0 11-2 2-11 0-2-2Z" class="o5"/></g></svg>';
  const IC = {
    left: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    right: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    minus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    target: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    fit: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-6.1-6.5-11A6.5 6.5 0 0 1 18.5 10c0 4.9-6.5 11-6.5 11Z" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="10" r="2.3" fill="currentColor"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  const emb = id => '<svg class="emblem" aria-hidden="true" focusable="false"><use href="#em-' + id + '"/></svg>';
  function graticule() {
    let d = "";
    for (let lon = -180; lon <= 180; lon += 10) d += "M" + (lon + 180) * SC + " " + Math.round(Y_TOP) + "V" + Math.round(Y_BOT);
    for (let lat = -50; lat <= 76; lat += 10) { const y = Math.round(proj(lat, 0)[1]); d += "M0 " + y + "H" + WORLD_W; }
    return d;
  }
  const landDefs = () => '<svg class="tour-defs" width="0" height="0" aria-hidden="true" focusable="false"><defs>' +
    (WM ? '<path id="tourLand" d="' + WM.land + '" vector-effect="non-scaling-stroke"/>' : "") +
    '<radialGradient id="tourSeaG" cx="50%" cy="42%" r="75%"><stop offset="0" style="stop-color:var(--tour-sea-hi)"/><stop offset="1" style="stop-color:var(--tour-sea)"/></radialGradient>' +
    '<marker id="tourArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 1 9 5 0 9 2.5 5Z" class="tour-arrowhead"/></marker></defs></svg>';

  /* ================================================================== LIST */
  function stats(tour) { const v = visitedIds(tour); return { n: v.size, of: tour.stops.length, done: isDone(tour), last: TS().last[tour.id] }; }
  function miniMap(tour) {
    const b = boundsOf(tour), cx = (b.x0 + b.x1) / 2, cy = (b.y0 + b.y1) / 2;
    let w = Math.max(b.x1 - b.x0, 120 * SC / 40) * 1.35 + 6 * SC, h = Math.max(b.y1 - b.y0, 60 * SC / 40) * 1.35 + 6 * SC;
    if (w / h < 16 / 9) w = h * 16 / 9; else h = w * 9 / 16;
    const yLo = proj(74, 0)[1], yHi = proj(-42, 0)[1]; if (h > yHi - yLo) { h = yHi - yLo; w = h * 16 / 9; }
    let cyy = clamp(cy, yLo + h / 2, yHi - h / 2);
    const vis = visitedIds(tour), G = groupsOf(tour), r = w / 150;
    let path = "", prev = null;
    tour.stops.forEach(s => { const g = s._g; if (prev && prev !== g) { const mx = (prev.x + g.x) / 2, my = (prev.y + g.y) / 2, dx = g.x - prev.x, dy = g.y - prev.y; path += "M" + prev.x.toFixed(0) + " " + prev.y.toFixed(0) + "Q" + (mx - dy * .18).toFixed(0) + " " + (my + dx * .18).toFixed(0) + " " + g.x.toFixed(0) + " " + g.y.toFixed(0); } prev = g; });
    return '<svg class="tour-mini" viewBox="' + [cx - w / 2, cyy - h / 2, w, h].map(v => v.toFixed(0)).join(" ") + '" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<rect x="' + (cx - w) + '" y="' + (cyy - h) + '" width="' + 2 * w + '" height="' + 2 * h + '" fill="url(#tourSeaG)"/>' +
      (WM ? '<use href="#tourLand" class="tour-land"/>' : "") +
      '<path d="' + path + '" class="tour-mini-path" vector-effect="non-scaling-stroke"/>' +
      G.map(g => '<circle cx="' + g.x.toFixed(0) + '" cy="' + g.y.toFixed(0) + '" r="' + r.toFixed(1) + '" class="' + (g.idx.every(i => vis.has(tour.stops[i].id)) ? "v" : "") + '" vector-effect="non-scaling-stroke"/>').join("") + "</svg>";
  }
  function listView() {
    const cards = TOURS.map(t => {
      const s = stats(t), pct = Math.round(s.n / s.of * 100);
      const started = s.n > 0, at = s.last != null ? s.last + 1 : 1;
      const cta = s.done ? "Take it again" : started ? "Continue at stop " + at : "Start the tour";
      const href = "#tours-" + t.id + "." + (s.done || !started ? 1 : at);
      return '<article class="tour-tcard' + (s.done ? " is-done" : "") + '"><a class="tour-tlink" href="' + href + '" aria-label="' + esc(t.title + ": " + cta) + '">' + miniMap(t) +
        '<div class="tour-tbody"><span class="tour-eyebrow">' + esc(t.span || "") + " · " + s.of + " stops</span><h2>" + esc(t.title) + "</h2><p>" + esc(t.sub || "") + "</p>" +
        '<div class="tour-tfoot"><span class="tour-meter" role="img" aria-label="' + s.n + " of " + s.of + ' stops visited"><i style="width:' + pct + '%"></i></span><small>' +
        (s.done ? IC.check + " Finished" : started ? s.n + " of " + s.of + " visited" : "Not started") + '</small></div><span class="tour-cta">' + esc(cta) + IC.right + "</span></div></a>" +
        (started && !s.done ? '<a class="tour-restart" href="#tours-' + t.id + '.1">Start over</a>' : "") + "</article>";
    }).join("");
    const total = TOURS.reduce((n, t) => n + t.stops.length, 0);
    return '<div class="tour-root tour-listpage">' + landDefs() + '<div class="wrap stack" style="--g:22px"><header class="page-head">' + emb("compass") +
      '<a class="linkish" href="#voyage">← The Voyage</a><span class="eyebrow">The Voyage · Guided tours</span><h1>Travel through the history of philosophy</h1><p class="lede">Pick a route and follow it across the map, from Miletus to Kyoto and from Baghdad to Harvard. Each stop is a place, a moment and an idea. ' +
      TOURS.length + " tours, " + total + ' stops.</p></header><div class="tour-tcards">' + cards + '</div><p class="tour-hint">On a tour: use <kbd>←</kbd> <kbd>→</kbd> to move between stops, drag or scroll the map to look around, and <kbd>Esc</kbd> to come back here.</p></div></div>';
  }

  /* ================================================================== TOUR PAGE */
  function tourView(tour, idx, done) {
    const G = groupsOf(tour);
    return '<div class="tour-root tour-stage" data-tour="' + esc(tour.id) + '">' + landDefs() +
      '<aside class="tour-panel" aria-label="Tour stop">' +
      '<div class="tour-phead"><a class="tour-back" href="#tours">' + IC.left + "All tours</a><span class=\"tour-ptitle\">" + esc(tour.title) + "</span></div>" +
      '<div class="tour-steps" role="group" aria-label="Stops">' + tour.stops.map((s, i) => '<button type="button" data-x="tourStep" data-i="' + i + '" aria-label="Stop ' + (i + 1) + ": " + esc(s.place) + '"></button>').join("") + "</div>" +
      '<div class="tour-card" tabindex="-1"></div>' +
      '<div class="tour-nav"><button type="button" class="tour-btn" data-x="tourPrev">' + IC.left + '<span>Back</span></button><button type="button" class="tour-btn tour-next" data-x="tourNext"><span>Next</span>' + IC.right + "</button></div>" +
      '<p class="tour-sr" aria-live="polite"></p></aside>' +
      '<section class="tour-map" aria-label="Map of the tour. Drag to pan, scroll or use the buttons to zoom.">' +
      '<svg class="tour-svg" role="presentation"><rect class="tour-sea" width="100%" height="100%" fill="url(#tourSeaG)"/>' +
      '<g class="tour-world"><path class="tour-grat" d="' + graticule() + '" vector-effect="non-scaling-stroke"/>' +
      (WM ? '<use href="#tourLand" class="tour-halo"/><use href="#tourLand" class="tour-land"/>' + (WM.lakes ? '<path class="tour-lake" d="' + WM.lakes + '" vector-effect="non-scaling-stroke"/>' : "") +
        (WM.rivers ? '<path class="tour-river" d="' + WM.rivers + '" vector-effect="non-scaling-stroke"/>' : "") : "") + "</g>" +
      '<g class="tour-ui"><g class="tour-regions"></g><g class="tour-journey"><path class="tour-jfuture"/><path class="tour-jpast"/></g><g class="tour-lines"></g><g class="tour-extras"></g><g class="tour-pins"></g><g class="tour-callouts"></g></g></svg>' +
      '<div class="tour-grain" aria-hidden="true"></div>' + ROSE +
      '<div class="tour-ctrls"><button type="button" data-x="tourZoomIn" aria-label="Zoom in" title="Zoom in">' + IC.plus + '</button><button type="button" data-x="tourZoomOut" aria-label="Zoom out" title="Zoom out">' + IC.minus +
      '</button><button type="button" data-x="tourRecenter" aria-label="Back to this stop" title="Back to this stop">' + IC.target + '</button><button type="button" data-x="tourFit" aria-label="Show the whole tour" title="Show the whole tour">' + IC.fit + "</button></div>" +
      '<div class="tour-attrib">Map data: Natural Earth</div></section></div>';
  }

  /* ------------------------------------------------------------------ panel content */
  function stopHTML(tour, i) {
    const s = tour.stops[i], n = tour.stops.length, pic = picture(s);
    const chips = (s.th || []).filter(id => TH()[id]).map(id => { const t = TH()[id], lf = opt("life", null); let l = ""; try { l = lf ? lf(t) : ""; } catch (e) { }
      return '<a class="tour-chip" href="#thinker-' + esc(id) + '"><b>' + esc(t.name) + "</b>" + (l ? "<small>" + esc(l) + "</small>" : "") + "</a>"; }).join("");
    const L = linkInfo(s.link);
    return '<div class="tour-kicker"><span>Stop ' + (i + 1) + " of " + n + "</span><span>" + esc(s.year || "") + "</span></div>" +
      (pic ? '<figure class="tour-fig"><img src="' + esc(pic.src) + '" alt="' + esc(pic.alt || (pic.who && TH()[pic.who] ? TH()[pic.who].name : s.title)) + '" loading="lazy" decoding="async"' + (pic.pos ? ' style="object-position:' + esc(pic.pos) + '"' : "") + ">" +
        (pic.credit ? "<figcaption>" + esc(pic.credit) + "</figcaption>" : "") + "</figure>" : ORN) +
      '<h2 class="tour-title">' + esc(s.title) + '</h2><p class="tour-place">' + IC.pin + esc(s.place) + "</p>" +
      '<p class="tour-take">' + esc(s.takeaway) + "</p>" +
      '<p class="tour-body">' + esc(s.body) + "</p>" +
      (s.more ? '<details class="tour-more"><summary>Tell me more <span aria-hidden="true">▾</span></summary><p>' + esc(s.more) + "</p></details>" : "") +
      (chips ? '<div class="tour-meet"><span class="tour-eyebrow">Meet</span><div class="tour-chips">' + chips + "</div></div>" : "") +
      (L ? '<a class="tour-go" href="' + esc(L.href) + '">' + esc(L.label) + IC.right + "</a>" : "");
  }
  function doneHTML(tour) {
    const i = TOURS.indexOf(tour), nxt = TOURS.slice(i + 1).concat(TOURS.slice(0, i)).find(t => !isDone(t)) || TOURS[(i + 1) % TOURS.length];
    const first = tour.stops[0], last = tour.stops[tour.stops.length - 1];
    const people = []; tour.stops.forEach(s => (s.th || []).forEach(id => { if (TH()[id] && !people.includes(id)) people.push(id); }));
    return '<div class="tour-kicker"><span>Tour complete</span><span>' + esc(tour.span || "") + "</span></div>" + ORN +
      '<h2 class="tour-title">You finished “' + esc(tour.title) + '”</h2>' +
      '<p class="tour-take">' + tour.stops.length + " stops, from " + esc(first.place.split(":")[0]) + " to " + esc(last.place.split(":")[0]) + ".</p>" +
      '<p class="tour-body">' + (people.length ? "Along the way you met " + people.length + " thinkers. Their profiles, books and arguments are waiting in the rest of Philodyssey." : "The places on this route connect to the rest of Philodyssey: the Voyage, the Timeline and the Works.") + "</p>" +
      (people.length ? '<div class="tour-meet"><span class="tour-eyebrow">Who you met</span><div class="tour-chips">' + people.slice(0, 18).map(id => '<a class="tour-chip" href="#thinker-' + esc(id) + '"><b>' + esc(TH()[id].name) + "</b></a>").join("") + "</div></div>" : "") +
      (nxt && nxt !== tour ? '<a class="tour-go" href="#tours-' + esc(nxt.id) + '">Next: ' + esc(nxt.title) + IC.right + "</a>" : "") +
      '<a class="tour-go tour-go-quiet" href="#tours">All tours' + IC.right + "</a>";
  }

  /* ================================================================== THE MAP CONTROLLER */
  let CTL = null;
  function interpZoom(p0, p1) { // van Wijk and Nuij, "Smooth and efficient zooming and panning" (as in d3-interpolate)
    const rho = Math.SQRT2, rho2 = 2, rho4 = 4, ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2];
    const dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy; let i, S;
    if (d2 < 1e-12) { S = Math.log(w1 / w0) / rho; i = t => [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)]; }
    else {
      const d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1);
      const r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1); S = (r1 - r0) / rho;
      i = t => { const s = t * S, c0 = Math.cosh(r0), u = w0 / (rho2 * d1) * (c0 * Math.tanh(rho * s + r0) - Math.sinh(r0)); return [ux0 + u * dx, uy0 + u * dy, w0 * c0 / Math.cosh(rho * s + r0)]; };
    }
    i.duration = Math.abs(S) * 1000 * rho / Math.SQRT2; return i;
  }
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  let measureCtx = null;
  function textW(str, font) { if (!measureCtx) measureCtx = D.createElement("canvas").getContext("2d"); measureCtx.font = font; return measureCtx.measureText(str).width; }
  const el = (tag, attrs, parent) => { const e = D.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; };

  function mount(tour, idx, done) {
    const root = $("#view .tour-stage"); if (!root) return;
    const map = $(".tour-map", root), svg = $(".tour-svg", root), world = $(".tour-world", root);
    const gReg = $(".tour-regions", root), gLines = $(".tour-lines", root), gEx = $(".tour-extras", root), gPins = $(".tour-pins", root), gCall = $(".tour-callouts", root);
    const jFut = $(".tour-jfuture", root), jPast = $(".tour-jpast", root);
    const G = groupsOf(tour);
    const fontUI = (getComputedStyle(D.documentElement).getPropertyValue("--font-ui") || "system-ui, sans-serif").trim();
    const C = CTL = { tour, i: idx, done: !!done, root, cam: { x: 0, y: 0, k: 1 }, w: 0, h: 0, anim: 0, layoutT: 0, placed: [] };

    // sizes: the page header sits above; on phones the helm sits below
    function measure() {
      const view = $("#view"), top = view ? Math.max(0, view.getBoundingClientRect().top + scrollY) : 64;
      root.style.setProperty("--tour-top", top + "px");
      const helm = $(".helm"), hv = helm && getComputedStyle(helm).display !== "none" ? helm.getBoundingClientRect().height : 0;
      root.style.setProperty("--tour-helm", Math.round(hv) + "px");
      const r = map.getBoundingClientRect(); C.w = Math.max(1, r.width); C.h = Math.max(1, r.height);
    }
    measure();
    const base = () => Math.max(300, Math.min(C.w, C.h * 1.35));
    const kOfZoom = z => base() / (360 / Math.pow(2, z) * SC);
    const zoomOfK = k => Math.log2(k * 360 * SC / base());
    const K_MIN = () => Math.max(C.w / (WORLD_W * .62), kOfZoom(1.2)), K_MAX = () => kOfZoom(8.6);
    function clampCam(c) {
      c.k = clamp(c.k, K_MIN(), K_MAX());
      const hw = C.w / 2 / c.k, hh = C.h / 2 / c.k;
      c.x = clamp(c.x, Math.min(hw, WORLD_W / 2), Math.max(WORLD_W - hw, WORLD_W / 2));
      const yA = Y_TOP + hh, yB = Y_BOT - hh; c.y = yA < yB ? clamp(c.y, yA, yB) : (Y_TOP + Y_BOT) / 2;
      return c;
    }
    const toS = (x, y) => [(x - C.cam.x) * C.cam.k + C.w / 2, (y - C.cam.y) * C.cam.k + C.h / 2];
    const camFor = s => { const v = s.view && s.view.lat != null ? s.view : null, c = v ? proj(v.lat, v.lon) : [s._x, s._y];
      let k = kOfZoom((v && v.zoom) || s.zoom || 5), x = c[0], y = c[1];
      if (v) { // keep the pin itself on screen when a framed view is wider than the window
        const m = Math.min(70, C.w * .16), dx = Math.abs(s._x - x), dy = Math.abs(s._y - y);
        if (dx) k = Math.max(Math.min(k, (C.w / 2 - m) / dx), k / 2.4); if (dy) k = Math.max(Math.min(k, (C.h / 2 - m) / dy), k / 2.4);
        const hx = C.w / 2 / k - m / k, hy = C.h / 2 / k - m / k;
        x = clamp(x, s._x - hx, s._x + hx); y = clamp(y, s._y - hy, s._y + hy); }
      return clampCam({ x, y, k }); };
    function camFit() {
      const b = boundsOf(tour), pad = 70;
      const k = Math.min((C.w - pad * 2) / Math.max(1, b.x1 - b.x0), (C.h - pad * 2) / Math.max(1, b.y1 - b.y0), kOfZoom(5.2));
      return clampCam({ x: (b.x0 + b.x1) / 2, y: (b.y0 + b.y1) / 2, k });
    }

    /* ---- static UI elements: regions, pins */
    const regs = REGIONS.map(r => { const p = proj(r[1], r[2]); const t = el("text", { class: "tour-reg tour-reg-" + r[5], "text-anchor": "middle" }, gReg); t.textContent = r[5] === "land" ? r[0].toUpperCase() : r[0]; return { r, x: p[0], y: p[1], t }; });
    const pins = G.map(g => {
      const tie = el("line", { class: "tour-pin-tie" }, gPins);
      const a = el("a", { href: "#tours-" + tour.id + "." + (g.idx[0] + 1), class: "tour-pin" }, gPins);
      el("circle", { r: 16, class: "tour-pin-pulse" }, a); el("circle", { r: 10.5, class: "tour-pin-dot" }, a);
      const t = el("text", { class: "tour-pin-n", "text-anchor": "middle", y: 3.8 }, a);
      let badge = null; if (g.idx.length > 1) { badge = el("g", { class: "tour-pin-badge", transform: "translate(9 -9)" }, a); el("circle", { r: 6.5 }, badge); const bt = el("text", { "text-anchor": "middle", y: 2.9 }, badge); bt.textContent = g.idx.length; }
      const lab = el("text", { class: "tour-pin-label" }, gPins); lab.textContent = g.name;
      a.addEventListener("click", e => { e.preventDefault(); if (C.dragged) return; const cur = g.idx.indexOf(C.i); const to = cur >= 0 && !C.done ? g.idx[(cur + 1) % g.idx.length] : (g.idx.find(i => i > C.i) ?? g.idx[0]); go(to); });
      return { g, a, t, lab, tie, off: null };
    });

    /* ---- per-stop UI: lines, extra labels, callout */
    let lines = [], extras = [], callout = null;
    function smooth(pts) {
      if (pts.length < 3) return pts.length === 2 ? "M" + pts[0].join(" ") + "L" + pts[1].join(" ") : "";
      let d = "M" + pts[0][0].toFixed(1) + " " + pts[0][1].toFixed(1);
      for (let i = 0; i < pts.length - 1; i++) { const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
        d += "C" + (p1[0] + (p2[0] - p0[0]) / 7).toFixed(1) + " " + (p1[1] + (p2[1] - p0[1]) / 7).toFixed(1) + " " + (p2[0] - (p3[0] - p1[0]) / 7).toFixed(1) + " " + (p2[1] - (p3[1] - p1[1]) / 7).toFixed(1) + " " + p2[0].toFixed(1) + " " + p2[1].toFixed(1); }
      return d;
    }
    function pill(parent, cls, main, sub) {
      const g = el("g", { class: "tour-pillg " + cls }, parent);
      const leader = el("line", { class: "tour-leader" }, g), anchor = el("circle", { class: "tour-anchor", r: cls === "tour-callout" ? 0 : 3.2 }, g);
      const box = el("g", { class: "tour-pill" }, g), fs = cls === "tour-callout" ? 13 : 11.5, padX = cls === "tour-callout" ? 12 : 10, hgt = cls === "tour-callout" ? 28 : 24;
      const w1 = textW(main, "600 " + fs + "px " + fontUI), w2 = sub ? textW("  ·  " + sub, "400 " + fs + "px " + fontUI) : 0, w = Math.ceil(w1 + w2 + padX * 2);
      el("rect", { width: w, height: hgt, rx: hgt / 2 }, box);
      const t = el("text", { x: padX, y: hgt / 2 + fs * .36, style: "font-size:" + fs + "px" }, box); const b = el("tspan", { class: "b" }, t); b.textContent = main;
      if (sub) { const s2 = el("tspan", { class: "s" }, t); s2.textContent = "  ·  " + sub; }
      return { g, leader, anchor, box, w, h: hgt, off: null };
    }
    function buildStop() {
      gLines.textContent = ""; gEx.textContent = ""; gCall.textContent = "";
      lines = []; extras = []; callout = null;
      if (C.done) return;
      const s = tour.stops[C.i];
      (s.lines || []).forEach(L => {
        const pts = (L.pts || []).filter(p => Array.isArray(p) && p.length === 2).map(p => proj(p[0], p[1])); if (pts.length < 2) return;
        const path = el("path", { class: "tour-line tour-line-" + (L.kind === "flow" ? "flow" : "route") }, gLines);
        if (L.kind === "flow") path.setAttribute("marker-end", "url(#tourArrow)");
        let lab = null; if (L.label) { lab = el("text", { class: "tour-line-label", "text-anchor": "middle" }, gLines); lab.textContent = L.label; }
        lines.push({ pts, path, lab, L });
      });
      (s.labels || []).forEach(lb => { if (lb == null || lb.lat == null) return; const p = proj(lb.lat, lb.lon); const txt = String(lb.text || ""); const i = txt.indexOf(":");
        extras.push(Object.assign(pill(gEx, "tour-extra", i > 0 ? txt.slice(0, i) : txt, i > 0 ? txt.slice(i + 1).trim() : ""), { x: p[0], y: p[1] })); });
      callout = Object.assign(pill(gCall, "tour-callout", String(s.place).split(":")[0], s.year || ""), { x: s._x, y: s._y });
    }
    function pinState() {
      const vis = visitedIds(tour);
      pins.forEach(p => {
        const cur = !C.done && p.g.idx.includes(C.i), allV = p.g.idx.every(i => vis.has(tour.stops[i].id));
        p.a.setAttribute("class", "tour-pin" + (cur ? " is-cur" : allV ? " is-vis" : ""));
        const show = cur ? C.i : p.g.idx.find(i => !vis.has(tour.stops[i].id)) ?? p.g.idx[0];
        p.t.textContent = show + 1;
        p.a.setAttribute("aria-label", p.g.idx.map(i => "Stop " + (i + 1)).join(", ") + ": " + p.g.name + (cur ? " (you are here)" : allV ? " (visited)" : ""));
        p.a.setAttribute("href", "#tours-" + tour.id + "." + (show + 1));
        if (cur) p.a.parentNode.appendChild(p.a); // current pin on top
      });
    }

    /* ---- positioning: every frame */
    function journey() {
      let fut = "", past = "", prev = null;
      const upTo = C.done ? tour.stops.length - 1 : C.i;
      tour.stops.forEach((s, i) => { const g = s._g; if (prev && prev !== g) { const a = toS(prev.x, prev.y), b = toS(g.x, g.y), mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1];
        const seg = "M" + a[0].toFixed(1) + " " + a[1].toFixed(1) + "Q" + (mx - dy * .16).toFixed(1) + " " + (my + dx * .16).toFixed(1) + " " + b[0].toFixed(1) + " " + b[1].toFixed(1);
        if (i <= upTo) past += seg; else if (i === upTo + 1) fut += seg; } prev = g; });
      jFut.setAttribute("d", fut); jPast.setAttribute("d", past);
      const z = zoomOfK(C.cam.k), f = clamp((5.4 - z) / 1.6, .18, 1); jFut.style.opacity = (.4 * f).toFixed(2); jPast.style.opacity = (.5 * f).toFixed(2);
    }
    function place() {
      const c = C.cam;
      world.setAttribute("transform", "translate(" + (C.w / 2 - c.x * c.k).toFixed(2) + " " + (C.h / 2 - c.y * c.k).toFixed(2) + ") scale(" + c.k.toFixed(6) + ")");
      const z = zoomOfK(c.k);
      regs.forEach(R => { let on = z >= R.r[3] && z <= R.r[4]; if (on) { const p = toS(R.x, R.y); on = p[1] > 22 && p[1] < C.h - 14 && p[0] > 30 && p[0] < C.w - 30 && !(p[0] < 130 && p[1] > C.h - 110);
        if (on) { R.t.setAttribute("x", p[0].toFixed(1)); R.t.setAttribute("y", p[1].toFixed(1)); } } R.t.style.display = on ? "" : "none"; });
      journey();
      // pins that would overlap on screen are nudged apart, each tied to its true place by a short line
      pins.forEach(p => { const s = toS(p.g.x, p.g.y); p.rx = p.sx = s[0]; p.ry = p.sy = s[1]; p.cur = p.a.classList.contains("is-cur"); });
      const MIN = 23;
      for (let it = 0; it < 4; it++) for (let a = 0; a < pins.length; a++) for (let b = a + 1; b < pins.length; b++) {
        const A = pins[a], B = pins[b]; let dx = B.sx - A.sx, dy = B.sy - A.sy, d = Math.hypot(dx, dy);
        if (d >= MIN || A.sx < -50 || A.sx > C.w + 50 || A.sy < -50 || A.sy > C.h + 50) continue;
        if (d < .01) { const an = (a * 2.4 + b) % (2 * Math.PI); dx = Math.cos(an); dy = Math.sin(an); d = 1; }
        const o = (MIN - d), ux = dx / d, uy = dy / d, wa = A.cur ? 0 : B.cur ? 1 : .5, wb = 1 - wa;
        A.sx -= ux * o * wa; A.sy -= uy * o * wa; B.sx += ux * o * wb; B.sy += uy * o * wb;
      }
      pins.forEach(p => { p.a.setAttribute("transform", "translate(" + p.sx.toFixed(1) + " " + p.sy.toFixed(1) + ")");
        const moved = Math.hypot(p.sx - p.rx, p.sy - p.ry) > 3; p.tie.style.display = moved ? "" : "none";
        if (moved) { p.tie.setAttribute("x1", p.rx.toFixed(1)); p.tie.setAttribute("y1", p.ry.toFixed(1)); p.tie.setAttribute("x2", p.sx.toFixed(1)); p.tie.setAttribute("y2", p.sy.toFixed(1)); }
        if (p.off) { p.lab.setAttribute("x", (p.sx + p.off[0]).toFixed(1)); p.lab.setAttribute("y", (p.sy + p.off[1]).toFixed(1)); } });
      lines.forEach(L => { const sp = L.pts.map(p => toS(p[0], p[1])); L.path.setAttribute("d", smooth(sp)); L.sp = sp; if (L.lab && L.loff) { L.lab.setAttribute("x", L.loff[0]); L.lab.setAttribute("y", L.loff[1]); } });
      extras.concat(callout ? [callout] : []).forEach(X => { const s = toS(X.x, X.y); X.sx = s[0]; X.sy = s[1]; X.anchor.setAttribute("cx", s[0].toFixed(1)); X.anchor.setAttribute("cy", s[1].toFixed(1));
        if (!X.off) return; const bx = s[0] + X.off[0], by = s[1] + X.off[1]; X.box.setAttribute("transform", "translate(" + bx.toFixed(1) + " " + by.toFixed(1) + ")");
        const ex = clamp(s[0], bx, bx + X.w), ey = clamp(s[1], by, by + X.h); X.leader.setAttribute("x1", s[0].toFixed(1)); X.leader.setAttribute("y1", s[1].toFixed(1)); X.leader.setAttribute("x2", ex.toFixed(1)); X.leader.setAttribute("y2", ey.toFixed(1)); });
    }

    /* ---- label layout: after a flight, a zoom or a resize */
    const hit = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
    function layout() {
      place();
      const taken = [], M = 8, ctrlW = 58;
      const inView = r => r.x >= M && r.y >= M && r.x + r.w <= C.w - M && r.y + r.h <= C.h - M && !(r.x + r.w > C.w - ctrlW - M && r.y < 200);
      pins.forEach(p => taken.push({ x: p.sx - 12, y: p.sy - 12, w: 24, h: 24 }));
      const tryPlace = (X, gap) => {
        const w = X.w, h = X.h, g = gap;
        const C8 = [[g, -h - g * .6], [-w - g, -h - g * .6], [g, g * .6], [-w - g, g * .6], [g + 6, -h / 2], [-w - g - 6, -h / 2], [-w / 2, -h - g - 8], [-w / 2, g + 8], [g * 2.2, -h - g * 2], [-w - g * 2.2, -h - g * 2], [g * 2.2, g * 2], [-w - g * 2.2, g * 2]];
        for (const o of C8) { const r = { x: X.sx + o[0], y: X.sy + o[1], w, h }; if (inView(r) && !taken.some(t => hit(t, r))) { taken.push(r); return o; } }
        return null;
      };
      if (callout) { callout.off = tryPlace(callout, 20) || [16, -callout.h - 14]; callout.g.style.display = ""; }
      extras.forEach(X => { const on = X.sx > -40 && X.sy > -40 && X.sx < C.w + 40 && X.sy < C.h + 40; X.off = on ? tryPlace(X, 14) : null; X.g.style.display = X.off ? "" : "none"; });
      lines.forEach(L => { if (!L.lab) return; L.loff = null; try { const len = L.path.getTotalLength(); const pt = L.path.getPointAtLength(len * .5); const w = textW(L.L.label, "italic 500 12px " + fontUI) + 8, r = { x: pt.x - w / 2, y: pt.y - 22, w, h: 16 };
        if (inView(r) && !taken.some(t => hit(t, r))) { taken.push(r); L.loff = [pt.x.toFixed(1), (pt.y - 10).toFixed(1)]; } } catch (e) { } L.lab.style.display = L.loff ? "" : "none"; });
      const z = zoomOfK(C.cam.k);
      pins.forEach(p => { p.off = null; const cur = p.a.classList.contains("is-cur");
        if (!cur && z >= 3.6 && p.sx > 0 && p.sy > 0 && p.sx < C.w && p.sy < C.h) { const w = textW(p.g.name, "500 11.5px " + fontUI) + 4, h = 14;
          for (const o of [[15, 4], [-15 - w, 4], [-w / 2, 26], [-w / 2, -16]]) { const r = { x: p.sx + o[0], y: p.sy + o[1] - h + 3, w, h }; if (inView(r) && !taken.some(t => t !== null && hit(t, r) && !(Math.abs(t.x - (p.sx - 12)) < .5 && Math.abs(t.y - (p.sy - 12)) < .5))) { taken.push(r); p.off = [o[0], o[1]]; break; } } }
        p.lab.style.display = p.off ? "" : "none"; });
      place();
    }
    function drawIn() {
      if (reduceMotion()) return;
      lines.forEach(L => { try { const len = L.path.getTotalLength(); if (!len) return; L.path.style.transition = "none"; L.path.style.strokeDasharray = len + " " + len; L.path.style.strokeDashoffset = len; L.path.getBoundingClientRect();
        L.path.style.transition = "stroke-dashoffset 1.3s cubic-bezier(.4,.1,.2,1)"; L.path.style.strokeDashoffset = "0";
        setTimeout(() => { L.path.style.transition = ""; L.path.style.strokeDasharray = ""; L.path.style.strokeDashoffset = ""; }, 1400); } catch (e) { } });
    }

    /* ---- camera moves */
    function setCam(c) { C.cam = clampCam(c); place(); }
    function stopAnim() { if (C.anim) cancelAnimationFrame(C.anim); C.anim = 0; svg.classList.remove("is-flying"); }
    function fly(to, opts) {
      opts = opts || {}; stopAnim();
      const from = C.cam, ip = interpZoom([from.x, from.y, C.w / from.k], [to.x, to.y, C.w / to.k]);
      const dur = reduceMotion() || opts.instant ? 0 : clamp(opts.duration || ip.duration * .8, 450, 2100);
      if (!dur) { setCam(to); layout(); if (opts.done) opts.done(); return; }
      svg.classList.add("is-flying");
      const t0 = performance.now();
      const step = now => { const t = clamp((now - t0) / dur, 0, 1), v = ip(ease(t)); C.cam = { x: v[0], y: v[1], k: C.w / v[2] }; place();
        if (t < 1 && C.root.isConnected) C.anim = requestAnimationFrame(step); else { C.anim = 0; svg.classList.remove("is-flying"); C.cam = clampCam(to); layout(); if (opts.done) opts.done(); } };
      C.anim = requestAnimationFrame(step);
    }
    function zoomBy(f, sx, sy, animate) {
      const c = C.cam, px = sx == null ? C.w / 2 : sx, py = sy == null ? C.h / 2 : sy;
      const wx = c.x + (px - C.w / 2) / c.k, wy = c.y + (py - C.h / 2) / c.k, k = clamp(c.k * f, K_MIN(), K_MAX());
      const to = clampCam({ x: wx - (px - C.w / 2) / k, y: wy - (py - C.h / 2) / k, k });
      if (animate) fly(to, { duration: 380 }); else { setCam(to); relayoutSoon(); }
    }
    function relayoutSoon() { clearTimeout(C.layoutT); svg.classList.add("is-moving"); C.layoutT = setTimeout(() => { svg.classList.remove("is-moving"); if (C.root.isConnected) layout(); }, 220); }

    /* ---- panel */
    const card = $(".tour-card", root), steps = $$(".tour-steps button", root), prevB = $('[data-x="tourPrev"]', root), nextB = $('[data-x="tourNext"]', root), sr = $(".tour-sr", root);
    function panel() {
      const vis = visitedIds(tour), n = tour.stops.length;
      card.innerHTML = C.done ? doneHTML(tour) : stopHTML(tour, C.i);
      card.scrollTop = 0; const pnl = $(".tour-panel", root); if (pnl) pnl.scrollTop = 0;
      $$("img", card).forEach(img => img.addEventListener("error", () => { const f = img.closest("figure"); if (f) f.outerHTML = ORN; }, { once: true }));
      steps.forEach((b, i) => { b.className = (i === C.i && !C.done ? "cur" : vis.has(tour.stops[i].id) ? "vis" : ""); b.setAttribute("aria-current", i === C.i && !C.done ? "step" : "false"); });
      prevB.disabled = !C.done && C.i === 0;
      const last = C.i === n - 1;
      nextB.innerHTML = C.done ? "<span>All tours</span>" + IC.right : "<span>" + (last ? "Finish the tour" : "Next") + "</span>" + IC.right;
      nextB.classList.toggle("is-finish", last && !C.done);
      const s = tour.stops[C.i];
      sr.textContent = C.done ? "Tour complete." : "Stop " + (C.i + 1) + " of " + n + ": " + s.place + ", " + (s.year || "") + ". " + s.title;
      D.title = (C.done ? tour.title : s.title) + " · Guided tours · Philodyssey";
    }
    function go(i, opts) {
      opts = opts || {};
      const n = tour.stops.length; i = clamp(i | 0, 0, n - 1);
      C.done = false; C.i = i; markVisit(tour, i);
      try { history.replaceState(history.state, "", "#tours-" + tour.id + "." + (i + 1)); } catch (e) { }
      panel(); pinState(); buildStop();
      fly(camFor(tour.stops[i]), { instant: opts.instant, done: drawIn });
      if (opts.focus) try { card.focus({ preventScroll: true }); } catch (e) { }
    }
    function finish() {
      TS().done[tour.id] = Date.now(); markVisit(tour, tour.stops.length - 1);
      C.done = true;
      try { history.replaceState(history.state, "", "#tours-" + tour.id + ".done"); } catch (e) { }
      panel(); pinState(); buildStop(); fly(camFit());
      try { P.toast("Tour complete: " + tour.title); } catch (e) { }
    }
    C.go = go; C.finish = finish;
    C.next = () => { if (C.done) { location.hash = "#tours"; return; } if (C.i >= tour.stops.length - 1) finish(); else go(C.i + 1); };
    C.prev = () => { if (C.done) { go(tour.stops.length - 1); return; } if (C.i > 0) go(C.i - 1); };
    C.zoomIn = () => zoomBy(2, null, null, true); C.zoomOut = () => zoomBy(.5, null, null, true);
    C.recenter = () => fly(C.done ? camFit() : camFor(tour.stops[C.i]));
    C.fit = () => fly(camFit());

    /* ---- pointer, wheel, pinch */
    const pts = new Map(); let drag = null, pinch = null;
    svg.addEventListener("pointerdown", e => {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      C.dragged = false;
      if (pts.size === 1) drag = { id: e.pointerId, x: e.clientX, y: e.clientY, cx: C.cam.x, cy: C.cam.y, live: false };
      else if (pts.size === 2) { const [a, b] = [...pts.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), k: C.cam.k }; drag = null; stopAnim(); }
    });
    svg.addEventListener("pointermove", e => {
      if (!pts.has(e.pointerId)) return; pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      const r = svg.getBoundingClientRect();
      if (pinch && pts.size >= 2) { const [a, b] = [...pts.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y); C.dragged = true;
        zoomBy((pinch.k * d / pinch.d) / C.cam.k, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top, false); return; }
      if (!drag || drag.id !== e.pointerId) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.live && Math.hypot(dx, dy) > 4) { drag.live = true; C.dragged = true; stopAnim(); try { svg.setPointerCapture(e.pointerId); } catch (x) { } svg.classList.add("is-drag"); }
      if (drag.live) { setCam({ x: drag.cx - dx / C.cam.k, y: drag.cy - dy / C.cam.k, k: C.cam.k }); svg.classList.add("is-moving"); }
    });
    const up = e => { pts.delete(e.pointerId); if (pts.size < 2) pinch = null; if (drag && drag.id === e.pointerId) { if (drag.live) relayoutSoon(); drag = null; svg.classList.remove("is-drag"); } setTimeout(() => { C.dragged = false; }, 0); };
    svg.addEventListener("pointerup", up); svg.addEventListener("pointercancel", up);
    svg.addEventListener("wheel", e => { e.preventDefault(); stopAnim(); const r = svg.getBoundingClientRect(); const dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * 400 : e.deltaY;
      zoomBy(Math.exp(-clamp(dy, -300, 300) * .0022), e.clientX - r.left, e.clientY - r.top, false); }, { passive: false });
    svg.addEventListener("dblclick", e => { const r = svg.getBoundingClientRect(); zoomBy(2, e.clientX - r.left, e.clientY - r.top, true); });

    /* ---- resize */
    let rsT = 0;
    const ro = W.ResizeObserver ? new ResizeObserver(() => { clearTimeout(rsT); rsT = setTimeout(() => { if (!C.root.isConnected) { ro.disconnect(); return; } const k0 = C.w; measure(); if (Math.abs(C.w - k0) > 1 || 1) { stopAnim(); setCam(C.done ? camFit() : camFor(tour.stops[C.i])); layout(); } }, 120); }) : null;
    if (ro) ro.observe(map);

    /* ---- start: arrive with a short flight from the whole tour (or straight there with reduced motion) */
    C.cam = camFit();
    if (C.done) { panel(); pinState(); buildStop(); setCam(camFit()); layout(); }
    else {
      setCam(C.cam);
      C.i = idx; markVisit(tour, idx);
      try { history.replaceState(history.state, "", "#tours-" + tour.id + "." + (idx + 1)); } catch (e) { }
      panel(); pinState(); buildStop();
      setTimeout(() => { if (C.root.isConnected) fly(camFor(tour.stops[idx]), { done: drawIn }); }, 120);
    }
  }

  /* ================================================================== ROUTING */
  function view(arg) {
    if (!arg) { pageMode(false); return listView(); }
    const dot = arg.lastIndexOf("."), id = dot > 0 ? arg.slice(0, dot) : arg, rest = dot > 0 ? arg.slice(dot + 1) : "";
    const tour = BY[id] || BY[arg];
    if (!tour) { setTimeout(() => { try { P.toast("There is no tour called “" + id + "”, so here are all of them."); } catch (e) { } }, 200); pageMode(false); return listView(); }
    const n = tour.stops.length, done = rest === "done" || rest === "end";
    let idx = /^\d+$/.test(rest) ? clamp(+rest - 1, 0, n - 1) : null;
    if (idx == null) { const l = TS().last[tour.id]; idx = done ? n - 1 : typeof l === "number" ? clamp(l, 0, n - 1) : 0; }
    pageMode(true);
    const after = opt("after", null); if (Array.isArray(after)) after.push(() => mount(tour, idx, done));
    else setTimeout(() => mount(tour, idx, done), 0);
    return tourView(tour, idx, done);
  }
  // the tour page fills the window: no top padding on #view, no footer on wide screens
  function pageMode(on) {
    const after = opt("after", null), fn = () => { const v = $("#view"); if (v) { v.classList.toggle("tour-full", on); if (on) v.classList.add("flush"); } D.body.classList.toggle("tour-on", on); };
    if (Array.isArray(after)) after.push(fn); else setTimeout(fn, 0);
  }
  W.addEventListener("hashchange", () => { let r; try { r = P.route(); } catch (e) { return; } if (r.name !== "tours") { D.body.classList.remove("tour-on"); const v = $("#view"); if (v) v.classList.remove("tour-full"); CTL = null; } });

  /* ------------------------------------------------------------------ events (our own data-x namespace) */
  D.addEventListener("click", e => {
    const b = e.target.closest && e.target.closest("[data-x]"); if (!b || !CTL || !CTL.root.isConnected || !CTL.root.contains(b)) return;
    const x = b.dataset.x, C = CTL;
    if (x === "tourNext") C.next(); else if (x === "tourPrev") C.prev();
    else if (x === "tourStep") C.go(+b.dataset.i);
    else if (x === "tourZoomIn") C.zoomIn(); else if (x === "tourZoomOut") C.zoomOut();
    else if (x === "tourRecenter") C.recenter(); else if (x === "tourFit") C.fit();
    else return;
    e.preventDefault();
  });
  D.addEventListener("keydown", e => {
    if (!CTL || !CTL.root.isConnected || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    const t = e.target; if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    const dr = $("#drawer"); if (dr && dr.getAttribute("aria-hidden") === "false") return;
    if ($(".navlib-menu:not([hidden])") || $("dialog[open]")) return;
    const k = e.key;
    if (k === "ArrowRight") { CTL.next(); e.preventDefault(); }
    else if (k === "ArrowLeft") { CTL.prev(); e.preventDefault(); }
    else if (k === "+" || k === "=") { CTL.zoomIn(); e.preventDefault(); }
    else if (k === "-" || k === "_") { CTL.zoomOut(); e.preventDefault(); }
    else if (k === "0") { CTL.recenter(); e.preventDefault(); }
    else if (k === "Escape") { location.hash = "#tours"; e.preventDefault(); }
  });

  /* ------------------------------------------------------------------ the Library menu gets an entry */
  function patchMenu() {
    const menu = $(".navlib-menu"); if (!menu || menu.querySelector('a[href="#tours"]')) return;
    const html = '<a class="navlib-mid tour-menu" href="#tours"><b>Guided tours</b><small>Travel the map of ideas</small></a>';
    const tl = menu.querySelector('a[href="#stoa"]'); if (tl) tl.insertAdjacentHTML("afterend", html); else menu.insertAdjacentHTML("beforeend", html);
  }

  /* ================================================================== CSS */
  const css = `
.tour-root{--tour-sea:var(--ch-sea,#DCE6EC);--tour-sea-hi:color-mix(in srgb,var(--ch-sea,#DCE6EC) 55%,#fff);--tour-land:var(--ch-land,#EFE6D2);--tour-coast:var(--ch-coast,#9C8A62);
  --tour-halo:color-mix(in srgb,var(--ch-sea,#DCE6EC) 40%,#fff);--tour-grat:var(--ch-grat,#B4C3D0);--tour-river:color-mix(in srgb,var(--ch-region,#5B6F86) 45%,var(--ch-sea,#DCE6EC));
  --tour-reg-land:color-mix(in srgb,var(--ch-coast,#9C8A62) 85%,var(--ink,#262319));--tour-reg-sea:color-mix(in srgb,var(--ch-region,#5B6F86) 80%,var(--ch-sea,#DCE6EC));
  --tour-route:var(--ch-route,#8A6B2A);--tour-pill:#242833;--tour-pill-ink:#F5F0E4;--tour-pill-sub:#C9C3B3;--tour-pin:var(--card,#FDFBF6);--tour-pin-ink:var(--ink,#262319);
  --tour-cur:var(--gold,#E8B04A);--tour-cur-ink:#1F1A0E;--tour-vis:color-mix(in srgb,var(--ink-3,#706B59) 60%,var(--tour-land));--tour-vis-ink:var(--tour-land);--tour-text-halo:color-mix(in srgb,var(--ch-land,#EFE6D2) 85%,#fff)}
:root[data-theme="dark"] .tour-root{--tour-sea-hi:color-mix(in srgb,var(--ch-sea,#18202D) 80%,#3A4A66);--tour-halo:color-mix(in srgb,var(--ch-sea,#18202D) 70%,#4A5C7A);--tour-river:color-mix(in srgb,var(--ch-region,#8796AC) 45%,var(--ch-sea,#18202D));
  --tour-pill:#EDE6D2;--tour-pill-ink:#1B1F27;--tour-pill-sub:#5E5A4B;--tour-pin:#2F3542;--tour-pin-ink:var(--ink,#E9E6DC);--tour-vis:#4B5261;--tour-vis-ink:#D6D3CA;--tour-text-halo:var(--ch-land,#2A2D33);--tour-reg-land:color-mix(in srgb,var(--ch-coast,#5E5747) 50%,var(--ink,#E9E6DC))}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .tour-root{--tour-sea-hi:color-mix(in srgb,var(--ch-sea,#18202D) 80%,#3A4A66);--tour-halo:color-mix(in srgb,var(--ch-sea,#18202D) 70%,#4A5C7A);--tour-river:color-mix(in srgb,var(--ch-region,#8796AC) 45%,var(--ch-sea,#18202D));
  --tour-pill:#EDE6D2;--tour-pill-ink:#1B1F27;--tour-pill-sub:#5E5A4B;--tour-pin:#2F3542;--tour-pin-ink:var(--ink,#E9E6DC);--tour-vis:#4B5261;--tour-vis-ink:#D6D3CA;--tour-text-halo:var(--ch-land,#2A2D33);--tour-reg-land:color-mix(in srgb,var(--ch-coast,#5E5747) 50%,var(--ink,#E9E6DC))}}
.tour-defs{position:absolute;width:0;height:0;overflow:hidden}
#view.tour-full{padding-block:0}
@media (min-width:861px){body.tour-on footer.shore{display:none}}
.tour-root kbd{font:600 .78em var(--font-mono,monospace);border:1px solid var(--line);border-bottom-width:2px;border-radius:5px;padding:1px 6px;background:var(--raised)}
.tour-eyebrow{font:600 var(--fs-2xs,.6875rem)/1.2 var(--font-ui);letter-spacing:.14em;text-transform:uppercase;color:var(--lamp-text,var(--lamp-ink))}
/* ---- list */
.tour-tcards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px}
.tour-tcard{position:relative;display:flex;flex-direction:column;background:var(--card,var(--raised));border:1px solid var(--line);border-radius:var(--r-lg,16px);overflow:hidden;box-shadow:var(--shadow-1);transition:box-shadow var(--dur-2,.26s) var(--ease,ease),transform var(--dur-2,.26s) var(--ease,ease)}
.tour-tcard:hover{box-shadow:var(--shadow-2);transform:translateY(-2px)}
.tour-tlink{display:flex;flex-direction:column;flex:1;color:inherit;text-decoration:none}
.tour-tlink:focus-visible{outline:3px solid var(--lamp);outline-offset:-3px;border-radius:var(--r-lg,16px)}
.tour-mini{display:block;width:100%;aspect-ratio:16/9;height:auto;border-bottom:1px solid var(--line)}
.tour-mini .tour-land{fill:var(--tour-land);stroke:var(--tour-coast);stroke-width:.7}
.tour-mini-path{fill:none;stroke:var(--tour-route);stroke-width:1.4;stroke-dasharray:3 3;opacity:.85}
.tour-mini circle{fill:var(--tour-pin);stroke:var(--tour-pin-ink);stroke-width:1.2}
.tour-mini circle.v{fill:var(--tour-cur);stroke:var(--tour-cur-ink)}
.tour-tbody{display:flex;flex-direction:column;gap:6px;padding:16px 18px 18px;flex:1}
.tour-tbody h2{font:600 1.32rem/1.2 var(--font-display);margin:2px 0 0;color:var(--ink)}
.tour-tbody p{margin:0;color:var(--ink-2);font-size:var(--fs-sm,.875rem);line-height:1.5}
.tour-tfoot{display:flex;align-items:center;gap:10px;margin-top:auto;padding-top:10px}
.tour-tfoot small{display:inline-flex;align-items:center;gap:4px;color:var(--ink-3);font:500 var(--fs-xs,.75rem) var(--font-ui);white-space:nowrap}
.tour-tfoot small svg{width:14px;height:14px;color:var(--ok)}
.tour-meter{flex:1;height:6px;border-radius:99px;background:var(--line-2);overflow:hidden}
.tour-meter i{display:block;height:100%;background:var(--lamp);border-radius:inherit}
.tour-cta{display:inline-flex;align-items:center;gap:4px;margin-top:8px;font:600 var(--fs-sm,.875rem) var(--font-ui);color:var(--lapis)}
.tour-cta svg{width:16px;height:16px}
.tour-restart{position:absolute;right:14px;bottom:16px;font:500 var(--fs-xs,.75rem) var(--font-ui);color:var(--ink-3);padding:6px 4px}
.tour-hint{color:var(--ink-3);font-size:var(--fs-sm,.875rem);margin:0}
/* ---- stage */
.tour-stage{display:grid;grid-template-columns:min(410px,38vw) minmax(0,1fr);grid-template-areas:"panel map";height:calc(100dvh - var(--tour-top,64px));min-height:520px;background:var(--bg)}
.tour-panel{grid-area:panel;display:flex;flex-direction:column;min-height:0;border-right:1px solid var(--line);background:var(--surface);position:relative;z-index:1;box-shadow:4px 0 18px rgba(20,16,8,.06)}
.tour-phead{display:flex;align-items:center;gap:10px;padding:12px 18px 8px;min-width:0}
.tour-back{display:inline-flex;align-items:center;gap:2px;font:600 var(--fs-sm,.875rem) var(--font-ui);color:var(--lapis);text-decoration:none;min-height:44px;padding-right:4px;white-space:nowrap}
.tour-back svg{width:18px;height:18px}
.tour-ptitle{font:500 var(--fs-xs,.75rem) var(--font-ui);color:var(--ink-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-left:auto}
.tour-steps{display:flex;gap:3px;padding:0 18px 4px}
.tour-steps button{flex:1;height:18px;padding:0;border:0;background:none;cursor:pointer;position:relative;min-width:0}
.tour-steps button::after{content:"";position:absolute;left:0;right:0;top:7px;height:4px;border-radius:99px;background:var(--line);transition:background var(--dur-1,.15s)}
.tour-steps button.vis::after{background:color-mix(in srgb,var(--lamp) 45%,var(--line))}
.tour-steps button.cur::after{background:var(--lamp);top:6px;height:6px}
.tour-steps button:hover::after{background:var(--lamp-ink)}
.tour-steps button:focus-visible{outline:2px solid var(--lamp);outline-offset:1px;border-radius:4px}
.tour-card{flex:1;overflow:auto;padding:10px 22px 22px;outline:none;overscroll-behavior:contain}
.tour-kicker{display:flex;justify-content:space-between;gap:10px;font:600 var(--fs-2xs,.6875rem)/1.2 var(--font-ui);letter-spacing:.16em;text-transform:uppercase;color:var(--lamp-text,var(--lamp-ink));margin:6px 0 12px}
.tour-kicker span:last-child{color:var(--ink-3);letter-spacing:.08em}
.tour-fig{margin:0 0 14px;border-radius:var(--r-md,12px);overflow:hidden;background:var(--line-2)}
.tour-fig img{display:block;width:100%;height:200px;object-fit:cover}
.tour-fig figcaption{font:400 var(--fs-2xs,.6875rem)/1.35 var(--font-ui);color:var(--ink-3);padding:6px 10px;background:var(--surface)}
.tour-orn{display:block;width:100%;height:40px;margin:0 0 6px}
.tour-orn .o1{stroke:var(--tour-coast);stroke-width:1;fill:none}.tour-orn .o2{stroke:var(--tour-coast);stroke-width:.6;fill:none;opacity:.6}
.tour-orn .o3{fill:none;stroke:var(--tour-coast);stroke-width:.9}.tour-orn .o4{fill:var(--lamp);opacity:.85}.tour-orn .o5{fill:var(--surface)}
.tour-title{font:600 clamp(1.4rem,2.1vw,1.75rem)/1.15 var(--font-display);margin:0 0 6px;color:var(--ink);text-wrap:balance}
.tour-place{display:flex;align-items:center;gap:5px;margin:0 0 14px;color:var(--ink-3);font:500 var(--fs-sm,.875rem) var(--font-ui)}
.tour-place svg{width:15px;height:15px;flex:none}
.tour-take{margin:0 0 14px;padding:12px 14px;border-left:3px solid var(--lamp);border-radius:0 var(--r-sm,8px) var(--r-sm,8px) 0;background:var(--lamp-soft);color:var(--ink);font:600 1.06rem/1.4 var(--font-read)}
.tour-body{margin:0 0 12px;color:var(--ink);font:400 1rem/1.6 var(--font-read)}
.tour-more{margin:0 0 14px}
.tour-more summary{display:inline-flex;align-items:center;gap:6px;min-height:44px;cursor:pointer;list-style:none;font:600 var(--fs-sm,.875rem) var(--font-ui);color:var(--lapis)}
.tour-more summary::-webkit-details-marker{display:none}
.tour-more summary::before{display:none!important}
.tour-more summary span{display:inline-block;transition:transform var(--dur-2,.26s) var(--ease,ease)}
.tour-more[open] summary span{transform:rotate(180deg)}
.tour-more p{margin:2px 0 0;color:var(--ink-2);font:400 .96rem/1.6 var(--font-read)}
.tour-meet{display:flex;flex-direction:column;gap:8px;margin:6px 0 14px}
.tour-chips{display:flex;flex-wrap:wrap;gap:8px}
.tour-chip{display:inline-flex;flex-direction:column;justify-content:center;min-height:44px;padding:6px 12px;border:1px solid var(--line);border-radius:var(--r-md,12px);background:var(--card,var(--raised));color:var(--ink);text-decoration:none;font:600 var(--fs-sm,.875rem)/1.2 var(--font-ui)}
.tour-chip small{font-weight:400;font-size:var(--fs-2xs,.6875rem);color:var(--ink-3);margin-top:2px}
.tour-chip:hover{border-color:var(--lamp)}
.tour-go{display:inline-flex;align-items:center;gap:6px;min-height:44px;margin:0 14px 0 0;font:600 var(--fs-sm,.875rem) var(--font-ui);color:var(--lapis);text-decoration:none}
.tour-go svg{width:16px;height:16px}.tour-go:hover{text-decoration:underline}
.tour-go-quiet{color:var(--ink-3)}
.tour-nav{display:flex;gap:10px;padding:12px 18px calc(12px + env(safe-area-inset-bottom,0px));border-top:1px solid var(--line);background:var(--surface)}
.tour-btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:46px;padding:0 16px;border-radius:var(--r-md,12px);border:1.5px solid var(--line-input,var(--line));background:var(--card,var(--raised));color:var(--ink);font:600 var(--fs-md,1rem) var(--font-ui);cursor:pointer;transition:background var(--dur-1,.15s),border-color var(--dur-1,.15s),transform var(--dur-1,.15s)}
.tour-btn svg{width:18px;height:18px}
.tour-btn:hover:not(:disabled){border-color:var(--lamp)}
.tour-btn:active:not(:disabled){transform:translateY(1px)}
.tour-btn:disabled{opacity:.4;cursor:default}
.tour-btn:focus-visible{outline:3px solid var(--lamp);outline-offset:2px}
.tour-next{flex:1.6;background:var(--go,var(--lamp));border-color:var(--go,var(--lamp));color:var(--on-go,#1F1A0E)}
.tour-next:hover:not(:disabled){background:color-mix(in srgb,var(--lamp) 88%,#000);border-color:color-mix(in srgb,var(--lamp) 88%,#000)}
.tour-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;margin:0}
/* ---- map */
.tour-map{grid-area:map;position:relative;overflow:hidden;min-width:0;min-height:0;background:var(--tour-sea)}
.tour-svg{position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;user-select:none;-webkit-user-select:none}
.tour-svg.is-drag{cursor:grabbing}
.tour-grain{position:absolute;inset:0;pointer-events:none;background-image:var(--grain);opacity:.9;mix-blend-mode:multiply}
:root[data-theme="dark"] .tour-grain{mix-blend-mode:screen;opacity:.6}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .tour-grain{mix-blend-mode:screen;opacity:.6}}
.tour-map::after{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 90px color-mix(in srgb,var(--tour-coast) 28%,transparent)}
.tour-grat{fill:none;stroke:var(--tour-grat);stroke-width:.7;stroke-dasharray:2 4;opacity:.8}
.tour-halo{fill:none;stroke:var(--tour-halo);stroke-width:7;stroke-linejoin:round;opacity:.9}
.tour-land{fill:var(--tour-land);stroke:var(--tour-coast);stroke-width:.9;stroke-linejoin:round}
.tour-lake{fill:var(--tour-sea);stroke:var(--tour-coast);stroke-width:.6}
.tour-river{fill:none;stroke:var(--tour-river);stroke-width:1.1;stroke-linecap:round;stroke-linejoin:round;opacity:.85}
.is-flying .tour-halo,.is-moving .tour-halo{opacity:0}
.tour-reg{pointer-events:none;paint-order:stroke;stroke-linejoin:round}
.tour-reg-sea{font:italic 400 13px var(--font-display);fill:var(--tour-reg-sea);letter-spacing:.06em;stroke:var(--tour-sea);stroke-width:3;opacity:.9}
.tour-reg-land{font:600 10.5px var(--font-ui);fill:var(--tour-reg-land);letter-spacing:.32em;stroke:var(--tour-land);stroke-width:3;opacity:.65}
.tour-journey path{fill:none;stroke-linecap:round;pointer-events:none}
.tour-jfuture{stroke:var(--tour-route);stroke-width:1.2;stroke-dasharray:1 5}
.tour-jpast{stroke:var(--tour-route);stroke-width:1.4;stroke-dasharray:5 4}
.tour-line{fill:none;stroke-linecap:round;stroke-linejoin:round;pointer-events:none}
.tour-line-route{stroke:var(--crack,#B5452F);stroke-width:2.4;opacity:.85}
.tour-line-flow{stroke:var(--lapis,#2C4870);stroke-width:2;stroke-dasharray:7 6;animation:tourFlow 1.2s linear infinite}
.tour-arrowhead{fill:var(--lapis,#2C4870)}
@keyframes tourFlow{to{stroke-dashoffset:-13}}
.tour-line-label{font:italic 500 12px var(--font-ui);fill:var(--ink-2);paint-order:stroke;stroke:var(--tour-text-halo);stroke-width:3.5;stroke-linejoin:round;pointer-events:none}
.tour-pin{cursor:pointer;outline:none}
.tour-pin-dot{fill:var(--tour-pin);stroke:var(--tour-pin-ink);stroke-width:1.6;transition:fill var(--dur-2,.26s),r var(--dur-2,.26s)}
.tour-pin-n{font:700 10.5px var(--font-ui);fill:var(--tour-pin-ink);pointer-events:none}
.tour-pin-pulse{fill:var(--tour-cur);opacity:0;pointer-events:none}
.tour-pin-badge circle{fill:var(--tour-pill);stroke:var(--tour-land);stroke-width:1.2}
.tour-pin-badge text{font:700 8.5px var(--font-ui);fill:var(--tour-pill-ink)}
.tour-pin.is-vis .tour-pin-dot{fill:var(--tour-vis);stroke:color-mix(in srgb,var(--tour-pin-ink) 45%,transparent)}
.tour-pin.is-vis .tour-pin-n{fill:var(--tour-vis-ink)}
.tour-pin.is-vis{opacity:.82}
.tour-pin.is-cur .tour-pin-dot{fill:var(--tour-cur);stroke:var(--tour-cur-ink);r:12.5;stroke-width:2}
.tour-pin.is-cur .tour-pin-n{fill:var(--tour-cur-ink);font-size:11.5px}
.tour-pin.is-cur .tour-pin-pulse{animation:tourPulse 2s ease-out infinite;transform-box:fill-box;transform-origin:center}
@keyframes tourPulse{0%{opacity:.55;transform:scale(.7)}100%{opacity:0;transform:scale(2.1)}}
.tour-pin:hover .tour-pin-dot,.tour-pin:focus-visible .tour-pin-dot{stroke:var(--lamp);stroke-width:3}
.tour-pin-tie{stroke:var(--tour-pin-ink);stroke-width:1;opacity:.45;pointer-events:none}
.tour-pin-label{font:500 11.5px var(--font-ui);fill:var(--ink-2);paint-order:stroke;stroke:var(--tour-text-halo);stroke-width:3.5;stroke-linejoin:round;pointer-events:none}
.tour-pill rect{fill:var(--tour-pill);filter:drop-shadow(0 2px 4px rgba(0,0,0,.22))}
.tour-pill text{font-family:var(--font-ui);fill:var(--tour-pill-ink)}
.tour-pill .b{font-weight:600}.tour-pill .s{font-weight:400;fill:var(--tour-pill-sub)}
.tour-leader{stroke:var(--tour-pill);stroke-width:1.2;opacity:.75}
.tour-anchor{fill:var(--tour-land);stroke:var(--tour-pill);stroke-width:1.5}
.tour-extra .tour-pill rect{opacity:.92}
.tour-callouts,.tour-extras,.tour-lines{transition:opacity .3s}
.is-flying .tour-callouts,.is-flying .tour-extras,.is-flying .tour-lines,.is-flying .tour-pin-label,.is-moving .tour-pin-label,.is-moving .tour-line-label{opacity:0}
.tour-ctrls{position:absolute;top:14px;right:14px;display:flex;flex-direction:column;border-radius:var(--r-md,12px);background:var(--card,var(--raised));box-shadow:var(--shadow-2);border:1px solid var(--line);overflow:hidden}
.tour-ctrls button{width:44px;height:44px;display:grid;place-items:center;border:0;background:none;color:var(--ink);cursor:pointer}
.tour-ctrls button+button{border-top:1px solid var(--line)}
.tour-ctrls button:hover{background:var(--lamp-soft)}
.tour-ctrls button:focus-visible{outline:3px solid var(--lamp);outline-offset:-3px}
.tour-ctrls svg{width:20px;height:20px}
.tour-rose{position:absolute;left:16px;bottom:16px;width:76px;height:76px;pointer-events:none;opacity:.8}
.tour-rose .r1{fill:none;stroke:var(--tour-coast);stroke-width:1}.tour-rose .r2{fill:none;stroke:var(--tour-coast);stroke-width:.6;stroke-dasharray:1 2}
.tour-rose .r3 path{fill:var(--tour-coast)}.tour-rose .r3 .lo{fill:color-mix(in srgb,var(--tour-coast) 55%,var(--tour-land))}
.tour-rose .r4 path{fill:color-mix(in srgb,var(--tour-coast) 70%,var(--tour-land))}
.tour-rose text{font:700 10px var(--font-display);fill:var(--tour-coast)}
.tour-attrib{position:absolute;right:10px;bottom:6px;font:400 10px var(--font-ui);color:var(--ink-3);opacity:.8;pointer-events:none}
/* ---- phones and narrow windows: the map on top, the story below */
@media (max-width:860px){
  .tour-stage{display:flex;flex-direction:column;height:auto;min-height:0}
  .tour-map{order:0;height:55vh;height:55svh;min-height:300px;flex:none}
  .tour-panel{order:1;border-right:0;border-top:1px solid var(--line);box-shadow:none}
  .tour-card{overflow:visible;padding:8px 18px 18px}
  .tour-nav{position:sticky;bottom:var(--tour-helm,0px);z-index:5;box-shadow:0 -6px 16px rgba(20,16,8,.08)}
  .tour-phead{padding:8px 16px 4px}.tour-steps{padding:0 16px 4px}
  .tour-rose{width:56px;height:56px;left:10px;bottom:10px}
  .tour-ctrls{top:10px;right:10px}
  .tour-fig img{height:180px}
}
@media (prefers-reduced-motion:reduce){.tour-line-flow{animation:none}.tour-pin.is-cur .tour-pin-pulse{animation:none;opacity:.25;transform:scale(1.4)}.tour-tcard,.tour-tcard:hover{transition:none;transform:none}.tour-more summary span{transition:none}}
`;
  const st = D.createElement("style"); st.id = "tours-css"; st.textContent = css; D.body.appendChild(st);

  /* ================================================================== BOOT */
  P.VIEWS.tours = view;
  try { const A = P.ROUTE_ALIAS; if (A && typeof A === "object") { A.tour = "tours"; A.guided = "tours"; } } catch (e) { }
  // check(): every thinker id and link in the tour data that the app cannot resolve (for whoever edits data/atlas-tours.js)
  const check = () => { const out = []; TOURS.forEach(t => t.stops.forEach((s, i) => { const at = t.id + "." + (i + 1) + " (" + s.id + ")";
    (s.th || []).forEach(id => { if (!TH()[id]) out.push(at + ": unknown thinker " + id); });
    if (s.link && !linkInfo(s.link)) out.push(at + ": link " + s.link + " does not resolve");
    if (String(s.takeaway || "").length > 90) out.push(at + ": takeaway longer than 90 characters");
    if (typeof s.lat !== "number" || typeof s.lon !== "number") out.push(at + ": missing lat/lon"); })); return out; };
  W.PHILO_TOURS = { tours: TOURS, check, go: (id, n) => { location.hash = "#tours-" + id + (n ? "." + n : ""); } };
  // tours live inside the Voyage now, so the Library menu keeps no entry for them
  let r0 = null; try { r0 = P.route(); } catch (e) { }
  // the Voyage page and the home page show tour cards, so draw them again now that the tours exist
  if (r0 && ["voyage", "home"].includes(r0.name) && !r0.arg) P.render(true);
  if (r0 && r0.name === "tours") {
    P.render(false);
    // the first render ran before this file loaded and queued a "no page at #tours" toast: take it back
    [230, 420].forEach(ms => setTimeout(() => { const t = $("#toast"); if (t && /There is no page at/.test(t.textContent)) t.hidden = true; }, ms));
  }
})();
