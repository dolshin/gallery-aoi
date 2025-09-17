import { Link } from "gatsby";
import React, { useMemo } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 3px;
  //background-color: #375799;
  //background-color: #4271c2;
  background-color: #4464a5;
  color: #ffffff;
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 16px 48px 16px 48px;
  margin: 20px 0 0 0;
  text-align: center;
  cursor: pointer;
  span {
    z-index: 3;
    position: relative;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -130%;
    background: #375799;
    width: 120%;
    height: 100%;
    transform: skewX(-25deg);
  }
  &:hover::before {
    animation: skewAnime 0.5s ease-in-out forwards;
  }
  &:hover {
    color: #fff !important;
  }
  @keyframes skewAnime {
    100% {
      left: -10%;
    }
  }
`;

type ArrowType = "right" | "left" | "none";
type buttonType = "button" | "submit";
type ButtonProps = {
  label: string;
  to?: string;
  arrowType?: ArrowType;
  onClick?: () => void;
  type?: buttonType;
  style?: React.CSSProperties;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  to,
  onClick,
  arrowType = "right",
  type = "submit",
  style,
}) => {
  const buttonContent = useMemo(() => {
    return (
      <>
        {arrowType === "left" && (
          <FaAngleLeft
            style={{
              position: "absolute",
              fontSize: "16px",
              top: "51%",
              left: "7%",
              transform: "translateY(-50%)",
            }}
          />
        )}
        <span>{label}</span>
        {arrowType === "right" && (
          <FaAngleRight
            style={{
              position: "absolute",
              fontSize: "16px",
              top: "51%",
              right: "10%",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </>
    );
  }, [arrowType, label]);
  return (
    <>
      {to === undefined ? (
        <StyledButton onClick={onClick} style={style} type={type}>
          {buttonContent}
        </StyledButton>
      ) : (
        <Link to={to} style={{ display: "inline-block" }}>
          <StyledButton onClick={onClick} style={style} type={type}>
            {buttonContent}
          </StyledButton>
        </Link>
      )}
    </>
  );
};
