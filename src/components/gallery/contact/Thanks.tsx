import React from "react";
import { Button } from "../../common";

const Thanks = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "80px", height: "80vh" }}>
      <h2>お問い合わせが完了しました</h2>
      <p style={{ marginTop: "40px", fontSize: "18px" }}>
        お問い合わせいただき、ありがとうございます。
        <br />
        担当者より折り返しご連絡いたしますので、しばらくお待ちください。
      </p>
      <Button to="/" label="ホームに戻る" arrowType="none" />
    </div>
  );
};

export default Thanks;
