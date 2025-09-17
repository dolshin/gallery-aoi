import React from "react";
import styled from "styled-components";
import { md } from "../breakpoints";

type HambergerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const HambergerMenu = ({ isOpen, toggleMenu }: HambergerMenuProps) => {
  return (
    <StyledMenu onClick={toggleMenu} className={isOpen ? "active" : ""}>
      <span></span>
      <span></span>
      <span></span>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  @media ${md.up("lg")} {
    display: none;
  }
  @media ${md.down("lg")} {
    position: fixed;
    z-index: 9999;
    top: 28px;
    right: 26px;
    //background-color: #333;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    span {
      display: inline-block;
      position: absolute;
      width: 55%;
      height: 1px;
      left: 14px;
      background-color: #666;
      border-radius: 2px;
      transition: 0.4s;
      &:nth-of-type(1) {
        top: 15px;
      }
      &:nth-of-type(2) {
        top: 25px;
      }
      &:nth-of-type(3) {
        top: 36px;
      }
      &:nth-of-type(3)::after {
        content: "Menu";
        position: absolute;
        top: 5px;
        left: -1px;
        color: #666;
        font-size: 11px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
    }
    &.active span {
      background-color: #fff;
    }
    &.active span:nth-of-type(1) {
      top: 18px;
      left: 18px;
      transform: translateY(6px) rotate(-45deg);
      width: 30%;
    }
    &.active span:nth-of-type(2) {
      opacity: 0;
    }
    &.active span:nth-of-type(3) {
      transform: translateY(-6px) rotate(45deg);
      top: 30px;
      left: 18px;
      width: 30%;
    }
    &.active span:nth-of-type(3)::after {
      content: "Close";
      color: #fff;
      transform: translateY(0) rotate(-45deg);
      top: 5px;
      left: 4px;
    }
  }
`;
export default HambergerMenu;
