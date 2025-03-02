"use client";

import styled from "styled-components";
import { device } from "../../device";

const Title = styled.span`
  font-family: syncopate;
  font-size: 40px;
  line-height: 41.64px;
  letter-spacing: 0.6px;
  @media (max-width: ${device.tabletS}) {
    font-size: 30px;
  }
`;

export default function TitleUI({ text }) {
  return <Title>{text}</Title>;
}
