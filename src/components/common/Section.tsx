import React from "react";
import styled from "styled-components";
import { NAVIGATION_ITEMS_KEY } from "../layouts/constants";

type SectionProps = {
  children: React.ReactNode;
  id: NAVIGATION_ITEMS_KEY;
  className?: string;
  style?: React.CSSProperties;
};

const StyledSection = styled.section`
  width: 100%;
`;

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
  style,
}) => {
  return (
    <StyledSection id={id} className={className} style={style}>
      {children}
    </StyledSection>
  );
};
