import React from "react";
import styled from "styled-components";

const StyledChip = styled.span`
  display: inline-block;
  text-align: center;
  color: rgb(66, 66, 66);
  font-size: 13px;

  line-height: 1.5;
  margin: 0 1em 0 0;

  padding: 0.3em 1.5em 0.3em;
  border: 1px solid #5984db;
  border-radius: 50px;
`;
type ChipProps = {
  label: React.ReactNode;
  style?: React.CSSProperties;
};
export const Chip = ({ label, style }: ChipProps) => {
  return <StyledChip style={style}>{label}</StyledChip>;
};
