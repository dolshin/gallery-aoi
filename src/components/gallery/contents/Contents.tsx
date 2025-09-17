import React from "react";
import Event from "../event/Event";
import MainVisual from "../mainVisual/MainVisual";
import Contact from "../contact/Contact";
import Access from "../access/Access";
import FAQ from "../faq/Faq";
import Price from "../price/Price";
import Facility from "../facility/Facility";
import Apply from "../apply/Apply";

const Contents = () => {
  return (
    <>
      <MainVisual />
      <Facility />
      <Price />
      <FAQ />
      <Event />
      <Access />
      <Contact />
      <Apply />
    </>
  );
};

export default Contents;
