import React from "react";

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
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
};
export const Image = ({
  src,
  alt,
  width,
  height,
  style,
  className,
}: ImageProps) => {
  const optimizedUrl = `${src}?q=80&fm=webp`;

  return (
    <StyledImg
      src={optimizedUrl}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={className}
      loading="lazy"
    />
  );
};
