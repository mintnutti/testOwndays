"use client";

import styled from "styled-components";

const ContainerText = styled.span`
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: fit-content;
  transform: translateY(30%);
`;

const Text = styled.span`
  position: absolute;
  color: #000000;
  z-index: 1;
  left: ${({ left }) => (left ? left : "0")};
  top: ${({ top }) => (top ? top : "0")};
  transform: "translate(-50%, -50%)";
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
  margin-left: -2px;
  z-index: -2;

  &:first-child {
    margin-left: -2px;
  }
`;

export default function TextHighlightUI({ text, circleQty, size, left, top }) {
  return (
    <ContainerText>
      <Text left={left} top={top}>
        {" "}
        {text}
      </Text>{" "}
      {/* ข้อความจะอยู่ด้านบน */}
      <CircleContainer>
        {Array.from({ length: circleQty }).map((_, index) => (
          <Circle key={index} size={size} />
        ))}
      </CircleContainer>
    </ContainerText>
  );
}
