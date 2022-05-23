// Main packages
import React from "react";
//Components
import HeroLogo from "../images/HERO_LOGO.svg";
import AosConfig from "./AosConfig";
import Navigation from "./Navigation";
// Styling
import styled, { css, keyframes } from "styled-components";
import "aos/dist/aos.css";
import { device } from "../styles/mediaQueries";

// CSS
const HEROStyle = styled.div`
  background-color: var(--green);
  display: grid;
  justify-content: center;

  .hero-logo {
    padding-top: 80px;
    display: flex;
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
      padding-top: 50px;
    }

    .hero-text {
      p {
        margin: 0;
        color: var(--fourthgreen);
        padding: 80px 0 100px 0;
      }
    }
  }
`;

const ApplesId = () => {
  let ApplesIdArray = [];

  for (let z = 1; z <= 3; z++) {
    for (let i = 1; i <= 23; i++) {
      ApplesIdArray.push(`#Apples_${z}_${i} {
        opacity:0;
        animation: ${ApplesKeyframe.getName()} 10s 2s infinite ease;
      }`);
    }
  }

  console.log(ApplesIdArray.join(" ").toString());
  return css`
    ${ApplesIdArray.join(" ").toString()}
  `;
};

const ApplesKeyframe = keyframes`
  0% { opacity: 0; transform: translateY(0px);}
  50% { opacity: 1; transform: translateY(0px);}
  100% { opacity:1; transform: translateY(700px);}
`;

const BirdKeyframe = keyframes`
  0% {  opacity: 1; transform: translate3d(0, 0px ,0);}
  45% {  opacity: 1; transform: translate3d(0, 0px ,0);}
  50% {  opacity: 1; transform: translate3d(10px, -10px ,0);}
  55% {  opacity: 1; transform: translate3d(0px, 0px ,0);}
  70% {  opacity: 1; transform: translate3d(0px, 0px ,0);}
  100% {  opacity: 1; transform: translate3d(0px, 0px ,0);}
`;

const HeroLogoStyle = styled(HeroLogo)`
  #Bird_logo {
    animation: ${BirdKeyframe} 10s 2s infinite ease;
  }

  // ApplesId works only then, when I add extra function to one of the
  ${ApplesId}

  #Apples_3_13 {
    animation: ${ApplesKeyframe} 10s 2s infinite ease;
  }

  // END: ApplesId works only then, when I add extra function to one of the apples

  // Resposive style
  @media ${device.laptop1} {
    width: 40%;
    height: 100%;
  }
`;

export default function Hero() {
  AosConfig();
  return (
    <HEROStyle>
      <div className="wrapper">
        <Navigation />
        <div className="hero-logo" data-aos="fade-down">
          <HeroLogoStyle />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="hero-text"
        >
          <p>
            <span>Zeltābeles pasaka</span> ir licencēts privātais dārziņš, kurš
            Kaņieru ielā 10 a darbojas kopš 2013. gada ar nosaukumu Zeltābele.
          </p>
          <p>
            2021. gadā kļuvām par Zeltābeles pasaku un izveidojām filiāli Prūšu
            ielā 81. Saņemam visus pašvaldību piedāvātos līdzfinansējumus.
          </p>
        </div>
      </div>
    </HEROStyle>
  );
}
