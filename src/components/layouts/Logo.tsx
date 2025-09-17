import React from "react";
import { Link } from "gatsby";
import LOGO from "../../assets/images/図3.png";

type LogoProps = { style?: React.CSSProperties; className?: string };
const Logo = ({ style, className }: LogoProps) => {
  return (
    <h1 style={style} className={className}>
      <Link to="/">
        <img src={LOGO} alt="ロゴ画像" width="120px" />
      </Link>
    </h1>
  );
};

export default Logo;
