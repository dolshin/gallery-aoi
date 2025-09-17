import React from "react";

import TopPageItemLayout from "../../layouts/TopPageItemLayout";
import Information from "./Information";
import Equipment from "./equipment/Equipment";
import GalleryEquipmentSlider from "./equipment/GalleryEquipmentSlider";

const Facility: React.FC = () => (
  <TopPageItemLayout
    id="Facility"
    title="施設情報"
    subTitle="Facility"
    style={{}}
  >
    <Information />
    <Equipment />
    <GalleryEquipmentSlider />
  </TopPageItemLayout>
);

export default Facility;
