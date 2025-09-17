import React from "react";
import styled from "styled-components";
import PageLayout from "../../layouts/PageLayout";
import { Button } from "../../common";

const Subtitle = styled.h2`
  margin-bottom: 12px;
`;

const P = styled.p`
  margin: 0 0 16px 0;
`;

const Ul = styled.ul`
  margin: 0 0 16px 1.25rem;
`;

const Anchor = styled.a`
  color: #0b67d0;
`;

const PrivacyPolicy = () => {
  return (
    <PageLayout title="プライバシーポリシー" subTitle="">
      <p>
        ギャラリーアオイは，ユーザーの個人情報について以下のとおりプライバシーポリシーを定めます。
      </p>
      <section>
        <Subtitle>1. 運営者情報</Subtitle>
        <P>本サイトの運営者は以下の通りです。</P>
        <Ul>
          <li>事業者名：ギャラリーアオイ</li>
          <li>代表者：上村育代 </li>
          <li>所在地：奈良県奈良市西大寺新田町1-11</li>
          <li>
            お問い合わせ：
            <Anchor href={`mailto:example@gmail.com`}>example@gmail.com</Anchor>
          </li>
        </Ul>
      </section>

      <section>
        <Subtitle>2. 収集する情報（個人情報）</Subtitle>
        <P>当サイトでは、以下の情報を取得することがあります。</P>
        <Ul>
          <li>
            お問い合わせフォーム／お申込みフォームで取得する情報：氏名、メールアドレス、電話番号、その他フォームで明示された情報
          </li>
          <li>
            自動収集される情報：IPアドレス、ブラウザ種類、閲覧履歴、Cookie
            情報、デバイス情報 等（アクセス解析ツールにより収集）
          </li>
        </Ul>
      </section>

      <section>
        <Subtitle>3. 利用目的</Subtitle>
        <P>収集した情報は、以下の目的で利用します。</P>
        <Ul>
          <li>お問い合わせ・お申し込みへの対応および連絡のため</li>
          <li>
            当サイトの利用状況分析、サービス改善のため（Google
            Analytics等のアクセス解析を含む）
          </li>
          <li>法令に基づく場合または権利保護のために必要な場合</li>
        </Ul>
      </section>

      <section>
        <Subtitle>4. Google Analytics 等の第三者ツールの利用</Subtitle>
        <P>
          当サイトでは、アクセス解析のために Google LLC の提供する{" "}
          <strong>Google Analytics（GA4）</strong> を利用しています。Google
          Analytics は Cookie
          を使用してトラフィックデータを収集しますが、当サイトでは可能な限り匿名化を行っています。
        </P>
        <P>
          Google のサービス利用やデータの取扱いについては、Google
          のプライバシーポリシーおよび利用規約に従います。Google Analytics
          のデータ収集を無効化したい場合は、ユーザー側で次の方法が利用できます：
        </P>
        <Ul>
          <li>
            <Anchor
              href="https://tools.google.com/dlpage/gaoptout?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google アナリティクス オプトアウト アドオン
            </Anchor>
          </li>
          <li>
            ブラウザの Cookie
            を無効にする（ただしサイトの一部機能が制限される場合があります）
          </li>
        </Ul>
      </section>

      <section>
        <Subtitle>5. 第三者提供および委託</Subtitle>
        <P>
          当サイトは原則として取得した個人情報を第三者に提供しません。ただし、以下の場合を除きます。
        </P>
        <Ul>
          <li>法令に基づく場合</li>
          <li>
            業務遂行上必要な範囲で外部業者に委託する場合（例：メール配信サービス・決済サービス・クラウドストレージ等）。この場合、委託先に対して適切な監督を行います。
          </li>
        </Ul>
      </section>

      <section>
        <Subtitle>6. セキュリティ対策</Subtitle>
        <P>
          当サイトは個人情報を適切に管理するために、技術的および組織的な安全管理措置（SSL/TLSによる通信の暗号化、アクセス制御等）を講じます。しかし、完全な安全性を保証するものではないため、情報の取り扱いには十分ご注意ください。
        </P>
      </section>

      <section>
        <Subtitle>7. ユーザーの権利</Subtitle>
        <P>
          ご本人は当サイトに対して、自己の個人情報の開示、訂正、利用停止、削除等を請求する権利があります。
          <br />
          請求を希望される場合は、上記お問い合わせ先までご連絡ください。対応にあたり一定の手続き（本人確認等）が必要となる場合があります。
        </P>
      </section>

      <section>
        <Subtitle>8. Cookie の利用について</Subtitle>
        <P>
          当サイトでは利便性向上やアクセス解析のために Cookie
          を利用します。当サイトがcookieとして送るファイルは、個人を特定するような情報を含んでおりません。
          <br />
          お使いのWebブラウザの設定により、cookieを無効にすることも可能です。
        </P>
      </section>

      <section>
        <Subtitle>9. ポリシーの変更</Subtitle>
        <P>
          本ポリシーは法令の変更やサービス内容の変更に伴い、予告なく改定することがあります。
          <br />
          改定した場合は当ページにて掲載し、最終更新日を更新します。
        </P>
      </section>
      <section>
        <h2>10.プライバシーポリシーの制定日及び改定日</h2>
        <P>制定：○○年○月○日</P>
      </section>

      <div style={{ margin: "40px 0 0" }}>
        <Button to="/" label="トップページに戻る" />
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
