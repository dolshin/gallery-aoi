# ギャラリーアオイ公式サイト

## 概要

個人で運営するレンタルギャラリー「ギャラリーアオイ」の公式サイトです。  
高速かつ低コストで運用できるよう、**Gatsby** を用いた静的サイトとして構築しています。

- **公開サイト**: [https://www.gallery-aoi.jp](https://www.gallery-aoi.jp)

## プロジェクトの目的

- レンタルギャラリーの魅力（空間・作品・実績）を効果的に発信する
- microCMSにより、非エンジニアでもコンテンツ更新が可能
- Gatsbyによる静的ビルドで、高速な表示とSEO最適化を実現
- Mailgunを利用し、お問い合わせフォームでのメッセージ送信を実装

---

## 技術スタック

| 分類           | 使用技術                    |
| -------------- | --------------------------- |
| フロントエンド | **Gatsby v5**               |
| 言語           | TypeScript                  |
| CMS            | **microCMS（Content API）** |
| スタイリング   | Styled Components           |
| 画像最適化     | Gatsby Image / Sharp        |
| バックエンド   | Netlify Functions           |
| 状態管理       | Zustand                     |
| フォーム       | Mailgun API                 |
| ホスティング   | Netlify                     |
| パッケージ管理 | npm                         |
| 環境管理       | dotenv                      |
| 品質管理       | ESLint / Prettier           |
| デプロイ       | GitHub → Netlify 自動ビルド |

---

## ディレクトリ構成

```
/gallery-aoi/
├─ src/
│  ├─ components/
│  │  ├─ common/          # 共通UIコンポーネント
│  │  ├─ layout/          # レイアウト関連
│  │  └─ gallery/         # ギャラリーアオイ関連コンポーネント
│  ├─ pages/
│  │  ├─ index.tsx        # トップページ
│  │  ├─ {microcmsEvent.slug}.tsx      # イベント紹介ページ
│  │  └─ contact.tsx      # お問い合わせフォーム
│  ├─ lib/
│  │  ├─ hooks/           # カスタムフック
│  │  ├─ zustand/         # スキーマ定義 + 状態管理
│  ├─ assets/images/      # 画像素材（ギャラリー写真など）
│  └─ templates/          # microCMS記事テンプレート
├─ static/                # favicon, OGP画像など
├─ netlify/               # Netlify関連ファイル
├─ e2e/                   # E2Eテスト関連
├─ gatsby-config.js       # サイト設定・プラグイン
├─ gatsby-node.js         # ビルド時処理
├─ .env.example           # 環境変数テンプレート
├─ package.json
├─ tsconfig.json
└─ README.md

```

## 今後の展望（予約機能の追加）

- Next.js + NestJS + Prisma/PostgreSQL 構成へ拡張

- 予約機能・カレンダー表示・承認フローの導入

- 管理者ダッシュボード（認証付き）

- API層の分離

- CI/CDパイプライン構築（GitHub Actions + Render + Netlify Functions）
