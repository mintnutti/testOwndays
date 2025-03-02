"use client";

import styled from "styled-components";

const ContainerText = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  transform: translateY(30%);
`;

const Text = styled.span`
  position: absolute;
  color: #000000;
  z-index: 1;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
`;

const Circle = styled.div`
  width: ${({ size }) => size || "30px"};
  height: ${({ size }) => size || "30px"};
  border-radius: 50%;
  background-color: #e7f532;
  margin-left: -5px;

  &:first-child {
    margin-left: 0;
  }
`;

export default function TextHighlightUI({ text, circleQty, size }) {
  return (
    <ContainerText>
      <Text> {text}</Text> {/* ข้อความจะอยู่ด้านบน */}
      <CircleContainer>
        {Array.from({ length: circleQty }).map((_, index) => (
          <Circle key={index} size={size} />
        ))}
      </CircleContainer>
    </ContainerText>
  );
}
