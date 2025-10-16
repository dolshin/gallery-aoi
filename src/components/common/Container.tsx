import React from "react";
import styled from "styled-components";

type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  style,
  className,
}) => {
  return (
    <StyledContainer style={style} className={className}>
      {children}
    </StyledContainer>
  );
};
