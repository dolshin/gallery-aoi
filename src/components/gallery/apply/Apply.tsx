import React from "react";
import TopPageItemLayout from "../../layouts/TopPageItemLayout";
import ApplyForm from "./ApplyForm";
import PrivacyPolicyLink from "../privacy/PrivacyPolicyLink";

const Apply = () => {
  return (
    <TopPageItemLayout id="Apply" subTitle="Apply" title="お申し込み">
      <ul
        style={{
          margin: "40px 0 0",
          padding: "0 0 0 1em",
          listStyle: "disc",
          letterSpacing: "0.08em",
          lineHeight: 2.5,
        }}
      >
        <li
          style={{
            listStyle: "disc",
          }}
        >
          お申し込み頂いたメールアドレス宛に、ギャラリーアオイより返信メールが届きます。
        </li>
        <li
          style={{
            listStyle: "disc",
          }}
        >
          返信メールが届きましたら、メールに記載の銀行口座に、使用料の半額の振り込みをお願い致します。
        </li>
        <li
          style={{
            listStyle: "disc",
          }}
        >
          使用料の残額は搬入日当日にお支払いをお願いします。
        </li>
      </ul>
      <div style={{ maxWidth: "750px", margin: "70px 0 0" }}>
        <ApplyForm />
      </div>
      <div style={{ maxWidth: "750px", margin: "44px 0 0" }}>
        <PrivacyPolicyLink />
      </div>
    </TopPageItemLayout>
  );
};

export default Apply;
