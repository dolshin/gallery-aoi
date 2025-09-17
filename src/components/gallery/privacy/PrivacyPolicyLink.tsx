import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const SLink = styled(Link)`
  color: #333333;
  text-decoration: underline;
  font-size: 12px;
  display: block;
  cursor: pointer;
  z-index: 3;
  text-align: center;
`;
const PrivacyPolicyLink = () => {
  return <SLink to="/privacy-policy"> プライバシーポリシー</SLink>;
};

export default PrivacyPolicyLink;
