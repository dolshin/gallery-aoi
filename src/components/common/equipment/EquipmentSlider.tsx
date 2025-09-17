import React from "react";
import Slider from "../slider/Slider";
import { Settings } from "react-slick";
import EquipmentSliderItem from "./EquipmentSliderItem";
import { EQUIPMENT_SLIDER_ITEMS } from "../../gallery/facility/constants";

type EquipmentSliderProps = {
  SliderType: keyof typeof EQUIPMENT_SLIDER_ITEMS;
  style?: React.CSSProperties;
};
const EquipmentSlider: React.FC<EquipmentSliderProps> = ({
  SliderType,
  style,
}) => {
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider
      settings={settings}
      style={{
        overflow: "hidden",
        maxWidth: "600px",
        margin: "50px 0 0",
        ...style,
      }}
      sliderItems={EQUIPMENT_SLIDER_ITEMS[SliderType].map((item, index) => (
        <EquipmentSliderItem key={index} {...item} />
      ))}
    />
  );
};

export default EquipmentSlider;
