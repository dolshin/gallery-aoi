import React from "react";

import { Image } from "../../../common";

type GallerySliderItemProps = {
  src: string;
  alt: string;
};
const GallerySliderItem = ({ src, alt }: GallerySliderItemProps) => {
  return (
    <div style={{}}>
      <figure
        style={{
          margin: "0",
          overflow: "hidden",
          maxWidth: "100%",
        }}
      >
        <Image
          width="100%"
          height="auto"
          src={src}
          alt={alt}
          style={{ borderRadius: "16px" }}
        />{" "}
      </figure>
    </div>
  );
};

export default GallerySliderItem;
