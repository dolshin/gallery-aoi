import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const EQUIPMENT_SLIDER_ITEMS = {
  Gallery: [
    {
      image: (
        <StaticImage
          src="../../../assets/images/long-chair.jpg"
          alt="キャスター付き長椅子"
          style={{ borderRadius: "16px" }}
        />
      ),
      figcaption: "キャスター付き長椅子",
    },
    {
      image: (
        <StaticImage
          src="../../../assets/images/small-chair.jpg"
          alt="折りたたみ椅子"
          style={{ borderRadius: "16px" }}
        />
      ),
      figcaption: "折りたたみ椅子",
    },
    {
      image: (
        <StaticImage
          src="../../../assets/images/easel.jpg"
          alt="イーゼル"
          style={{ borderRadius: "16px" }}
        />
      ),
      figcaption: "イーゼル",
    },
    {
      image: (
        <StaticImage
          src="../../../assets/images/reception-table.jpg"
          alt="受付机"
          style={{ borderRadius: "16px" }}
        />
      ),
      figcaption: "受付机",
    },
    {
      image: (
        <StaticImage
          src="../../../assets/images/table.jpg"
          alt="会議用長机"
          style={{ borderRadius: "16px" }}
        />
      ),
      figcaption: "会議用長机",
    },
  ],
  Toukaann: [
    {
      image: (
        <StaticImage
          src="../../../assets/images/long-chair.jpg"
          alt="長椅子"
          style={{ borderRadius: "16px" }}
        />
      ),
      figcaption: "長椅子",
    },
    {
      image: (
        <StaticImage
          src="../../../assets/images/small-chair.jpg"
          alt="小椅子"
          style={{ borderRadius: "16px" }}
        />
      ),
      figcaption: "小椅子",
    },
    {
      image: (
        <StaticImage
          src="../../../assets/images/reception-table.jpg"
          alt="ギャラリーアオイの内観"
          style={{ borderRadius: "16px" }}
        />
      ),
      figcaption: "ギャラリーアオイの内観",
    },
  ],
  Velza: [
    {
      image: (
        <StaticImage
          src="../../../assets/images/long-chair.jpg"
          alt="長椅子"
          style={{ borderRadius: "16px" }}
        />
      ),
      figcaption: "長椅子",
    },
    {
      image: (
        <StaticImage
          src="../../../assets/images/small-chair.jpg"
          alt="小椅子"
          style={{ borderRadius: "16px" }}
        />
      ),
      figcaption: "小椅子",
    },
    {
      image: (
        <StaticImage
          src="../../../assets/images/reception-table.jpg"
          alt="ギャラリーアオイの内観"
          style={{ borderRadius: "16px" }}
        />
      ),
      figcaption: "ギャラリーアオイの内観",
    },
  ],
};

export type EquipmentSliderItem =
  (typeof EQUIPMENT_SLIDER_ITEMS)[keyof typeof EQUIPMENT_SLIDER_ITEMS][number];
