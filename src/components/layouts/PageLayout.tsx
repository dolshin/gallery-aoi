import React from "react";
import { Container } from "../common";
import TopPageItemTitle from "./TopPageItemTitle";

type PageLayoutProps = {
  title: string;
  subTitle: string;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
};
const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subTitle,
  style,
  className,
  children,
}) => {
  return (
    <Container style={{ minHeight: "100vh", ...style }} className={className}>
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
