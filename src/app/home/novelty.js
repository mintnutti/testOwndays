"use client";
import React, { memo } from "react";
import styled, { keyframes } from "styled-components";
import TitleUI from "./ui/Title";
import TextHighlightUI from "./ui/TextHighlight";
import ButtonUI from "./ui/Button";
import { device } from "../device";

const Container = styled.div`
  padding: 0px 100px;
  margin-top: 200px;
  @media (max-width: ${device.desktopS}) {
    padding: 0px 20px;
  }

  @media (max-width: ${device.mobile}) {
    padding: 0px 10px;
  }
`;

const DivDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 50px;
`;
const Title = styled.span`
  font-family: syncopate;
  font-size: 24px;
  line-height: 24.98px;
  letter-spacing: 0.6px;
  font-weight: 700;
`;
const sizeImage = keyframes`
  0% {
    height: 180px;
  
  }
  100% {
    height: 190px;
  
  }
`;

const pricrColor = keyframes`
  0% {
    color: #ffffff;
  
  }
  100% {
    color: #e7f532;
  
  }
`;

const ImgProduct = styled.img`
  height: 180px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: ${device.tabletL}) {
    height: 165px;
  }
`;
const Price = styled.div`
  width: 200px;
  height: 40px;
  color: #ffffff;
  background: #000000;
  font-family: syncopate;
  font-size: 20px;
  line-height: 20.82px;
  letter-spacing: 0.6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.5s ease;
`;

const DivCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 20px;
`;
const Card = styled.div`
  max-width: 300px;
  max-height: 377px;
  box-sizing: border-box;
  background: url(${process.env.PUBLIC_URL}/pic/bgCard.png) no-repeat;
  background-size: cover;
  text-align: -webkit-center;
  padding: 25px;
  cursor: pointer;
  &:hover {
    ${ImgProduct} {
      animation: ${sizeImage} 0.5s forwards;
    }
    ${Price} {
      animation: ${pricrColor} 0.5s forwards; /* เรียกใช้ animation เมื่อ hover */
    }
  }
  @media (max-width: ${device.tabletL}) {
    max-width: 350px !important;
    width: 350px !important;
    padding: 25px 10px;
  }
`;

const BgImg = styled.div`
  width: 250px;
  height: 142px;
  background-color: #ffffff;
  position: relative;
  margin-bottom: 30px;
  @media (max-width: ${device.tabletL}) {
    width: 310px;
  }
`;

const DateText = styled.span`
  font-family: syncopate;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.6px;
  padding-right: 5px;
`;

const DivDate = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  align-items: center;
`;

const DivNum = styled.div`
  width: 26px;
  height: 26px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 100%;
  font-family: syncopate;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

const ImgPolygonBlack = styled.img`
  width: 16px;
  height: 16px;
  inline-size: initial;
`;

const DivName = styled.div`
  width: 200px;
  display: flex;
`;

const DivCircleName = styled.div`
  width: 41px;
  height: 41px;
  background-color: #e7f532;
  border-radius: 100%;
  font-family: syncopate;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

const NameText = styled.div`
  width: 159px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const DivTitle = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: ${device.tabletL}) {
    justify-content: center;
  }
`;
export default memo(function Novelty() {
  const data = [
    {
      price: "消費不限金額",
      imgProduct: "/pic/calendar.png",
      date: "2023.12.1",
      num: "五",
      name: "年曆海報",
    },
    {
      price: "滿2,990元",
      imgProduct: "/pic/Group_221.png",
      date: "2024.1.1",
      num: "一",
      name: "眼鏡盒布組",
    },
    {
      price: "滿4,290元",
      imgProduct: "/pic/cusion.png",
      date: "2024.2.1",
      num: "四",
      name: "圓抱枕",
    },
    {
      price: "滿3,490元",
      imgProduct: "/pic/bottle.png",
      date: "2024.3.1",
      num: "五",
      name: "吸管杯",
    },
    {
      price: "滿3,490元",
      imgProduct: "/pic/1-note.png",
      date: "2024.4.1",
      num: "一",
      name: "筆記本",
    },
    {
      price: "滿3,490元",
      imgProduct: "/pic/2-bag.png",
      date: "2024.5.1",
      num: "三",
      name: "托特包",
    },
  ];
  return (
    <Container>
      <DivTitle>
        <TitleUI text={"NOVELTY"} />
      </DivTitle>
      <DivDescription>
        <Title>
          <TextHighlightUI
            text={"全門市滿額限定好禮"}
            circleQty={6}
            size={"45px"}
          />
        </Title>
      </DivDescription>
      <DivCard>
        {data.map((item, index) => (
          <Card key={index}>
            <DivDate>
              <DateText>{item.date}</DateText>
              <DivNum>{item.num}</DivNum>
              <ImgPolygonBlack src="/pic/PolygonBlack.png" />
            </DivDate>
            <BgImg>
              <ImgProduct src={item.imgProduct} />
            </BgImg>
            <DivName>
              <DivCircleName>送</DivCircleName>
              <NameText>{item.name}</NameText>
            </DivName>
            <Price>{item.price}</Price>
          </Card>
        ))}
      </DivCard>

      <ButtonUI text={"尋找附近OWNDAYS門市"} marginTop={"60px"} />
    </Container>
  );
});
