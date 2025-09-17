import React from "react";
import TopPageItemLayout from "../../layouts/TopPageItemLayout";
import { Container } from "../../common";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <TopPageItemLayout id="Contact" subTitle="Contact" title="お問い合わせ">
      <Container
        style={{
          //display: "flex",
          justifyContent: "center",
          //alignItems: "center",
          gap: "0.8rem",
          margin: "20px 0 0",
        }}
      >
        <p style={{ width: "100%", letterSpacing: "0.08em", lineHeight: 2.5 }}>
          ご不明な点がございましたら、お気軽にお問い合わせください。
          <br />
          空き状況の確認、見学の予約なども承っております。
        </p>
        <div style={{ maxWidth: "750px", margin: "70px 0 0" }}>
          <ContactForm />
        </div>
      </Container>
    </TopPageItemLayout>
  );
};

export default Contact;
