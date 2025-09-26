import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

type LogoProps = { style?: React.CSSProperties; className?: string };

const Logo = ({ style, className }: LogoProps) => {
  return (
    <h1 style={style} className={className}>
      <Link to="/">
        <StaticImage
          src="../../assets/images/logo.png"
          alt="ロゴ画像"
          width={120}
        />
      </Link>
    </h1>
  );
};

export default Logo;
