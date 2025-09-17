import React from "react";
import styled from "styled-components";

const SCard = styled.div`
  background-color: transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 90%;
  //margin: 1rem;
  //padding: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    img {
      transform: scale(0.98);
    }
  }
`;

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Card = ({ children, style }: CardProps) => {
  return <SCard style={style}>{children}</SCard>;
};
