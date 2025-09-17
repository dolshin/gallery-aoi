import React from "react";
import { Container } from "../common";
import TopPageItemTitle from "./TopPageItemTitle";

type PageLayoutProps = {
  title: string;
  subTitle: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};
const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subTitle,
  style,
  children,
}) => {
  return (
    <Container style={{ minHeight: "100vh", ...style }}>
      <TopPageItemTitle
        title={title}
        subTitle={subTitle}
        style={{ marginTop: "80px" }}
      />
      <div style={{}}>{children}</div>
    </Container>
  );
};

export default PageLayout;
