import React from "react";
import TopPageItemLayout from "../../layouts/TopPageItemLayout";
import Faq from "./FaqList";
import { FAQS } from "./constants";

const FAQ: React.FC = () => (
  <TopPageItemLayout id="Faq" title="よくある質問" subTitle="FAQ">
    <Faq faqs={FAQS} />
  </TopPageItemLayout>
);

export default FAQ;
