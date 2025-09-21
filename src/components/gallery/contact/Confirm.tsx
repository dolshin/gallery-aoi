import React from "react";
import { Button, Container } from "../../common";
import { navigate } from "gatsby";
import ConfirmItem from "./ConfirmItem";
import { FORM_ITEMS } from "./constants";
import { useContactStore } from "../../../lib/zustand/store/contactStore";
import { encode } from "./functions";
import { SITE_URL } from "../../layouts/constants";

const Confirm = () => {
  const { contact: contactValue, resetContact } = useContactStore(
    (state) => state,
  );
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...contactValue }),
      });
      navigate("/contact/thanks");
      resetContact();
    } catch (error) {
      alert("送信失敗: " + error);
    }
  };
  return (
    <Container style={{ textAlign: "center", minHeight: "100vh" }}>
      <h2>入力内容の確認</h2>
      <p>下記の内容で問題がなければ送信するボタンを押してください。</p>
      <form
        name="contact"
        action="/contact/thanks/"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
      >
        {/* Netlify がフォームを認識するために必要 */}
        <input type="hidden" name="form-name" value="contact" />

        {/* スパム対策 */}
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        {FORM_ITEMS.map((item, index) => {
          return (
            <ConfirmItem
              key={index}
              label={item.label}
              value={contactValue[item.field] ?? ""}
            />
          );
        })}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            margin: "40px auto",
          }}
        >
          <Button
            label="戻る"
            onClick={() => {
              navigate(`${SITE_URL}/#Contact`);
            }}
            arrowType="none"
            type="button"
            style={{
              borderRadius: "5px",
              width: 166,
              height: 54,
              fontSize: 14,
            }}
          />
          <Button
            label="送信する"
            type="submit"
            arrowType="none"
            style={{
              borderRadius: "5px",
              width: 166,
              height: 54,
              fontSize: 14,
            }}
          />
        </div>
      </form>
    </Container>
  );
};

export default Confirm;
