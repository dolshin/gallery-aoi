import * as React from "react";
import { Button } from "../../common";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const paragraphStyles = {
  marginBottom: 48,
};

const NotFound = () => {
  return (
    <div style={pageStyles}>
      <h1>404 Not Found</h1>
      <p style={paragraphStyles}>
        申し訳ございません。お探しのページは見つかりませんでした。
        <br />
        URLが間違っている、もしくはページのURLが変更された可能性があります。
        <br />
        お手数ですが、メニューからご覧になりたいページをお探しください。
      </p>
      <Button label="ホームに戻る" to="/" />
    </div>
  );
};

export default NotFound;
