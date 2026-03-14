# 狼ノ村 ブランドサイト

## サイト概要
「狼ノ村」シリーズ全体を束ねる親サイト。Vol.1〜Vol.3の紹介、コンセプト、丹波山村の情報を掲載。
本番URL: https://tabayama-wolfstory.netlify.app
英語版: https://tabayama-wolfstory.netlify.app/en

## 関連サイト
- 狼ノ森（Vol.3）: https://okami-no-mori.netlify.app（リポジトリ: /Users/dankoike/okaminomori-site/）

## ファイル構成
- `index.html` — JA版HTML + JA用OGPタグ
- `en/index.html` — EN版HTML + EN用OGPタグ（`<base href="/">`でアセット共有）
- `js/main.js` — 翻訳テキスト（translations.ja / translations.en）+ UI + localizedLinks
- `css/style.css` — デザイン（墨絵×ミニマル、白ベース）
- `images/ogp.png` — OGP画像（1200x630）
- `_redirects` — Netlifyルーティング

## 更新ルール

### テキスト変更
`js/main.js` の `translations` オブジェクト内、`ja:` と `en:` を両方修正する。日本語を変更したら英語も必ず翻訳・更新する。

### HTML構造変更（セクション追加・レイアウト変更など）
`index.html` と `en/index.html` の両方を同じように修正すること。OGP部分以外のbodyは同一構造を維持する。

### OGP変更
- `index.html` の `<head>` 内の og:title, og:description, twitter:title, twitter:description を修正（日本語）
- `en/index.html` の `<head>` 内の同タグを修正（英語）

### 外部リンクの言語切り替え
`js/main.js` の `localizedLinks` にJA/EN別のURLを定義し、HTML側で `data-link="キー名"` を付ける。
現在の定義: mori（森サイトへのリンク）

### Vol.1/Vol.2サイト追加時
1. `localizedLinks` に新しいキーを追加
2. HTML内の該当 `<a>` タグに `data-link="キー名"` と正しいhrefを設定
3. `en/index.html` にも同じ変更を反映

## デプロイ
```bash
netlify link --name tabayama-wolfstory
netlify deploy --prod --dir=.
```
注意: 先に森サイトをデプロイした場合、linkが切り替わっているので必ず `netlify link` を実行すること。

## git
コミット後 `git push origin main` してからデプロイ。
