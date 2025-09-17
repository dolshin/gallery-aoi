import React from "react";
import { Section } from "../../common";
import styled from "styled-components";
import GallerySlider from "./slider/GallerySlider";
import Logo from "../../layouts/Logo";
import { md } from "../../layouts/breakpoints";

const MainVisualWrapper = styled.div`
  @media ${md.up("lg")} {
    //padding: 24,
    //margin: "70 auto ",
    //display: "flex",
    //flexDirection: "column",
    padding: 130px 0 0;
    position: relative;
    zindex: 1;
  }
  @media ${md.down("lg")} {
    position: relative;
    padding: 150px 0 0;
  }
`;
const SLogo = styled(Logo)`
  @media ${md.up("lg")} {
    display: none;
  }
  @media ${md.down("lg")} {
    position: absolute;
    top: 35px;
    left: 4%;
    margin: 0;
  }
`;
const Title = styled.h2`
  margin: 0;
  font-family: "'Montserrat Variable', sans-serif";
  font-weight: 300;
  @media ${md.up("lg")} {
    font-size: clamp(31px, 3.2vw, 50px);
    letter-spacing: 0.2em;
  }
  @media ${md.between("md", "lg")} {
    font-size: clamp(24px, 4.4vw, 36px);
    letter-spacing: 0.18em;
  }
  @media ${md.between("sm", "md")} {
    font-size: clamp(28px, 5.4vw, 41px);
    letter-spacing: 0.12em;
    line-height: 1.8;
  }
  @media ${md.down("sm")} {
    font-size: clamp(22px, 6.5vw, 48px);
    line-height: 2;
    //letter-spacing: 0.1em;
    font-weight: 300;
  }
`;
const CatchPhrase1 = styled.p`
  line-height: 2.5;
  padding: 0 0 0 10px;
  color: #000;
  @media ${md.up("lg")} {
    font-size: clamp(15px, 1.15vw, 20px);
    color: #000;
    letter-spacing: 0.18em;
    margin: 70px 0 0;
  }
  @media ${md.between("md", "lg")} {
    font-size: clamp(17px, 4vw, 18px);
    letter-spacing: 0.18em;
    margin: 70px 0 0;
    padding: 0 0 0 10px;
  }
  @media ${md.between("sm", "md")} {
    font-size: clamp(16px, 4vw, 17px);
    letter-spacing: 0.1em;
    margin: 40px 0 0;
  }
  @media ${md.down("sm")} {
    font-size: clamp(15px, 4vw, 16px);
    margin: 40px 0 0;
    letter-spacing: 0.07em;
  }
`;
const CatchPhrase2 = styled.p`
  padding: 0 0 0 10px;
  line-height: 2.5;
  color: #000;
  @media ${md.up("lg")} {
    font-size: clamp(15px, 1.15vw, 20px);
    letter-spacing: 0.18em;
    margin: 50px 0 0;
    line-height: 2.5;
  }

  @media ${md.between("md", "lg")} {
    font-size: clamp(17px, 4vw, 18px);
    margin: 50px 0 0;
    letter-spacing: 0.1em;
  }
  @media ${md.between("sm", "md")} {
    font-size: clamp(16px, 4vw, 17px);
    margin: 40px 0 0;
    letter-spacing: 0.1em;
  }
  @media ${md.down("sm")} {
    font-size: clamp(15px, 4vw, 16px);
    margin: 40px 0 0;
    letter-spacing: 0.07em;
  }
`;
const GallerySliderWrapper = styled.div`
  @media ${md.up("lg")} {
    overflow: hidden;
    margin: 90px 0 0;
  }
  @media ${md.down("lg")} {
    overflow: hidden;
    margin: 40px 0 0;
  }
`;
const MainVisual = () => {
  return (
    <Section id="Top">
      <SLogo />
      <MainVisualWrapper>
        <Title>
          あなたの作品を輝かせる空間 <br />
          ギャラリーアオイ
        </Title>
        <CatchPhrase1>
          落ち着いた空間で、
          <br />
          作品やアイデアを表現。
        </CatchPhrase1>
        <CatchPhrase2>
          絵画、書道、彫刻など様々な作品を展示いただけます。
          <br />
          また、ワークショップやパーティなど様々な用途でご利用いただけます。
        </CatchPhrase2>

        <GallerySliderWrapper>
          <GallerySlider />
        </GallerySliderWrapper>
      </MainVisualWrapper>
    </Section>
  );
};

export default MainVisual;
