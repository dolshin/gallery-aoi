import React, { useState } from "react";
import FaqListItem from "./FaqListItem";

export type FaqListItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  faqs: FaqListItem[];
};
const FaqList: React.FC<FaqListProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <FaqListItem
            faq={faq}
            isOpen={isOpen}
            index={index}
            toggle={toggle}
            key={index}
          />
        );
      })}
    </ul>
  );
};

export default FaqList;
