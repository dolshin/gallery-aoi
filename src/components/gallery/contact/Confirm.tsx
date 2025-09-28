import React, { useState } from "react";
import { Button, Container } from "../../common";
import { navigate } from "gatsby";
import ConfirmItem from "./ConfirmItem";
import { FORM_ITEMS } from "./constants";
import { useContactStore } from "../../../lib/zustand/store/contactStore";
import { SITE_URL } from "../../layouts/constants";
import { ApiResponse } from "../../../types/send-email.type";

const Confirm = () => {
  const { contact: contactValue, resetContact } = useContactStore(
    (state) => state,
  );
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("/netlify/functions/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactValue),
      });
      const result = (await response.json()) as ApiResponse;
      if (!response.ok || "error" in result.body) {
        const error = "error" in result.body ? result.body.error : undefined;
        throw new Error(error || "送信に失敗しました");
      }
      resetContact();
      navigate("/contact/thanks");
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error instanceof Error ? error.message : "不明なエラーが発生しました",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container style={{ textAlign: "center", minHeight: "100vh" }}>
      <h2>入力内容の確認</h2>
      <p>下記の内容で問題がなければ送信するボタンを押してください。</p>
      <form onSubmit={onSubmit}>
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
            label={loading ? "送信中..." : "送信する"}
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
        {errorMessage && (
          <p style={{ color: "red", marginTop: "20px" }}>{errorMessage}</p>
        )}
      </form>
    </Container>
  );
};

export default Confirm;
