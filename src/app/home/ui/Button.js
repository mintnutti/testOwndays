"use client";

import styled, { keyframes } from "styled-components";
import { device } from "../../device";

const DivButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const showImage = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  100% {
    opacity: 0;
    transform: translateX(700%);
  }
`;

const changeBG = keyframes`
  0% {
    background-color: transparent;
  }
  100% {
    background-color: #000000;
    colog:#ffffff;
  }
`;

const changeText = keyframes`
  0% {
    color:#000000;
  }
  100% {
  
    color:#ffffff;
  }
`;

const ButtonImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 20px;
  @media (max-width: ${device.tabletL}) {
    width: 25px;
    height: 25px;
  }

  transition: opacity 0.5s ease;
`;

const ButtonText = styled.span`
  font-family: Syncopate;
  font-size: 16px;
  letter-spacing: 0.6px;
  transform: translateY(5px);
  transition: opacity 0.5s ease;
  @media (max-width: ${device.tabletL}) {
    font-size: 14px;
    transform: translateY(1px);
  }
`;

const Button = styled(({ marginTop, ...rest }) => <button {...rest} />)`
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 35px;
  width: fit-content;
  margin-top: ${(props) => props.marginTop || "40px"};
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  &:hover {
    ${ButtonImage} {
      animation: ${showImage} 1s forwards; /* เรียกใช้ animation เมื่อ hover */
    }
    ${ButtonText} {
      animation: ${changeText} 1s forwards; /* เรียกใช้ animation เมื่อ hover */
    }
    animation: ${changeBG} 1s forwards;
  }
  @media (max-width: ${device.tabletL}) {
    padding: 12px 25px;
  }
`;

export default function ButtonUI({ text, marginTop }) {
  return (
    <DivButton>
      <Button marginTop={marginTop}>
        <ButtonImage src="/pic/btRight.png" />
        <ButtonText>{text}</ButtonText>
      </Button>
    </DivButton>
  );
}
