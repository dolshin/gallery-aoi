import React from "react";
import TopPageItemTitle from "./TopPageItemTitle";
import { Section } from "../common";
import { NAVIGATION_ITEMS_KEY } from "./constants";
import styled from "styled-components";
import { md } from "./breakpoints";

const PageItemWrapper = styled.div`
  @media ${md.up("lg")} {
    padding: 30px 0 0 20px;
  }
  @media ${md.down("lg")} {
    padding: 10px 0 0;
  }
`;

const StyledSection = styled(Section)`
  @media ${md.up("lg")} {
    margin-top: 150px;
  }
  @media ${md.down("lg")} {
    margin-top: 80px;
  }
`;
type TopPageItemLayoutProps = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  id: NAVIGATION_ITEMS_KEY;
  style?: React.CSSProperties;
};
const TopPageItemLayout: React.FC<TopPageItemLayoutProps> = ({
  children,
  title,
  subTitle,
  id,
  style,
}) => {
  return (
    <StyledSection id={id} style={style}>
      <TopPageItemTitle title={title} subTitle={subTitle} />
      <PageItemWrapper>{children}</PageItemWrapper>
    </StyledSection>
  );
};

export default TopPageItemLayout;
