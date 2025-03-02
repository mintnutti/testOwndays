"use client";
import React, { memo } from "react";
import styled from "styled-components";
import { device } from "../device";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: fit-content;
  background: url(${process.env.PUBLIC_URL}/pic/bgDesktop.png) no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  padding: 9.6% 0;
  @media (max-width: ${device.desktopM}) {
    padding: 5% 0%;
  }
  @media (max-width: ${device.desktopS}) {
    padding: 3% 0;
  }
  @media (max-width: ${device.tabletL}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: ${device.mobile}) {
    padding: 5% 0;
    background: url(${process.env.PUBLIC_URL}/pic/bg.png) no-repeat;
    background-size: cover;
  }
`;

const DivBannerLeft = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: initial;
  justify-content: end;
  align-items: center;
  @media (max-width: ${device.tabletL}) {
    justify-content: center;
    margin-bottom: 40px;
    width: 100%;
  }
`;
const DivBannerRight = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${device.tabletL}) {
    margin-bottom: 40px;
    width: 100%;
  }
`;

const ImgBanner = styled.img`
  width: 60%;
  height: auto;
  @media (max-width: ${device.desktopS}) {
    width: 50%;
  }
  @media (max-width: ${device.tabletL}) {
    width: 40%;
  }
  @media (max-width: ${device.tabletS}) {
    width: 50%;
  }
  @media (max-width: ${device.mobile}) {
    width: 250px;
  }
`;

const DivLogo = styled.div`
  width: 100%;
  hight: 264px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgLogo = styled(
  ({
    fromBottom,
    heightDesktop,
    heightDesktopM,
    heightDesktopS,
    heightMobile,
    ...rest
  }) => <img {...rest} />
)`
  width: fit-content;
  height: ${({ heightDesktop }) => (heightDesktop ? heightDesktop : "26px")};
  margin-bottom: 40px;
  @media (max-width: ${device.desktopM}) {
    height: ${({ heightDesktopM }) =>
      heightDesktopM ? heightDesktopM : "20px"};
    margin-bottom: 30px;
  }
  @media (max-width: ${device.desktopS}) {
    height: ${({ heightDesktopS }) =>
      heightDesktopS ? heightDesktopS : "15px"};
    margin-bottom: 20px;
  }
  @media (max-width: ${device.mobile}) {
    height: ${({ heightDesktopS }) =>
      heightDesktopS ? heightDesktopS : "17.93px"};
    margin-bottom: 30px;
  }
  animation: ${({ fromBottom }) => (fromBottom ? "fadeInBottom" : "fadeInTop")}
    0.8s ease-in forwards;

  @keyframes fadeInTop {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInBottom {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TextHighlight = styled.span`
  color: #ffffff;
  background-color: #000000;
  padding: 15px 10px;
  font-family: "Syncopate", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 20.82px;
  letter-spacing: 0.6px;
  display: flex;
  @media (max-width: ${device.desktopM}) {
    font-size: 18px;
    padding: 12px 8px;
  }
  @media (max-width: ${device.desktopS}) {
    font-size: 14px;
    padding: 10px 6px;
  }
  @media (max-width: ${device.tabletS}) {
    font-size: 14px;
    padding: 4px;
  }
  @media (max-width: ${device.mobile}) {
    font-size: 16px;
  }
`;

const DivScroll = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -27px;
  left: 50%;
  transform: translateX(-50%);
`;

const DivDot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Dot = styled(({ size, sizeM, bounce, ...rest }) => <div {...rest} />)`
  width: ${(props) => props.size || "6px"};
  height: ${(props) => props.size || "6px"};
  border-radius: 100%;
  background-color: #000000;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${device.desktopM}) {
    width: ${(props) => props.sizeM || "2px"};
    height: ${(props) => props.sizeM || "2px"};
  }

  animation: ${({ bounce }) => bounce === "true" && "bounce"} 1s ease-out
    forwards;

  @keyframes bounce {
    0% {
      transform: translateY(-100%);
    }
    25% {
      transform: translateY(-10px);
    }
    40% {
      transform: translateY(0px);
    }
    65% {
      transform: translateY(-5px);
    }
    80% {
      transform: translateY(0px);
    }
    90% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const TextScroll = styled.span`
  color: #000000;
  font-size: 14px;
  line-height: 14.57px;
  margin-top: 10px;
  font-family: "Syncopate";
  @media (max-width: ${device.desktopM}) {
    font-size: 12px;
    margin-top: 8px;
  }
`;

const ImgTextHighlight = styled.img`
  width: fit-content;
  height: fit-content;
  padding: 3px 5px;
`;

export default memo(function Banner() {
  return (
    <Container>
      <BannerContainer>
        <DivBannerLeft>
          <ImgBanner src={"/pic/main.png"} />
        </DivBannerLeft>
        <DivBannerRight>
          <DivLogo>
            <ImgLogo src={"/pic/logo-owndays.png"} />
            <ImgLogo
              src={"/pic/cross.png"}
              heightDesktop={"15px"}
              heightDesktopM={"12px"}
              heightDesktopS={"10px"}
            />
            <ImgLogo fromBottom={"true"} src={"/pic/logo-noritake.png"} />
            <TextHighlight>
              <div>2023 </div> <ImgTextHighlight src={"/pic/Polygon.png"} />
              <div>2024</div>
              <div>&nbsp; 期間限定 </div>
            </TextHighlight>
          </DivLogo>
        </DivBannerRight>
        <DivScroll>
          <DivDot>
            <Dot size={"6px"} sizeM={"4px"} />
            <Dot size={"10px"} sizeM={"8px"} bounce={"true"} />
            <TextScroll>SCROLL</TextScroll>
          </DivDot>
        </DivScroll>
      </BannerContainer>
    </Container>
  );
});
