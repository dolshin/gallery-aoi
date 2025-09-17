import React from "react";
import Header from "./Sidebar";
import Footer from "./footer/Footer";

import styled, { createGlobalStyle } from "styled-components";
import "sanitize.css";
import "@fontsource-variable/montserrat";
import { ReactLenis } from "lenis/dist/lenis-react";
import ScrollButton from "../common/ScrollButton";
import ContentsWrapper from "./ContentsWrapper";
import { Container } from "../common";
import { md } from "./breakpoints";

const GlobalStyle = createGlobalStyle`
html {
  //scroll-behavior: smooth;
}
body{
//background-color:rgb(241 241 241)
}
a{text-decoration:none;color: #000;}ul{padding:0}
li{
  //list-style:none
}
 p{
  letter-spacing: 0.05em
 }
`;
const Main = styled.main`
  @media ${md.up("lg")} {
    padding-left: clamp(100px, 12vw, 180px);
    width: 72%;
    margin: 0 auto;
  }
  @media ${md.between("md", "lg")} {
    width: 70%;
    margin: 0 auto;
  }
  @media ${md.between("sm", "md")} {
    width: 85%;
    margin: 0 auto;
  }
  @media ${md.down("sm")} {
    width: 85%;
    margin: 0 auto;
  }
`;

type LayoutProps = { children: React.ReactNode };

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ReactLenis root />
      <Container style={{ margin: 0 }}>
        <ContentsWrapper>
          <Header />
          <Main>{children}</Main>
        </ContentsWrapper>
        <ScrollButton />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
