import { IconType } from "react-icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type SNS_LINKS_Type = {
  icon: IconType;
  url: string;
};
export const SNS_LINKS: SNS_LINKS_Type[] = [
  { icon: FaFacebook, url: "https://www.facebook.com/100073694618158/" },
  { icon: FaXTwitter, url: "https://twitter.com/gallery_aoi" },
  { icon: FaInstagram, url: "https://www.instagram.com/gallery_aoi/" },
];
