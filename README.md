# WE DIE YOUNG 公式サイト — 更新マニュアル

日本発 Trap / Bass Music レーベル **WE DIE YOUNG** の公式サイトです。
HTML や CSS の知識がなくても、**`js/data.js` を1ファイル編集するだけ**で全コンテンツを更新できます。

- 🌐 公開URL: https://wedieyoung.github.io/wedieyoungjp/
- 📦 リポジトリ: https://github.com/wedieyoung/wedieyoungjp

---

## 📁 フォルダ構成

```
wedieyoungjp/
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
│   ├── releases/           ← ジャケット画像置き場（正方形推奨）
│   ├── artists/            ← アーティスト写真置き場（縦長 4:5 推奨）
│   └── events/             ← フライヤー画像置き場（A4縦比率推奨）
└── README.md           ← このファイル
```

---

## 🚀 更新をサイトに反映する方法（GitHubへプッシュ）

`js/data.js` などを編集したら、ターミナルでこのフォルダに移動して以下の3コマンドを実行します：

```bash
git add -A
git commit -m "更新内容のメモ（例: 新リリース追加）"
git push
```

プッシュすると **GitHub Pages が自動でビルドされ、1〜2分後に公開サイトに反映**されます。

> 💡 GitHub CLI（`gh`）でのログイン設定は済んでいるので、認証のやり直しは不要です。
> もし `git push` で認証エラーが出たら `gh auth login --web` を実行して再ログインしてください。

---

## ✏️ よくある更新作業

### 1. 新しいリリースを追加する
`js/data.js` を開き、`RELEASES = [` の直後に以下をコピペして書き換える:

```js
{
  title: "曲名",
  artist: "アーティスト名",
  type: "SINGLE",            // SINGLE / EP / COMPILATION / SAMPLE PACK
  date: "2026-07-01",
  cover: "https://...（ジャケット画像のURL）",
  description: "説明文",
  links: {
    stream:   "https://www.submithub.com/link/xxxx",  // 配信リンク
    bandcamp: ""              // 無いリンクは "" にすると非表示
  }
},
```

ジャケット画像は **URLを直接指定**するか、`assets/images/releases/` にファイルを入れて
`cover: "assets/images/releases/mytrack.jpg"` のように書きます。

### 2. ニュースを投稿する
`data.js` の `NEWS` の**一番上**に追加（上から順に表示されます）。
`category` は `RELEASE` / `EVENT` / `GOODS` / `INFO` / `MEDIA` を推奨。

### 3. イベントを追加する
`data.js` の `EVENTS` に追加。
**日付が今日以降なら UPCOMING、過去なら ARCHIVE に自動で振り分けられます。**
チケットリンクは `ticketUrl` に、終売後は `""` に戻せばボタンが消えます。

### 4. アーティストを追加する
`data.js` の `ARTISTS` にブロックを追加（写真はURL直接指定 or `assets/images/artists/`）。

### 5. キャッチコピー・SNSリンク・メールアドレスを変える
`data.js` の一番上の `SITE` ブロックを書き換えるだけです。

### 6. サイトの配色を変える
`css/style.css` の冒頭 `:root { ... }` の色コードを変更（例: `--red: #ff2a3c;`）。

---

## ⚠️ 画像についての重要な注意

現在、ジャケット・フライヤー・アーティスト写真は**旧サイト（wedieyoung.jp）と
BandcampのURLを直接参照**しています。

**旧サイトのサーバー（ロリポップ等）を解約すると、これらの画像が表示されなくなります。**
解約する前に、画像をダウンロードして `assets/images/` 内に移し、
`data.js` のURLをローカルパス（`assets/images/releases/xxx.jpg` など）に書き換えてください。

---

## 📨 お問い合わせフォームについて

- 初期状態では「送信」を押すと**メールアプリが起動**します（静的サイトのため）。
- フォーム送信を直接受け取りたい場合は [Formspree](https://formspree.io/)（無料枠あり）でフォームを作成し、
  発行されたURLを `data.js` の `formEndpoint` に貼り付けてください:

```js
formEndpoint: "https://formspree.io/f/xxxxxxxx"
```

---

## ✅ 更新時の注意

- `data.js` の文字列は `" "` で囲む／各項目の末尾カンマを消さない
- 表示が真っ白になったら、直前の編集でカンマや引用符が欠けていないか確認
- 文中に `"` を使いたい場合は `\"` と書く（例: `"イベント\"THE BASS\"開催"`）
- ローカルに置く画像は1枚 500KB 以下を推奨（表示速度のため）

---

## 🔧 ローカルで確認する方法

公開前に手元で見たい場合は、ターミナルでこのフォルダに移動して:

```bash
python3 -m http.server 8765
```

を実行し、ブラウザで http://localhost:8765 を開きます（終了は `Ctrl+C`）。
`index.html` をダブルクリックで直接開いても表示できます。
