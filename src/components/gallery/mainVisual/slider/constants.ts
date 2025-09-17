import GalleryOutside from "../../../../assets/images/gallery-aoi-outside.png";
import ArtExhibition from "../../../../assets/images/art-exhibition.jpg";
import GalleryInteria from "../../../../assets/images/gallery-aoi.jpg";

export const GALLERY_SLIDER_ITEMS = [
  {
    src: GalleryOutside,
    alt: "会議室",
  },
  {
    src: ArtExhibition,
    alt: "ギャラリーアオイ",
  },
  {
    src: GalleryInteria,
    alt: "机の写真",
  },
] as const;
export type SpaceItem = (typeof GALLERY_SLIDER_ITEMS)[number];
