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

  // HOME: VIDEO（YouTube埋め込み）
  // 各種YouTube URL形式から動画IDを取り出す（watch?v= / youtu.be/ / embed/ / shorts/）
  const youtubeId = (url) => {
    if (!url) return "";
    const m = String(url).match(
      /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/
    );
    return m ? m[1] : "";
  };
  const videoSection = document.querySelector(".video-section");
  const vid = youtubeId(SITE.featuredVideo);
  if (vid) {
    $("#home-video").innerHTML =
      `<iframe src="https://www.youtube.com/embed/${vid}?rel=0" title="WE DIE YOUNG video" ` +
      `loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ` +
      `referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    const ytLink = $("#video-yt-link");
    if (ytLink) ytLink.href = (SITE.socials && SITE.socials.youtube) || `https://www.youtube.com/watch?v=${vid}`;
  } else if (videoSection) {
    videoSection.style.display = "none";   // URL未設定/不正なら欄ごと非表示
  }

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
        ${(e.report && e.report.length) || (e.gallery && e.gallery.length) ? `<button class="btn ghost event-report-btn" data-event="${esc(e.name)}">VIEW REPORT</button>` : ""}
      </div>
    </article>`;

  /* ---------- イベントレポート モーダル ---------- */
  const modal = $("#event-modal");

  const openEventModal = (e) => {
    $("#event-modal-body").innerHTML = `
      <p class="event-date-big">${fmtDate(e.date)}${e.timeNote ? ` / ${esc(e.timeNote)}` : ""} — ${esc(e.venue)}</p>
      <h2 class="em-title" id="em-title">${esc(e.name)}</h2>
      ${(e.report || []).map((p) => `<p class="em-text">${esc(p)}</p>`).join("")}
      ${e.videoUrl ? `<a class="btn em-video" href="${esc(e.videoUrl)}" target="_blank" rel="noopener">▶ AFTERMOVIE</a>` : ""}
      ${(e.credits && e.credits.length) ? `<div class="em-credits">${e.credits.map((c) => `<p>${esc(c)}</p>`).join("")}</div>` : ""}
      ${(e.gallery && e.gallery.length) ? `<div class="em-gallery">${e.gallery.map((g) => `<img src="${esc(g)}" alt="${esc(e.name)} photo" loading="lazy">`).join("")}</div>` : ""}
    `;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".event-modal-panel").scrollTop = 0;
  };

  const closeEventModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  $("#event-modal-close").addEventListener("click", closeEventModal);
  $("#event-modal-backdrop").addEventListener("click", closeEventModal);

  // レポートボタンはカード再描画のたびに付け直す（イベント委任）
  document.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".event-report-btn");
    if (!btn) return;
    const e = EVENTS.find((x) => x.name === btn.dataset.event);
    if (e) openEventModal(e);
  });

  /* ---------- 写真ライトボックス（ギャラリー写真をクリックで拡大） ---------- */
  const lightbox = $("#lightbox");
  const lbImg = $("#lightbox-img");
  let lbList = [];   // 現在のギャラリーのサムネイルURL一覧
  let lbIndex = 0;

  // サムネイル(-1024x576等)から高解像度版(-scaled)のURLを導出
  const fullSizeUrl = (thumb) => thumb.replace(/-\d+x\d+(\.\w+)$/, "-scaled$1");

  const showLightbox = (i) => {
    lbIndex = (i + lbList.length) % lbList.length;
    const thumb = lbList[lbIndex];
    lbImg.src = fullSizeUrl(thumb);
    // 高解像度版が無い場合はサムネイルにフォールバック
    lbImg.onerror = () => { lbImg.onerror = null; lbImg.src = thumb; };
    $("#lightbox-counter").textContent = `${lbIndex + 1} / ${lbList.length}`;
    $("#lightbox-prev").style.display = lbList.length > 1 ? "" : "none";
    $("#lightbox-next").style.display = lbList.length > 1 ? "" : "none";
  };

  const openLightbox = (list, i) => {
    lbList = list;
    showLightbox(i);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  };

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lbImg.src = "";
  };

  $("#lightbox-close").addEventListener("click", closeLightbox);
  $("#lightbox-prev").addEventListener("click", (ev) => { ev.stopPropagation(); showLightbox(lbIndex - 1); });
  $("#lightbox-next").addEventListener("click", (ev) => { ev.stopPropagation(); showLightbox(lbIndex + 1); });
  lightbox.addEventListener("click", (ev) => { if (ev.target === lightbox) closeLightbox(); });

  // ギャラリー写真クリックで拡大（イベント委任）
  document.addEventListener("click", (ev) => {
    const img = ev.target.closest(".em-gallery img");
    if (!img) return;
    const imgs = $$(".em-gallery img");
    openLightbox(imgs.map((x) => x.getAttribute("src")), imgs.indexOf(img));
  });

  // キーボード操作: Escは「ライトボックス → モーダル」の順に閉じる / ←→で写真送り
  addEventListener("keydown", (ev) => {
    if (lightbox.classList.contains("open")) {
      if (ev.key === "Escape") closeLightbox();
      if (ev.key === "ArrowLeft") showLightbox(lbIndex - 1);
      if (ev.key === "ArrowRight") showLightbox(lbIndex + 1);
      return;
    }
    if (ev.key === "Escape") closeEventModal();
  });

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
  const newsItem = (n, i) => `
    <article class="news-item reveal">
      <span class="news-date">${fmtDate(n.date)}</span>
      <span class="news-cat">${esc(n.category)}</span>
      <div>
        <h3 class="news-title">${esc(n.title)}</h3>
        ${n.body ? `<p class="news-body">${esc(n.body)}</p>` : ""}
        ${n.article && n.article.length
          ? `<button class="news-link news-article-btn" data-news="${i}">READ MORE →</button>`
          : n.link ? `<a class="news-link" href="${esc(n.link)}" target="_blank" rel="noopener">READ MORE →</a>` : ""}
      </div>
    </article>`;

  $("#news-list").innerHTML = NEWS.map(newsItem).join("") || `<p class="empty">No news yet</p>`;
  $("#home-news").innerHTML = NEWS.slice(0, 3).map(newsItem).join("") || `<p class="empty">No news yet</p>`;

  /* ---------- ニュース記事モーダル（旧サイトの記事本文） ---------- */
  const openNewsModal = (n) => {
    $("#event-modal-body").innerHTML = `
      <p class="event-date-big">${fmtDate(n.date)} — ${esc(n.category)}</p>
      <h2 class="em-title" id="em-title">${esc(n.title)}</h2>
      ${n.image ? `<figure class="em-cover"><img src="${esc(n.image)}" alt="${esc(n.title)}" loading="lazy"></figure>` : ""}
      ${(n.article || []).map((p) =>
        /^【.+】/.test(p)
          ? `<h3 class="em-h">${esc(p)}</h3>`
          : `<p class="em-text">${esc(p).replace(/\n/g, "<br>")}</p>`
      ).join("")}
      ${(n.gallery && n.gallery.length) ? `<div class="em-gallery">${n.gallery.map((g) => `<img src="${esc(g)}" alt="${esc(n.title)} photo" loading="lazy">`).join("")}</div>` : ""}
      ${(n.articleLinks && n.articleLinks.length) ? `<div class="release-links em-links">${n.articleLinks.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>` : ""}
    `;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".event-modal-panel").scrollTop = 0;
  };

  document.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".news-article-btn");
    if (!btn) return;
    const n = NEWS[+btn.dataset.news];
    if (n) openNewsModal(n);
  });

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

  // ABOUTページの背景画像（data.jsのbackgroundImageで指定）
  if (ABOUT.backgroundImage) {
    $("#page-about").style.background =
      `linear-gradient(rgba(9,9,11,.86), rgba(9,9,11,.96)), url("${ABOUT.backgroundImage}") center top / cover no-repeat`;
  }

  /* ---------- Artists描画 ---------- */
  // SNSキー → 表示ラベル
  const SOCIAL_LABELS = {
    instagram: "Instagram", x: "X", soundcloud: "SoundCloud",
    spotify: "Spotify", bandcamp: "Bandcamp", youtube: "YouTube",
    linktree: "Links", website: "Website"
  };

  const artistSocials = (socials) =>
    Object.entries(socials || {})
      .filter(([k, url]) => url && SOCIAL_LABELS[k])
      .map(([k, url]) =>
        `<a href="${esc(url)}" target="_blank" rel="noopener">${SOCIAL_LABELS[k]}</a>`
      )
      .join("");

  // 写真が無い場合のフォールバック: 名前の頭文字＋名前から決まる色のアバター
  const artistAvatar = (a, cls) => {
    if (a.photo) {
      const pos = a.photoPos ? ` style="object-position:${esc(a.photoPos)}"` : "";
      return `<div class="${cls} has-photo"><img src="${esc(a.photo)}" alt="${esc(a.name)}" loading="lazy"${pos}></div>`;
    }
    const letters = (a.name.match(/[A-Za-z0-9]/g) || [a.name[0] || "?"]).slice(0, 2).join("").toUpperCase();
    let hash = 0;
    for (let i = 0; i < a.name.length; i++) hash = (hash * 31 + a.name.charCodeAt(i)) >>> 0;
    const hue = hash % 360;
    const style = `--h:${hue}`;
    return `<div class="${cls} is-initials" style="${style}"><span>${esc(letters)}</span></div>`;
  };

  if (typeof ARTISTS !== "undefined" && ARTISTS) {
    // Owner
    const o = ARTISTS.owner;
    if (o) {
      $("#artist-owner").innerHTML = `
        ${artistAvatar(o, "owner-photo")}
        <div class="owner-info reveal">
          <span class="eyebrow">${esc(o.role || "Founder")}</span>
          <h3 class="owner-name">${esc(o.name)}</h3>
          ${o.location ? `<p class="artist-meta">${esc(o.location)}${o.works ? ` &nbsp;/&nbsp; ${esc(o.works)}` : ""}</p>` : ""}
          ${o.bio ? `<p class="owner-bio">${esc(o.bio)}</p>` : ""}
          <div class="artist-socials">${artistSocials(o.socials)}</div>
        </div>`;
    }

    // Featured
    const featuredCard = (a) => `
      <article class="artist-card reveal">
        ${artistAvatar(a, "artist-photo")}
        <div class="artist-card-body">
          <h3 class="artist-name">${esc(a.name)}</h3>
          <p class="artist-meta">${[a.location, a.works].filter(Boolean).map(esc).join(" / ")}</p>
          ${a.bio ? `<p class="artist-bio">${esc(a.bio)}</p>` : ""}
          <div class="artist-socials">${artistSocials(a.socials)}</div>
        </div>
      </article>`;
    $("#artist-featured").innerHTML =
      (ARTISTS.featured || []).map(featuredCard).join("") ||
      `<p class="empty">Coming soon</p>`;

    // Roster
    $("#artist-roster").innerHTML =
      (ARTISTS.roster || [])
        .map((a) => `<div class="roster-chip reveal"><span class="roster-name">${esc(a.name)}</span>${a.note ? `<span class="roster-note">${esc(a.note)}</span>` : ""}</div>`)
        .join("") || `<p class="empty">Coming soon</p>`;
  }

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
  const pages = ["home", "about", "artists", "releases", "events", "news", "contact"];

  const route = () => {
    closeEventModal();
    closeLightbox();
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
