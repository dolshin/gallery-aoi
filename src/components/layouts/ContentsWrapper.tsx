import React from "react";
import styled from "styled-components";

const SContentsWrapper = styled.div`
  position: relative;
`;
type ContentsWrapperProps = { children: React.ReactNode };
const ContentsWrapper: React.FC<ContentsWrapperProps> = ({ children }) => {
  return <SContentsWrapper>{children}</SContentsWrapper>;
};

export default ContentsWrapper;
