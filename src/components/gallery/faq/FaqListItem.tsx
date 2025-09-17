import React from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FaqList = styled.li`
  border-bottom: 1px solid #d9d9d9;
  margin: 0;
  //box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  letter-spacing: 0.09em;
`;

const QuestionButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  background: none;
  border: none;
  padding: 32px 32px;
  font-size: 15px;
  letter-spacing: 0.17em;
  //font-weight: 500;
  cursor: pointer;
  color: #111827;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const Answer = styled.div`
  padding: 0 32px 24px;
  color: #374151;
  font-size: 15px;
  letter-spacing: 0.17em;
  line-height: 1.6;
`;
type FaqListItemProps = {
  faq: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  index: number;
  toggle: (index: number) => void;
};

const FaqListItem: React.FC<FaqListItemProps> = ({
  faq,
  isOpen,
  toggle,
  index,
}) => {
  return (
    <FaqList>
      <QuestionButton onClick={() => toggle(index)}>
        <div>
          <span
            style={{
              display: "inline-block",
              marginRight: "10px",
              color: "#406193",
            }}
          >
            Q.{" "}
          </span>{" "}
          {faq.question}
        </div>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </QuestionButton>
      {isOpen && (
        <Answer>
          <span
            style={{
              display: "inline-block",
              margin: "0 18px 0 2px",
              color: "rgb(199 38 38)",
            }}
          >
            A.{" "}
          </span>
          {faq.answer}
        </Answer>
      )}
    </FaqList>
  );
};

export default FaqListItem;
