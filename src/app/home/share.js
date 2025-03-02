"use client";
import React, { memo } from "react";
import styled from "styled-components";
import TitleUI from "./ui/Title";
import { device } from "../device";

const Container = styled.div`
  padding: 0px 80px;
  margin-bottom: 150px;
  @media (max-width: ${device.tabletL}) {
    padding: 0px 20px;
  }

  @media (max-width: ${device.mobile}) {
    padding: 0px 10px;
  }
`;

const DivShare = styled.div`
  width: 100%;
  height: fit-content;
  background: url(${process.env.PUBLIC_URL}/pic/bgStory.png) no-repeat;
  background-size: cover;
  position: relative;
  padding: 70px 0%;
  display: flex;
  justify-content: center;
`;

const DivShareInside = styled.div`
  width: 250px;
`;

const DivLogoShare = styled(({ displayTabletL, ...rest }) => <div {...rest} />)`
  display: ${(props) => (props.displayTabletL === "true" ? "none" : "flex")};
  justify-content: space-between;
  margin-top: 50px;
  @media (max-width: ${device.tabletL}) {
    display: ${(props) => (props.displayTabletL === "true" ? "flex" : "none")};
    // width: 52px;
    // height: 52px;
  }
`;

const ImgLogo = styled.img`
  width: 60px;
  height: 60px;
  @media (max-width: ${device.tabletL}) {
    width: 52px;
    height: 52px;
  }
`;

const DivCopyRight = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const ImgCopyRight = styled.img`
  height: 10px;
  width: auto;
`;

const DivTitle = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: ${device.tabletL}) {
    justify-content: center;
  }
`;
export default memo(function Share() {
  return (
    <Container>
      <DivShare>
        <DivShareInside>
          <DivTitle>
            <TitleUI text={"SHARE"} />
          </DivTitle>

          <DivLogoShare displayTabletL={"false"}>
            <ImgLogo src="/pic/fb.png" />
            <ImgLogo src="/pic/line.png" />
            <ImgLogo src="/pic/twitter.png" />
          </DivLogoShare>

          <DivLogoShare displayTabletL={"true"}>
            <ImgLogo src="/pic/fb-sp.svg" />
            <ImgLogo src="/pic/line-sp.svg" />
            <ImgLogo src="/pic/twitter-sp.svg" />
          </DivLogoShare>
        </DivShareInside>
      </DivShare>
      <DivCopyRight>
        <ImgCopyRight src="/pic/copyright.png" />
      </DivCopyRight>
    </Container>
  );
});
