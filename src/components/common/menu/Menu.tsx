import React from "react";
import styled from "styled-components";
import { MenuProps } from "./types";
import MenuItem from "./MenuItem";

const SAside = styled.aside`
  position: relative;
  width: 160px;
  h3::before {
    content: "";
    position: absolute;
    top: 0;
    right: 1em;
    bottom: 0;
    width: 0.3em;
    height: 0.3em;
    margin: auto;
    border-right: 2px solid #3b3b3b;
    border-bottom: 2px solid #3b3b3b;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  ul {
    position: absolute;
    top: 80%;
    left: 0;
    z-index: 1;
    width: 50vw;
    display: flex;
    flex-wrap: wrap;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    padding: 1em 1.5em 1em;
    font-size: 15px;
    letter-spacing: 0.08em;
    color: white;
    background: #666;
  }
  &:hover {
    ul {
      top: 100%;
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Menu: React.FC<MenuProps> = ({ menuLabel, menuItems, style }) => {
  return (
    <SAside style={style}>
      <h3
        style={{
          margin: 0,
          position: "relative",
          fontSize: "1em",
          fontWeight: "normal",
          padding: ".5em 2.5em .5em 1.3em",
          background: "transparent",
          border: "1px solid #dadada",
          cursor: "pointer",
        }}
      >
        {menuLabel}
      </h3>
      <ul>
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.to} to={menuItem.to} name={menuItem.name} />
        ))}
      </ul>
    </SAside>
  );
};

export default Menu;
