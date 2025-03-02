"use client";

import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { device } from "../device";

const Container = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 10px 50px;
  @media (max-width: ${device.tabletL}) {
    padding: 10px 30px;
  }
  @media (max-width: ${device.tabletS}) {
    padding: 10px 10px;
  }
`;

const Banner = dynamic(() => import("./banner"), {
  ssr: false, // ปิดการทำงาน SSR สำหรับ component นี้
});

const Stoty = dynamic(() => import("./story"), {
  ssr: false, // ปิดการทำงาน SSR สำหรับ component นี้
});

const Novelty = dynamic(() => import("./novelty"), {
  ssr: false, // ปิดการทำงาน SSR สำหรับ component นี้
});

const About = dynamic(() => import("./about"), {
  ssr: false, // ปิดการทำงาน SSR สำหรับ component นี้
});

const Share = dynamic(() => import("./share"), {
  ssr: false, // ปิดการทำงาน SSR สำหรับ component นี้
});
export default function HomePage() {
  return (
    <Container>
      <Banner />
      <Stoty />
      <Novelty />
      <About />
      <Share />
    </Container>
  );
}
