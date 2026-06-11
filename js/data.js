/* ============================================================
   WE DIE YOUNG 公式サイト — コンテンツデータファイル
   ============================================================
   ★ サイトの文章・リリース・アーティスト・イベント・ニュースは
     すべて「このファイルだけ」を編集すれば更新できます。
     HTML / CSS を触る必要はありません。

   ▼ 編集のルール
   - 文字列は必ず " " (ダブルクォート)で囲む
   - 各項目の最後のカンマ , を消さない（最後の要素だけはカンマ無しでもOK）
   - 画像は URL を直接指定（旧サイト wedieyoung.jp の画像を参照）
     またはassets/images/ 内に入れてファイル名を書く
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
  tagline: "WE DIE YOUNG — spreading bass music culture from Japan to the world",

  // ▼ キャッチコピーの上に出る小さいラベル
  taglineSub: "JAPAN-BASED TRAP / BASS MUSIC LABEL",

  // ▼ SEO用のサイト説明文（検索結果やSNSシェアに表示）
  description:
    "WE DIE YOUNGはProducer/DJのrejectionが2022年に立ち上げた日本発のトラップ/ベースミュージックレーベル。重低音が響く最先端のサウンドと圧巻のライブイベントで、グローバルなベースミュージックシーンをリードする。",

  // ▼ 公開時のサイトURL（OGP用。公開したら必ず書き換える）
  siteUrl: "https://wedieyoung.jp",

  // ▼ 問い合わせ用メールアドレス（Contactページに表示）
  email: "info@wedieyoung.jp",

  // ▼ SNS / 配信リンク（URLを書き換えるだけ。""にすると非表示）
  socials: {
    x:          "https://x.com/WEDIEYOUNGrec",
    instagram:  "https://www.instagram.com/wedieyoungrec",
    youtube:    "https://www.youtube.com/@WEDIEYOUNGrec",
    spotify:    "https://open.spotify.com/playlist/6JyYK5Vq5FzUuUBJyTbTCJ",
    bandcamp:   "https://wedieyoung.bandcamp.com/",
    discord:    "https://discord.gg/NwJqNHU93J",
    store:      "https://wedieyoung.base.shop/"
  },

  // ▼ Contactフォームの送信先（Formspree等のエンドポイントURL）
  //    まだ無い場合は "" のままでOK → メールリンクとして動作します
  formEndpoint: "",

  // ▼ トップページの「GENRES」セクションに大きく表示されるジャンル一覧
  //    （追加・削除・並び替え自由）
  genres: ["TRAP", "BASS MUSIC", "HARDWAVE", "DUBSTEP", "BASS HOUSE", "RAVE"]
};


/* ------------------------------------------------------------
   2. About（レーベル紹介文）
   ------------------------------------------------------------ */
const ABOUT = {
  // ▼ 見出し下のリード文
  lead: "The New Age Resonates.",

  // ▼ ABOUTページの背景画像（""にすると背景なし）
  backgroundImage: "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-211-scaled.jpg",

  // ▼ 本文（段落ごとに "..." を1つ。段落を増やす場合はカンマで追加）
  paragraphs: [
    "WE DIE YOUNGはProducer/DJであるrejectionが2022年に立ち上げた日本発のトラップ/ベースミュージックレーベル。",
    "重低音が響く最先端のサウンドと、「WE DIE YOUNG ON THE FLOOR」や「THE BASS」をはじめとする圧巻のライブイベントで、グローバルなベースミュージックシーンをリード！常に新しい音を追い求め、ベースミュージックカルチャーを世界に発信する。",
    "WE DIE YOUNG is a Japanese trap/bass music label founded in 2022 by Producer/DJ rejection. With cutting-edge, bass-heavy sounds and electrifying live events like WE DIE YOUNG ON THE FLOOR and THE BASS, it leads the global bass music scene! Relentlessly pursuing fresh sounds, WE DIE YOUNG spreads bass music culture worldwide."
  ],

  // ▼ コンセプトを短い言葉で（3つ程度推奨）
  pillars: [
    { title: "FOUNDED 2022",   text: "Producer/DJ rejectionが主宰。日本からアジア、世界へとベースミュージックを発信する。" },
    { title: "BASS FORWARD",   text: "Trap / Bass / Hardwave / Rave。重低音を軸に、サイバーなサウンドへ進化を続けるコンピレーションシリーズを展開。" },
    { title: "ON THE FLOOR",   text: "年に一度の主催イベント「WE DIE YOUNG ON THE FLOOR」をはじめ、国内外のフロアでシーンを牽引する。" }
  ]
};


/* ------------------------------------------------------------
   3. RELEASES（リリース一覧）
   ------------------------------------------------------------
   ★ 新しいリリースを追加する場合:
     1) 下のブロックをコピーして一番上に貼り付け、内容を書き換える
   ★ type は "SINGLE" / "EP" / "COMPILATION" / "SAMPLE PACK" など
   ★ links は無い配信先を "" にすれば非表示になります
   ------------------------------------------------------------ */
const RELEASES = [
  /* ===== COMPILATION ===== */
  {
    title: "AFTERLIFE vol.1",
    artist: "Various Artists",
    type: "COMPILATION",
    date: "2026-04-27",
    cover: "https://f4.bcbits.com/img/a0311867667_10.jpg",
    description: "WE DIE YOUNGの新コンセプト・コンピレーションアルバム。",
    links: {
      bandcamp: "https://wedieyoung.bandcamp.com/album/afterlifevol-1"
    }
  },
  {
    title: "WE DIE YOUNG vol.8",
    artist: "Various Artists",
    type: "COMPILATION",
    date: "2026-04-27",
    cover: "https://f4.bcbits.com/img/a0656935817_10.jpg",
    description: "日本発Trap/Bassコンピレーション第8弾。",
    links: {
      bandcamp: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-8"
    }
  },
  {
    title: "WE DIE YOUNG vol.7",
    artist: "Various Artists",
    type: "COMPILATION",
    date: "2025-10-27",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/10/WDY7_ARTWORK_01-1-1024x1024.png",
    description: "THE NEW AGE RESONATES — サイバーサウンドを吸収し更に進化した、日本発Trap/Bassコンピレーション第7弾。全21曲収録の\"Cyber-Modern EDM Trap\"コンセプトアルバム。",
    links: {
      stream:   "https://www.submithub.com/link/wedieyoung-vol7",
      bandcamp: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-7",
      cd:       "https://www.diverse.direct/we-die-young/wdy-029/"
    }
  },
  {
    title: "RAVEMODE vol.1",
    artist: "Various Artists",
    type: "COMPILATION",
    date: "2025-10-27",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/10/RAVEMODEvol1-Artwork.png",
    description: "ENTER THE RAVE — WE DIE YOUNGが送る新コンピレーションシリーズが始動！聴く者を強制的に踊らせるRAVEサウンドで内なる衝動を解放せよ。全8曲収録。",
    links: {
      stream:   "https://www.submithub.com/link/ravemode-vol1",
      bandcamp: "https://wedieyoung.bandcamp.com/album/ravemode-vol-1",
      cd:       "https://www.diverse.direct/we-die-young/wdy-030/"
    }
  },
  {
    title: "WE DIE YOUNG vol.6",
    artist: "Various Artists",
    type: "COMPILATION",
    date: "2025-05-24",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_vol6-1024x1024.jpg",
    description: "日本発Trap/Bassコンピレーション第6弾。",
    links: {
      stream: "https://www.submithub.com/link/we-die-young-vol-6"
    }
  },
  {
    title: "WE DIE YOUNG vol.5",
    artist: "Various Artists",
    type: "COMPILATION",
    date: "2024-11-16",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_vol5-1024x1024.jpg",
    description: "日本発Trap/Bassコンピレーション第5弾。",
    links: {
      stream: "https://www.submithub.com/link/we-die-young-vol-5"
    }
  },
  {
    title: "WE DIE YOUNG vol.4",
    artist: "Various Artists",
    type: "COMPILATION",
    date: "2024-06-01",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_vol4-1024x1024.jpg",
    description: "日本発Trap/Bassコンピレーション第4弾。",
    links: {
      stream: "https://www.submithub.com/link/we-die-young-vol-4"
    }
  },
  {
    title: "WE DIE YOUNG vol.3",
    artist: "Various Artists",
    type: "COMPILATION",
    date: "2023-10-29",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_vol3-1024x1024.jpg",
    description: "サイバーな質感で異彩を放つ、日本発Trap/Bassコンピレーション第3弾。",
    links: {
      stream: "https://www.submithub.com/link/we-die-young-vol-3"
    }
  },
  {
    title: "WE DIE YOUNG vol.2",
    artist: "Various Artists",
    type: "COMPILATION",
    date: "2023-07-01",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_vol2-1024x1024.jpg",
    description: "日本発Trap/Bassコンピレーション第2弾。",
    links: {
      stream: "https://www.submithub.com/link/we-die-young-vol-2"
    }
  },
  {
    title: "WE DIE YOUNG vol.1",
    artist: "Various Artists",
    type: "COMPILATION",
    date: "2022-11-04",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_vol1-1024x1024.jpg",
    description: "すべてはここから始まった。レーベルコンピレーション第1弾。",
    links: {
      stream: "https://www.submithub.com/link/we-die-young-vol-1"
    }
  },

  /* ===== SINGLE / EP ===== */
  {
    title: "SURGE EP",
    artist: "21SWINGS",
    type: "EP",
    date: "2026-04-10",
    cover: "https://wedieyoung.jp/wp-content/uploads/2026/04/WDY036-ver2-brown-scaled.png",
    description: "世界中のクラブやフェスでプレイされるEDMアーティスト21SWINGSによるEP。",
    links: {
      stream:   "https://www.submithub.com/link/21swings-surge",
      bandcamp: "https://wedieyoung.bandcamp.com/album/surge"
    }
  },
  {
    title: "Rangda",
    artist: "Viticz & Namya",
    type: "SINGLE",
    date: "2026-03-27",
    cover: "https://wedieyoung.jp/wp-content/uploads/2026/03/WDY035-scaled.jpg",
    description: "シンガポールのViticzとインドネシアのNamyaによるコラボシングル。",
    links: {
      stream:   "https://www.submithub.com/link/rangda",
      bandcamp: "https://wedieyoung.bandcamp.com/track/rangda"
    }
  },
  {
    title: "BREAK THE BASS",
    artist: "21SWINGS",
    type: "SINGLE",
    date: "2026-01-30",
    cover: "https://wedieyoung.jp/wp-content/uploads/2026/02/WDY034-v1-scaled.png",
    description: "フェスティバルEDMとベースミュージックを融合する21SWINGSのシングル。",
    links: {
      stream:   "https://www.submithub.com/link/break-the-bass",
      bandcamp: "https://wedieyoung.bandcamp.com/track/break-the-bass"
    }
  },
  {
    title: "digital[F10W]",
    artist: "Voxelkana",
    type: "SINGLE",
    date: "2026-01-09",
    cover: "https://wedieyoung.jp/wp-content/uploads/2026/01/8d0beaaa9e129d0e95ae16b76dbefdac-scaled.png",
    description: "中国を拠点にアトモスフェリックかつフューチャリスティックなサウンドを追求するVoxelkanaのシングル。",
    links: {
      stream:   "https://www.submithub.com/link/digitalf10w",
      bandcamp: "https://wedieyoung.bandcamp.com/track/digital-f10w"
    }
  },
  {
    title: "feel it",
    artist: "Yuzac",
    type: "SINGLE",
    date: "2025-12-12",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/12/WDY032-artwork-scaled.png",
    description: "RL GrimeやSkrillexに影響を受けた東京拠点のプロデューサーYuzacのシングル。",
    links: {
      stream:   "https://www.submithub.com/link/yuzac-feel-it",
      bandcamp: "https://wedieyoung.bandcamp.com/track/feel-it"
    }
  },
  {
    title: "DONTPLAY",
    artist: "KANAKA & LAGnaf",
    type: "SINGLE",
    date: "2025-12-05",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/12/WDY031_Artwork_fix-scaled.png",
    description: "ハワイ出身LA拠点のKANAKAと韓国のLAGnafによるコラボシングル。",
    links: {
      bandcamp: "https://wedieyoung.bandcamp.com/track/dontplay"
    }
  },
  {
    title: "Medication",
    artist: "Kawashiii",
    type: "SINGLE",
    date: "2025-11-16",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/12/WDY-028-Artwork.png",
    description: "サイバーな質感を軸に制作する東京在住プロデューサーKawashiiiのシングル。",
    links: {
      stream:   "https://www.submithub.com/link/kawashiii-medication",
      bandcamp: "https://wedieyoung.bandcamp.com/track/medication"
    }
  },
  {
    title: "HANDS UP",
    artist: "rejection",
    type: "SINGLE",
    date: "2025-09-19",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/09/WDY-027-Artwork.png",
    description: "レーベルオーナーrejectionによるシングル。",
    links: {
      stream:   "https://www.submithub.com/link/rejection-hands-up",
      bandcamp: "https://wedieyoung.bandcamp.com/track/hands-up"
    }
  },
  {
    title: "Ballade",
    artist: "XeroC'tok",
    type: "SINGLE",
    date: "2025-08-22",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/08/XeroCtok-BALLADE.jpg",
    description: "韓国を拠点にGarageとTrapを制作するXeroC'tokのデビューシングル。",
    links: {
      stream:   "https://www.submithub.com/link/xeroctok-ballade",
      bandcamp: "https://wedieyoung.bandcamp.com/track/ballade"
    }
  },
  {
    title: "One More",
    artist: "ZiXS",
    type: "SINGLE",
    date: "2025-08-09",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/08/a3054737185_10.jpg",
    description: "タイ出身のEDMプロデューサーZiXSのデビューシングル。",
    links: {
      stream:   "https://www.submithub.com/link/zixs-one-more",
      bandcamp: "https://wedieyoung.bandcamp.com/track/one-more"
    }
  },
  {
    title: "Falling 4 U",
    artist: "Lactar1uz",
    type: "SINGLE",
    date: "2025-07-26",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/07/WDY-024-fixed-scaled.png",
    description: "TrapやDrum'n'Bassを軸に制作する日本在住プロデューサーLactar1uzのデビューシングル。",
    links: {
      stream:   "https://www.submithub.com/link/falling-4-u",
      bandcamp: "https://wedieyoung.bandcamp.com/track/falling-4-u"
    }
  },
  {
    title: "Ghostmode",
    artist: "Butterfly Zone & LAGnaf",
    type: "SINGLE",
    date: "2025-07-12",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/07/Butterfly-Zone-LAGnaf-Ghostmode-scaled.jpeg",
    description: "Butterfly ZoneとLAGnafによるコラボシングル。",
    links: {
      stream:   "https://www.submithub.com/link/ghostmode",
      bandcamp: "https://wedieyoung.bandcamp.com/track/ghostmode"
    }
  },
  {
    title: "NEED YOU",
    artist: "ECLAIR",
    type: "SINGLE",
    date: "2025-07-05",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/07/WDY-022-artwork-scaled.jpg",
    description: "澄んだメロディラインと厚みのある低音を操るECLAIRのシングル。",
    links: {
      stream: "https://www.submithub.com/link/eclair-need-you"
    }
  },
  {
    title: "Starfall",
    artist: "rejection & WATARU",
    type: "SINGLE",
    date: "2025-06-26",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_starfall.jpg",
    description: "rejectionとWATARUによるコラボシングル。",
    links: {
      stream: "https://www.submithub.com/link/starfall"
    }
  },
  {
    title: "DEFINED",
    artist: "MTGD",
    type: "SINGLE",
    date: "2025-06-20",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_-DEFINED.jpg",
    description: "台湾在住のDJ/ProducerであるMTGDのシングル。",
    links: {
      stream: "https://www.submithub.com/link/mtgd-defined"
    }
  },
  {
    title: "Reality",
    artist: "Xeno",
    type: "SINGLE",
    date: "2025-06-07",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_reality.jpg",
    description: "Xenoのシングル。",
    links: {
      stream: "https://www.submithub.com/link/xeno-reality"
    }
  },
  {
    title: "ANGELvoid",
    artist: "vishnu okuno",
    type: "SINGLE",
    date: "2025-05-31",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_-ANGELvoid.jpg",
    description: "WE DIE YOUNG中心メンバーvishnu okunoのシングル。",
    links: {
      stream: "https://www.submithub.com/link/angelvoid"
    }
  },
  {
    title: "Run Dat",
    artist: "MTGD",
    type: "SINGLE",
    date: "2025-03-27",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_RUN-DAT.jpg",
    description: "台湾在住のDJ/ProducerであるMTGDのシングル。",
    links: {
      stream: "https://www.submithub.com/link/run-dat"
    }
  },
  {
    title: "Karma Strike",
    artist: "Violet.MKII & GREED",
    type: "SINGLE",
    date: "2025-02-22",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_Karma-Strike.jpg",
    description: "Violet.MKIIとGREEDによるコラボシングル。",
    links: {
      stream: "https://www.submithub.com/link/karma-strike"
    }
  },
  {
    title: "WITH ME NOW",
    artist: "MOSHIMOSH",
    type: "SINGLE",
    date: "2025-02-01",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_-WITH-ME-NOW.jpg",
    description: "MOSHIMOSHのシングル。",
    links: {
      stream: "https://www.submithub.com/link/with-me-now"
    }
  },
  {
    title: "DROP IT",
    artist: "MTGD",
    type: "SINGLE",
    date: "2024-12-21",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_-DROP-IT.jpg",
    description: "台湾在住のDJ/ProducerであるMTGDのシングル。",
    links: {
      stream: "https://www.submithub.com/link/mtgd-drop-it"
    }
  },
  {
    title: "Mental",
    artist: "Douji Wiix",
    type: "SINGLE",
    date: "2024-12-13",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_-Mental.jpg",
    description: "Douji Wiixのシングル。",
    links: {
      stream: "https://www.submithub.com/link/douji-wiix-mental"
    }
  },
  {
    title: "SIRENS",
    artist: "VOLTA",
    type: "SINGLE",
    date: "2024-09-28",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_SIRENS.jpg",
    description: "VOLTAのシングル。",
    links: {
      stream: "https://www.submithub.com/link/volta-sirens"
    }
  },
  {
    title: "we fall again.",
    artist: "vishnu okuno",
    type: "SINGLE",
    date: "2024-09-07",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_we-fall-again.jpg",
    description: "vishnu okunoのシングル。",
    links: {
      stream: "https://www.submithub.com/link/we-fall-again"
    }
  },
  {
    title: "Radiance",
    artist: "Exodynamix",
    type: "SINGLE",
    date: "2024-08-24",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_Radiance.jpg",
    description: "Exodynamixのシングル。",
    links: {
      stream: "https://www.submithub.com/link/exodynamix-radiance"
    }
  },
  {
    title: "U FEEL THE SAME!",
    artist: "sh0wtime",
    type: "SINGLE",
    date: "2024-06-21",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_U-FEEL-THE-SAME.jpg",
    description: "sh0wtimeのシングル。",
    links: {
      stream: "https://www.submithub.com/link/sh0wtime-u-feel-the-same"
    }
  },
  {
    title: "IRIS/CTRL",
    artist: "The Herb Shop",
    type: "SINGLE",
    date: "2024-03-02",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_IRISCTRL.jpg",
    description: "The Herb Shopのシングル。",
    links: {
      stream: "https://www.submithub.com/link/the-herb-shop-iris-ctrl"
    }
  },
  {
    title: "Heart Attack / Far East",
    artist: "rejection",
    type: "SINGLE",
    date: "2023-09-19",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_-Heart-AttackFar-East.jpg",
    description: "レーベルオーナーrejectionによるシングル。",
    links: {
      stream: "https://www.submithub.com/link/rejection-heart-attack-far-east"
    }
  },

  /* ===== SAMPLE PACK ===== */
  {
    title: "Producer Pack vol.1",
    artist: "WE DIE YOUNG",
    type: "SAMPLE PACK",
    date: "2025-07-21",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/07/WDY-ppvol1_thumbnail_square-scaled.png",
    description: "WE DIE YOUNGによるプロデューサー向けサンプルパック第1弾。",
    links: {
      gumroad: "https://wedieyoung.gumroad.com/l/ppvol1"
    }
  }
];


/* ------------------------------------------------------------
   4. EVENTS（イベント一覧）
   ------------------------------------------------------------
   ★ 日付が今日以降 → UPCOMING / 過去 → ARCHIVE に自動で振り分け
   ★ フライヤー画像は URL 直接指定 or assets/images/events/ に入れる
   ------------------------------------------------------------ */
const EVENTS = [
  {
    name: "Beginning ZERO \"JUELZ TOKYO RETURN\"",
    date: "2026-03-20",
    timeNote: "Z HALL / 360° SET",
    venue: "ZEROTOKYO（新宿）",
    lineup: ["JUELZ", "WE DIE YOUNG (rejection, vishnu okuno, crp.)"],
    flyer: "https://wedieyoung.jp/wp-content/uploads/2026/03/HDSZDPhaYAA-Xa8.jpeg",
    ticketUrl: "",
    videoUrl: "",
    report: [
      "2026年3月20日(金・祝日)、新宿ZERO TOKYOにて開催されるBeginning ZERO \"JUELZ TOKYO RETURN\"にWE DIE YOUNG(rejection, vishnu okuno, crp.)が出演。フロアはZ HALL、360°セットで開催。",
      "ゲストのJUELZはもちろん、国内のTrap/Bassアーティストが集結するBass Musicの一夜となった。"
    ],
    credits: [
      "DJ: WE DIE YOUNG（rejection、vishnu okuno、crp.）"
    ],
    gallery: []
  },
  {
    name: "WE DIE YOUNG ON THE FLOOR 2025",
    date: "2025-11-02",
    timeNote: "OPEN / START 14:00 — CLOSE 20:00",
    venue: "ROPPONGI CUBE（六本木）",
    lineup: ["MTGD (from Taiwan)", "crp.", "Douji Wiix", "ECLAIR", "KO3", "Redsign", "rejection", "vishnu okuno", "WE DIE YOUNG B2B", "Vocal: XiN", "VJ: COCOA* / SoU"],
    flyer: "https://wedieyoung.jp/wp-content/uploads/2025/10/WDY-OTF-2025flyer_v2-scaled.jpg",
    ticketUrl: "",
    videoUrl: "",
    report: [
      "2025年11月2日、東京・ROPPONGI CUBEにて開催された「WE DIE YOUNG」。コンピレーションアルバム『WE DIE YOUNG vol.7』のリリースを記念し、現行シーンを牽引するアーティストたちが集結した。",
      "出演者は、WE DIE YOUNG B2B、ECLAIR、Redsign、Douji Wiix、crp.、vishnu okuno、KO3、MTGD (from Taiwan)、そしてrejection。日本と台湾を繋ぐ国際的なラインナップが実現した。",
      "オープニングはWE DIE YOUNG B2B。最新モードを詰め込んだセットで空気をベース仕様へ変換し、続くECLAIRは澄んだメロディラインと厚みのある低音を、Redsignは重厚なベースで観客を圧倒した。Douji Wiixとcrp.はそれぞれの個性をぶつけ合いながらも、イベント全体の流れを見事にコントロールしていた。",
      "後半にはvishnu okuno、KO3が登場。『vol.7』収録曲を中心に最新トラックを惜しみなく披露し、観客を歓声とともに揺らし続けた。",
      "MTGD (from Taiwan) の出演も大きなハイライトとなり、国境を越えたベースミュージックの結束を感じさせ、最後に登場したrejectionは、圧倒的熱量のベースミュージックで一気にクライマックスを作り上げ、圧巻の締めを見せつけた。"
    ],
    credits: [
      "Organizer: rejection",
      "Main DJ: crp.、Douji Wiix、ECLAIR、KO3、MTGD、Redsign、rejection、vishnu okuno、WE DIE YOUNG B2B",
      "Vocal: XiN",
      "VJ: COCOA*、SoU",
      "Photo: mika"
    ],
    gallery: [
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC00796-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC00828-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC00871-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC00931-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC00863-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC00843-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC00856-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC00909-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC01192-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC01126-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC01567-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC01258-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC01815-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC01796-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC02002-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC01940-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC02234-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC02292-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC02443-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC02660-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC02745-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC02753-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC02869-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC03005-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC02914-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC03170-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC03226-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/11/DSC03249-1024x576.jpg"
    ]
  },
  {
    name: "PARTY HARD!! feat. Darren Styles — SUPPORT",
    date: "2025-09-05",
    timeNote: "Z HALL",
    venue: "ZEROTOKYO（新宿）",
    lineup: ["WE DIE YOUNG (KO3, rejection, vishnu okuno)"],
    flyer: "https://wedieyoung.jp/wp-content/uploads/2025/09/Gxj4dXvagAAjkUg.jpeg",
    ticketUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=LSUGdlfKpS8",
    report: [
      "2025年9月5日(Fri)、WE DIE YOUNGがついにZEROTOKYOのZ HALLに初出演を果たした。ステージにはrejection、KO3、vishnu okunoの3人が登場し、熱心なリスナーやベースミュージックを求めるオーディエンスでフロアは序盤から熱気を帯びていた。彼らは揃って新曲を次々と投下し、セット全体がフレッシュかつ攻撃的なムードに包まれていた。",
      "rejectionは重量感のある低音で空気を震わせ、セットの要となる存在感を示す。KO3は緻密なビルドアップとキレのあるドロップで流れを組み立て、観客を引き込み続け、vishnu okunoは巧みな選曲とフロアを操るような煽りで存在感を増し、会場のヴァイブスを一段と引き上げていた。",
      "WE DIE YOUNGを追いかけるリスナーも多数駆けつけ、その熱いリアクションがイベントをさらに特別なものへと押し上げた。メンバー自身も、この後に控えるDarren Stylesの公演を心待ちにしながら、最後までフロアと一体になって楽しんでいた。初めてのZ HALL公演は、シーンとの繋がりの強さと、WE DIE YOUNGの次なる展開を予感させる夜であった。"
    ],
    credits: [
      "DJ: WE DIE YOUNG（KO3、rejection、vishnu okuno）",
      "Photo: mika",
      "Video Edit: rejection"
    ],
    gallery: [
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3307-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3228-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3167-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3221-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3193-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3201-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3219-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3230-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3206-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3200-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3237-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3244-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3308-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3274-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3190-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/IMG_3222-1-1024x683.jpg"
    ]
  },
  {
    name: "Sel Octagon Tokyo 6th Anniversary \"SPACE LACES\" — SUPPORT",
    date: "2025-07-17",
    timeNote: "",
    venue: "Sel Octagon Tokyo（六本木）",
    lineup: ["WE DIE YOUNG (Redsign, rejection, vishnu okuno)"],
    flyer: "https://wedieyoung.jp/wp-content/uploads/2025/07/0717octagon.jpeg",
    ticketUrl: "",
    videoUrl: "",
    report: [
      "2025年7月17日(Thu)、六本木・Sel Octagon Tokyoで開催された6周年イベントに、WE DIE YOUNG crewが「SPACE LACES」のサポートとして出演した。出演したのはrejection、Redsign、vishnu okunoの3人。",
      "序盤は華やかなパーティームードでイベントは幕を開けたが、ピークタイムに近づくにつれてベースミュージックを求めるリスナーが最前に集まり、WE DIE YOUNGのセットがスタートすると重低音に飢えたオーディエンスが熱狂的に反応する空間へと変貌していった。",
      "中でも存在感を放ったのはRedsign。緻密な構成と大胆なドロップを織り交ぜたプレイは、鋭さと重さを兼ね備え、フロアを一段と深いグルーヴへ導いた。rejectionは安定感ある重低音で土台を固め、vishnu okunoはフロアのツボを押さえた煽りと選曲で観客を自然に巻き込んでいった。",
      "WE DIE YOUNG crew、WATARU、そしてSPACE LACESと容赦なく重低音は鳴り響き、最終的にフロアに残ったのは音楽好きたち。彼らの歓声と熱狂が交錯し、煌びやかな空間がベースミュージックの聖域へと変わった瞬間だった。"
    ],
    credits: [
      "DJ: WE DIE YOUNG（Redsign、rejection、vishnu okuno）",
      "Photo: mika"
    ],
    gallery: [
      "https://wedieyoung.jp/wp-content/uploads/2025/09/0628WDY-255-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/0628WDY-228-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/0628WDY-217-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/0628WDY-267-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/0628WDY-251-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/0628WDY-247-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/0628WDY-263-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/0628WDY-278-1024x576.jpg"
    ]
  },
  {
    name: "Do D4 Bass #Do_D4_Bass",
    date: "2025-07-05",
    timeNote: "",
    venue: "MIRAINAGOYA（名古屋）",
    lineup: ["WE DIE YOUNG (KO3, rejection, vishnu okuno)"],
    flyer: "https://wedieyoung.jp/wp-content/uploads/2025/07/dod4bass.jpeg",
    ticketUrl: "",
    videoUrl: "",
    report: [
      "2025年7月5日(Sat)、名古屋・MIRAINAGOYAにて開催された\"Do D4 Bass\"にWE DIE YOUNG（KO3、rejection、vishnu okuno）が出演した。"
    ],
    credits: [
      "Organizer: 秋月/ AutuMxxxN",
      "DJ: WE DIE YOUNG（KO3、rejection、vishnu okuno）",
      "Photo: 小南めぐる",
      "Video / Video Edit: mika"
    ],
    gallery: [
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-36-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-40-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-41-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-59-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-61-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-63-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-64-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-65-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-67-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-68-576x1024.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-71-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-76-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-83-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-93-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-97-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-101-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-109-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-113-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-121-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/09/20250705_DoD4Bass-125-1024x576.jpg"
    ]
  },
  {
    name: "World DJ Festival JAPAN 2025 — WATARU B2B WE DIE YOUNG",
    date: "2025-06-28",
    timeNote: "JP NIGHT STAGE",
    venue: "幕張メッセ",
    lineup: ["WATARU", "WE DIE YOUNG (KO3, rejection, vishnu okuno)"],
    flyer: "https://wedieyoung.jp/wp-content/uploads/2025/07/WDJF2025.png",
    ticketUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=HAyQS43M2eI",
    report: [
      "2025年6月28日、幕張メッセで開催された「World DJ Festival 2025 JP NIGHT STAGE」。この日のステージに登場したのは、WATARUと、WE DIE YOUNGからrejection、KO3、vishnu okunoの3名。",
      "B2B形式で展開されたこのセットは、4人それぞれのスタイルがぶつかり合いながらも絶妙に絡み合い、ジャンルや境界を曖昧にしたスリリングな展開で、オーディエンスを次第に引き込んでいった。開始直後からじわじわと人が集まり始め、曲が進むにつれてフロアの熱が上昇。ビートに合わせて体を揺らす観客たちのエネルギーが一体感を作り、徐々に\"ここが一番アツい場所だ\"という空気が、確実に広がっていった。",
      "先頭を切ったWATARUが強靭なビートで会場の熱を上げていく。そこにrejectionが空気を切り裂くような重低音を放つ。KO3は独自のグルーヴでテンポを引き上げ、Trap〜Bass Houseを自在に行き来し、vishnu okunoが感情のエッジを立てるようなサウンドで加勢する。",
      "そして中盤、自然とフロアの中央にモッシュピットが出現。観客同士が勢いよくぶつかり合う、むき出しの衝突がはじまる。押し合いへし合いの波がうねる中、一部では船漕ぎモッシュまで巻き起こり、特設ステージは完全に戦場と化した。気づけば、ステージを囲う柵の外にまで人が溢れ、立ち止まって聴き入る者、踊り出す者が続出。",
      "WATARUとWE DIE YOUNGの4人が繰り出すセットは、単なるB2Bに留まらず、LIVEとDJをかけ合わせたような、ストーリー的かつ予測不能な構成を刻み続けた。ベースミュージックを主軸に、ジャンルの壁も演出の縛りも軽々と超えてみせたこのステージは、間違いなくこの日のJP NIGHT STAGEで最も\"肉体を揺らした瞬間\"として刻まれた。"
    ],
    credits: [
      "DJ: WATARU B2B WE DIE YOUNG（KO3、rejection、vishnu okuno）",
      "Photo: mika",
      "Video Edit: mika"
    ],
    gallery: [
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-006-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-039-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-077-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-066-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-033-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-074-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-091-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-103-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-047-1-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-043-1-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-188-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-147-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-109-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-056-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-114-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-002-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-041-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-062-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-042-1024x576.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/0628WDY-202-scaled.jpg"
    ]
  },
  {
    name: "THE BASS — wavforme & WE DIE YOUNG Bass Music Party",
    date: "2025-05-04",
    timeNote: "",
    venue: "ROPPONGI CUBE（六本木）",
    lineup: ["Redsign", "ESAI", "MK", "vishnu okuno", "crayvxn", "VOLTA", "Letsu", "Dubscribe", "rejection & KO3", "Vocal: XiN"],
    flyer: "https://wedieyoung.jp/wp-content/uploads/2025/06/52143FD9-F6E3-4E0B-95C5-AE5C2216CC2C.jpg",
    ticketUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=bUIHl26jgw0",
    report: [
      "2025年5月4日、六本木CUBEにて「THE BASS \"wavforme & WE DIE YOUNG\" Bass Music Party」が開催された。開場前にはすでに長蛇の列ができ、期待感が入り口から高まっていた。",
      "先にオープンしたラウンジフロアは、SoUのDJでスタート。オープニングからすでに人であふれかえり、その盛り上がりは一日中続いた。続くaki、DJ Hide、B♭sic、HaLuna、ELVON、FELONE、ATMKは、それぞれが持ち込むベースミュージックの解釈を立体的に展開し、ラウンジという枠を超えた濃密なグルーヴを構築した。",
      "続くメインフロアでは、Redsignが幕を開けた瞬間に人が押し寄せ、会場は満員状態に。エッジの効いた選曲と構成力で完全に空間の支配権を握り、メインフロアの幕開けにふさわしい強烈なインパクトを残した。そこからESAI、MK、vishnu okuno、crayvxn、VOLTA、Letsu、DubscribeがTrap・Dubstep・Bass House・Waveを横断する多彩な低音でフロアを揺らし続けた。",
      "最後を飾ったrejection & KO3はWE DIE YOUNG vol.6にボーカルとして参加したXiNを招き、\"BEST GOAT\"、\"In The Cloud\"をライブ披露。張りつめた空気を一瞬で染め変えるような、XiNの儚くも芯のある声がビートに重なった瞬間、フロアの熱量はさらに跳ね上がった。",
      "ラウンジとメイン、両フロアがそれぞれ異なる色を放ちながらも、共通していたのは\"底知れぬ重低音\"とフロア全体を覆う熱気。メインフロアでは音だけでなく、VJによる映像演出もフロアを支配し、レーザー演出が天井から鋭く交差し、光の網の中で音が暴れまわるような錯覚を生む場面も。一夜を通じて出演者と観客が一体となり、まぎれもなく\"THE BASS\"の名にふさわしい高揚感と熱量を体現したイベントとなった。"
    ],
    credits: [
      "Organizer: wavforme、WE DIE YOUNG",
      "Lounge DJ: aki、ATMK、B♭sic、DJ Hide、ELVON、FELONE、HaLuna、SoU",
      "Main DJ: crayvxn、Dubscribe、ESAI、MK、Redsign、rejection & KO3、vishnu okuno、VOLTA、Letsu",
      "Vocal: XiN",
      "VJ: COCOA*、SoU",
      "Photo: 佐藤瑞起",
      "Video Edit: rejection"
    ],
    gallery: [
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_9464-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_9469-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_9667-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_9831-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_9944-684x1024.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0071-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0234-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0239-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0398-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_9515-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_9544-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_9742-684x1024.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_9881-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_9998-1-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0088-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0186-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0325-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0443-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0645-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0656-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_9752-1024x683.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0498-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0591-1024x684.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/07/D75_0699-1024x684.jpg"
    ]
  }
];


/* ------------------------------------------------------------
   5. NEWS（ニュース / お知らせ）
   ------------------------------------------------------------
   ★ 新しい記事を一番上に追加してください（上から順に表示されます）
   ★ category は自由ですが "RELEASE" / "EVENT" / "MEDIA" / "GOODS" / "INFO" を推奨
   ★ link は関連ページのURL。""なら本文のみ表示
   ------------------------------------------------------------ */
const NEWS = [
  {
    date: "2026-04-10",
    category: "RELEASE",
    title: "21SWINGS – SURGE EP 配信開始",
    body: "世界中のクラブやフェスでプレイされるEDMアーティスト21SWINGSが、WE DIE YOUNGからEP「SURGE」をデジタルリリース。",
    link: "https://www.submithub.com/link/21swings-surge"
  },
  {
    date: "2026-03-27",
    category: "RELEASE",
    title: "Viticz & Namya – Rangda 配信開始",
    body: "シンガポールのViticzとインドネシアのNamyaによるコラボシングル「Rangda」をデジタルリリース。",
    link: "https://www.submithub.com/link/rangda"
  },
  {
    date: "2026-03-16",
    category: "EVENT",
    title: "【DJ Schedule】2026.03.20 Beginning ZERO at ZEROTOKYO",
    body: "新宿ZEROTOKYOで開催のBeginning ZERO \"JUELZ TOKYO RETURN\"にWE DIE YOUNG（rejection, vishnu okuno, crp.）が出演。Z HALL・360°セットにて、国内のTrap/Bassアーティストが集結するBass Musicの一夜。",
    link: ""
  },
  {
    date: "2026-01-30",
    category: "RELEASE",
    title: "21SWINGS – BREAK THE BASS 配信開始",
    body: "フェスティバルEDMとベースミュージックを融合する21SWINGSのシングル「BREAK THE BASS」をデジタルリリース。",
    link: "https://www.submithub.com/link/break-the-bass"
  },
  {
    date: "2026-01-09",
    category: "RELEASE",
    title: "Voxelkana – digital[F10W] 配信開始",
    body: "中国を拠点にアトモスフェリックかつフューチャリスティックなサウンドを追求するVoxelkanaのシングル「digital[F10W]」をデジタルリリース。",
    link: "https://www.submithub.com/link/digitalf10w"
  },
  {
    date: "2025-12-19",
    category: "RELEASE",
    title: "WE DIE YOUNG vol.7 配信開始",
    body: "レーベルコンピレーションアルバム「WE DIE YOUNG vol.7」がデジタルリリース。Trap/Hardwave等のBass Musicを軸に全21曲を収録した\"Cyber-Modern EDM Trap\"コンセプトアルバム。",
    link: "https://www.submithub.com/link/wedieyoung-vol7"
  },
  {
    date: "2025-12-12",
    category: "RELEASE",
    title: "Yuzac – feel it 配信開始",
    body: "RL GrimeやSkrillexに影響を受けた東京拠点のプロデューサーYuzacのシングル「feel it」をデジタルリリース。",
    link: "https://www.submithub.com/link/yuzac-feel-it"
  },
  {
    date: "2025-12-05",
    category: "RELEASE",
    title: "KANAKA & LAGnaf – DONTPLAY 配信開始",
    body: "ハワイ出身LA拠点のKANAKAと韓国のLAGnafによるコラボシングル「DONTPLAY」をデジタルリリース。",
    link: "https://wedieyoung.bandcamp.com/track/dontplay"
  },
  {
    date: "2025-11-24",
    category: "EVENT",
    title: "WE DIE YOUNG ON THE FLOOR 2025 イベントレポート",
    body: "11月2日、六本木CUBEにて開催。MTGD (from Taiwan)を迎え、ECLAIR、Redsign、Douji Wiix、crp.、vishnu okuno、KO3、rejectionら日本と台湾を繋ぐラインナップでベースミュージックの一日を作り上げた。",
    link: ""
  },
  {
    date: "2025-11-16",
    category: "RELEASE",
    title: "Kawashiii – Medication 配信開始",
    body: "サイバーな質感を軸に制作する東京在住プロデューサーKawashiiiのシングル「Medication」をデジタルリリース。",
    link: "https://www.submithub.com/link/kawashiii-medication"
  },
  {
    date: "2025-10-28",
    category: "GOODS",
    title: "WE DIE YOUNG vol.7 Tee 発売",
    body: "最新コンピレーション「WE DIE YOUNG vol.7」デザインのTシャツが数量限定で発売。Size: FREE (XL) / ¥4,000。",
    link: "https://wedieyoung.bandcamp.com/merch/we-die-young-vol-7-tee-2025"
  },
  {
    date: "2025-10-27",
    category: "RELEASE",
    title: "WE DIE YOUNG vol.7 リリース（CD）",
    body: "THE NEW AGE RESONATES — サイバーサウンドを吸収し更に進化した、日本発Trap/Bassコンピレーション第7弾。M3秋2025にて早期販売、Diverse Direct / TANO*C STORE / Bandcampで展開。",
    link: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-7"
  },
  {
    date: "2025-10-27",
    category: "RELEASE",
    title: "RAVEMODE vol.1 リリース（CD）",
    body: "ENTER THE RAVE — 新コンセプトのコンピレーションシリーズが始動。聴く者を強制的に踊らせるRAVEサウンド全8曲を収録。",
    link: "https://wedieyoung.bandcamp.com/album/ravemode-vol-1"
  },
  {
    date: "2025-10-03",
    category: "EVENT",
    title: "WE DIE YOUNG ON THE FLOOR 3rd Edition 開催決定",
    body: "年に一度の主催イベント第3弾は2025年11月2日（日）六本木CUBEにて開催。ゲストに台湾在住のDJ/Producer MTGDを招聘し、vishnu okuno、crp.、KO3に加えECLAIR、Douji Wiixが初参戦。",
    link: ""
  },
  {
    date: "2025-09-19",
    category: "RELEASE",
    title: "rejection – HANDS UP 配信開始",
    body: "レーベルオーナーrejectionによるシングル「HANDS UP」をデジタルリリース。",
    link: "https://www.submithub.com/link/rejection-hands-up"
  },
  {
    date: "2025-09-19",
    category: "EVENT",
    title: "PARTY HARD!! feat. Darren Styles イベントレポート",
    body: "9月5日、WE DIE YOUNGがZEROTOKYOのZ HALLに初出演。rejection、KO3、vishnu okunoの3人が新曲を次々と投下し、Darren Styles公演へと繋がる熱い一夜を演出した。",
    link: "https://www.youtube.com/watch?v=LSUGdlfKpS8"
  },
  {
    date: "2025-09-19",
    category: "EVENT",
    title: "Sel Octagon Tokyo 6th Anniversary \"SPACE LACES\" イベントレポート",
    body: "7月17日、六本木Sel Octagon Tokyoの6周年イベントにWE DIE YOUNG crew（rejection、Redsign、vishnu okuno）がSPACE LACESのサポートとして出演。",
    link: ""
  },
  {
    date: "2025-09-19",
    category: "EVENT",
    title: "Do D4 Bass MIRAINAGOYA イベントレポート",
    body: "7月5日、名古屋MIRAINAGOYAで開催された\"Do D4 Bass\"にWE DIE YOUNG（KO3、rejection、vishnu okuno）が出演。",
    link: ""
  },
  {
    date: "2025-09-01",
    category: "INFO",
    title: "WE DIE YOUNG ON THE FLOOR 2025 開催日決定",
    body: "2025年11月2日（日）デイタイム、ROPPONGI CUBEにて開催決定。詳細は後日発表。",
    link: "https://www.youtube.com/watch?v=2uqdPfuVNks"
  },
  {
    date: "2025-08-22",
    category: "RELEASE",
    title: "XeroC'tok – Ballade 配信開始",
    body: "韓国を拠点にGarageとTrapを制作するXeroC'tokのデビューシングル「Ballade」をデジタルリリース。",
    link: "https://www.submithub.com/link/xeroctok-ballade"
  },
  {
    date: "2025-08-09",
    category: "RELEASE",
    title: "ZiXS – One More 配信開始",
    body: "タイ出身のEDMプロデューサーZiXSのデビューシングル「One More」をデジタルリリース。WE DIE YOUNG vol.5収録曲「MAKE ME FEEL LIKE YOU」以来のリリース。",
    link: "https://www.submithub.com/link/zixs-one-more"
  },
  {
    date: "2025-07-26",
    category: "RELEASE",
    title: "Lactar1uz – Falling 4 U 配信開始",
    body: "TrapやDrum'n'Bassを軸に制作する日本在住プロデューサーLactar1uzのデビューシングル「Falling 4 U」をデジタルリリース。",
    link: "https://www.submithub.com/link/falling-4-u"
  },
  {
    date: "2025-07-24",
    category: "INFO",
    title: "イベントスケジュールページを公開",
    body: "今後の出演情報をGoogleカレンダー形式で随時掲載。",
    link: "https://calendar.google.com/calendar/embed?src=wedieyoungrec%40gmail.com&ctz=Asia%2FTokyo"
  },
  {
    date: "2025-07-15",
    category: "EVENT",
    title: "World DJ Festival JAPAN 2025 — WATARU B2B WE DIE YOUNG イベントレポート",
    body: "6月28日、幕張メッセのJP NIGHT STAGEにWATARUとWE DIE YOUNG（rejection、KO3、vishnu okuno）が登場。モッシュピットが出現するほどの熱狂で、この日最も\"肉体を揺らした瞬間\"を刻んだ。",
    link: "https://www.youtube.com/watch?v=HAyQS43M2eI"
  },
  {
    date: "2025-07-15",
    category: "EVENT",
    title: "THE BASS — wavforme & WE DIE YOUNG Bass Music Party イベントレポート",
    body: "5月4日、六本木CUBEにて開催。2フロアにわたり国内のベースミュージックアーティストが集結し、rejection & KO3はXiNを迎え\"BEST GOAT\"、\"In The Cloud\"をライブ披露した。",
    link: "https://www.youtube.com/watch?v=bUIHl26jgw0"
  },
  {
    date: "2025-07-14",
    category: "INFO",
    title: "WE DIE YOUNG オフィシャルウェブサイト公開",
    body: "アーティストのリリース情報やイベントスケジュール、最新ニュース、過去の活動アーカイブなどを掲載。コンテンツなども順次追加予定！",
    link: ""
  }
];
