"use client";
import React, { memo } from "react";
import styled from "styled-components";
import TitleUI from "./ui/Title";
import { device } from "../device";
const Container = styled.div`
  padding: 0px 80px;
  margin-top: 150px;
  margin-bottom: 150px;
  @media (max-width: ${device.tabletL}) {
    padding: 0px 40px;
  }
  @media (max-width: ${device.mobile}) {
    padding: 0px 20px;
  }
`;
const DivAbout = styled.div`
  min-width: 100%;
  display: flex;
  margin-top: 40px;
  @media (max-width: ${device.tabletL}) {
    font-size: 14px;
    flex-direction: column;
  }
`;

const DivLeft = styled.div`
  min-width: 50%;
  @media (max-width: ${device.tabletL}) {
    min-width: 100%;
    text-align: center;
  }
`;
const DivRight = styled.div`
  min-width: 50%;
  @media (max-width: ${device.tabletL}) {
    min-width: 100%;
  }
`;

const DivTextRight = styled.div`
  font-family: FakePearl-light;
  line-height: 32px;
  font-size: 16px;
  padding-right: 20%;
  @media (max-width: ${device.tabletL}) {
    font-size: 14px;
    padding-right: 0%;
    padding-top: 30px;
  }
`;

const DivTextLeftFrist = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: ${device.tabletL}) {
    justify-content: center;
  }
`;

const TextName = styled.span`
  font-family: FakePearl-SemiBold;
  font-weight: 500;
  font-size: 40px;
  letter-spacing: 0.6px;
  padding-right: 20px;
  @media (max-width: ${device.tabletL}) {
    font-size: 30px;
  }
  @media (max-width: ${device.mobile}) {
    font-size: 24px;
  }
`;

const ImgHome = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: ${device.tabletL}) {
    width: 31.37px;
    height: 31.37px;
  }
`;

const Text = styled.span`
  font-family: FakePearl-light;
  line-height: 20px;
  font-size: 16px;
  padding-right: 20%;
  @media (max-width: ${device.tabletL}) {
    justify-content: center;
    padding-right: 0%;
    font-size: 14px;
  }
`;

const DivTitle = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: ${device.tabletL}) {
    justify-content: center;
  }
`;

export default memo(function About() {
  return (
    <Container>
      <DivTitle>
        <TitleUI text={"ABOUT"} />
      </DivTitle>

      <DivAbout>
        <DivLeft>
          <DivTextLeftFrist>
            <TextName>Noritake</TextName>
            <ImgHome src="/pic/home.png" />
          </DivTextLeftFrist>
          <Text>
            插畫家/設計師/藝術家 <br />
            Artist / Illustrator / Designer
          </Text>
        </DivLeft>
        <DivRight>
          <DivTextRight>
            主要以黑白單色調繪畫為主。作品廣泛應用於國內外廣告，書籍以及雜誌，時尚，壁畫等。活動範圍廣泛，包括設計以及指導等各種活動。並積極創作以插畫為主的筆記本等產品。
          </DivTextRight>
        </DivRight>
      </DivAbout>
    </Container>
  );
});
