import React, { useCallback, useRef } from "react";
import SlickSlider, { Settings } from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const SliderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  .slick-slide {
    padding: 0 8px;
  }

  .slick-disabled::before,
  .slick-disabled::after {
    opacity: 0.25;
  }
  .slider-arrow {
    border: 1px solid #666;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  .slick-dots {
    position: relative;
    text-align: center;
    margin: 20px 0 0 0;
  }
  .slider-prev {
    margin-right: 6px;
  }
  .slider-next {
    margin-left: 6px;
  }
  .slider-dots {
    display: flex;
  }
`;

type SliderProps<T extends React.ReactNode> = {
  sliderItems: T[];
  settings?: Settings;
  style?: React.CSSProperties;
};
const Slider = <T extends React.ReactNode>({
  sliderItems,
  settings,
  style,
}: SliderProps<T>) => {
  const sliderRef = useRef<SlickSlider | null>(null);
  const PreviousSlide = useCallback(() => {
    sliderRef.current?.slickPrev();
  }, []);

  const NextSlide = useCallback(() => {
    sliderRef.current?.slickNext();
  }, []);

  const CustomPrevArrow = () => {
    return (
      <div className="slider-arrow slider-prev" onClick={PreviousSlide}>
        <FaAngleLeft size={13} color="#333" />
      </div>
    );
  };
  const CustomNextArrow = () => (
    <div className="slider-arrow slider-next" onClick={NextSlide}>
      <FaAngleRight size={13} color="#333" />
    </div>
  );
  const defaultSettings: Settings = {
    dots: true,
    infinite: false,
    arrows: true,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomPrevArrow />
        <div className="slider-dots">{dots}</div>
        <CustomNextArrow />
      </div>
    ),
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <SliderWrapper style={style}>
      <SlickSlider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...{ ...defaultSettings, ...settings }}
      >
        {sliderItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </SlickSlider>
    </SliderWrapper>
  );
};

export default Slider;
