import React from "react";

type EquipmentSliderItemProps = {
  image: React.ReactNode;
  figcaption: string;
};
const EquipmentSliderItem = ({
  image,
  figcaption,
}: EquipmentSliderItemProps) => {
  return (
    <>
      <figure
        style={{
          margin: "0",
          overflow: "hidden",
          maxWidth: "600px",
          borderRadius: "16px",
        }}
      >
        {image}
      </figure>
      <figcaption
        style={{
          letterSpacing: "0.08em",
          paddingLeft: "8px",
        }}
      >
        {figcaption}
      </figcaption>
    </>
  );
};

export default EquipmentSliderItem;
