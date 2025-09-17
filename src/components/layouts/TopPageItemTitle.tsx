import React from "react";
import styled from "styled-components";
import { md } from "./breakpoints";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  //margin-left: -20px;
  position: relative;
`;

const Title = styled.h2`
  width: max-content;
  font-weight: 500;
  margin: 0;
  //color: "#414141",
  font-family: "'Montserrat Variable', sans-serif";
  @media ${md.up("lg")} {
    font-size: 1.6rem;
    letter-spacing: 0.1em;
  }
  @media ${md.between("md", "lg")} {
    font-size: 1.6rem;
    letter-spacing: 0.1em;
  }
  @media ${md.between("sm", "md")} {
    font-size: 1.4rem;
    letter-spacing: 0.1em;
  }
  @media ${md.down("sm")} {
    font-size: 1.3rem;
    letter-spacing: 0.07em;
  }
`;

const SubTitle = styled.span`
  @media ${md.up("lg")} {
    font-size: 2.4rem;
    letter-spacing: 0.03em;
  }
  @media ${md.between("md", "lg")} {
    font-size: 2.1rem;
    letter-spacing: 0.03em;
  }
  @media ${md.between("sm", "md")} {
    font-size: 1.9rem;
    letter-spacing: 0.03em;
  }
  @media ${md.down("sm")} {
    font-size: 1.6rem;
    letter-spacing: 0.03em;
  }

  font-style: italic;
  letter-spacing: 0.03em;
  color: #bbbbbb;
  width: max-content;

  //marginLeft: "8px",
`;

type TopPageItemTitleProps = {
  title: string;
  subTitle: string;
  style?: React.CSSProperties;
};
const TopPageItemTitle: React.FC<TopPageItemTitleProps> = ({
  title,
  subTitle,
  style,
}) => {
  return (
    <TitleWrapper style={style}>
      <SubTitle>{subTitle}</SubTitle>
      <Title>{title}</Title>
    </TitleWrapper>
  );
};

export default TopPageItemTitle;
