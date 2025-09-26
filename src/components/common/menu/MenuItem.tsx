import { Link } from "gatsby";
import React from "react";
import type { MenuItemType } from "./types";
import { FaAngleRight } from "react-icons/fa";
import styled from "styled-components";
const StyledLink = styled(Link)`
  display: inline-block;
  color: white;
`;
const MenuItem = ({ to, name }: MenuItemType) => {
  return (
    <li style={{ marginRight: "1.5em", listStyle: "none" }}>
      <StyledLink to={to}>
        <FaAngleRight
          style={{ fontSize: "14px", marginBottom: "1px", marginRight: "4px" }}
        />
        {name}
      </StyledLink>
    </li>
  );
};

export default MenuItem;
