/* ============================================================
   WE DIE YOUNG 公式サイト — コンテンツデータファイル
   ============================================================
   ★ サイトの文章・リリース・アーティスト・イベント・ニュースは
     すべて「このファイルだけ」を編集すれば更新できます。
     HTML / CSS を触る必要はありません。

   ▼ 編集のルール
   - 文字列は必ず " " (ダブルクォート)で囲む
   - 各項目の最後のカンマ , を消さない（最後の要素だけはカンマ無しでもOK）
   - 画像は assets/images/ 内の該当フォルダに入れて、ファイル名をここに書く
   - 日付は "YYYY-MM-DD" 形式（例: "2026-06-11"）
   - 不要な項目は "" (空文字) にすればサイト上に表示されません
   ============================================================ */


/* ------------------------------------------------------------
   1. サイト基本設定（タイトル・キャッチコピー・SNSリンクなど）
   ------------------------------------------------------------ */
const SITE = {
  // ▼ ブラウザのタブやSEOに使われるサイト名
  siteName: "WE DIE YOUNG",

  // ▼ ヒーローに表示されるキャッチコピー（メイン）
  tagline: "WE DIE YOUNG — pushing the next wave of bass music from Tokyo",

  // ▼ キャッチコピーの上に出る小さいラベル
  taglineSub: "TOKYO-BASED BASS MUSIC LABEL",

  // ▼ SEO用のサイト説明文（検索結果やSNSシェアに表示）
  description:
    "WE DIE YOUNG は東京を拠点とする Bass Music / Trap レーベル。Trap、UK Dubstep、Hardwave、Hard Techno、Hyperpop など、日本・アジアから先鋭的なダンスミュージックを発信します。",

  // ▼ 公開時のサイトURL（OGP用。公開したら必ず書き換える）
  siteUrl: "https://wedieyoung.example.com",

  // ▼ 問い合わせ用メールアドレス（Contactページに表示）
  email: "contact@wedieyoung.example.com",

  // ▼ SNS / 配信リンク（URLを書き換えるだけ。""にすると非表示）
  socials: {
    spotify:    "https://open.spotify.com/",
    soundcloud: "https://soundcloud.com/",
    youtube:    "https://www.youtube.com/",
    instagram:  "https://www.instagram.com/",
    bandcamp:   "https://bandcamp.com/",
    x:          ""   // 例: "https://x.com/xxxx" （空なら非表示）
  },

  // ▼ Contactフォームの送信先（Formspree等のエンドポイントURL）
  //    まだ無い場合は "" のままでOK → メールリンクとして動作します
  formEndpoint: "",

  // ▼ トップページの「GENRES」セクションに大きく表示されるジャンル一覧
  //    （追加・削除・並び替え自由）
  genres: ["TRAP", "BASS MUSIC", "UK DUBSTEP", "HARDWAVE", "HARD TECHNO", "HYPERPOP"]
};


/* ------------------------------------------------------------
   2. About（レーベル紹介文）
   ------------------------------------------------------------ */
const ABOUT = {
  // ▼ 見出し下のリード文
  lead: "Future Sounds from Tokyo.",

  // ▼ 本文（段落ごとに "..." を1つ。段落を増やす場合はカンマで追加）
  paragraphs: [
    "WE DIE YOUNG は、DJ / Producer の rejection が主宰する、東京発の Bass Music / Trap レーベルです。",
    "Trap、Bass Music、UK Dubstep、Hardwave、Hard Techno、Hyperpop——ジャンルの境界を踏み越える、先鋭的でエネルギッシュなダンスミュージックを日本・アジアから世界へ発信しています。",
    "クラブのフロアで生まれる衝動と、ベッドルームで磨かれるプロダクション。その両方を等価に扱い、次の世代のベースミュージック・シーンを拡張していくこと。それが WE DIE YOUNG の姿勢です。"
  ],

  // ▼ コンセプトを短い言葉で（3つ程度推奨）
  pillars: [
    { title: "TOKYO / ASIA",  text: "東京を拠点に、日本とアジアのクラブシーンから世界へ。" },
    { title: "BASS FORWARD",  text: "Trap / Bass / Dubstep / Hardwave / Hard Techno / Hyperpop。低音を軸に境界を壊す。" },
    { title: "NEXT WAVE",     text: "新しい才能とサウンドに最初に光を当てるプラットフォームであり続ける。" }
  ]
};


/* ------------------------------------------------------------
   3. RELEASES（リリース一覧）
   ------------------------------------------------------------
   ★ 新しいリリースを追加する場合:
     1) ジャケット画像を assets/images/releases/ に入れる
     2) 下のブロックをコピーして一番上に貼り付け、内容を書き換える
   ★ type は "SINGLE" / "EP" / "COMPILATION" / "ALBUM" のいずれか
   ★ links は無い配信先を "" にすれば非表示になります
   ------------------------------------------------------------ */
const RELEASES = [
  {
    title: "SAMPLE RELEASE 001",                    // ← リリースタイトル
    artist: "rejection",                            // ← アーティスト名
    type: "SINGLE",                                 // ← SINGLE / EP / COMPILATION / ALBUM
    date: "2026-05-01",                             // ← リリース日
    cover: "assets/images/releases/release-placeholder-1.jpg", // ← ジャケット画像
    description: "ここにリリースの説明文を入れます。曲のコンセプト、参加アーティスト、制作背景など。", // ← 説明文
    links: {
      spotify:    "https://open.spotify.com/",
      soundcloud: "https://soundcloud.com/",
      bandcamp:   "https://bandcamp.com/",
      youtube:    "",
      apple:      ""
    }
  },
  {
    title: "SAMPLE EP — NEON RITUAL",
    artist: "Various Artists",
    type: "EP",
    date: "2026-03-15",
    cover: "assets/images/releases/release-placeholder-2.jpg",
    description: "EPの説明文サンプル。収録曲やテーマについて書きます。",
    links: {
      spotify:    "https://open.spotify.com/",
      soundcloud: "",
      bandcamp:   "https://bandcamp.com/",
      youtube:    "",
      apple:      ""
    }
  },
  {
    title: "WDY COMPILATION VOL.1",
    artist: "Various Artists",
    type: "COMPILATION",
    date: "2026-01-10",
    cover: "assets/images/releases/release-placeholder-3.jpg",
    description: "レーベルコンピレーションの説明文サンプル。参加アーティストの一覧などを書くと効果的です。",
    links: {
      spotify:    "https://open.spotify.com/",
      soundcloud: "https://soundcloud.com/",
      bandcamp:   "",
      youtube:    "https://www.youtube.com/",
      apple:      ""
    }
  }
];


/* ------------------------------------------------------------
   4. ARTISTS（アーティスト一覧）
   ------------------------------------------------------------
   ★ 写真は assets/images/artists/ に入れる（縦長 4:5 推奨）
   ★ ブロックをコピー＆ペーストで追加できます
   ------------------------------------------------------------ */
const ARTISTS = [
  {
    name: "rejection",                              // ← アーティスト名
    role: "DJ / Producer / Label Owner",            // ← 肩書き
    photo: "assets/images/artists/artist-placeholder-1.jpg", // ← 写真
    bio: "WE DIE YOUNG 主宰。東京を拠点に Trap / Bass Music / Hard Techno を横断するDJ・プロデューサー。", // ← プロフィール文
    socials: {
      soundcloud: "https://soundcloud.com/",
      instagram:  "https://www.instagram.com/",
      x:          "",
      spotify:    "",
      youtube:    ""
    }
  },
  {
    name: "SAMPLE ARTIST",
    role: "Producer",
    photo: "assets/images/artists/artist-placeholder-2.jpg",
    bio: "アーティスト紹介文のサンプルです。活動内容、代表作、出演歴などを書きます。",
    socials: {
      soundcloud: "https://soundcloud.com/",
      instagram:  "",
      x:          "",
      spotify:    "",
      youtube:    ""
    }
  }
];


/* ------------------------------------------------------------
   5. EVENTS（イベント一覧）
   ------------------------------------------------------------
   ★ 日付が今日以降 → UPCOMING / 過去 → ARCHIVE に自動で振り分け
   ★ フライヤー画像は assets/images/events/ に入れる
   ------------------------------------------------------------ */
const EVENTS = [
  {
    name: "WE DIE YOUNG SHOWCASE — SAMPLE",         // ← イベント名
    date: "2026-08-22",                             // ← 開催日（自動でUPCOMING/ARCHIVE判定）
    timeNote: "OPEN 23:00",                         // ← 開場時間など（自由記入）
    venue: "CIRCUS TOKYO（渋谷）",                   // ← 会場
    lineup: ["rejection", "SAMPLE ARTIST", "GUEST DJ"], // ← 出演者（カンマ区切りで追加）
    flyer: "assets/images/events/flyer-placeholder-1.jpg", // ← フライヤー画像
    ticketUrl: "https://example.com/tickets"        // ← チケットリンク（""で非表示）
  },
  {
    name: "WDY NIGHT VOL.0 — SAMPLE ARCHIVE",
    date: "2026-02-14",
    timeNote: "OPEN 22:00",
    venue: "SOUND MUSEUM VISION（渋谷）",
    lineup: ["rejection", "SAMPLE ARTIST"],
    flyer: "assets/images/events/flyer-placeholder-2.jpg",
    ticketUrl: ""
  }
];


/* ------------------------------------------------------------
   6. NEWS（ニュース / お知らせ）
   ------------------------------------------------------------
   ★ 新しい記事を一番上に追加してください（上から順に表示されます）
   ★ category は自由ですが "RELEASE" / "EVENT" / "MEDIA" / "GOODS" / "INFO" を推奨
   ★ link は関連ページのURL。""なら本文のみ表示
   ------------------------------------------------------------ */
const NEWS = [
  {
    date: "2026-06-01",
    category: "INFO",
    title: "WE DIE YOUNG 公式サイトを公開しました",
    body: "WE DIE YOUNG のオフィシャルサイトがオープン。リリース、イベント、アーティスト情報を発信していきます。",
    link: ""
  },
  {
    date: "2026-05-01",
    category: "RELEASE",
    title: "SAMPLE RELEASE 001 配信開始",
    body: "ニュース記事のサンプルです。新しいリリースの告知などをここに書きます。",
    link: "https://open.spotify.com/"
  },
  {
    date: "2026-04-10",
    category: "EVENT",
    title: "SHOWCASE イベント開催決定",
    body: "イベント告知のサンプル記事です。日程・会場・チケット情報への導線を貼れます。",
    link: ""
  }
];
