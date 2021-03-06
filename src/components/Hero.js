// Main packages
import React from "react";
//Components
// import HeroLogo from "../images/HERO_LOGO.svg";
import HeroLogoTEST from "../images/HERO_LOGO_test.svg";
import Apples from "../images/Apples.svg";
import AosConfig from "./AosConfig";
import Navigation from "./Navigation";
// Styling
import styled, { css, keyframes } from "styled-components";
import "aos/dist/aos.css";
import { device } from "../styles/mediaQueries";

// CSS
const HEROStyle = styled.div`
  position: relative;
  background-color: var(--green);
  display: grid;
  justify-content: center;

  .hero-logo {
    /* position: relative; */
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    p {
      margin: 0;
      color: var(--fourthgreen);
      padding: 95px 0 100px 0;
    }

    p:nth-child(1) {
      padding-right: 50px;
    }

    p:nth-child(2) {
      padding-left: 50px;
    }
  }

  // Resposive style
  @media ${device.laptop1} {
    .hero-logo {
      padding-top: 0px;
    }

    .hero-text {
      p {
        margin: 0;
        color: var(--fourthgreen);
        padding: 80px 0 100px 0;
      }
    }
  }

  @media ${device.tablet} {
    .hero-logo {
      padding-top: 0px;
    }

    .hero-text {
      grid-template-columns: 1fr;
      padding: 50px 0 80px 0;
      p {
        margin: 0;
        color: var(--fourthgreen);
        padding: 0px 0 0px 0;
      }

      p:nth-child(1) {
        padding-right: 0px;
      }

      p:nth-child(2) {
        padding-left: 0px;
      }
    }
  }
`;

const ApplesId = () => {
  let ApplesIdArray = [];

  for (let z = 1; z <= 3; z++) {
    for (let i = 1; i <= 23; i++) {
      ApplesIdArray.push(`#Apples_${z}_${i} {
        opacity:0.01;
        animation: ${ApplesKeyframe.getName()} 10s 2s infinite ease;
      }`);
    }
  }

  return css`
    ${ApplesIdArray.join(" ").toString()}
  `;
};

const ApplesKeyframe = keyframes`
  0% { opacity: 0.01; transform: translateY(0px);}
  50% { opacity: 1; transform: translateY(0px);}
  100% { opacity:1; transform: translateY(700px);}
`;

const BirdAppleKeyframe = keyframes`
  0% { opacity: 0.01; transform: translateY(0px);}
  50% { opacity: 1; transform: translateY(0px);}
  51% { opacity: 0.01; transform: translateY(0px);}
  100% { opacity:0.01; transform: translateY(0px);}
`;

const BirdHeadKeyframe = keyframes`
  0% {  opacity: 1; transform: translateX(0px);}
  45% {  opacity: 1; transform: translateX(0px);}
  50% {  opacity: 1; transform: translateX(14px);}
  55% {  opacity: 1; transform: translateX(0px);}
  70% {  opacity: 1; transform: translateX(0px);}
  100% {  opacity: 1; transform: translateX(0px);}
`;

const BirdMouthKeyframe = keyframes`
  0% {  opacity: 1; transform: translateY(-10px);}
  49% {  opacity: 1; transform: translateY(-10px);}
  50% {  opacity: 1; transform: translateY(0px);}
  51% {  opacity: 1; transform: translateY(-10px);}
  70% {  opacity: 1; transform: translateY(-10px);}
  100% {  opacity: 1; transform: translateY(-10px);}
`;

const HeroLogoTESTStyle = styled(HeroLogoTEST)`
  /* width: 40%; */
  #Bird_head {
    animation: ${BirdHeadKeyframe} 10s 2s infinite ease;
  }

  #Bird_mouth {
    transform: translateY(-10px);
    animation: ${BirdMouthKeyframe} 10s 2s infinite ease;
  }

  // Resposive style
  @media ${device.laptopL} {
    /* border: 1px solid red; */
    /* padding: 50px; */
    width: 60%;
    /* height: 100%; */
  }

  @media ${device.laptopM} {
    /* border: 1px solid yellow; */
    width: 30%;
    /* height: 100%; */
  }

  @media ${device.laptop1} {
    /* border: 1px solid red; */
    width: 35%;
    height: 100%;
  }

  @media ${device.laptop2} {
    width: 50%;
    height: 100%;
  }

  @media ${device.tablet} {
    width: 80%;
    height: 100%;
  }

  @media ${device.mobileL} {
    width: 80%;
    height: 100%;
  }

  @media ${device.mobileM} {
    width: 100%;
    height: 100%;
  }
`;

const ApplesStyle = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 120px;
  position: absolute;
  display: flex;

  // Resposive style
  @media ${device.laptopL} {
    margin-bottom: 105px;
  }

  @media ${device.laptop1} {
    margin-bottom: 100px;
  }

  @media ${device.laptop2} {
    margin-bottom: 90px;
  }

  @media ${device.tablet} {
    margin-bottom: 110px;
  }

  @media ${device.mobileL} {
    margin-bottom: 75px;
  }

  @media ${device.mobileS} {
    margin-bottom: 60px;
  }
`;

const ApplesSvgStyle = styled(Apples)`
  width: 390px;
  height: 100%;
  // ApplesId works only then, when I add extra function to one of the
  ${ApplesId}

  #Apples_3_2 {
    animation: ${BirdAppleKeyframe} 10s 2s infinite ease;
  }

  #Apples_3_1 {
    animation: ${ApplesKeyframe} 10s 2s infinite ease;
  }

  // END: ApplesId works only then, when I add extra function to one of the apples
  // Resposive style

  @media ${device.laptopL} {
    width: 330px;
    height: 100%;
  }

  @media ${device.laptop1} {
    width: 310px;
    height: 100%;
  }

  @media ${device.laptop2} {
    width: 280px;
    height: 100%;
  }

  @media ${device.tablet} {
    width: 360px;
    height: 100%;
  }

  @media ${device.mobileL} {
    width: 240px;
    height: 100%;
  }

  @media ${device.mobileM} {
    width: 240px;
    height: 100%;
  }

  @media ${device.mobileS} {
    width: 190px;
    height: 100%;
  }
`;

export const Hero = () => {
  AosConfig();
  return (
    <HEROStyle>
      <Navigation />
      <div className="wrapper">
        {/*data-aos="fade-down"*/}
        <div className="hero-logo">
          <HeroLogoTESTStyle />
          <ApplesStyle>
            <ApplesSvgStyle />
          </ApplesStyle>
        </div>
        <div
          // data-aos="fade-down"
          data-aos-duration="2000"
          className="hero-text"
        >
          <p>
            <span>Zelt??beles pasaka</span> ir licenc??ts priv??tais d??rzi????, kur??
            Ka??ieru iel?? 10 a darbojas kop?? 2013. gada ar nosaukumu Zelt??bele.
          </p>
          <p>
            2021. gad?? k??uv??m par Zelt??beles pasaku un izveidoj??m fili??li Pr????u
            iel?? 81. Sa??emam visus pa??vald??bu pied??v??tos l??dzfinans??jumus.
          </p>
        </div>
      </div>
    </HEROStyle>
  );
};
