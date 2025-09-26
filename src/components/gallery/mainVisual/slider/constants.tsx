import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const GALLERY_SLIDER_ITEMS = [
  <StaticImage
    key="gallery-outside"
    src="../../../../assets/images/gallery-aoi-outside.png"
    alt="ギャラリー外観"
    style={{ borderRadius: "16px" }}
  />,
  <StaticImage
    key="art-exhibition"
    src="../../../../assets/images/art-exhibition.jpg"
    alt="アート展示"
    style={{ borderRadius: "16px" }}
  />,
  <StaticImage
    key="gallery-inside"
    src="../../../../assets/images/gallery-aoi.jpg"
    alt="ギャラリー内観"
    style={{ borderRadius: "16px" }}
  />,
];
