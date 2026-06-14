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

  // ▼ ホームの「VIDEO」欄に埋め込むYouTube動画
  //    YouTubeのURLをそのまま貼り付けるだけ（watch?v=… / youtu.be/… どちらでもOK）
  //    動画を変えたい時はこのURLを書き換えるだけ。""にすると欄ごと非表示になります
  featuredVideo: "https://www.youtube.com/watch?v=fW-frTKQJP4",

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
    { title: "BASS FORWARD",   text: "Trap / Bass / Hardwave / Rave。重低音を軸に、モダンかつハイブリッドなサウンドへ進化を続けるコンピレーションシリーズを展開。" },
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
    description: "WE DIE YOUNGの新コンセプト・コンピレーションアルバム。Future Bass / Wave / Garage等のメロディックなサウンドを軸にした全12曲収録。",
    links: {
      stream:   "https://www.submithub.com/link/afterlife-vol1",
      bandcamp: "https://wedieyoung.bandcamp.com/album/afterlifevol-1",
      "buy cd": "https://www.diverse.direct/we-die-young/wdy-038/"
    }
  },
  {
    title: "WE DIE YOUNG vol.8",
    artist: "Various Artists",
    type: "COMPILATION",
    date: "2026-04-27",
    cover: "https://f4.bcbits.com/img/a0656935817_10.jpg",
    description: "日本発Trap/Bassコンピレーション第8弾。Trap / Dubstep / Bass House等のBass Musicを軸にした全16曲収録。",
    links: {
      stream:   "https://www.submithub.com/link/we-die-young-vol-8",
      bandcamp: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-8",
      "buy cd": "https://www.diverse.direct/we-die-young/wdy-037/"
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
      "buy cd": "https://www.diverse.direct/we-die-young/wdy-029/"
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
      "buy cd": "https://www.diverse.direct/we-die-young/wdy-030/"
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
      stream: "https://www.submithub.com/link/we-die-young-vol-6",
      bandcamp: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-6",
      "buy cd": "https://www.diverse.direct/we-die-young/wdy-017/"
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
      stream: "https://www.submithub.com/link/we-die-young-vol-5",
      bandcamp: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-5",
      "buy cd": "https://www.diverse.direct/we-die-young/wdy-011/"
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
      stream: "https://www.submithub.com/link/we-die-young-vol-4",
      bandcamp: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-4",
      "buy cd": "https://www.diverse.direct/we-die-young/wdy-006/"
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
      stream: "https://www.submithub.com/link/we-die-young-vol-3",
      bandcamp: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-3",
      "buy cd": "https://www.diverse.direct/we-die-young/wdy-004/"
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
      stream: "https://www.submithub.com/link/we-die-young-vol-2",
      bandcamp: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-2",
      "buy cd": "https://www.diverse.direct/we-die-young/wdy-002/"
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
      stream: "https://www.submithub.com/link/we-die-young-vol-1",
      bandcamp: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-1",
      "buy cd": "https://www.diverse.direct/we-die-young/wdy-001/"
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
      stream:   "https://www.submithub.com/link/kanaka-lagnaf-dontplay",
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
      stream: "https://www.submithub.com/link/eclair-need-you",
      bandcamp: "https://wedieyoung.bandcamp.com/track/need-you"
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
      stream: "https://www.submithub.com/link/starfall",
      bandcamp: "https://wedieyoung.bandcamp.com/track/starfall"
    }
  },
  {
    title: "DEFINED",
    artist: "MTGD",
    type: "EP",
    date: "2025-06-20",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_-DEFINED.jpg",
    description: "台湾在住のDJ/ProducerであるMTGDのEP。",
    links: {
      stream: "https://www.submithub.com/link/mtgd-defined",
      bandcamp: "https://wedieyoung.bandcamp.com/album/defined"
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
      stream: "https://www.submithub.com/link/xeno-reality",
      bandcamp: "https://wedieyoung.bandcamp.com/track/reality"
    }
  },
  {
    title: "ANGELvoid",
    artist: "vishnu okuno",
    type: "ALBUM",
    date: "2025-05-31",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_-ANGELvoid.jpg",
    description: "WE DIE YOUNG中心メンバーvishnu okunoのアルバム。",
    links: {
      stream: "https://www.submithub.com/link/angelvoid",
      bandcamp: "https://wedieyoung.bandcamp.com/album/angelvoid",
      "buy cd": "https://www.diverse.direct/we-die-young/wdy-018/"
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
      stream: "https://www.submithub.com/link/run-dat",
      bandcamp: "https://wedieyoung.bandcamp.com/track/run-dat"
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
      stream: "https://www.submithub.com/link/karma-strike",
      bandcamp: "https://wedieyoung.bandcamp.com/track/karma-strike"
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
      stream: "https://www.submithub.com/link/with-me-now",
      bandcamp: "https://wedieyoung.bandcamp.com/track/with-me-now"
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
      stream: "https://www.submithub.com/link/mtgd-drop-it",
      bandcamp: "https://wedieyoung.bandcamp.com/track/drop-it"
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
      stream: "https://www.submithub.com/link/douji-wiix-mental",
      bandcamp: "https://wedieyoung.bandcamp.com/track/mental"
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
      stream: "https://www.submithub.com/link/volta-sirens",
      bandcamp: "https://wedieyoung.bandcamp.com/track/sirens"
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
      stream: "https://www.submithub.com/link/we-fall-again",
      bandcamp: "https://wedieyoung.bandcamp.com/track/we-fall-again"
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
      stream: "https://www.submithub.com/link/exodynamix-radiance",
      bandcamp: "https://wedieyoung.bandcamp.com/track/radiance"
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
      stream: "https://www.submithub.com/link/sh0wtime-u-feel-the-same",
      bandcamp: "https://wedieyoung.bandcamp.com/track/u-feel-the-same"
    }
  },
  {
    title: "IRIS/CTRL",
    artist: "The Herb Shop",
    type: "EP",
    date: "2024-03-02",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_IRISCTRL.jpg",
    description: "The Herb ShopのEP。",
    links: {
      stream: "https://www.submithub.com/link/the-herb-shop-iris-ctrl",
      bandcamp: "https://wedieyoung.bandcamp.com/album/iris-ctrl"
    }
  },
  {
    title: "Heart Attack / Far East",
    artist: "rejection",
    type: "EP",
    date: "2023-09-19",
    cover: "https://wedieyoung.jp/wp-content/uploads/2025/06/0626WDY_-Heart-AttackFar-East.jpg",
    description: "レーベルオーナーrejectionによるEP。",
    links: {
      stream: "https://www.submithub.com/link/rejection-heart-attack-far-east",
      bandcamp: "https://wedieyoung.bandcamp.com/album/heart-attack-far-east"
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
    name: "I CAN FRY",
    date: "2026-06-20",
    timeNote: "OPEN 23:00 / DOOR ¥2,500（2D付・前売なし）",
    venue: "Another Dimension",
    lineup: [
      "Acrocanthosaurus",
      "CONNECT CREW (AMANO, Bowne, DVIKI)",
      "DJ Heero Yuy & BOMAYE",
      "Hideout Sounds (kens:k & Hisaki)",
      "melo & Oblongar",
      "Relect & 和馬",
      "re:pop",
      "WE DIE YOUNG (KO3, rejection, Redsign)",
      "みのむし"
    ],
    flyer: "https://pbs.twimg.com/media/HHJyXa2akAAD91e.jpg?name=large",
    ticketUrl: "",
    videoUrl: "",
    report: [],
    credits: [],
    gallery: []
  },
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
    date: "2026-04-27",
    category: "RELEASE",
    title: "AFTERLIFE vol.1 リリース",
    body: "WE DIE YOUNGの新コンセプト・コンピレーションアルバム「AFTERLIFE vol.1」がリリース。Future Bass / Wave / Garage等のメロディックなサウンドを軸にした全12曲収録。",
    link: "",
    image: "https://f4.bcbits.com/img/a0311867667_10.jpg",
    article: [
      "2026年4月27日、WE DIE YOUNGの新コンセプト・コンピレーションアルバム「AFTERLIFE vol.1」がリリースされました。",
      "On April 27, 2026, WE DIE YOUNG released its new concept compilation album “AFTERLIFE vol.1”.",
      "本作はWE DIE YOUNGが新たに始動させたコンピレーションシリーズ「AFTERLIFE」の第1弾。Future Bass / Wave / Garage等のメロディックなサウンドを軸に、これまでのシリーズとは異なるエモーショナルな世界観を描いた全12曲を収録。",
      "“AFTERLIFE” marks the beginning of a brand-new compilation series from WE DIE YOUNG. Centered around melodic sounds such as Future Bass, Wave, and Garage, this first installment features 12 tracks that explore an emotional soundscape distinct from the label’s previous series.",
      "🎧 TRACKLIST\n01. rejection – Good Time\n02. mahziel – In the Air\n03. Tsuyoshi A. – Faded Rain (feat. wind flower)\n04. Renge – DON’T LET ME GO\n05. crp. – let u\n06. De_N – Spr. haze\n07. vishnu okuno – final call (shake that)\n08. X2lowline – Waiting\n09. SLEEPYHEVD – pray\n10. yugaku – if only u\n11. Exodynamix – wasting time\n12. shiraishi – flagile"
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/afterlife-vol1" },
      { label: "Bandcamp", url: "https://wedieyoung.bandcamp.com/album/afterlifevol-1" },
      { label: "Buy CD", url: "https://www.diverse.direct/we-die-young/wdy-038/" }
    ]
  },
  {
    date: "2026-04-27",
    category: "RELEASE",
    title: "WE DIE YOUNG vol.8 リリース",
    body: "レーベルコンピレーションアルバム「WE DIE YOUNG vol.8」がリリース。Trap / Dubstep / Bass House等のBass Musicを軸にした、日本発Trap/Bassコンピレーション第8弾。全16曲収録。",
    link: "",
    image: "https://f4.bcbits.com/img/a0656935817_10.jpg",
    article: [
      "2026年4月27日、WE DIE YOUNGのレーベルコンピレーションアルバム「WE DIE YOUNG vol.8」がリリースされました。",
      "On April 27, 2026, WE DIE YOUNG released its label compilation album “WE DIE YOUNG vol.8”.",
      "レーベルの看板シリーズ第8弾となる本作は、Trap / Dubstep / Bass House等のBass Musicを軸に、国内外のアーティストが集結した全16曲を収録。フロア直結のアグレッシブなサウンドでシリーズの最前線を更新する一枚。",
      "As the eighth installment of the label’s flagship compilation series, this release features 16 tracks built around Trap, Dubstep, Bass House, and other bass-driven sounds, bringing together artists from Japan and abroad. A floor-ready, aggressive record that pushes the series to its next stage.",
      "🎧 TRACKLIST\n01. Redsign – Get Down\n02. Xeno & ADAM KALI – Want Me\n03. eeyrith. – Replace You\n04. vishnu okuno – swag2k26\n05. crp. – don’t stop\n06. TRYDENY – Keep it goin\n07. KO3 – GETTING HIGH\n08. MTGD – SCREAM\n09. SMWLAYY & CONF!RM – Burnout\n10. ZiXS – THROW IT BACK\n11. Diat – Make Me Go\n12. ECLAIR – Stepped Through\n13. rejection & The Herb Shop – FM/AM\n14. MOSHIMOSH & morethanahalf – selecta\n15. Douji Wiix – your voice\n16. Exodynamix & crp. – Slipstream"
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/we-die-young-vol-8" },
      { label: "Bandcamp", url: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-8" },
      { label: "Buy CD", url: "https://www.diverse.direct/we-die-young/wdy-037/" }
    ]
  },
  {
    date: "2026-04-10",
    category: "RELEASE",
    title: "21SWINGS – SURGE EP 配信開始",
    body: "世界中のクラブやフェスでプレイされるEDMアーティスト21SWINGSが、WE DIE YOUNGからEP「SURGE」をデジタルリリース。",
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2026/04/WDY036-ver2-brown-scaled.png",
    article: [
      "2026年4月10日、21SWINGSがWE DIE YOUNGからEP「SURGE」をデジタルリリースしました。",
      "On April 10, 2026, 21SWINGS released the EP “SURGE” digitally from WE DIE YOUNG.",
      "【プロフィール】21SWINGS",
      "21SWINGSは、ピークタイムのクラブやフェスのメインステージに直結した、アグレッシブでジャンルレスな楽曲やリミックスで知られるEDMアーティスト。Waterbomb Seoul、Zouk Singapore、PITT Club Kuala Lumpur、EDCなど世界中のクラブやフェスでプレイされている。",
      "フェスティバルEDM、ベースミュージック、モダンクラブサウンドを融合し、最大限のフロアエネルギーを生み出す楽曲を制作。オリジナルとリミックスの両軸で、21SWINGSはグローバルEDMシーンに新たな勢いをもたらしている。",
      "【BIOGRAPHY】21SWINGS",
      "21SWINGS is a rising high-energy EDM artist known for delivering aggressive, genre-blending productions and remixes built for peak-time clubs and festival mainstages. His music has earned strong international DJ support, with tracks played across major global venues and festivals including Waterbomb Seoul, Zouk Singapore, PITT Club Kuala Lumpur, and EDC.",
      "Fusing festival EDM with bass-driven power and modern club influences, 21SWINGS consistently crafts high-impact records designed for maximum crowd energy. Driven by explosive originals and high-impact remixes, 21SWINGS is rapidly making his mark as a new force in the global EDM scene."
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/21swings-surge" },
      { label: "21SWINGS (Instagram)", url: "https://www.instagram.com/21swings/" }
    ]
  },
  {
    date: "2026-03-27",
    category: "RELEASE",
    title: "Viticz & Namya – Rangda 配信開始",
    body: "シンガポールのViticzとインドネシアのNamyaによるコラボシングル「Rangda」をデジタルリリース。",
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2026/03/WDY035-scaled.jpg",
    article: [
      "2026年3月27日、Viticz & NamyaがWE DIE YOUNGからシングル「Rangda」をデジタルリリースしました。",
      "On March 27, 2026, Viticz & Namya released the single “Rangda” digitally from WE DIE YOUNG.",
      "【プロフィール】Viticz",
      "VITICZ（Suherman）は、シンガポールを拠点に活動するミュージシャン、アーティスト、サウンドデザイナー。9歳で音楽活動を始め、15歳でキャリアをスタートさせ、複数のシングルやEPをネットレーベルからリリースしながら、シーン内の様々なアーティストとコラボレーションを行ってきた。",
      "創作への強い情熱に突き動かされ、ほぼ独学でスキルを磨きながら、自身のルーツとなるサウンドとエレクトロニックミュージックを融合し、ジャンルにとらわれない大胆な音楽性を展開している。",
      "2018年にDJデビューを果たすと、瞬く間にローカルシーンで存在感を確立。同時期にはVanille A、10SAI、Bentai、Rina、roxwindyらと共にコレクティブを結成。アニメカルチャーとベースミュージックへの共通の愛を軸に、roxwindyと共にイベントシリーズ「cawfeeMIX!!」を立ち上げた。",
      "その後、日本でのcawfeeMIX!!ツアーを成功させたことで注目を集め、MOGRAやCIRCUS Tokyoといった著名な会場に加え、近年ではZOUK Singaporeにも出演。多様なスタイルとダイナミックなパフォーマンスで知られるVITICZは、現在も幅広い音楽プロジェクトを通じて、その表現の可能性を広げ続けている。",
      "【プロフィール】Namya",
      "Namyaはインドネシア出身のプロデューサーで、ベースミュージックを軸としたエレクトロニックミュージックを制作している。ハードに効かせた低域とキックを中心に構築された高エネルギーなトラックを特徴とし、ダンスフロアでのインパクトを重視したサウンドを展開している。その音楽はリズムや衝撃、身体的なグルーヴを強調しており、ヘッドホンでもライブでも同様に強く響くよう設計されている。",
      "2024年に音楽制作をスタートして以来、ソロ作品やコラボレーションを通じて着実にスタイルを確立。ani-kura projectsのリミックスコンピレーションに複数参加するほか、PT TBHとしても活動している。また、STACKNATIONやVibetronicといったコレクティブにも所属し、オンラインのダンスミュージックシーンの中で存在感を高めている。",
      "主にAbletonを使用しながら、サウンドデザインや楽曲構成を磨き続け、プロダクションのクオリティを追求。現在は勢いを増しつつあり、攻撃的でありながらダンサブルなトラックを通じて、ベースミュージックシーンで確固たる地位を築くことを目指している。",
      "【BIOGRAPHY】Viticz",
      "VITICZ (Suherman) is a Singapore-based musician, artist, and sound designer. He began his musical journey at the age of 9 and officially started his career at 15, releasing multiple singles and EPs through various netlabels while collaborating with artists across the scene. Driven by an obsessive passion for creativity, VITICZ is largely self-taught and known for fusing electronic music with the sounds that shaped his upbringing, fearlessly exploring new ideas and genres.",
      "Making his official DJ debut in 2018, VITICZ quickly became an active figure in the local scene. During this time, he formed a collective with like-minded artists including Vanille A, 10SAI, Bentai, Rina, and roxwindy. Sharing a strong affinity for anime culture and bass-driven dance music, he co-founded the ongoing event series cawfeeMIX!! with roxwindy.",
      "Following a successful first mini tour in Japan with the cawfeeMIX!! group, VITICZ gained wider recognition, performing at renowned venues such as MOGRA and CIRCUS Tokyo, and more recently at ZOUK Singapore. Known for his versatility and dynamic performances, VITICZ continues to push boundaries through diverse music projects and a deep passion for sound.",
      "【BIOGRAPHY】Namya",
      "Namya is a producer from Indonesia, focused on bass-driven electronic music, crafting high-energy tracks built around hard hitting low-end kicks. With a sound rooted in dancefloor intensity, his music emphasizes rhythm, impact, and movement, designed to hit just as hard in headphones as it does in a live setting.",
      "Starting his production journey in 2024, Namya has steadily developed his style through both solo work and collaborative projects. He has contributed to multiple remix compilation projects on ani-kura projects, while also working closely with his circle under the group name PT TBH. Alongside this, he is an active member of the collectives STACKNATION and Vibetronic, continuing to grow within the online electronic dance music scene.",
      "Working primarily in Ableton, Namya focuses on refining his sound design, composition and pushing his production quality forward. As he builds momentum, his goal is to establish himself as a recognized name in the bass music space, delivering tracks that are both aggressive and danceable."
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/rangda" },
      { label: "Viticz (Official)", url: "https://www.viticz.com/" },
      { label: "Namya (Instagram)", url: "https://www.instagram.com/djnamya/" }
    ]
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
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2026/02/WDY034-v1-scaled.png",
    article: [
      "2026年1月30日、21SWINGSがWE DIE YOUNGからシングル「BREAK THE BASS」をデジタルリリースしました。",
      "On January 30, 2026, 21SWINGS released the single “BREAK THE BASS” digitally from WE DIE YOUNG.",
      "【プロフィール】21SWINGS",
      "21SWINGSは、ピークタイムのクラブやフェスのメインステージに直結した、アグレッシブでジャンルレスな楽曲やリミックスで知られるEDMアーティスト。Waterbomb Seoul、Zouk Singapore、PITT Club Kuala Lumpur、EDCなど世界中のクラブやフェスでプレイされている。",
      "フェスティバルEDM、ベースミュージック、モダンクラブサウンドを融合し、最大限のフロアエネルギーを生み出す楽曲を制作。オリジナルとリミックスの両軸で、21SWINGSはグローバルEDMシーンに新たな勢いをもたらしている。",
      "【BIOGRAPHY】21SWINGS",
      "21SWINGS is a rising high-energy EDM artist known for delivering aggressive, genre-blending productions and remixes built for peak-time clubs and festival mainstages. His music has earned strong international DJ support, with tracks played across major global venues and festivals including Waterbomb Seoul, Zouk Singapore, PITT Club Kuala Lumpur, and EDC.",
      "Fusing festival EDM with bass-driven power and modern club influences, 21SWINGS consistently crafts high-impact records designed for maximum crowd energy. Driven by explosive originals and high-impact remixes, 21SWINGS is rapidly making his mark as a new force in the global EDM scene."
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/break-the-bass" },
      { label: "21SWINGS (Instagram)", url: "https://www.instagram.com/21swings/" }
    ]
  },
  {
    date: "2026-01-09",
    category: "RELEASE",
    title: "Voxelkana – digital[F10W] 配信開始",
    body: "中国を拠点にアトモスフェリックかつフューチャリスティックなサウンドを追求するVoxelkanaのシングル「digital[F10W]」をデジタルリリース。",
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2026/01/8d0beaaa9e129d0e95ae16b76dbefdac-scaled.png",
    article: [
      "2026年1月9日、VoxelkanaがWE DIE YOUNGからシングル「digital[F10W]」をデジタルリリースしました。",
      "On January 9, 2026, Voxelkana released the single “digital[F10W]” digitally from WE DIE YOUNG.",
      "【プロフィール】Voxelkana",
      "2024年より活動を開始したVoxelkanaは、中国を拠点に活動するプロデューサーで、アトモスフェリックかつフューチャリスティックなサウンドを追求している。同人サークル「ExFusion」名義でアルバムをリリースする一方、近年は複数のレーベルからも楽曲を発表し、活動の幅を広げている。",
      "【BIOGRAPHY】Voxelkana",
      "Active since 2024, Voxelkana is a China-based producer dedicated to atmospheric and futuristic sounds. While dropping albums under his doujin circle ExFusion, he has also begun releasing music through various labels."
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/digitalf10w" },
      { label: "Voxelkana (X)", url: "https://x.com/voxelkana" }
    ]
  },
  {
    date: "2025-12-19",
    category: "RELEASE",
    title: "WE DIE YOUNG vol.7 配信開始",
    body: "レーベルコンピレーションアルバム「WE DIE YOUNG vol.7」がデジタルリリース。Trap/Hardwave等のBass Musicを軸に全21曲を収録した\"Cyber-Modern EDM Trap\"コンセプトアルバム。",
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2025/10/WDY7_ARTWORK_01-1-1024x1024.png",
    article: [
      "2025年12月19日、WE DIE YOUNGのレーベルコンピレーションアルバム「WE DIE YOUNG vol.7」がデジタルリリースされました。",
      "On December 19, 2025, WE DIE YOUNG released its label compilation album “WE DIE YOUNG vol.7”.",
      "インディペンデント・ベースミュージックレーベル WE DIE YOUNG は、最新コンピレーションアルバム『WE DIE YOUNG vol.7』をリリースした。Trap / Hardwave 等のBass Musicを軸に、ジャンルの持つアグレッシブさ・メロディ・実験性を高次元で昇華させた全21曲を収録。",
      "【本アルバムについて】[文: rejection (レーベルオーナー)]",
      "コンピレーションアルバム７作目となる今作は、Trapを主軸とするBass Musicコンピレーションという点ではこれまでのアルバムシリーズを引き継ぐものですが、一点だけ他のアルバムとは異なる点があります。それは、HardwaveやTrance等に影響を受けた”Cyber”テイストが全曲に散りばめられていることです。これは僕がこれまでとの差別化として全アーティストに共有し理解していただいたもので、いわばvol.7は”Cyber-Modern EDM Trap”コンセプトアルバムということになります。",
      "そして、実は同様のコンセプトアルバムとしてvol.3がありました。vol.3は全曲を通したサイバーな質感によってこれまでのタイトルの中で異質な存在感を放ち、未だ多くのファンを抱えています。僕はもう一度CyberテイストのTrapコンピレーションをリバイバルしたいと思い立ち、vol.7はその精神的続編として企画をスタートさせました。",
      "vol.7をすでに聴いていただいた方なら納得して頂けると思いますが、結果として本アルバムはただのvol.3焼き増しではなく、どのアルバムにも無い完成度を誇るアルバムとなりました。間違いなくこれまでのシリーズで最も自信を持って一番だと言えるアルバムです。全ては参加していただいたアーティストの皆さんの力あってこそで、本当に感謝しています。",
      "【About This Album】Written by rejection (Label Owner)",
      "As the seventh installment in the WE DIE YOUNG compilation series, this release continues the label’s tradition as a bass music compilation centered around Trap. However, there is one key aspect that sets this album apart from the previous entries. That difference lies in the strong “Cyber” aesthetic woven throughout every track, influenced by genres such as Hardwave and Trance. This concept was clearly shared and understood by all participating artists as a point of differentiation, making WE DIE YOUNG vol.7 a true “Cyber-Modern EDM Trap” concept album.",
      "Interestingly, a similar concept had been explored before in vol.3. That album stood out within the series due to its consistent cyber texture across all tracks, and it continues to hold a strong fanbase to this day. Wanting to revive that cyber-infused Trap sound once again, I began planning vol.7 as a spiritual successor to vol.3.",
      "Those who have already listened to vol.7 will likely agree that the result is far more than a simple rehash of vol.3. Instead, this album achieves a level of completeness and refinement unmatched by any other release in the series. Without a doubt, it is the album I am most confident in calling the best we have released so far. This achievement is entirely thanks to the incredible contributions of the artists involved, and for that, I am truly grateful.",
      "🎧 TRACKLIST\n01. Exodynamix – SOURCE\n02. vishnu okuno – i don’t need (play it again!)\n03. icesawder & moyu – leave me again\n04. REXY=DEXY – HARD LIFE\n05. SMWLAYY – Without You\n06. MOSHIMOSH & BHM – TELLME2DANCE\n07. The Herb Shop – In Dreams\n08. ECLAIR – SUNRAYS\n09. CONF!RM – Chamber\n10. crp. – give u\n11. rejection – Nothing To Lose\n12. ZiXS – The Call\n13. Tohrchu – Goldship\n14. Diat – switch the beat\n15. sh0wtime – caughtUP! (dontneedu)\n16. SineVorteX & MTGD – Overdrive\n17. HaLuna – Sci-bar Collapse\n18. Douji Wiix – PULLUP!\n19. eeyrith. – Believe\n20. Xeno & senjou – BREAK IT DOWN\n21. KO3 – INNOCENCE\n\nARTWORK – kyasya"
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/wedieyoung-vol7" },
      { label: "Bandcamp", url: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-7" }
    ]
  },
  {
    date: "2025-12-12",
    category: "RELEASE",
    title: "Yuzac – feel it 配信開始",
    body: "RL GrimeやSkrillexに影響を受けた東京拠点のプロデューサーYuzacのシングル「feel it」をデジタルリリース。",
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2025/12/WDY032-artwork-scaled.png",
    article: [
      "2025年12月12日、YuzacがWE DIE YOUNGからシングル「feel it」をデジタルリリースしました。",
      "On December 12, 2025, Yuzac released the single “feel it” digitally from WE DIE YOUNG.",
      "【プロフィール】Yuzac",
      "Yuzacは、東京を拠点に活動するエレクトロニック・ミュージックプロデューサー。Trap EDM、Festival Trap、Bass Houseを軸に、RL GrimeやSkrillexから影響を受けたダークでエモーショナル、かつパワフルなサウンドを特徴としている。クラブからフェスティバルまでを想定したインパクトあるトラックを制作しつつ、アンダーグラウンドの感性を宿したユニークな音作りで独自の存在感を放つ。TrapからBass Houseまでジャンルを横断しながら、自身のルーツであるエモーショナルな世界観を貫いたサウンドデザインとエネルギッシュなドロップが際立っている。",
      "【BIOGRAPHY】Yuzac",
      "Yuzac is an electronic music producer based in Tokyo. Centered around Trap EDM, Festival Trap, and Bass House, his sound is dark, emotional, and powerful, drawing strong inspiration from artists such as RL Grime and Skrillex. He creates impactful tracks designed for both clubs and festival stages, while maintaining a unique presence through sound design rooted in an underground sensibility. Blending genres from Trap to Bass House, Yuzac’s music is defined by emotional soundscapes that reflect his roots, combined with energetic, hard-hitting drops."
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/yuzac-feel-it" },
      { label: "Yuzac (Instagram)", url: "https://www.instagram.com/yuzacmusic/" }
    ]
  },
  {
    date: "2025-12-05",
    category: "RELEASE",
    title: "KANAKA & LAGnaf – DONTPLAY 配信開始",
    body: "ハワイ出身LA拠点のKANAKAと韓国のLAGnafによるコラボシングル「DONTPLAY」をデジタルリリース。",
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2025/12/WDY031_Artwork_fix-scaled.png",
    article: [
      "2025年12月5日、LAGnaf & KANAKAがWE DIE YOUNGからシングル「DONTPLAY」をデジタルリリースしました。",
      "On December 5, 2025, LAGnaf & KANAKA released the single “DONTPLAY” digitally from WE DIE YOUNG.",
      "【プロフィール】KANAKA",
      "ハワイ出身で現在ロサンゼルスを拠点とする新進アーティストKANAKAは、Jawns、RL Grime、そしてSable Valley所属アーティストたちの革新的なサウンドから強く影響を受けながら、エレクトロニック・ミュージックにおいて独自の道を切り開いている。",
      "Trap、Wave、Technoをシームレスに融合させた彼の音楽は、シネマティックでありながらハードヒットなサウンド、緻密なベースライン、幽玄なメロディ、そして高エネルギーなドロップが強みである。大きな世界観を構築することに重点を置き、聴き手をダークで神秘的な空間へと誘い、そこから荒々しいベースの奔流へ突き落とすような体験を生み出す。",
      "TrapとWaveの進化系ともいえるサウンドは、フェスティバル級のエネルギーを持つ影響元からの要素を受け継ぎつつ、KANAKA独自のクリエイティビティを注ぎ込んだものだ。Alison Wonderland、Rossy、Juelz、Lookas、Tisoki、REXY=DEXY、REAPER、PHIBESなど、多くのアーティストからサポートを受けている。",
      "【プロフィール】LAGnaf",
      "LAGnafは韓国出身のBass／Trapプロデューサー・DJで、力強くエネルギーに満ちたトラックを制作するアーティスト。フェスで鳴り響くようなパワフルなドロップ、攻撃的なベースデザイン、鋭いリズムワークを融合し、独自のサウンドを確立している。",
      "K-Popリミックスの高いスキルで知られており、誰もが知るメロディをクラブ向けのヘビーなトラックへ再構築することで、多くのリスナーを惹きつけている。ステージではTrap、Hybrid Trap、Bassジャンルを縦横無尽に行き来し、ダイナミックな存在感を放つ。LAGnafが作り出すのは単なるクラブトラックではなく、爆発的で忘れられない瞬間そのものである。韓国から世界へと台頭する次世代プロデューサーとして、グローバルなベースミュージックシーンで独自の存在感を築き続けている。",
      "【BIOGRAPHY】KANAKA",
      "An emerging artist from Hawai’i and now residing in Los Angeles, KANAKA is carving a unique path in the electronic music world, drawing heavy inspiration from the boundary-pushing sounds of artists like Jawns, RL Grime, and the powerhouse roster of Sable Valley. With a seamless blend of Trap, Wave, and Techno, KANAKA delivers music that’s both cinematic and hard-hitting, combining intricate basslines, haunting melodies, and high-octane drops.",
      "With a focus on building atmosphere, KANAKA creates tracks that transport listeners into dark, ethereal worlds before dropping them into gritty, bass-fueled chaos. Their music is a testament to the evolution of trap and wave, pulling from the festival-ready energy of their influences while injecting their own creative twist. Supported by artists from Alison Wonderland, Rossy, Juelz, Lookas, Tisoki, REXY=DEXY, REAPER, PHIBES and others.",
      "【BIOGRAPHY】LAGnaf",
      "LAGnaf is a bass and trap music producer and DJ from South Korea, crafting high-energy tracks filled with bold, uplifting vibes. His sound blends powerful festival-ready drops, gritty bass design, and sharp rhythmic ideas that define his signature style.",
      "Known for his strong talent in K-Pop remixes, he reimagines familiar melodies into heavy club-oriented tracks, attracting a wide range of listeners. On stage, he moves seamlessly through trap, hybrid trap, and bass genres, bringing an undeniably dynamic presence. LAGnaf aims to create more than just club tracks — he builds explosive moments and unforgettable experiences. As a producer rising from Korea, he continues shaping his own unique identity within the global bass music scene."
    ],
    articleLinks: [
      { label: "Bandcamp", url: "https://wedieyoung.bandcamp.com/track/dontplay" },
      { label: "KANAKA (Instagram)", url: "https://www.instagram.com/knks/" },
      { label: "LAGnaf (Instagram)", url: "https://www.instagram.com/lagnaf_music/" }
    ]
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
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2025/12/WDY-028-Artwork.png",
    article: [
      "2025年11月16日、KawashiiiがWE DIE YOUNGからシングル「Medication」をデジタルリリースしました。",
      "On November 16, 2025, Kawashiii released the single “Medication” digitally from WE DIE YOUNG.",
      "【プロフィール】Kawashiii",
      "主に SoundCloud で活動している、東京在住の音楽プロデューサー／トラックメイカー。サイバーな質感を軸に、さまざまなジャンルの楽曲を制作している。",
      "【BIOGRAPHY】Kawashiii",
      "kawashiii is a Tokyo-based music producer and trackmaker, mainly active on SoundCloud. Creates a variety of genres with a cyber-styled sound."
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/kawashiii-medication" },
      { label: "Kawashiii (X)", url: "https://x.com/kawashiii_music" }
    ]
  },
  {
    date: "2025-10-28",
    category: "GOODS",
    title: "WE DIE YOUNG vol.7 Tee 発売",
    body: "最新コンピレーション「WE DIE YOUNG vol.7」デザインのTシャツが数量限定で発売。Size: FREE (XL) / ¥4,000。",
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2025/10/DSC00729-scaled.jpg",
    article: [
      "2025年10月28日、WE DIE YOUNGから新しいグッズが販売！新たに出たコンピレーション “WE DIE YOUNG vol.7” デザインとなっております。数量限定発売の為、お早めにお求めください。",
      "WE DIE YOUNG vol.7 Tee [2025]\nsize: FREE (XL) / ¥4,000",
      "On October 28, 2025, WE DIE YOUNG released new merch! This item features the design of the latest compilation, “WE DIE YOUNG vol.7”. Available in limited quantities — grab yours before it’s gone!",
      "Model: rejection\nT-Shirts Design, Photo, Edit: mika"
    ],
    gallery: [
      "https://wedieyoung.jp/wp-content/uploads/2025/10/DSC00719-scaled.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/10/DSC00670-scaled.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/10/DSC00636-scaled.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/10/DSC00643-scaled.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/10/DSC00626-scaled.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/10/DSC00781-scaled-e1761546544167.jpg",
      "https://wedieyoung.jp/wp-content/uploads/2025/10/DSC00784-scaled.jpg"
    ],
    articleLinks: [
      { label: "Bandcamp", url: "https://wedieyoung.bandcamp.com/merch/we-die-young-vol-7-tee-2025" },
      { label: "BASE", url: "https://wedieyoung.base.shop/" }
    ]
  },
  {
    date: "2025-10-27",
    category: "RELEASE",
    title: "WE DIE YOUNG vol.7 リリース（CD）",
    body: "THE NEW AGE RESONATES — サイバーサウンドを吸収し更に進化した、日本発Trap/Bassコンピレーション第7弾。M3秋2025にて早期販売、Diverse Direct / TANO*C STORE / Bandcampで展開。",
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2025/10/WDY7_ARTWORK_01-1-1024x1024.png",
    article: [
      "2025年10月27日、WE DIE YOUNGからコンピレーションアルバム「WE DIE YOUNG vol.7」が発売決定＆予約開始しました。本アルバムは、2025年10月26日に行われるM3秋2025 東京流通センター 第一展示場（※カタログ購入必須）にて早期購入が可能。",
      "会場価格・Bandcamp: 3,000円 / 通販価格: 3,500円",
      "THE NEW AGE RESONATES\nアジアのEDMの未来はWE DIE YOUNGが切り拓く！サイバーサウンドを吸収し更に進化した、日本発Trap/Bassコンピレーション第7弾！",
      "THE NEW AGE RESONATES\nWE DIE YOUNG is leading the future of Asian EDM. Absorbing cybernetic sound aesthetics while evolving even further, the long-awaited 7th installment of Japan’s premier Trap / Bass compilation has arrived.",
      "🎧 TRACKLIST\n01. Exodynamix – SOURCE\n02. vishnu okuno – i don’t need (play it again!)\n03. icesawder & moyu – leave me again\n04. REXY=DEXY – HARD LIFE\n05. SMWLAYY – Without You\n06. MOSHIMOSH & BHM – TELLME2DANCE\n07. The Herb Shop – In Dreams\n08. ECLAIR – SUNRAYS\n09. CONF!RM – Chamber\n10. crp. – give u\n11. rejection – Nothing To Lose\n12. ZiXS – The Call\n13. Tohrchu – Goldship\n14. Diat – switch the beat\n15. sh0wtime – caughtUP! (dontneedu)\n16. SineVorteX & MTGD – Overdrive\n17. HaLuna – Sci-bar Collapse\n18. Douji Wiix – PULLUP!\n19. eeyrith. – Believe\n20. Xeno & senjou – BREAK IT DOWN\n21. KO3 – INNOCENCE\n\nARTWORK – kyasya"
    ],
    articleLinks: [
      { label: "Diverse Direct", url: "https://www.diverse.direct/we-die-young/wdy-029/" },
      { label: "TANO*C STORE", url: "https://www.tanocstore.net/shop/shopdetail.html?brandcode=000000004243" },
      { label: "Bandcamp", url: "https://wedieyoung.bandcamp.com/album/we-die-young-vol-7" }
    ]
  },
  {
    date: "2025-10-27",
    category: "RELEASE",
    title: "RAVEMODE vol.1 リリース（CD）",
    body: "ENTER THE RAVE — 新コンセプトのコンピレーションシリーズが始動。聴く者を強制的に踊らせるRAVEサウンド全8曲を収録。",
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2025/10/RAVEMODEvol1-Artwork.png",
    article: [
      "2025年10月27日、WE DIE YOUNGから新たなコンセプトのコンピレーションアルバム「RAVEMODE vol.1」が発売決定＆予約開始しました。本アルバムは、2025年10月26日に行われるM3秋2025 東京流通センター 第一展示場（※カタログ購入必須）にて早期購入が可能。",
      "会場価格・Bandcamp: 2,000円 / 通販価格: 2,500円",
      "ENTER THE RAVE\nWE DIE YOUNGが送る、新コンピレーションシリーズが始動！聴く者を強制的に踊らせるRAVEサウンドで内なる衝動を解放せよ",
      "ENTER THE RAVE\nA brand new compilation series from WE DIE YOUNG begins! Unleash your inner impulse with relentless RAVE sounds that will make you move whether you want to or not.",
      "🎧 TRACKLIST\n01. rejection – FREE\n02. NECROSiS – BASS SLUT\n03. Redsign – DARK CIRCLES\n04. NGHTHYP – Acid Dash\n05. vishnu okuno – sickOVERLOAD\n06. The Herb Shop – Turn It Up\n07. ECLAIR – Confusion\n08. crp. – Onyx\n\nARTWORK – kyasya / RAVEMODE LOGO – SELDO"
    ],
    articleLinks: [
      { label: "Diverse Direct", url: "https://www.diverse.direct/we-die-young/wdy-030/" },
      { label: "TANO*C STORE", url: "https://www.tanocstore.net/shopdetail/000000004244/2025" },
      { label: "Bandcamp", url: "https://wedieyoung.bandcamp.com/album/ravemode-vol-1" }
    ]
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
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2025/09/WDY-027-Artwork.png",
    article: [
      "2025年9月19日、rejectionがWE DIE YOUNGからシングル「HANDS UP」をデジタルリリースしました。",
      "On September 19, 2025, rejection released the single “HANDS UP” digitally from WE DIE YOUNG.",
      "【プロフィール】rejection",
      "東京を拠点に活動するProducer/DJ。その大胆かつ緻密に練られた楽曲と、ライブパフォーマンスの高いエナジーによって2020年頃より国内ダンスミュージックシーンに頭角を現す。自身がオーナーを務めるレーベルWE DIE YOUNGと共に日本国内で新しいBass Musicのムーブメントを巻き起こしている。",
      "【BIOGRAPHY】rejection",
      "Producer/DJ based in Tokyo. Emerging in Japan’s dance music scene around 2020 with bold yet meticulously crafted tracks and high-energy live performances. Together with his own label WE DIE YOUNG, he is sparking a new Bass Music movement in Japan."
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/rejection-hands-up" },
      { label: "rejection (X)", url: "https://x.com/rejectiondj" }
    ]
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
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2025/08/XeroCtok-BALLADE.jpg",
    article: [
      "2025年8月22日、XeroC’tokがWE DIE YOUNGから初のシングル「Ballade」をデジタルリリースしました。",
      "On August 22, 2025, XeroC’tok released his debut single “Ballade” via WE DIE YOUNG.",
      "【プロフィール】XeroC’tok",
      "XeroC’tok（読み方:ゼロシートク)は韓国を拠点とする音楽プロデューサー。主にGarageとTrapを制作している。",
      "【BIOGRAPHY】XeroC’tok",
      "XeroC’tok (Pronunce: zero-C-tok) is a korea-based music producer, mainly making garage and trap genre."
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/xeroctok-ballade" },
      { label: "XeroC’tok (X)", url: "https://x.com/XeroC_tok" }
    ]
  },
  {
    date: "2025-08-09",
    category: "RELEASE",
    title: "ZiXS – One More 配信開始",
    body: "タイ出身のEDMプロデューサーZiXSのデビューシングル「One More」をデジタルリリース。WE DIE YOUNG vol.5収録曲「MAKE ME FEEL LIKE YOU」以来のリリース。",
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2025/08/a3054737185_10.jpg",
    article: [
      "2025年8月9日、ZiXSがWE DIE YOUNGから初のシングル「One More」をデジタルリリースしました。本作は、WE DIE YOUNG vol.5収録曲「MAKE ME FEEL LIKE YOU」以来のリリースです。",
      "On August 9, 2025, ZiXS released his debut single “One More” via WE DIE YOUNG. This marks his first release since “MAKE ME FEEL LIKE YOU,” featured on WE DIE YOUNG vol.5.",
      "【プロフィール】ZiXS",
      "ZiXS（読み方：シック、本名 Prohmmin Pisutthipong）は、タイ出身のEDMプロデューサー。ジャンルにとらわれず、特にベースミュージックを好んで制作。タイのVTuber、アーティスト、アイドルなど、多彩な分野の楽曲制作も行っている。",
      "【BIOGRAPHY】ZiXS",
      "ZiXS (pronounced Sick), also known as Prohmmin Pisutthipong, is a Thailand EDM Producer with no genre restrictions, but he especially likes to make bass music. He also makes tracks for Thai VTubers, Thai artists, Thai idols and many more."
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/zixs-one-more" },
      { label: "ZiXS (X)", url: "https://x.com/ZiXS_BLOOMii" }
    ]
  },
  {
    date: "2025-07-26",
    category: "RELEASE",
    title: "Lactar1uz – Falling 4 U 配信開始",
    body: "TrapやDrum'n'Bassを軸に制作する日本在住プロデューサーLactar1uzのデビューシングル「Falling 4 U」をデジタルリリース。",
    link: "",
    image: "https://wedieyoung.jp/wp-content/uploads/2025/07/WDY-024-fixed-scaled.png",
    article: [
      "2025年7月26日、Lactar1uzがWE DIE YOUNGから初のシングル「Falling 4 U」をデジタルリリースしました。",
      "On July 26, 2025, Lactar1uz released his debut single “Falling 4 U” via WE DIE YOUNG.",
      "【プロフィール】Lactar1uz",
      "主にsoundcloudで活動している日本在住の音楽プロデューサー/トラックメイカー。TrapやDrum’n’Bassなど、ベースミュージックをメインで制作している。",
      "【BIOGRAPHY】Lactar1uz",
      "Lactar1uz is a Japan-based producer and trackmaker, mainly active on soundcloud. His music blends heavy bass vibes from genres like Trap and Drum’n’Bass."
    ],
    articleLinks: [
      { label: "LISTEN / STREAM", url: "https://www.submithub.com/link/falling-4-u" },
      { label: "Lactar1uz (X)", url: "https://x.com/lactar1uz_" }
    ]
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


/* ------------------------------------------------------------
   6. ARTISTS（アーティスト紹介）
   ------------------------------------------------------------
   ★ ホームの「Artists」セクションに表示されます。
   ★ owner   … レーベルオーナー（rejection）
     featured … 4作品以上に参加した主要アーティスト（写真＋SNS付き）
     roster   … これまで参加した全アーティスト（名前＋参加数）

   ▼ 写真（photo）の追加・差し替え方法
     - photo に画像URL（または assets/images/artists/xxx.jpg）を入れると写真表示
     - photo を "" にすると、自動でアーティスト名の頭文字アバターを表示します
       （※写真が未設定のアーティストは、各自のSNSのプロフィール画像URL等を
         photo に貼り付ければOK。Instagram等の画像は直接URLにできないため、
         画像を保存して assets/images/artists/ に入れる方法を推奨）

   ▼ SNSリンク（socials）
     - 各キーにURLを入れると、その分だけボタンが表示されます（""や未記載は非表示）
     - 使えるキー: instagram / x / soundcloud / spotify / bandcamp / youtube /
                   linktree / website
   ------------------------------------------------------------ */
const ARTISTS = {

  /* ===== OWNER（レーベルオーナー） ===== */
  owner: {
    name: "rejection",
    role: "Founder / Producer / DJ",
    location: "Tokyo, Japan",
    works: "WE DIE YOUNG Owner",
    bio: "WE DIE YOUNGの創設者。福岡出身・東京拠点のProducer/DJで、2022年にレーベルを立ち上げた。MEGAREXのメンバーとしても活動し、メロディアスかつ重厚なトラックと、フロアを支配するDJパフォーマンスで国内ベースミュージックシーンを牽引。コンピレーションvol.1からAFTERLIFEまで全作品に参加し、レーベルの中心として国内外へサウンドを発信し続けている。",
    photo: "assets/images/artists/rejection.jpg",
    socials: {
      instagram:  "https://www.instagram.com/rejection_dj/",
      x:          "https://x.com/rejectiondj",
      soundcloud: "https://soundcloud.com/rejectionjp",
      spotify:    "https://open.spotify.com/artist/0S23vj2YyvxsVlhqqSohrk"
    }
  },

  /* ===== FEATURED（4作品以上に参加した主要アーティスト） ===== */
  featured: [
    {
      name: "vishnu okuno",
      works: "10作品参加",
      location: "Japan",
      bio: "WE DIE YOUNGの中心メンバー。エモーショナルなメロディとモダンなTrap/Bassを融合させたサウンドで、コンピレーションvol.2以降の常連として活躍。アルバム『ANGELvoid』も発表している。",
      photo: "assets/images/artists/vishnu-okuno.jpg",
      socials: {
        instagram:  "https://www.instagram.com/vish.rar/",
        x:          "https://x.com/yesVishnuhere",
        soundcloud: "https://soundcloud.com/vishnu_okuno",
        spotify:    "https://open.spotify.com/artist/4mBN53sDUkcGUWvrv7Ofao"
      }
    },
    {
      name: "The Herb Shop",
      works: "9作品参加",
      location: "Japan",
      bio: "ハウスビートを軸に、サブカルチャーとベースミュージックの感性を併せ持つ日本のProducer/DJ。vol.1から長く参加し、EP『IRIS/CTRL』もリリース。幅広い質感のサウンドを操る。",
      photo: "assets/images/artists/the-herb-shop.jpg",
      socials: {
        instagram:  "https://www.instagram.com/hbvr_ths/",
        x:          "https://x.com/HBVR_ths",
        soundcloud: "https://soundcloud.com/hbvrths",
        spotify:    "https://open.spotify.com/artist/7gmvEVizRAidNO57aeUoTu"
      }
    },
    {
      name: "crp.",
      works: "8作品参加",
      location: "Japan",
      bio: "札幌拠点のProducer/DJ。中毒性のあるフックとアンビエント、心地よいグルーヴが持ち味。vol.3以降コンスタントに参加し、レーベルを支える存在のひとり。",
      photo: "assets/images/artists/crp.jpg",
      socials: {
        instagram:  "https://www.instagram.com/its_me_crp/",
        x:          "https://x.com/its_me_crp",
        soundcloud: "https://soundcloud.com/madebycrp",
        spotify:    "https://open.spotify.com/artist/4VilodtckyAZmMByds5zq6",
        bandcamp:   "https://madebycrp.bandcamp.com/"
      }
    },
    {
      name: "Redsign",
      works: "8作品参加",
      location: "Japan",
      bio: "緻密なサウンドデザインスキルで国内外Dubstepシーンの最先端を走るDJ/Producer. Trap/Dubstepを横断する重厚なベースデザインが特徴で、vol.1から数多くの作品に参加してきた。",
      photo: "assets/images/artists/redsign.jpg",
      photoPos: "center 18%",
      socials: {
        instagram:  "https://www.instagram.com/redsignjp/",
        x:          "https://x.com/redsign_jp",
        soundcloud: "https://soundcloud.com/redsignjp",
        spotify:    "https://open.spotify.com/artist/25kQoBdVZwk6M55jJifTeJ"
      }
    },
    {
      name: "Exodynamix",
      works: "6作品参加",
      location: "Canada",
      bio: "カナダ拠点のプロデューサー。Future Garage / Wave / Hardwave / Tranceなど多彩なジャンルを横断し、アトモスフェリックで洗練されたサウンドを展開。",
      photo: "assets/images/artists/Exodynamix.png",
      photoPos: "center 12%",
      socials: {
        instagram:  "https://www.instagram.com/exodynamix64/",
        x:          "https://x.com/exodynamix",
        soundcloud: "https://soundcloud.com/exodynamix",
        spotify:    "https://open.spotify.com/artist/5LeIq4oznjWwvr7N8nQnJd",
        bandcamp:   "https://exodynamix.bandcamp.com/"
      }
    },
    {
      name: "MTGD",
      works: "6作品参加",
      location: "Taiwan",
      bio: "台湾拠点のDJ/Producer。“All About The Bass”を掲げ、フロア直結のアグレッシブなベースミュージックを制作。EP『DEFINED』をはじめソロ作も多数。",
      photo: "assets/images/artists/MTGD.jpg",
      photoPos: "center 12%",
      socials: {
        instagram:  "https://www.instagram.com/mtgd.als/",
        x:          "https://x.com/_mtgd24",
        soundcloud: "https://soundcloud.com/m_t_g_d",
        spotify:    "https://open.spotify.com/artist/2yrXDsIl3e0y01ptasQ30w"
      }
    },
    {
      name: "Ruxxi",
      works: "5作品参加",
      location: "Korea",
      bio: "韓国を拠点に活動するBass music Producer/DJ。Tokyo Machine、San Holoらからもサポートを受け、ポップからダブステップまで幅広く制作する。",
      photo: "https://i.scdn.co/image/ab6761610000517490e333c1acf68f31e20924b5",
      socials: {
        instagram:  "https://www.instagram.com/im_ruxxi/",
        x:          "https://twitter.com/ianruxxi",
        soundcloud: "https://soundcloud.com/ruxxi",
        spotify:    "https://open.spotify.com/artist/39L4l4agjBB6Xl0Sl6AX4n",
        youtube:    "https://www.youtube.com/c/Ruxxi"
      }
    },
    {
      name: "mahziel",
      works: "5作品参加",
      location: "Japan",
      bio: "WE DIE YOUNGの黎明期から参加するプロデューサー。vol.1〜4、そしてAFTERLIFEまで、シリーズの節目を彩るトラックを提供してきた。",
      photo: "assets/images/artists/mahziel.png",
      socials: {
        instagram:  "https://www.instagram.com/mahziel/",
        x:          "https://x.com/mahziel_",
        soundcloud: "https://soundcloud.com/mahziel",
        spotify:    "https://open.spotify.com/artist/7LV8r3cwTq4dDUkt3Sex5p"
      }
    },
    {
      name: "KO3",
      works: "5作品参加",
      location: "Japan",
      bio: "日本のProducer/DJ。ハウスビートを軸に、Bass Musicのトレンドをハイブリッドに取り入れている。vol.4以降の常連で、ライブでもレーベルの核を担う一人。",
      photo: "https://f4.bcbits.com/img/0044639769_10.jpg",
      socials: {
        instagram:  "https://www.instagram.com/ko3_untitled/",
        x:          "https://twitter.com/KO3_untitled",
        soundcloud: "https://soundcloud.com/dj-ko3",
        spotify:    "https://open.spotify.com/artist/1ioBfZldZvVAcqD3KXXTXy",
        bandcamp:   "https://ko3untitled.bandcamp.com/"
      }
    },
    {
      name: "ECLAIR",
      works: "5作品参加",
      location: "Japan",
      bio: "クリアかつ厚みのある独自のサウンドデザインを探求するプロデューサー。Trap / Rave / Dubstepを軸に、シングル『NEED YOU』も発表。アンダーグラウンドシーンに頭角を表す。",
      photo: "assets/images/artists/ECLAIR.png",
      socials: {
        instagram:  "https://www.instagram.com/the_eclair_/",
        x:          "https://x.com/IamECLAIR",
        soundcloud: "https://soundcloud.com/eclair_music",
        spotify:    "https://open.spotify.com/artist/5MOWFk4njjBKLC3KjdaBpJ"
      }
    },
    {
      name: "REXY=DEXY",
      works: "4作品参加",
      location: "Japan",
      bio: "東京拠点のベースミュージックDJ/プロデューサーユニット。Trapを軸に、ULTRA JAPANへの出演、Yellow Clawとのコラボなど数々の実績を果たす若手注目株。",
      photo: "assets/images/artists/REXY=DEXY.png",
      photoPos: "center 12%",
      socials: {
        instagram:  "https://www.instagram.com/rexy_dexy_official/",
        x:          "https://x.com/rexydexymusic",
        soundcloud: "https://soundcloud.com/rexy_dexy_music",
        spotify:    "https://open.spotify.com/artist/2dDxUopU3lpeumfdSzsICh"
      }
    },
    {
      name: "ZiXS",
      works: "4作品参加",
      location: "Thailand",
      bio: "タイ出身のEDMプロデューサー。vol.5以降のコンピレーションに参加し、シングル『One More』も発表。Dubstep出身の重厚なBassが持ち味。",
      photo: "assets/images/artists/ZiXS.png",
      socials: {
        instagram:  "https://www.instagram.com/zixss_bloomii/",
        x:          "https://x.com/ZiXS_BLOOMii",
        soundcloud: "https://soundcloud.com/zixsszixss",
        spotify:    "https://open.spotify.com/artist/2iyx25FsDfapixzrY9c8Bf"
      }
    },
    {
      name: "sh0wtime",
      works: "4作品参加",
      location: "Japan",
      bio: "Trap/Bassを軸に制作するプロデューサー。シングル『U FEEL THE SAME!』をはじめ、vol.5〜7のコンピレーションにトラックを提供している。",
      photo: "assets/images/artists/sh0wtime.png",
      socials: {
        instagram:  "https://www.instagram.com/sh0wtime.lol/",
        x:          "https://x.com/Sh0wtimeDTM",
        soundcloud: "https://soundcloud.com/sh0wtimelol",
        spotify:    "https://open.spotify.com/artist/5dyoUoZBKGFi2pJuB2dGqG"
      }
    },
    {
      name: "Douji Wiix",
      works: "4作品参加",
      location: "Japan",
      bio: "島根県を拠点に活動するDJ/プロデューサー。vol.6以降の常連で、シングル『Mental』も発表。\"Neo Kagura Vibes\"を掲げ唯一無二の和サウンドを取り入れる。",
      photo: "assets/images/artists/Douji Wiix.png",
      socials: {
        instagram:  "https://www.instagram.com/doujiwiix/",
        x:          "https://x.com/doujiwiix",
        soundcloud: "https://soundcloud.com/doujiwiix",
        spotify:    "https://open.spotify.com/artist/0SrNofQjxXwL2Ob3QokvFJ",
        linktree:   "https://linktr.ee/doujiwiix"
      }
    }
  ],

  /* ===== ROSTER（これまで参加した全アーティスト） ===== */
  /* ★ 名前と参加数（または代表作）のみ。多い順 → 名前順 */
  roster: [
    { name: "rejection",      note: "Owner / 全コンピ" },
    { name: "vishnu okuno",   note: "10作品" },
    { name: "The Herb Shop",  note: "9作品" },
    { name: "crp.",           note: "8作品" },
    { name: "Redsign",        note: "8作品" },
    { name: "Exodynamix",     note: "6作品" },
    { name: "MTGD",           note: "6作品" },
    { name: "KO3",            note: "5作品" },
    { name: "Ruxxi",          note: "5作品" },
    { name: "mahziel",        note: "5作品" },
    { name: "ECLAIR",         note: "5作品" },
    { name: "REXY=DEXY",      note: "4作品" },
    { name: "ZiXS",           note: "4作品" },
    { name: "sh0wtime",       note: "4作品" },
    { name: "Douji Wiix",     note: "4作品" },
    { name: "Aiyru",          note: "3作品" },
    { name: "yadosan",        note: "3作品" },
    { name: "Diat",           note: "3作品" },
    { name: "CONF!RM",        note: "3作品" },
    { name: "SMWLAYY",        note: "3作品" },
    { name: "VOLTA",          note: "3作品" },
    { name: "Xeno",           note: "3作品" },
    { name: "MOSHIMOSH",      note: "3作品" },
    { name: "LAGnaf",         note: "3作品" },
    { name: "21SWINGS",       note: "2作品" },
    { name: "crayvxn",        note: "2作品" },
    { name: "ZxNX",           note: "2作品" },
    { name: "Müxek",          note: "2作品" },
    { name: "reeload",        note: "2作品" },
    { name: "ARKI",           note: "2作品" },
    { name: "Zexnum",         note: "2作品" },
    { name: "Tohrchu",        note: "2作品" },
    { name: "HaLuna",         note: "2作品" },
    { name: "ADAM KALI",      note: "2作品" },
    { name: "eeyrith.",       note: "2作品" },
    { name: "TRYDENY",        note: "2作品" },
    { name: "SiZZ",           note: "2作品（旧SIZ）" },
    { name: "Viticz",         note: "Rangda" },
    { name: "Namya",          note: "Rangda" },
    { name: "Voxelkana",      note: "digital[F10W]" },
    { name: "Yuzac",          note: "feel it" },
    { name: "KANAKA",         note: "DONTPLAY" },
    { name: "Kawashiii",      note: "Medication" },
    { name: "XeroC'tok",      note: "Ballade" },
    { name: "Lactar1uz",      note: "Falling 4 U" },
    { name: "Butterfly Zone", note: "Ghostmode" },
    { name: "WATARU",         note: "Starfall" },
    { name: "Violet.MKII",    note: "Karma Strike" },
    { name: "GREED",          note: "Karma Strike" },
    { name: "Miii",           note: "vol.1" },
    { name: "poniyama",       note: "vol.1" },
    { name: "Hylen",          note: "vol.2" },
    { name: "GUANA",          note: "vol.3" },
    { name: "celtix",         note: "vol.5" },
    { name: "Asatsumei",      note: "vol.5" },
    { name: "tion",           note: "vol.5" },
    { name: "crowit.",        note: "vol.5" },
    { name: "lixxy",          note: "vol.5" },
    { name: "Autodepth",      note: "vol.6" },
    { name: "Leonardo",       note: "vol.6" },
    { name: "icesawder",      note: "vol.7" },
    { name: "moyu",           note: "vol.7" },
    { name: "BHM",            note: "vol.7" },
    { name: "SineVorteX",     note: "vol.7" },
    { name: "senjou",         note: "vol.7" },
    { name: "NECROSiS",       note: "RAVEMODE vol.1" },
    { name: "NGHTHYP",        note: "RAVEMODE vol.1" },
    { name: "morethanahalf",  note: "vol.8" },
    { name: "Tsuyoshi A.",    note: "AFTERLIFE vol.1" },
    { name: "Renge",          note: "AFTERLIFE vol.1" },
    { name: "De_N",           note: "AFTERLIFE vol.1" },
    { name: "X2lowline",      note: "AFTERLIFE vol.1" },
    { name: "SLEEPYHEVD",     note: "AFTERLIFE vol.1" },
    { name: "yugaku",         note: "AFTERLIFE vol.1" },
    { name: "shiraishi",      note: "AFTERLIFE vol.1" }
  ]
};
