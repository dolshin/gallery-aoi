<h1> 📖 ギャラリーアオイ 公式サイト（Gatsby版）</h1>

<div align="center">

![Gatsby](https://img.shields.io/badge/Gatsby-5.14.1-663399?style=flat-square&logo=gatsby)
![Styled Components](https://img.shields.io/badge/styled--components-6.1.18-DB7093?style=flat-square&logo=styled-components)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=flat-square&logo=typescript)
![Netlify](https://img.shields.io/badge/Netlify-Hosting-00C7B7?style=flat-square&logo=netlify)

<br/>

**レンタルギャラリー「ギャラリーアオイ」の公式サイトとして、  
高速表示・低コスト運用を目的に構築したWebサイト**

<br/>

👉 [ギャラリーアオイ](https://www.gallery-aoi.jp)

</div>

<h2> 📋 目次 </h2>　
 
- [✨ プロジェクト概要](#-プロジェクト概要)
- [🔀 プロジェクトの目的](#-プロジェクトの目的)
- [🛠️ 技術スタック](#️-技術スタック)
- [📂 ディレクトリ構成](#-ディレクトリ構成)
- [💡 設計上のポイント](#-設計上のポイント)
- [🔭 今後の展望](#-今後の展望)
  
## ✨ プロジェクト概要

個人で運営するレンタルギャラリー「ギャラリーアオイ」の公式サイトです。  
高速かつ低コストで運用できるよう、**Gatsby** を用いた静的サイトとして構築しています。


## 🔀 プロジェクトの目的

- レンタルギャラリーの魅力（空間・作品・実績）を効果的に発信する
- 新規でレンタルギャラリーを予約してくださるお客様を増やす


## 🛠️ 技術スタック

| 分類           | 使用技術                    | 選定理由 |
| -------------- | --------------------------- | -------- |
| フレームワーク | Gatsby v5                    | 静的サイト生成に強く、SEO・表示速度を重視した構成を実現するため |
| 言語           | TypeScript                  | コンポーネント設計・CMSレスポンスの型安全性を確保するため |
| CMS            | microCMS　　　　　　　　     | 非エンジニアでも更新可能な運用体制を構築するため |
| スタイリング   | Styled Components           | コンポーネント単位でスタイルを管理しやすいため |
| 画像最適化     | Gatsby Image / Sharp        | ビルド時に画像最適化を行い、表示速度を向上させるため |
| サーバーレス   | Netlify Functions           | サーバーレスで問い合わせ処理を実装し、運用コストを抑えるため |
| 状態管理       | Zustand                     | 小規模サイトにおいて、シンプルに状態を管理するため |
| メール送信      | Mailgun API                 | フロントエンドのみでメール送信を完結させるため |
| ホスティング   | Netlify                     | CI/CDを簡単に構築できるため |
| 環境変数       | dotenv                      | 環境変数を安全に管理するため |
| 品質管理       | ESLint / Prettier           | コード品質と可読性を保つため |

---

## 📂 ディレクトリ構成

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


## 💡 設計上のポイント

- サーバーレス構成により運用コストを最小化
- コスト・セキュリティ面を考慮し、SSGを採用
- Zustandによるシンプルな状態管理
- Netlify Functionsでの軽量サーバーレスバックエンドを実装
- Mailgun APIを利用し、メール送信機能を実装

## 🔭 今後の展望

本プロジェクトは現在、複数スペースへの対応・設計拡張を目的として、  
Next.js（App Router）を用いた新構成へ段階的に移行しています。

詳細は、下記のリンクよりご覧いただけます。
- 👉 [ギャラリーアオイ サイト（Newバージョン）](https://github.com/dolshin/gallery-aoi-next)
