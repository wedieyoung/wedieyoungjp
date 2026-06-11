# WE DIE YOUNG 公式サイト — 更新マニュアル

東京発 Bass Music / Trap レーベル **WE DIE YOUNG** の公式サイトです。
HTML や CSS の知識がなくても、**`js/data.js` を1ファイル編集するだけ**で全コンテンツを更新できます。

---

## 📁 フォルダ構成

```
wdy-site/
├── index.html          ← サイト本体（基本的に編集不要）
├── css/
│   └── style.css       ← デザイン（色を変えたい時だけ :root を編集）
├── js/
│   ├── data.js         ★ ここだけ編集すればOK（全コンテンツ）
│   └── main.js         ← 表示プログラム（編集不要）
├── assets/images/
│   ├── logo-white.png      ← ヒーロー用ロゴ（白）
│   ├── logo-white-nav.png  ← ナビ・フッター用ロゴ（小）
│   ├── logo-black.png      ← 黒ロゴ（予備）
│   ├── ogp.png             ← SNSシェア時の画像（1200×630）
│   ├── releases/           ← ジャケット画像を入れる（正方形推奨）
│   ├── artists/            ← アーティスト写真を入れる（縦長 4:5 推奨）
│   ├── events/             ← フライヤー画像を入れる（A4縦比率推奨）
│   └── news/               ← ニュース用画像（必要なら）
└── README.md           ← このファイル
```

---

## ✏️ よくある更新作業

### 1. 新しいリリースを追加する
1. ジャケット画像（例: `mytrack.jpg`）を `assets/images/releases/` に入れる
2. `js/data.js` を開き、`RELEASES = [` の直後に以下をコピペして書き換える:

```js
{
  title: "曲名",
  artist: "アーティスト名",
  type: "SINGLE",            // SINGLE / EP / COMPILATION / ALBUM
  date: "2026-07-01",
  cover: "assets/images/releases/mytrack.jpg",
  description: "説明文",
  links: {
    spotify: "https://...",  // 無い配信先は "" にすると非表示
    soundcloud: "",
    bandcamp: "",
    youtube: "",
    apple: ""
  }
},
```

### 2. アーティストを追加する
写真を `assets/images/artists/` に入れて、`data.js` の `ARTISTS` にブロックを追加。

### 3. イベントを追加する
フライヤーを `assets/images/events/` に入れて、`data.js` の `EVENTS` に追加。
**日付が今日以降なら UPCOMING、過去なら ARCHIVE に自動で振り分けられます。**

### 4. ニュースを投稿する
`data.js` の `NEWS` の**一番上**に追加（上から順に表示されます）。

### 5. キャッチコピー・SNSリンク・メールアドレスを変える
`data.js` の一番上の `SITE` ブロックを書き換えるだけです。

### 6. ロゴ・OGP画像を差し替える
同じファイル名で `assets/images/` 内のファイルを上書きしてください。

### 7. サイトの配色を変える
`css/style.css` の冒頭 `:root { ... }` の色コードを変更（例: `--red: #ff2a3c;`）。

---

## 📨 お問い合わせフォームについて

- 初期状態では「送信」を押すと**メールアプリが起動**します（静的サイトのため）。
- フォーム送信を直接受け取りたい場合は [Formspree](https://formspree.io/)（無料枠あり）でフォームを作成し、
  発行されたURLを `data.js` の `formEndpoint` に貼り付けてください:

```js
formEndpoint: "https://formspree.io/f/xxxxxxxx"
```

---

## 🚀 公開方法（無料・数分で完了）

静的サイトなのでそのまま公開できます。おすすめ:

1. **Netlify Drop** — https://app.netlify.com/drop に `wdy-site` フォルダをドラッグ&ドロップするだけ
2. **GitHub Pages** — リポジトリにアップして Pages を有効化
3. **Cloudflare Pages / Vercel** — フォルダをアップロード

⚠️ **公開後に必ずやること:**
`js/data.js` の `siteUrl` を本番URL（例: `https://wedieyoung.com`）に書き換えてください。
SNSでシェアした時のOGP画像が正しく表示されるようになります。

---

## ✅ 更新時の注意

- `data.js` の文字列は `" "` で囲む／各項目の末尾カンマを消さない
- 表示が真っ白になったら、直前の編集でカンマや引用符が欠けていないか確認
- 画像は1枚 500KB 以下を推奨（表示速度のため）。ジャケットは 800×800px で十分です
