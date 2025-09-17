import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SNSLinks from "./SNSLinks";
import { md } from "./breakpoints";

const SidebarWrapper = styled.header`
  @media ${md.up("lg")} {
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
  @media ${md.down("lg")} {
    z-index: 9999;
  }
`;

const SLogo = styled(Logo)`
  @media ${md.up("lg")} {
    position: absolute;
    top: 30px;
    left: 68px;
  }
  @media ${md.down("lg")} {
    position: absolute;
    top: 24px;
    left: clamp(10px, 3.5vw, 30px);
    margin: 0;
    display: none;
  }
`;
const SSNSLinks = styled(SNSLinks)`
  @media ${md.up("lg")} {
    position: absolute;
    left: clamp(60px, 5vw, 75px);
    top: 602px;

    line-height: 1;
    padding: 0;
    list-style: none;
    font-size: 20px;
    display: flex;
    gap: 24px;
    a {
      color: #666;
      &:hover {
        color: #000;
      }
    }
  }
  @media ${md.down("lg")} {
    display: none;
  }
`;

const Sidebar: React.FC = () => (
  <SidebarWrapper>
    <SLogo />
    <Navigation />
    <SSNSLinks />
  </SidebarWrapper>
);

export default Sidebar;
