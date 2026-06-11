/* ============================================================
   WE DIE YOUNG — main.js（表示プログラム）
   ★ 通常はこのファイルを編集する必要はありません。
     コンテンツの更新はすべて js/data.js で行ってください。
   ============================================================ */

(function () {
  "use strict";

  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

  let io; // IntersectionObserver（observeRevealsで使用）

  const esc = (s) =>
    String(s || "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  const fmtDate = (iso) => {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return `${y}.${m}.${d}`;
  };

  const linkBtns = (links) =>
    Object.entries(links || {})
      .filter(([, url]) => url)
      .map(
        ([name, url]) =>
          `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(name)}</a>`
      )
      .join("");

  /* ---------- SEO: data.jsの内容をmetaに反映 ---------- */
  document.title = `${SITE.siteName} | ${SITE.taglineSub}`;
  const setMeta = (sel, val) => { const el = $(sel); if (el && val) el.setAttribute("content", val); };
  setMeta('meta[name="description"]', SITE.description);
  setMeta('meta[property="og:title"]', `${SITE.siteName} | ${SITE.taglineSub}`);
  setMeta('meta[property="og:description"]', SITE.description);
  setMeta('meta[property="og:url"]', SITE.siteUrl);
  setMeta('meta[property="og:image"]', SITE.siteUrl.replace(/\/$/, "") + "/assets/images/ogp.png");
  setMeta('meta[name="twitter:image"]', SITE.siteUrl.replace(/\/$/, "") + "/assets/images/ogp.png");

  /* ---------- ヒーロー ---------- */
  $("#hero-sub").textContent = SITE.taglineSub;
  const tg = SITE.tagline.split("—");
  $("#hero-tagline").innerHTML =
    tg.length > 1
      ? `<em>${esc(tg[0].trim())}</em> — ${esc(tg.slice(1).join("—").trim())}`
      : esc(SITE.tagline);

  /* ---------- リリース描画 ---------- */
  const releaseCard = (r) => `
    <article class="release-card reveal">
      <div class="release-cover"><img src="${esc(r.cover)}" alt="${esc(r.title)} — ${esc(r.artist)}" loading="lazy"></div>
      <div class="release-body">
        <span class="tag t-${esc((r.type || "").toLowerCase())}">${esc(r.type)}</span>
        <h3 class="release-title">${esc(r.title)}</h3>
        <p class="release-artist">${esc(r.artist)}</p>
        <p class="release-date">${fmtDate(r.date)}</p>
        ${r.description ? `<p class="release-desc">${esc(r.description)}</p>` : ""}
        <div class="release-links">${linkBtns(r.links)}</div>
      </div>
    </article>`;

  const sortedReleases = [...RELEASES].sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  // HOME: フィーチャード（最新1作）＋ 最新3件グリッド
  if (sortedReleases.length) {
    const f = sortedReleases[0];
    $("#featured-cover").src = f.cover;
    $("#featured-cover").alt = `${f.title} — ${f.artist}`;
    $("#featured-title").textContent = f.title;
    $("#featured-artist").innerHTML = `<b>${esc(f.artist)}</b> &nbsp;/&nbsp; ${esc(f.type)} &nbsp;/&nbsp; ${fmtDate(f.date)}`;
    $("#featured-desc").textContent = f.description || "";
    $("#featured-links").innerHTML = linkBtns(f.links);
  }
  $("#home-releases").innerHTML =
    sortedReleases.slice(0, 3).map(releaseCard).join("") ||
    `<p class="empty">Releases coming soon</p>`;

  // HOME: ジャンルウォール
  const genreNames = (SITE.genres && SITE.genres.length)
    ? SITE.genres
    : ["TRAP", "BASS MUSIC", "UK DUBSTEP", "HARDWAVE", "HARD TECHNO", "HYPERPOP"];
  $("#genre-list").innerHTML = genreNames
    .map(
      (g) => `
    <li class="reveal">
      <div class="g-row">
        <span class="g-tag">WDY /// SOUND</span>
        <span class="g-name">${esc(g)}</span>
      </div>
    </li>`
    )
    .join("");

  // RELEASESページ + フィルター
  const renderReleases = (type) => {
    const list = type === "ALL" ? sortedReleases : sortedReleases.filter((r) => r.type === type);
    $("#release-grid").innerHTML =
      list.map(releaseCard).join("") || `<p class="empty">No releases in this category yet</p>`;
    observeReveals();
  };

  const types = ["ALL", ...new Set(RELEASES.map((r) => r.type).filter(Boolean))];
  $("#release-filters").innerHTML = types
    .map((t, i) => `<button class="${i === 0 ? "on" : ""}" data-type="${esc(t)}">${esc(t)}</button>`)
    .join("");
  $$("#release-filters button").forEach((b) =>
    b.addEventListener("click", () => {
      $$("#release-filters button").forEach((x) => x.classList.remove("on"));
      b.classList.add("on");
      renderReleases(b.dataset.type);
    })
  );
  renderReleases("ALL");

  /* ---------- アーティスト描画 ---------- */
  $("#artist-grid").innerHTML =
    ARTISTS.map(
      (a) => `
    <article class="artist-card reveal">
      <div class="artist-photo"><img src="${esc(a.photo)}" alt="${esc(a.name)}" loading="lazy"></div>
      <div class="artist-body">
        <h3 class="artist-name">${esc(a.name)}</h3>
        <p class="artist-role">${esc(a.role)}</p>
        ${a.bio ? `<p class="artist-bio">${esc(a.bio)}</p>` : ""}
        <div class="artist-socials">${linkBtns(a.socials)}</div>
      </div>
    </article>`
    ).join("") || `<p class="empty">Artists coming soon</p>`;

  /* ---------- イベント描画（日付で自動振り分け） ---------- */
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = EVENTS.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const past = EVENTS.filter((e) => e.date < today).sort((a, b) => b.date.localeCompare(a.date));

  const eventCard = (e, isPast) => `
    <article class="event-card reveal ${isPast ? "past" : ""}">
      <div class="event-flyer"><img src="${esc(e.flyer)}" alt="${esc(e.name)} flyer" loading="lazy"></div>
      <div>
        <p class="event-date-big">${fmtDate(e.date)}${e.timeNote ? ` / ${esc(e.timeNote)}` : ""}</p>
        <h3 class="event-name">${esc(e.name)}</h3>
        <div class="event-meta"><span><b>VENUE</b> — ${esc(e.venue)}</span></div>
        <div class="event-lineup">${(e.lineup || []).map((n) => `<span>${esc(n)}</span>`).join("")}</div>
        ${!isPast && e.ticketUrl ? `<a class="btn" href="${esc(e.ticketUrl)}" target="_blank" rel="noopener">Tickets</a>` : ""}
      </div>
    </article>`;

  const renderEvents = (mode) => {
    const list = mode === "upcoming" ? upcoming : past;
    $("#event-list").innerHTML =
      list.map((e) => eventCard(e, mode === "past")).join("") ||
      `<p class="empty">${mode === "upcoming" ? "New events will be announced soon" : "No past events yet"}</p>`;
    observeReveals();
  };
  $$("#event-tabs button").forEach((b) =>
    b.addEventListener("click", () => {
      $$("#event-tabs button").forEach((x) => x.classList.remove("on"));
      b.classList.add("on");
      renderEvents(b.dataset.mode);
    })
  );
  renderEvents("upcoming");

  // HOME: 直近イベント1件
  $("#home-event").innerHTML = upcoming.length
    ? eventCard(upcoming[0], false)
    : `<p class="empty">New events will be announced soon</p>`;

  /* ---------- ニュース描画 ---------- */
  const newsItem = (n) => `
    <article class="news-item reveal">
      <span class="news-date">${fmtDate(n.date)}</span>
      <span class="news-cat">${esc(n.category)}</span>
      <div>
        <h3 class="news-title">${esc(n.title)}</h3>
        ${n.body ? `<p class="news-body">${esc(n.body)}</p>` : ""}
        ${n.link ? `<a class="news-link" href="${esc(n.link)}" target="_blank" rel="noopener">READ MORE →</a>` : ""}
      </div>
    </article>`;

  $("#news-list").innerHTML = NEWS.map(newsItem).join("") || `<p class="empty">No news yet</p>`;
  $("#home-news").innerHTML = NEWS.slice(0, 3).map(newsItem).join("") || `<p class="empty">No news yet</p>`;

  /* ---------- About描画 ---------- */
  const leadWords = ABOUT.lead.split(" ");
  $("#about-lead").innerHTML =
    leadWords.length > 1
      ? `${esc(leadWords.slice(0, -1).join(" "))} <span class="accent">${esc(leadWords.at(-1))}</span>`
      : esc(ABOUT.lead);
  $("#about-text").innerHTML = ABOUT.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#about-pillars").innerHTML = ABOUT.pillars
    .map((p) => `<div class="pillar reveal"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`)
    .join("");

  /* ---------- ソーシャルリンク（ヒーロー/Contact/フッター） ---------- */
  const socialsHtml = linkBtns(SITE.socials);
  $("#contact-socials").innerHTML = socialsHtml;
  $("#footer-socials").innerHTML = socialsHtml;
  $("#footer-year").textContent = new Date().getFullYear();

  /* ---------- Contactフォーム ---------- */
  const form = $("#contact-form");
  const emailLink = $("#contact-email");
  emailLink.textContent = SITE.email;
  emailLink.href = `mailto:${SITE.email}`;

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const fd = new FormData(form);
    const subjectMap = {
      demo: "デモ応募",
      booking: "出演依頼",
      license: "ライセンス相談",
      other: "お問い合わせ",
    };
    const cat = fd.get("category");
    const subject = `[WDY] ${subjectMap[cat] || "お問い合わせ"} — ${fd.get("name")}`;
    const bodyText = `お名前: ${fd.get("name")}\nメール: ${fd.get("email")}\n種別: ${subjectMap[cat]}\n\n${fd.get("message")}`;

    if (SITE.formEndpoint) {
      // Formspree等のエンドポイントが設定されている場合はPOST送信
      fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      })
        .then((r) => {
          $("#form-status").textContent = r.ok
            ? "送信しました。返信をお待ちください。"
            : "送信に失敗しました。時間をおいて再度お試しください。";
          if (r.ok) form.reset();
        })
        .catch(() => {
          $("#form-status").textContent = "送信に失敗しました。メールでご連絡ください。";
        });
    } else {
      // エンドポイント未設定時はメーラーを起動
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    }
  });

  /* ---------- ハッシュルーティング（ページ切り替え） ---------- */
  const pages = ["home", "about", "releases", "artists", "events", "news", "contact"];

  const route = () => {
    const hash = (location.hash || "#home").replace("#", "");
    const page = pages.includes(hash) ? hash : "home";
    $$(".page").forEach((p) => p.classList.toggle("active", p.id === `page-${page}`));
    $$(".nav-links a").forEach((a) =>
      a.classList.toggle("current", a.getAttribute("href") === `#${page}`)
    );
    $("#nav-links").classList.remove("open");
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    observeReveals();
  };

  window.addEventListener("hashchange", route);

  $("#nav-burger").addEventListener("click", () => $("#nav-links").classList.toggle("open"));

  /* ---------- スクロール出現アニメーション ---------- */
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          }),
        { threshold: 0.08 }
      );
    }
    $$(".reveal:not(.in)").forEach((el) => io.observe(el));
  }

  /* ---------- イントロローダー ---------- */
  const intro = $("#intro");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (sessionStorage.getItem("wdy-intro") || reducedMotion) {
    intro.style.display = "none";
  } else {
    sessionStorage.setItem("wdy-intro", "1");
    setTimeout(() => intro.classList.add("done"), 1150);
  }

  /* ---------- スクロール進捗バー ---------- */
  const progress = $("#progress");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = max > 0 ? `${(scrollY / max) * 100}%` : "0";
  };
  addEventListener("scroll", onScroll, { passive: true });

  /* ---------- ヒーロー: ベースウェーブ・キャンバス ---------- */
  (function initHeroCanvas() {
    const cv = $("#hero-canvas");
    if (!cv || reducedMotion) return;
    const ctx = cv.getContext("2d");
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let w, h, t = 0, raf = null;

    const resize = () => {
      w = cv.width = cv.offsetWidth * dpr;
      h = cv.height = cv.offsetHeight * dpr;
    };
    resize();
    addEventListener("resize", resize);

    const waves = [
      { c: "rgba(255,42,60,.55)",  amp: 26, f: .0035, sp: .035, y: .80 },
      { c: "rgba(123,91,255,.38)", amp: 38, f: .0024, sp: .024, y: .835 },
      { c: "rgba(56,197,255,.22)", amp: 18, f: .0048, sp: .05,  y: .865 },
    ];
    const dust = Array.from({ length: 70 }, () => ({
      x: Math.random(), y: Math.random(),
      v: .0004 + Math.random() * .0012,
      s: Math.random() * 1.5 + .5,
      o: Math.random() * .3 + .08,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);
      // ベースライン（オシロスコープ風の波）
      waves.forEach((wv) => {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 5 * dpr) {
          const env = 1 + Math.sin(t * .01 + x * .0006) * .6; // うねりの強弱
          const y = h * wv.y + Math.sin(x * wv.f / dpr + t * wv.sp) * wv.amp * dpr * env;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = wv.c;
        ctx.lineWidth = 1.2 * dpr;
        ctx.stroke();
      });
      // 上昇するダスト粒子
      dust.forEach((p) => {
        p.y -= p.v;
        if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
        ctx.fillStyle = `rgba(242,242,239,${p.o})`;
        ctx.fillRect(p.x * w, p.y * h, p.s * dpr, p.s * dpr);
      });
      t++;
      raf = requestAnimationFrame(draw);
    }

    // 画面内にある時だけ描画（パフォーマンス対策）
    // ※表示時にresize()し直す: 初期化時はページが非表示でサイズ0のため
    new IntersectionObserver((es) =>
      es.forEach((e) => {
        if (e.isIntersecting) { resize(); if (!raf) draw(); }
        else if (raf) { cancelAnimationFrame(raf); raf = null; }
      })
    ).observe(cv);
  })();

  /* ---------- ヒーロー: マウスパララックス（PCのみ・控えめ） ---------- */
  if (!reducedMotion && matchMedia("(pointer: fine)").matches) {
    const core = $("#hero-core");
    addEventListener("mousemove", (e) => {
      if (!core.closest(".page.active")) return;
      const dx = (e.clientX / innerWidth - 0.5) * 10;
      const dy = (e.clientY / innerHeight - 0.5) * 6;
      core.style.transform = `translate(${dx}px, ${dy}px)`;
    }, { passive: true });
  }

  route();
})();
