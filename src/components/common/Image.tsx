import React from "react";
import Gallery from "../../assets/images/gallery-aoi-outside.png";

import styled from "styled-components";
const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
  font-size: 0;
  line-height: 0;
  border-width: 0;
  vertical-align: bottom;
  transition: 0.5s ease-out;
`;
type ImageProps = {
  src: string | null | undefined;
  alt: string;
  width: number | string;
  height: number | string;
  style?: React.CSSProperties;
};
export const Image = ({ src, alt, width, height, style }: ImageProps) => {
  return (
    <StyledImg
      width={width}
      height={height}
      src={src ?? Gallery}
      style={style}
      alt={alt}
      decoding="async"
    />
  );
};
