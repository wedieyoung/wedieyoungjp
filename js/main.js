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
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // CSSのモーショントークンと、閉じ切った後のDOM状態変更を同期する
  const cssTimeMs = (name, fallback) => {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    if (!value) return fallback;
    if (value.endsWith("ms")) return Number.parseFloat(value) || fallback;
    if (value.endsWith("s")) return (Number.parseFloat(value) || 0) * 1000;
    return fallback;
  };
  const materialDuration = () => reducedMotion ? 0 : cssTimeMs("--dur-med", 320);

  // トリガーの中心を、アニメーションする面の座標系へ変換する
  const setMaterialOrigin = (surface, trigger) => {
    if (!surface) return;
    surface.style.transformOrigin = "center";
    const surfaceRect = surface.getBoundingClientRect();
    if (!surfaceRect.width || !surfaceRect.height) {
      return;
    }
    const triggerRect = trigger && typeof trigger.getBoundingClientRect === "function"
      ? trigger.getBoundingClientRect()
      : null;
    const pointX = triggerRect ? triggerRect.left + triggerRect.width / 2 : innerWidth / 2;
    const pointY = triggerRect ? triggerRect.top + triggerRect.height / 2 : innerHeight / 2;
    const surfaceWidth = surface.offsetWidth || surfaceRect.width;
    const surfaceHeight = surface.offsetHeight || surfaceRect.height;
    const originX = Math.max(0, Math.min(
      surfaceWidth,
      ((pointX - surfaceRect.left) / surfaceRect.width) * surfaceWidth
    ));
    const originY = Math.max(0, Math.min(
      surfaceHeight,
      ((pointY - surfaceRect.top) / surfaceRect.height) * surfaceHeight
    ));
    surface.style.transformOrigin = `${originX}px ${originY}px`;
  };

  const esc = (s) =>
    String(s || "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* ============================================================
     言語切替（日本語 / 英語）
     ★ data.js のテキストの隣に「項目名_en」を足すと英語表示で使われます。
       例:  description: "日本語",  description_en: "English"
       _en が無い項目は、英語表示でも日本語のまま表示されます（崩れません）。
     ============================================================ */
  const LANG = localStorage.getItem("wdy-lang") === "en" ? "en" : "ja";
  document.documentElement.lang = LANG;

  // data.jsの項目を、現在の言語に応じて取り出す（_enが無ければ日本語を返す）
  // 文字列でも配列でもそのまま扱えます。
  const t = (o, k) => {
    if (!o) return "";
    const v = LANG === "en" && o[k + "_en"] != null ? o[k + "_en"] : o[k];
    return v == null ? "" : v;
  };

  // 画面のUI文言（ボタン・ラベル・空欄メッセージ等）の日英辞書
  const UI = {
    ja: {
      "note-featured": "4作品以上に参加したアーティスト",
      "note-roster": "これまで参加した全アーティスト",
      "form-category": "お問い合わせ種別",
      "form-opt-demo": "デモ応募（Demo Submission）",
      "form-opt-booking": "出演依頼（Booking）",
      "form-opt-license": "ライセンス相談（Licensing）",
      "form-opt-other": "その他（Other）",
      "form-name": "お名前 / Artist Name",
      "form-email": "メールアドレス",
      "form-message": "内容（デモの場合はSoundCloud等のリンクを記載）",
      "form-submit": "送信する",
      "form-demo-note": "※ デモ応募は非公開リンク（SoundCloud private link等）でお送りください。",
      "burger": "メニューを開閉",
      "close": "閉じる",
      "prev": "前の写真",
      "next": "次の写真",
      "releases-soon": "リリースは近日公開",
      "releases-none": "このカテゴリのリリースはまだありません",
      "events-soon": "新しいイベントは近日発表",
      "events-none-past": "過去のイベントはまだありません",
      "news-none": "ニュースはまだありません",
      "artists-soon": "近日公開",
      "view-report": "レポートを見る",
      "read-more": "もっと読む →",
      "tickets": "チケット",
      "aftermovie": "▶ アフタームービー",
      "sent-ok": "送信しました。返信をお待ちください。",
      "sent-fail": "送信に失敗しました。時間をおいて再度お試しください。",
      "sent-fail-mail": "送信に失敗しました。メールでご連絡ください。",
      "mail-name": "お名前", "mail-email": "メール", "mail-type": "種別",
      "subj-demo": "デモ応募", "subj-booking": "出演依頼",
      "subj-license": "ライセンス相談", "subj-other": "お問い合わせ"
    },
    en: {
      "note-featured": "Artists featured on 4+ releases",
      "note-roster": "Every artist who has taken part so far",
      "form-category": "Inquiry type",
      "form-opt-demo": "Demo Submission",
      "form-opt-booking": "Booking",
      "form-opt-license": "Licensing",
      "form-opt-other": "Other",
      "form-name": "Name / Artist Name",
      "form-email": "Email address",
      "form-message": "Message (for demos, include a SoundCloud link, etc.)",
      "form-submit": "Send Message",
      "form-demo-note": "* Please send demos as a private link (e.g. a SoundCloud private link).",
      "burger": "Toggle menu",
      "close": "Close",
      "prev": "Previous photo",
      "next": "Next photo",
      "releases-soon": "Releases coming soon",
      "releases-none": "No releases in this category yet",
      "events-soon": "New events will be announced soon",
      "events-none-past": "No past events yet",
      "news-none": "No news yet",
      "artists-soon": "Coming soon",
      "view-report": "VIEW REPORT",
      "read-more": "READ MORE →",
      "tickets": "Tickets",
      "aftermovie": "▶ AFTERMOVIE",
      "sent-ok": "Message sent. We'll be in touch soon.",
      "sent-fail": "Failed to send. Please try again later.",
      "sent-fail-mail": "Failed to send. Please reach us by email.",
      "mail-name": "Name", "mail-email": "Email", "mail-type": "Type",
      "subj-demo": "Demo Submission", "subj-booking": "Booking",
      "subj-license": "Licensing", "subj-other": "Inquiry"
    }
  };
  const ui = (k) => (UI[LANG] && UI[LANG][k] != null ? UI[LANG][k] : (UI.ja[k] || ""));

  // 日本語の文字（ひらがな・カタカナ・漢字）を含むか判定
  const hasJP = (s) => /[぀-ヿ一-鿿]/.test(s || "");

  // ニュース記事本文の段落を、表示言語に合わせて選ぶ。
  // ・article_en が指定されていればそれを使用
  // ・無ければ、英語表示のときは日本語を含む段落を除外（英文・トラックリスト等は残す）
  // ・日本語表示のときは article をそのまま表示
  const newsArticle = (n) => {
    const ja = (n && n.article) || [];
    if (LANG !== "en") return ja;
    if (n && n.article_en) return n.article_en;
    return ja.filter((p) => !hasJP(p));
  };

  // 静的HTMLのdata-i18n要素に文言を反映
  $$("[data-i18n]").forEach((el) => { el.textContent = ui(el.dataset.i18n); });
  $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", ui(el.dataset.i18nAria)); });

  // 言語切替ボタン：現在の言語をハイライトし、クリックで切替（保存して再読込）
  const langToggle = $("#lang-toggle");
  if (langToggle) {
    $$("#lang-toggle [data-lang]").forEach((s) =>
      s.classList.toggle("on", s.dataset.lang === LANG)
    );
    langToggle.addEventListener("click", () => {
      localStorage.setItem("wdy-lang", LANG === "en" ? "ja" : "en");
      location.reload();
    });
  }

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
  document.title = `${SITE.siteName} | ${t(SITE, "taglineSub")}`;
  const setMeta = (sel, val) => { const el = $(sel); if (el && val) el.setAttribute("content", val); };
  setMeta('meta[name="description"]', t(SITE, "description"));
  setMeta('meta[property="og:title"]', `${SITE.siteName} | ${t(SITE, "taglineSub")}`);
  setMeta('meta[property="og:description"]', t(SITE, "description"));
  setMeta('meta[property="og:url"]', SITE.siteUrl);
  setMeta('meta[property="og:image"]', SITE.siteUrl.replace(/\/$/, "") + "/assets/images/ogp.png");
  setMeta('meta[name="twitter:image"]', SITE.siteUrl.replace(/\/$/, "") + "/assets/images/ogp.png");

  /* ---------- ヒーロー ---------- */
  $("#hero-sub").textContent = t(SITE, "taglineSub");
  const tagline = t(SITE, "tagline");
  const tg = tagline.split("—");
  $("#hero-tagline").innerHTML =
    tg.length > 1
      ? `<em>${esc(tg[0].trim())}</em> — ${esc(tg.slice(1).join("—").trim())}`
      : esc(tagline);

  /* ---------- リリース描画 ---------- */
  const releaseCard = (r) => `
    <article class="release-card reveal">
      <div class="release-cover"><img src="${esc(r.cover)}" alt="${esc(r.title)} — ${esc(r.artist)}" loading="lazy"></div>
      <div class="release-body">
        <span class="tag t-${esc((r.type || "").toLowerCase())}">${esc(r.type)}</span>
        <h3 class="release-title">${esc(r.title)}</h3>
        <p class="release-artist">${esc(r.artist)}</p>
        <p class="release-date">${fmtDate(r.date)}</p>
        ${t(r, "description") ? `<p class="release-desc">${esc(t(r, "description"))}</p>` : ""}
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
    $("#featured-desc").textContent = t(f, "description") || "";
    $("#featured-links").innerHTML = linkBtns(f.links);
  }
  $("#home-releases").innerHTML =
    sortedReleases.slice(0, 3).map(releaseCard).join("") ||
    `<p class="empty">${ui("releases-soon")}</p>`;

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
      list.map(releaseCard).join("") || `<p class="empty">${ui("releases-none")}</p>`;
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
        <p class="event-date-big">${fmtDate(e.date)}${t(e, "timeNote") ? ` / ${esc(t(e, "timeNote"))}` : ""}</p>
        <h3 class="event-name">${esc(e.name)}</h3>
        <div class="event-meta"><span><b>VENUE</b> — ${esc(t(e, "venue"))}</span></div>
        <div class="event-lineup">${(e.lineup || []).map((n) => `<span>${esc(n)}</span>`).join("")}</div>
        ${!isPast && e.ticketUrl ? `<a class="btn" href="${esc(e.ticketUrl)}" target="_blank" rel="noopener">${ui("tickets")}</a>` : ""}
        ${(e.report && e.report.length) || (e.gallery && e.gallery.length) ? `<button class="btn ghost event-report-btn" data-event="${esc(e.name)}">${ui("view-report")}</button>` : ""}
      </div>
    </article>`;

  /* ---------- イベントレポート モーダル ---------- */
  const modal = $("#event-modal");
  const modalPanel = $(".event-modal-panel");
  let modalCloseTimer = null;

  const prepareModalOpen = (trigger) => {
    clearTimeout(modalCloseTimer);
    modal.classList.remove("open", "closing");
    setMaterialOrigin(modalPanel, trigger);
    // 初期状態を一度確定させてからopenを付け、毎回同じ軌道で物質化させる
    void modal.offsetWidth;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalPanel.scrollTop = 0;
  };

  const openEventModal = (e, trigger) => {
    $("#event-modal-body").innerHTML = `
      <p class="event-date-big">${fmtDate(e.date)}${t(e, "timeNote") ? ` / ${esc(t(e, "timeNote"))}` : ""} — ${esc(t(e, "venue"))}</p>
      <h2 class="em-title" id="em-title">${esc(e.name)}</h2>
      ${(t(e, "report") || []).map((p) => `<p class="em-text">${esc(p)}</p>`).join("")}
      ${e.videoUrl ? `<a class="btn em-video" href="${esc(e.videoUrl)}" target="_blank" rel="noopener">${ui("aftermovie")}</a>` : ""}
      ${(t(e, "credits") && t(e, "credits").length) ? `<div class="em-credits">${t(e, "credits").map((c) => `<p>${esc(c)}</p>`).join("")}</div>` : ""}
      ${(e.gallery && e.gallery.length) ? `<div class="em-gallery">${e.gallery.map((g) => `<img src="${esc(g)}" alt="${esc(e.name)} photo" loading="lazy">`).join("")}</div>` : ""}
    `;
    prepareModalOpen(trigger);
  };

  const closeEventModal = () => {
    if (!modal.classList.contains("open")) return;
    clearTimeout(modalCloseTimer);
    modal.classList.add("closing");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    modalCloseTimer = setTimeout(() => {
      modal.classList.remove("closing");
    }, materialDuration());
  };

  $("#event-modal-close").addEventListener("click", closeEventModal);
  $("#event-modal-backdrop").addEventListener("click", closeEventModal);

  // レポートボタンはカード再描画のたびに付け直す（イベント委任）
  document.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".event-report-btn");
    if (!btn) return;
    const e = EVENTS.find((x) => x.name === btn.dataset.event);
    if (e) openEventModal(e, btn);
  });

  /* ---------- 写真ライトボックス（ギャラリー写真をクリックで拡大） ---------- */
  const lightbox = $("#lightbox");
  const lbImg = $("#lightbox-img");
  let lbList = [];   // 現在のギャラリーのサムネイルURL一覧
  let lbIndex = 0;
  let lbTrigger = null;
  let lightboxCloseTimer = null;

  // サムネイル(-1024x576等)から高解像度版(-scaled)のURLを導出
  const fullSizeUrl = (thumb) => thumb.replace(/-\d+x\d+(\.\w+)$/, "-scaled$1");

  const showLightbox = (i) => {
    lbIndex = (i + lbList.length) % lbList.length;
    const thumb = lbList[lbIndex];
    lightbox.classList.remove("image-ready");
    const revealImage = () => {
      setMaterialOrigin(lbImg, lbTrigger);
      void lbImg.offsetWidth;
      requestAnimationFrame(() => {
        if (lightbox.classList.contains("open")) lightbox.classList.add("image-ready");
      });
    };
    lbImg.onload = revealImage;
    lbImg.src = fullSizeUrl(thumb);
    // 高解像度版が無い場合はサムネイルにフォールバック
    lbImg.onerror = () => { lbImg.onerror = null; lbImg.src = thumb; };
    if (lbImg.complete && lbImg.naturalWidth) revealImage();
    $("#lightbox-counter").textContent = `${lbIndex + 1} / ${lbList.length}`;
    $("#lightbox-prev").style.display = lbList.length > 1 ? "" : "none";
    $("#lightbox-next").style.display = lbList.length > 1 ? "" : "none";
  };

  const openLightbox = (list, i, trigger) => {
    clearTimeout(lightboxCloseTimer);
    lbTrigger = trigger || null;
    lightbox.classList.remove("open", "closing");
    lbList = list;
    showLightbox(i);
    lbImg.style.transformOrigin = "center";
    void lightbox.offsetWidth;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  };

  const closeLightbox = () => {
    if (!lightbox.classList.contains("open")) return;
    clearTimeout(lightboxCloseTimer);
    lightbox.classList.add("closing");
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxCloseTimer = setTimeout(() => {
      lightbox.classList.remove("closing");
      lightbox.classList.remove("image-ready");
      lbImg.onload = null;
      lbImg.onerror = null;
      lbImg.removeAttribute("src");
      lbTrigger = null;
    }, materialDuration());
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
    openLightbox(imgs.map((x) => x.getAttribute("src")), imgs.indexOf(img), img);
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
      `<p class="empty">${mode === "upcoming" ? ui("events-soon") : ui("events-none-past")}</p>`;
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
    : `<p class="empty">${ui("events-soon")}</p>`;

  /* ---------- ニュース描画 ---------- */
  const newsItem = (n, i) => {
    const hasArticle = n.article && n.article.length;
    const thumb = `
      <div class="news-thumb${hasArticle ? " news-thumb--clickable" : ""}"${hasArticle ? ` data-news="${i}"` : ""}>
        ${n.image
          ? `<img src="${esc(n.image)}" alt="" loading="lazy" decoding="async" onerror="this.onerror=null;this.classList.add('news-thumb__ph');this.src='assets/images/logo-white-nav.png';">`
          : `<img class="news-thumb__ph" src="assets/images/logo-white-nav.png" alt="" aria-hidden="true" loading="lazy">`}
      </div>`;
    return `
    <article class="news-item reveal">
      <span class="news-date">${fmtDate(n.date)}</span>
      <span class="news-cat">${esc(n.category)}</span>
      ${thumb}
      <div class="news-main">
        <h3 class="news-title">${esc(t(n, "title"))}</h3>
        ${t(n, "body") ? `<p class="news-body">${esc(t(n, "body"))}</p>` : ""}
        ${hasArticle
          ? `<button class="news-link news-article-btn" data-news="${i}">${ui("read-more")}</button>`
          : n.link ? `<a class="news-link" href="${esc(n.link)}" target="_blank" rel="noopener">${ui("read-more")}</a>` : ""}
      </div>
    </article>`;
  };

  $("#news-list").innerHTML = NEWS.map(newsItem).join("") || `<p class="empty">${ui("news-none")}</p>`;
  $("#home-news").innerHTML = NEWS.slice(0, 3).map(newsItem).join("") || `<p class="empty">${ui("news-none")}</p>`;

  /* ---------- ニュース記事モーダル（旧サイトの記事本文） ---------- */
  const openNewsModal = (n, trigger) => {
    $("#event-modal-body").innerHTML = `
      <p class="event-date-big">${fmtDate(n.date)} — ${esc(n.category)}</p>
      <h2 class="em-title" id="em-title">${esc(t(n, "title"))}</h2>
      ${n.image ? `<figure class="em-cover"><img src="${esc(n.image)}" alt="${esc(t(n, "title"))}" loading="lazy"></figure>` : ""}
      ${newsArticle(n).map((p) =>
        /^【.+】/.test(p)
          ? `<h3 class="em-h">${esc(p)}</h3>`
          : `<p class="em-text">${esc(p).replace(/\n/g, "<br>")}</p>`
      ).join("")}
      ${(n.gallery && n.gallery.length) ? `<div class="em-gallery">${n.gallery.map((g) => `<img src="${esc(g)}" alt="${esc(n.title)} photo" loading="lazy">`).join("")}</div>` : ""}
      ${(n.articleLinks && n.articleLinks.length) ? `<div class="release-links em-links">${n.articleLinks.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>` : ""}
      ${(n.artistCards && n.artistCards.length) ? `<div class="em-artists">${n.artistCards.map((a) => `
        <div class="em-artist">
          <img class="em-artist__logo" src="${esc(a.logo)}" alt="${esc(a.name)} logo" loading="lazy">
          <span class="em-artist__name">${esc(a.name)}</span>
          ${t(a, "bio") ? `<p class="em-artist__bio">${esc(t(a, "bio")).replace(/\n/g, "<br>")}</p>` : ""}
          <div class="release-links em-artist__links">${(a.links || []).map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>
        </div>`).join("")}</div>` : ""}
    `;
    prepareModalOpen(trigger);
  };

  document.addEventListener("click", (ev) => {
    const btn = ev.target.closest("[data-news]");
    if (!btn) return;
    const n = NEWS[+btn.dataset.news];
    if (n) openNewsModal(n, btn);
  });

  /* ---------- About描画 ---------- */
  const aboutLead = t(ABOUT, "lead");
  const leadWords = aboutLead.split(" ");
  $("#about-lead").innerHTML =
    leadWords.length > 1
      ? `${esc(leadWords.slice(0, -1).join(" "))} <span class="accent">${esc(leadWords.at(-1))}</span>`
      : esc(aboutLead);
  $("#about-text").innerHTML = (t(ABOUT, "paragraphs") || []).map((p) => `<p>${esc(p)}</p>`).join("");
  $("#about-pillars").innerHTML = ABOUT.pillars
    .map((p) => `<div class="pillar reveal"><h3>${esc(t(p, "title"))}</h3><p>${esc(t(p, "text"))}</p></div>`)
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

  // ロスターの参加数ラベルを英語表示に変換（"10作品" → "10 releases" など）
  const rosterNote = (note) => {
    if (LANG !== "en" || !note) return note;
    return note
      .replace("Owner / 全コンピ", "Owner / all comps")
      .replace(/(\d+)作品/, "$1 releases")
      .replace("（旧", " (formerly ")
      .replace("旧", "ex-")
      .replace("）", ")");
  };

  if (typeof ARTISTS !== "undefined" && ARTISTS) {
    // Owner
    const o = ARTISTS.owner;
    if (o) {
      $("#artist-owner").innerHTML = `
        ${artistAvatar(o, "owner-photo")}
        <div class="owner-info reveal">
          <span class="eyebrow">${esc(t(o, "role") || "Founder")}</span>
          <h3 class="owner-name">${esc(o.name)}</h3>
          ${t(o, "location") ? `<p class="artist-meta">${esc(t(o, "location"))}${t(o, "works") ? ` &nbsp;/&nbsp; ${esc(t(o, "works"))}` : ""}</p>` : ""}
          ${t(o, "bio") ? `<p class="owner-bio">${esc(t(o, "bio"))}</p>` : ""}
          <div class="artist-socials">${artistSocials(o.socials)}</div>
        </div>`;
    }

    // Featured
    const featuredCard = (a) => `
      <article class="artist-card reveal">
        ${artistAvatar(a, "artist-photo")}
        <div class="artist-card-body">
          <h3 class="artist-name">${esc(a.name)}</h3>
          <p class="artist-meta">${[t(a, "location"), t(a, "works")].filter(Boolean).map(esc).join(" / ")}</p>
          ${t(a, "bio") ? `<p class="artist-bio">${esc(t(a, "bio"))}</p>` : ""}
          <div class="artist-socials">${artistSocials(a.socials)}</div>
        </div>
      </article>`;
    $("#artist-featured").innerHTML =
      (ARTISTS.featured || []).map(featuredCard).join("") ||
      `<p class="empty">${ui("artists-soon")}</p>`;

    // Roster
    $("#artist-roster").innerHTML =
      (ARTISTS.roster || [])
        .map((a) => `<div class="roster-chip reveal"><span class="roster-name">${esc(a.name)}</span>${a.note ? `<span class="roster-note">${esc(rosterNote(a.note))}</span>` : ""}</div>`)
        .join("") || `<p class="empty">${ui("artists-soon")}</p>`;
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
      demo: ui("subj-demo"),
      booking: ui("subj-booking"),
      license: ui("subj-license"),
      other: ui("subj-other"),
    };
    const cat = fd.get("category");
    const subject = `[WDY] ${subjectMap[cat] || ui("subj-other")} — ${fd.get("name")}`;
    const bodyText = `${ui("mail-name")}: ${fd.get("name")}\n${ui("mail-email")}: ${fd.get("email")}\n${ui("mail-type")}: ${subjectMap[cat]}\n\n${fd.get("message")}`;

    if (SITE.formEndpoint) {
      // Formspree等のエンドポイントが設定されている場合はPOST送信
      fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      })
        .then((r) => {
          $("#form-status").textContent = r.ok ? ui("sent-ok") : ui("sent-fail");
          if (r.ok) form.reset();
        })
        .catch(() => {
          $("#form-status").textContent = ui("sent-fail-mail");
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
  if (sessionStorage.getItem("wdy-intro") || reducedMotion) {
    intro.style.display = "none";
  } else {
    sessionStorage.setItem("wdy-intro", "1");
    setTimeout(() => intro.classList.add("done"), 1150);
  }

  /* ---------- スクロール進捗バー ---------- */
  const progress = $("#progress");
  const nav = $(".nav");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = max > 0 ? `${(scrollY / max) * 100}%` : "0";
    nav.classList.toggle("scrolled", scrollY > 12);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

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
