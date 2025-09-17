import LongChair from "../../../assets/images/long-chair.jpg";
import SmallChair from "../../../assets/images/small-chair.jpg";
import ReceptionTable from "../../../assets/images/reception-table.jpg";
import Easel from "../../../assets/images/easel.jpg";
import Table from "../../../assets/images/table.jpg";
export const EQUIPMENT_SLIDER_ITEMS = {
  Gallery: [
    {
      id: 1,
      src: LongChair,
      alt: "ワゴン低い長椅子兼机",
      figcaption: "ワゴン低い長椅子兼机",
    },
    {
      id: 2,
      src: SmallChair,
      alt: "折りたたみ椅子",
      figcaption: "折りたたみ椅子",
    },
    {
      id: 3,
      src: Easel,
      alt: "イーゼル",
      figcaption: "イーゼル",
    },
    {
      id: 4,
      src: ReceptionTable,
      alt: "受付机",
      figcaption: "受付机",
    },
    {
      id: 5,
      src: Table,
      alt: "会議用長机",
      figcaption: "会議用長机",
    },
  ],
  Toukaann: [
    {
      id: 1,
      src: LongChair,
      alt: "長椅子",
      figcaption: "長椅子",
    },
    {
      id: 2,
      src: SmallChair,
      alt: "小椅子",
      figcaption: "小椅子",
    },
    {
      id: 3,
      src: ReceptionTable,
      alt: "ギャラリーアオイの内観",
      figcaption: "ギャラリーアオイの内観",
    },
  ],
  Velza: [
    {
      id: 1,
      src: LongChair,
      alt: "長椅子",
      figcaption: "長椅子",
    },
    {
      id: 2,
      src: SmallChair,
      alt: "小椅子",
      figcaption: "小椅子",
    },
    {
      id: 3,
      src: ReceptionTable,
      alt: "ギャラリーアオイの内観",
      figcaption: "ギャラリーアオイの内観",
    },
  ],
};
export type EquipmentSliderItem =
  (typeof EQUIPMENT_SLIDER_ITEMS)[keyof typeof EQUIPMENT_SLIDER_ITEMS][number];
