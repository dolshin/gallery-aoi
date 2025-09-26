import React from "react";

type GallerySliderItemProps = {
  image: React.ReactNode;
};

const GallerySliderItem = ({ image }: GallerySliderItemProps) => (
  <figure
    style={{
      margin: "0",
      overflow: "hidden",
      maxWidth: "100%",
    }}
  >
    {image}
  </figure>
);

export default GallerySliderItem;
