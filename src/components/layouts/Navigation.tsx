import React, { useEffect, useState } from "react";
import { NAVIGATION_ITEMS, NAVIGATION_ITEMS_KEY } from "./constants";
import HambergerMenu from "./header/HambergerMenu";
import styled from "styled-components";
import SNSLinks from "./SNSLinks";
import { md } from "./breakpoints";

const NavigationWrapper = styled.nav`
  @media ${md.up("lg")} {
    position: absolute;
    top: 128px;
    left: 60px;
    //transform: translateY(-50%);
    letter-spacing: 0.18em; //writing-mode: vertical-rl;
    ul {
      //display: flex;
      font-size: clamp(15px, 1.1vw, 18px);
      text-align: right;
      line-height: 2;
    }
    ul li a {
      font-weight: 400;
      display: block;
      position: relative;
      padding: 0.7rem 0.4rem 0.7rem 0.7rem;
      color: #666666;
      &.selected {
        color: #000;
      }
      &.selected::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 3px;
        height: 1.3em;
        margin: auto 0;
        background: #707070;
      }
      &:hover {
        color: ${(props) => props.theme.colors.main};
      }
    }
    .sns-link {
      display: none;
    }
  }
  @media ${md.down("lg")} {
    position: fixed;
    z-index: -1;
    opacity: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #11283df2;
    //transition: 0.3s;
    &.active {
      z-index: 9999;
      opacity: 1;
    }
    ul {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        opacity: 0;
        //height: 70px;
        padding: clamp(17px, 3.5vw, 21px);
        margin-bottom: 10px;
        text-align: center;
        &:hover a {
          color: #444;
        }
      }
    }
    a {
      color: #fff;
      letter-spacing: 0.1em;
      font-size: clamp(16px, 3.5vw, 20px);
    }
    &.active li:nth-of-type(1) {
      animation: fadeIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s forwards;
    }
    &.active li:nth-of-type(2) {
      animation: fadeIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s forwards;
    }
    &.active li:nth-of-type(3) {
      animation: fadeIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s forwards;
    }
    &.active li:nth-of-type(4) {
      animation: fadeIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0.8s forwards;
    }
    &.active li:nth-of-type(5) {
      animation: fadeIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1s forwards;
    }
    &.active li:nth-of-type(6) {
      animation: fadeIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1.2s forwards;
    }
    &.active li:nth-of-type(7) {
      animation: fadeIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1.4s forwards;
    }
    &.active li:nth-of-type(8) {
      animation: fadeIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1.6s forwards;
    }
    &.active li:nth-of-type(9) {
      animation: fadeIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1.8s forwards;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;
const NavigationListWrapper = styled.div`
  @media ${md.down("lg")} {
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
`;
const StyledSNSLinks = styled(SNSLinks)`
  line-height: 1;
  width: max-content;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;

  gap: 34px;
  a {
    color: #fff;
    font-size: clamp(20px, 5.5vw, 24px);
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };
  const [activeNavigation, setActiveNavigation] =
    useState<NAVIGATION_ITEMS_KEY>("Top");
  const NavigationItems = Object.keys(
    NAVIGATION_ITEMS,
  ) as NAVIGATION_ITEMS_KEY[];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            setActiveNavigation(entry.target.id as NAVIGATION_ITEMS_KEY);
          }
        });
      },
      { threshold: 0.4 },
    );

    NavigationItems.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [NavigationItems]);

  return (
    <>
      <NavigationWrapper className={isMenuOpen ? "active" : ""}>
        <NavigationListWrapper>
          <ul>
            {NavigationItems.map((section, index) => (
              <li key={index}>
                <a
                  href={`https://gallery-aoi.netlify.app/#${section}`}
                  className={section === activeNavigation ? "selected" : ""}
                  onClick={handleMenuClick}
                >
                  {NAVIGATION_ITEMS[section]}
                </a>
              </li>
            ))}
            <li className="sns-link">
              <StyledSNSLinks />
            </li>
          </ul>
        </NavigationListWrapper>
      </NavigationWrapper>
      <HambergerMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />{" "}
    </>
  );
};

export default Navigation;
