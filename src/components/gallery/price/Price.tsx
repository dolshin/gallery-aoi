import React from "react";
import TopPageItemLayout from "../../layouts/TopPageItemLayout";
import GalleryPrice from "./GalleryPrice";

const Price: React.FC = () => {
  return (
    <TopPageItemLayout id="Price" title="料金" subTitle="Price">
      <GalleryPrice />
    </TopPageItemLayout>
  );
};

export default Price;
