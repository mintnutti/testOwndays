"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  useEffect(() => {
    if (pathname === "/") {
      router.push("/home");
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Syncopate&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            @font-face {
              font-family: "FakePearl-Regular";
              src: url("/fonts/FakePearl-Regular.woff2") format("woff2"),
                   url("/fonts/FakePearl-Regular.woff") format("woff"),
                   url("/fonts/FakePearl-Regular.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
            }
              @font-face {
              font-family: "FakePearl-ExtraLight";
              src: url("/fonts/FakePearl-ExtraLight.woff2") format("woff2"),
                   url("/fonts/FakePearl-ExtraLight.woff") format("woff"),
                   url("/fonts/FakePearl-ExtraLight.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
            }
               @font-face {
              font-family: "FakePearl-Light";
              src: url("/fonts/FakePearl-Light.woff2") format("woff2"),
                   url("/fonts/FakePearl-Light.woff") format("woff"),
                   url("/fonts/FakePearl-Light.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
            }
              @font-face {
              font-family: "FakePearl-Medium";
              src: url("/fonts/FakePearl-Medium.woff2") format("woff2"),
                   url("/fonts/FakePearl-Medium.woff") format("woff"),
                   url("/fonts/FakePearl-Medium.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
            }
              @font-face {
              font-family: "FakePearl-SemiBold";
              src: url("/fonts/FakePearl-SemiBold.woff2") format("woff2"),
                   url("/fonts/FakePearl-SemiBold.woff") format("woff"),
                   url("/fonts/FakePearl-SemiBold.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
            }
              body {
              margin: 0;
              padding: 0;
            }
          `}
        </style>
      </head>

      <body>
        <ThemeProvider theme={theme}>
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
