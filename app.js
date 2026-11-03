(function () {
  "use strict";
  var LS_KEY = "english-in-the-pocket:fav";
  var cats = window.CATEGORIES || [];

  var all = [];
  cats.forEach(function (c) {
    c.items.forEach(function (r, i) {
      all.push({ id: c.id + "-" + (i + 1), cat: c.id, en: r[0], it: r[1], ex: r[2] || "", exIt: r[3] || "", note: r[4] || "" });
    });
  });

  var sections = (window.SECTIONS || []).map(function (s) {
    return { id: s.id, icon: s.icon, title: s.title, color: s.color,
      groups: s.groups.map(function (g) { return cats.find(function (c) { return c.id === g; }); }).filter(Boolean) };
  });

  var favs = new Set();
  try { JSON.parse(localStorage.getItem(LS_KEY) || "[]").forEach(function (x) { favs.add(x); }); } catch (e) {}
  var view = "all", query = "", openState = {};
  var sb = null, user = null;

  var $ = function (s) { return document.querySelector(s); };
  var listEl = $("#list"), statusEl = $("#status"), qEl = $("#q");

  function saveLocal() { try { localStorage.setItem(LS_KEY, JSON.stringify(Array.from(favs))); } catch (e) {} }
  function norm(s) { return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’]/g, "'"); }
  function esc(s) { return (s || "").replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function hl(text) {
    var t = esc(text), q = norm(query).trim();
    if (!q) return t;
    var n = norm(text), idx = n.indexOf(q);
    if (idx < 0 || n.length !== text.length) return t;
    return esc(text.slice(0, idx)) + "<mark>" + esc(text.slice(idx, idx + q.length)) + "</mark>" + esc(text.slice(idx + q.length));
  }

  function matches(it) {
    if (view === "fav" && !favs.has(it.id)) return false;
    var q = norm(query).trim();
    if (!q) return true;
    return norm(it.en + " " + it.it + " " + it.ex + " " + it.exIt).indexOf(q) >= 0;
  }

  var canSpeak = "speechSynthesis" in window;
  function itemHTML(it) {
    var fav = favs.has(it.id);
    return '<div class="item" data-id="' + it.id + '">' +
      '<div class="en">' + hl(it.en) + '</div>' +
      '<div class="acts">' +
        (canSpeak ? '<button class="ic say" title="Ascolta" aria-label="Ascolta">🔊</button>' : "") +
        '<button class="ic star' + (fav ? " on" : "") + '" title="Preferita" aria-label="Preferita" aria-pressed="' + fav + '">' + (fav ? "★" : "☆") + '</button>' +
      '</div>' +
      '<div class="it">' + hl(it.it) + '</div>' +
      (it.ex ? '<div class="ex"><em>' + hl(it.ex) + '</em><span>' + hl(it.exIt) + '</span></div>' : "") +
      (it.note ? '<div class="note">' + esc(it.note) + '</div>' : "") +
      '</div>';
  }

  function render() {
    var searching = !!norm(query).trim();
    var html = "", total = 0;
    sections.forEach(function (s) {
      var parts = "", count = 0;
      s.groups.forEach(function (g) {
        var rows = all.filter(function (it) { return it.cat === g.id && matches(it); });
        if (!rows.length) return;
        count += rows.length;
        parts += '<h3 class="sub">' + esc(g.title) + '</h3>' + rows.map(itemHTML).join("");
      });
      if (!count) return;
      total += count;
      var open = searching || view === "fav" || openState[s.id];
      html += '<details class="cat" data-cat="' + s.id + '" style="--c:' + s.color + '"' + (open ? " open" : "") + '>' +
        '<summary><span class="tile">' + s.icon + '</span><span class="ttl">' + esc(s.title) + '</span>' +
        '<span class="n">' + count + '</span></summary><div class="body">' + parts + '</div></details>';
    });
    if (!total) {
      html = '<div class="empty">' + (view === "fav" && !searching
        ? "Nessuna preferita per ora. Tocca ☆ accanto a una frase per salvarla."
        : "Nessun risultato. Prova con un'altra parola.") + '</div>';
    }
    listEl.innerHTML = html;
    statusEl.textContent = searching ? total + (total === 1 ? " risultato" : " risultati")
      : (view === "fav" ? "" : all.length + " espressioni in " + sections.length + " sezioni");
    $("#favCount").textContent = favs.size;
  }

  listEl.addEventListener("toggle", function (e) {
    var d = e.target; if (d.dataset && d.dataset.cat) openState[d.dataset.cat] = d.open;
  }, true);

  listEl.addEventListener("click", function (e) {
    var row = e.target.closest(".item"); if (!row) return;
    var it = all.find(function (x) { return x.id === row.dataset.id; });
    if (e.target.closest(".say")) { speak(it.en.replace(/…/g, "").replace(/\s*\/\s*/g, ". ")); return; }
    if (e.target.closest(".star")) toggleFav(it.id);
  });
  function toggleFav(id) {
    var on = !favs.has(id);
    if (on) favs.add(id); else favs.delete(id);
    saveLocal();
    if (sb && user) remoteSet(id, on);
    var y = window.scrollY;
    render();
    window.scrollTo(0, y);
  }

  var voice = null;
  function pickVoice() {
    var vs = speechSynthesis.getVoices().filter(function (v) { return /^en[-_](GB|US|AU|IE)/i.test(v.lang); });
    var rank = function (v) { return /premium|enhanced|natural|neural|siri/i.test(v.name) ? 0 : /google/i.test(v.name) ? 1 : 2; };
    vs.sort(function (a, b) { return rank(a) - rank(b); });
    voice = vs[0] || null;
  }
  if (canSpeak) { pickVoice(); speechSynthesis.addEventListener("voiceschanged", pickVoice); }

  function speak(text) {
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      if (voice) u.voice = voice;
      u.lang = voice ? voice.lang : "en-GB";
      u.rate = 0.9;
      speechSynthesis.speak(u);
    } catch (e) {}
  }

  qEl.addEventListener("input", function () { query = qEl.value; render(); });
  $("#tab-all").addEventListener("click", function () { setView("all"); });
  $("#tab-fav").addEventListener("click", function () { setView("fav"); });
  function setView(v) {
    view = v;
    $("#tab-all").classList.toggle("active", v === "all");
    $("#tab-fav").classList.toggle("active", v === "fav");
    render();
  }

  // ---- accesso facoltativo (Supabase) ----
  var cfg = window.APP_CONFIG || {};
  var authEl = $("#auth");

  var dlg = $("#loginDlg"), formEl = $("#loginForm"), emailEl = $("#loginEmail"),
      passEl = $("#loginPass"), msgEl = $("#loginMsg"), sendBtn = $("#loginSend"), mode = "in";

  var ALLOW_GUEST = false;   // true = mostra "Continua senza account"
  var guest = false;

  function isLocked() { return document.body.classList.contains("locked"); }

  function playReveal() {
  var b = document.body;
  b.classList.add("reveal");
  setTimeout(function () { b.classList.remove("reveal"); }, 1300);
  }

  function neuralBurst(host) {
    var cv = document.createElement("canvas");
    cv.className = "neural";
    host.appendChild(cv);
    var ctx = cv.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = host.clientWidth, H = host.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var bg = (getComputedStyle(host).backgroundColor.match(/[\d.]+/g) || [255, 255, 255]).map(Number);
    var lum = 0.299 * bg[0] + 0.587 * bg[1] + 0.114 * bg[2];
    ctx.fillStyle = lum < 128 ? "rgb(205,232,255)" : "rgb(26,34,54)";

    var N = Math.round(Math.max(4500, Math.min(12000, (W * H) / 180)));
    var R0 = Math.min(W, H) * 0.5;
    var kd = Math.max(0.9, Math.min(1.4, Math.min(W, H) / 700));

    var S = [
      { n: 0.62, sx: 0.75, sy: 1.00, ox: -0.06, oy: -0.04, tw0: 0.3,  tw1: 1.3,  twa: 0.9, ph: 0.0, rz: -0.25, th: 0.14 },
      { n: 0.38, sx: 1.35, sy: 0.38, ox:  0.10, oy:  0.14, tw0: -0.4, tw1: -1.1, twa: 0.8, ph: 2.1, rz:  0.12, th: 0.12 }
    ];

    var b = [], i, a, r, ang, k;
    for (i = 0; i < N; i++) {
      do {
        a = Math.random() * 2 - 1; r = Math.random() * 2 - 1;
      } while (a * a + r * r > 1);
      ang = Math.random() * Math.PI * 2;
      b.push({
        a: a, b: r,
        c: Math.random() + Math.random() + Math.random() - 1.5,
        s: i < N * S[0].n ? 0 : 1,
        ph: Math.random() * 6.283,
        ex: Math.cos(ang) * (0.5 + Math.random()), ey: Math.sin(ang) * (0.5 + Math.random())
      });
    }

    var t0 = performance.now(), raf = 0, alive = true;
    var T_DISP = 1.9, D_DISP = 0.8;
    requestAnimationFrame(function () { cv.classList.add("on"); });

    function frame(now) {
      if (!alive) return;
      var t = (now - t0) / 1000;
      var g = Math.min(1, t / 0.9); g = 1 - Math.pow(1 - g, 3);
      var R = R0 * (0.1 + 0.9 * g);
      var disp = Math.max(0, Math.min(1, (t - T_DISP) / D_DISP));
      var spread = disp * disp * Math.min(W, H) * 0.35;

      var j, s, rz;
      for (j = 0; j < S.length; j++) {
        s = S[j];
        s.cx = W / 2 + W * (s.ox + 0.06 * Math.sin(0.6 * t + s.ph)) * g;
        s.cy = H / 2 + H * (s.oy + 0.05 * Math.sin(0.8 * t + s.ph + 1)) * g;
        rz = s.rz + 0.25 * Math.sin(0.5 * t + s.ph);
        s.cr = Math.cos(rz); s.sr = Math.sin(rz);
      }

      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = 1 - disp;
      var p, X, Y, th, ct, st, c, x, y, z, f, u, v, px, py, dot, fl;
      for (i = 0; i < N; i++) {
        p = b[i]; s = S[p.s];
        X = p.a * s.sx; Y = p.b * s.sy;
        th = s.tw0 + s.tw1 * p.b + s.twa * Math.sin(0.8 * t + s.ph + p.b * 1.5);
        ct = Math.cos(th); st = Math.sin(th);
        c = p.c * s.th;
        x = X * ct + c * st;
        z = -X * st + c * ct;
        y = Y + 0.12 * Math.sin(2.2 * X + 0.9 * t + s.ph);
        fl = 0.012 * Math.sin(7 * t + p.ph);
        x += fl; y -= fl;
        f = 1 / Math.max(0.4, 1 - z * 0.25);
        u = x * R * f; v = y * R * f;
        px = s.cx + u * s.cr - v * s.sr + p.ex * spread;
        py = s.cy + u * s.sr + v * s.cr + p.ey * spread;
        dot = (0.9 + 0.5 * f) * kd;
        ctx.fillRect(px - dot / 2, py - dot / 2, dot, dot);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return function stop() {
      alive = false; cancelAnimationFrame(raf);
      if (cv.parentNode) cv.parentNode.removeChild(cv);
    };
  }
  function enterApp() {
    if (dlg.classList.contains("leaving") || dlg.classList.contains("morph")) return;
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isLocked() || reduce) {
      document.body.classList.remove("locked");
      if (dlg.open) dlg.close();
      return;
    }
    dlg.classList.add("morph");
    var stop = neuralBurst(dlg);
    setTimeout(function () {
      document.body.classList.add("unveil");
      playReveal();
      dlg.classList.add("leaving");
    }, 2400);
    setTimeout(function () {
      stop();
      document.body.classList.remove("locked", "unveil");
      dlg.close();
      dlg.classList.remove("leaving", "morph");
    }, 3050);
  }
  function gate() {
    if (!sb || !dlg) return;
    var need = !user && !(ALLOW_GUEST && guest);
    if (need) {
      document.body.classList.add("locked");
      if (!dlg.open) openLogin();
    } else if (dlg.open) {
      enterApp();
    } else if (isLocked()) {
      document.body.classList.remove("locked");
      playReveal();
    }
  }
  
  function drawAuth() {
    if (!sb) return;
    authEl.hidden = false;
    if (user) {
      var initial = (user.email || "?").charAt(0).toUpperCase();
      authEl.innerHTML = '<button id="out" class="btn-login" title="' + esc(user.email || "") + '"><span class="av">' + esc(initial) + '</span>Esci</button>';
      $("#out").onclick = function () { sb.auth.signOut(); };
    } else {
      authEl.innerHTML = '<button id="in" class="btn-login">Login</button>';
      $("#in").onclick = openLogin;
    }
  }

  function setMsg(t, kind) { msgEl.textContent = t; msgEl.className = "dlg-msg " + (kind || ""); }

  function setMode(m) {
    mode = m;
    $("#loginTitle").textContent = m === "in" ? "Accedi" : "Crea un account";
    sendBtn.textContent = m === "in" ? "Accedi" : "Registrati";
    $("#switchTxt").textContent = m === "in" ? "Non hai un account?" : "Hai già un account?";
    $("#loginSwitch").textContent = m === "in" ? "Registrati" : "Accedi";
    passEl.autocomplete = m === "in" ? "current-password" : "new-password";
    setMsg("", "");
  }

  function openLogin() {
    setMode("in");
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    emailEl.focus();
  }

  function friendly(err) {
    var m = (err && err.message || "").toLowerCase();
    if (m.indexOf("invalid login") >= 0) return "Email o password non corretti.";
    if (m.indexOf("already registered") >= 0) return "Esiste già un account con questa email: prova ad accedere.";
    if (m.indexOf("rate limit") >= 0) return "Troppi tentativi. Riprova tra poco.";
    if (m.indexOf("password") >= 0) return "La password non è valida (minimo 6 caratteri).";
    return "Operazione non riuscita. Riprova.";
  }

  if (dlg) {
    $("#loginCancel").addEventListener("click", function () { dlg.close(); });
    $("#loginSwitch").addEventListener("click", function () { setMode(mode === "in" ? "up" : "in"); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg && !isLocked()) dlg.close(); });
    dlg.addEventListener("cancel", function (e) { if (isLocked()) e.preventDefault(); });
    dlg.addEventListener("close", function () { if (isLocked()) openLogin(); });
    var skip = $("#loginSkip");
    if (skip) {
      skip.hidden = !ALLOW_GUEST;
      skip.addEventListener("click", function () { guest = true; gate(); });
    }
    formEl.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = emailEl.value.trim(), pass = passEl.value;
      if (!/^\S+@\S+\.\S+$/.test(email)) return setMsg("Controlla l'indirizzo email.", "err");
      if (pass.length < 6) return setMsg("La password deve avere almeno 6 caratteri.", "err");
      sendBtn.disabled = true;
      var call = mode === "in" ? sb.auth.signInWithPassword({ email: email, password: pass })
                              : sb.auth.signUp({ email: email, password: pass });
      call.then(function (r) {
        sendBtn.disabled = false;
        if (r.error) return setMsg(friendly(r.error), "err");
        if (!r.data.session) return setMsg("Account creato. Controlla la posta per confermarlo, poi accedi.", "ok");
        passEl.value = "";
        enterApp();
      }).catch(function () { sendBtn.disabled = false; setMsg("Connessione non riuscita. Riprova.", "err"); });
    });
  }

  function remoteSet(id, on) {
    var q = on ? sb.from("favorites").upsert({ user_id: user.id, phrase_id: id })
               : sb.from("favorites").delete().eq("user_id", user.id).eq("phrase_id", id);
    q.then(function (r) { if (r.error) console.warn("Salvataggio non riuscito:", r.error.message); });
  }

  function syncRemote() {
    if (!sb || !user) return;
    sb.from("favorites").select("phrase_id").then(function (r) {
      if (r.error) { console.warn(r.error.message); return; }
      var remote = new Set(r.data.map(function (x) { return x.phrase_id; }));
      var toPush = [];
      favs.forEach(function (id) { if (!remote.has(id)) toPush.push({ user_id: user.id, phrase_id: id }); });
      remote.forEach(function (id) { favs.add(id); });
      saveLocal(); render();
      if (toPush.length) sb.from("favorites").upsert(toPush).then(function () {});
    });
  }

  function initAuth() {
    if (!cfg.supabaseUrl || !cfg.supabaseAnonKey) return;
    document.body.classList.add("locked");
    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    s.onerror = function () { document.body.classList.remove("locked"); };
    s.onload = function () {
      sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
      sb.auth.getSession().then(function (r) {
        user = r.data.session ? r.data.session.user : null;
        drawAuth(); syncRemote(); gate();
      });
      sb.auth.onAuthStateChange(function (event, session) {
        user = session ? session.user : null;
        if (event === "SIGNED_OUT") { favs.clear(); saveLocal(); render(); }
        drawAuth(); syncRemote(); gate();
      });
    };
    document.head.appendChild(s);
  }
  render();
  initAuth();
})();
