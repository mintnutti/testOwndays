"use client";
import React, { memo } from "react";
import styled from "styled-components";
import TitleUI from "./ui/Title";
import TextHighlightUI from "./ui/TextHighlight";
import ButtonUI from "./ui/Button";

import { device } from "../device";
const Container = styled.div`
  margin-top: 150px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const DivFrist = styled.div`
  position: relative;
  display: flex;
  max-width: 1340px;
  padding: 50px 14%;
  margin-bottom: 350px;
  @media (max-width: ${device.desktopM}) {
    padding: 30px 10%;
  }
  @media (max-width: ${device.desktopS}) {
    padding: 25px 8%;
  }
  @media (max-width: ${device.tabletL}) {
    padding: 10px 5%;
    flex-direction: column;
  }
`;

const DivFristLeft = styled.div`
  min-width: 50%;
  @media (max-width: ${device.tabletL}) {
    min-width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;
const DivFristRight = styled.div`
  min-width: 50%;
  @media (max-width: ${device.tabletL}) {
    min-width: 100%;
  }
`;

const DivImgStory = styled.div`
  position: absolute;
  display: flex;
  left: 10%;
  bottom: -200px;
  z-index: 1;
  @media (max-width: ${device.desktopM}) {
    bottom: -250px;
  }
  @media (max-width: ${device.tabletL}) {
    left: 8%;
  }
  @media (max-width: 580px) {
    left: 5%;
  }
  @media (max-width: ${device.tabletM}) {
    left: 3%;
  }
  @media (max-width: ${device.tabletS}) {
    left: 0%;
  }
`;

const ImgStoryMain = styled.div`
  height: 250px;
  width: 475px;
  background: url(${process.env.PUBLIC_URL}/pic/story.png) no-repeat;
  background-size: contain;
  position: relative;
  margin-left: 40px;
  @media (max-width: ${device.tabletL}) {
    margin-left: 15%;
    height: 250px;
    width: 400px;
  }
  @media (max-width: ${device.tabletS}) {
    width: 350px;
    margin-left: 0%;
  }
`;
const ImgStoryLeft = styled.img`
  height: fit-content;
  width: fit-content;
  position: absolute;
  bottom: 36px;
  left: -138px;
  z-index: -1;
  @media (max-width: ${device.tabletL}) {
    height: fit-content;
    width: 50%;
    bottom: 97px;
    left: -130px;
  }
  @media (max-width: ${device.tabletS}) {
    display: none;
  }
`;

const ImgStoryLineRight = styled.img`
  height: fit-content;
  width: fit-content;
  position: absolute;
  bottom: 29px;
  right: -780px;
  z-index: -1;
  @media (max-width: ${device.tabletL}) {
    height: fit-content;
    width: 200%;
    bottom: 91px;
    left: 300px;
  }
  @media (max-width: ${device.tabletS}) {
    display: none;
  }
`;
const DivSecond = styled.div`
  width: 100%;
  height: fit-content;
  background: url(${process.env.PUBLIC_URL}/pic/bgStory.png) no-repeat;
  background-size: cover;
  position: relative;
  padding: 50px 0%;
  @media (max-width: ${device.desktopM}) {
    padding: 40px 0%;
  }
`;
const DivTextSecond = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: 0% 23%;
  @media (max-width: ${device.desktopM}) {
    padding: 0% 18%;
  }
  @media (max-width: ${device.desktopS}) {
    padding: 0% 13%;
  }
  @media (max-width: ${device.tabletL}) {
    padding: 0% 7%;
  }
`;

const TextStoryFrist = styled.span`
  font-family: FakePearl-light;
  font-size: 16px;
  line-height: 32px;
  display: ruby;
  letter-spacing: 0.6px;
  margin-bottom: 20px;

  @media (max-width: ${device.tabletL}) {
    font-size: 14px;
  }
`;

const TextStorySecond = styled.span`
  font-family: FakePearl-light;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.6px;
`;

export default memo(function Stoty() {
  return (
    <Container>
      <DivFrist>
        <DivFristLeft>
          <TitleUI text="STORY" />
        </DivFristLeft>
        <DivFristRight>
          <TextStoryFrist>
            某天，喜歡
            <TextHighlightUI text="戴眼鏡" circleQty={2} />
            的兩個人，在咖啡廳相遇了。
            <p style={{ whiteSpace: "pre-line", margin: "0px" }}>
              兩個人有很多共同興趣，像是旅行、拍攝底片相機、參觀美術展覽與收集眼鏡等，同時也都擁有10副以上的眼鏡！
              很喜歡日本的文青街道，也常常相約在下北澤、吉祥寺和高圓寺等地方。
            </p>
            休假時也喜歡窩在咖啡廳裡聊天、交流情報。總是想著有一天也要去台灣跟香港，找尋屬於那個地方的文青日常。
          </TextStoryFrist>
        </DivFristRight>

        <DivImgStory>
          <ImgStoryMain>
            <ImgStoryLeft src="/pic/lineL.png" />
            <ImgStoryLineRight src="/pic/lineR.png" />
          </ImgStoryMain>
        </DivImgStory>
      </DivFrist>

      <DivSecond>
        <DivTextSecond>
          <TextStoryFrist>
            2023-2024 OWNDAYS特別邀請到日本人氣插畫藝術家 &nbsp;
            <TextHighlightUI text="『NORITAKE』" circleQty={4} />
            &nbsp;，為品牌設計出多款極簡文青贈品！
            喜愛NORITAKE的朋友們絕對不可錯過，請密切鎖定OWNDAYS官方消息！
          </TextStoryFrist>
          <TextStorySecond>
            ※ 聯名贈品限單筆消費贈送，數量有限送完為止！
          </TextStorySecond>
          <TextStorySecond>※ 台灣、香港地區限定。</TextStorySecond>
          <ButtonUI text="前往OWNDAYS官方臉書" />
        </DivTextSecond>
      </DivSecond>
    </Container>
  );
});
