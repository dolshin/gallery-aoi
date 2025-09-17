import React from "react";
import styled from "styled-components";
import { useScroll } from "../../lib/hooks/useScroll";
import { FaAngleUp } from "react-icons/fa6";

const StyledButton = styled.button`
  display: none;
  opacity: 0;
  position: fixed;
  z-index: 9999;
  bottom: 10px;
  right: 8px;
  width: 64px;
  height: 64px;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  border: none;
  background: #436cc1;
  font-size: 32px;

  &.active {
    animation: faden 1s ease 0s forwards;
    display: block;
    &:hover {
      background: transparent;
      .fa-angle-up {
        color: #5b88de;
      }
    }
  }
  @keyframes faden {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const ScrollButton = () => {
  const { isActive, scrollTop } = useScroll();

  return (
    <StyledButton onClick={scrollTop} className={isActive ? "active" : ""}>
      <FaAngleUp className="fa-angle-up" />
    </StyledButton>
  );
};

export default ScrollButton;
