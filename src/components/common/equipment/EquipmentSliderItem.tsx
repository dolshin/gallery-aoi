import React from "react";
import { Image } from "..";

type EquipmentSliderItemProps = {
  src: string;
  alt: string;
  figcaption: string;
};
const EquipmentSliderItem = ({
  src,
  alt,
  figcaption,
}: EquipmentSliderItemProps) => {
  return (
    <div style={{}}>
      <figure
        style={{
          margin: "0",
          overflow: "hidden",
          maxWidth: "600px",
          borderRadius: "16px",
        }}
      >
        <Image width="100%" height="auto" src={src} alt={alt} />{" "}
      </figure>
      <figcaption
        style={{
          letterSpacing: "0.08em",
          paddingLeft: "8px",
        }}
      >
        {figcaption}
      </figcaption>
    </div>
  );
};

export default EquipmentSliderItem;
