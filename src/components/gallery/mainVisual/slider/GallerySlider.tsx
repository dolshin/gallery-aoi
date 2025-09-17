import React from "react";
import Slider from "../../../common/slider/Slider";
import { Settings } from "react-slick";
import GallerySliderItem from "./GallerySliderItem";
import { GALLERY_SLIDER_ITEMS } from "./constants";

const GallerySlider: React.FC = () => {
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
      sliderItems={GALLERY_SLIDER_ITEMS.map((item, index) => (
        <GallerySliderItem key={index} {...item} />
      ))}
    />
  );
};

export default GallerySlider;
