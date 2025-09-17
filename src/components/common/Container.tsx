import React from "react";
import styled from "styled-components";

type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return <StyledContainer style={style}>{children}</StyledContainer>;
};
