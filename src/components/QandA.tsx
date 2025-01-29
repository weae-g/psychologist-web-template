import { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { data } from "../../src/data/QandA.json";

type DataType = {
  question: string;
  answer: string;
};

const QAndA = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {data.map(({ question, answer }: DataType, index: number) => (
        <QAndAContainer
          key={index}
          onClick={() => toggleOpen(index)}
          $isLastItem={index === data.length - 1}>
          <Question>
            <div>
              <QuestionNumber>{index + 1}</QuestionNumber>
              {question}
            </div>

            {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
          </Question>
          <Answer $isOpen={openIndex === index}>{answer}</Answer>
        </QAndAContainer>
      ))}
    </>
  );
};

const QAndAContainer = styled.div<{ $isLastItem: boolean }>`
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: ${({ $isLastItem }) =>
    $isLastItem ? "none" : "2px solid #efefef"};
  padding: 1rem 0;
`;

const Question = styled.div`
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const QuestionNumber = styled.div`
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #4ba8ff;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
`;

const Answer = styled.p<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #555;
`;

export default QAndA;
