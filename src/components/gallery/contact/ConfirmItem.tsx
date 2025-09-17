import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  padding: 0.5em;
  margin-bottom: 1em;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledLabel = styled.div`
  text-align: left;
  padding: 0.5em;
  font-size: 14px;
  color: gray;
`;

const StyledItem = styled.div`
  text-align: left;
  margin-left: 1rem;
  font-size: 18px;
  padding: 4px 0;
`;
type ConfirmItemProps = {
  label: string;
  value: string;
};
const ConfirmItem: React.FC<ConfirmItemProps> = ({ label, value }) => {
  return (
    <StyledDiv>
      <StyledLabel>{label} </StyledLabel>
      <StyledItem>{value || "入力なし"}</StyledItem>
    </StyledDiv>
  );
};

export default ConfirmItem;
