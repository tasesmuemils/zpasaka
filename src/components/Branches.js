// Main packages
import React from "react";
// Components
import BranchesSvg from "../images/Branches.svg";
import BranchesMSvg from "../images/Branch_mobile.svg";
// Styles
import styled, { keyframes } from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";
import { device } from "../styles/mediaQueries";

// CSS
const BranchesStyle = styled.div`
  position: relative;
  background-color: var(--darkgreen);

  .branches-content {
    position: relative;
    display: grid;
    color: var(--lightgreen);
    padding-bottom: 100px;

    h2 {
      font-size: 32px;
    }

    .branches-text {
      display: grid;
      grid-template-columns: 1fr 1fr;
      div {
        p {
          padding-bottom: 20px;
        }
      }

      div:nth-child(1) {
        padding-right: 50px;
      }

      div:nth-child(2) {
        padding-left: 50px;
      }
    }
  }

  // Responsive style
  @media ${device.laptopL} {
    .branches-content {
      padding: 40px 0 80px 0;

      h2 {
        font-size: 27px;
      }

      .branches-text {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media ${device.tablet} {
    .branches-content {
      padding-bottom: 80px;

      h2 {
        font-size: 23px;
      }

      .branches-text {
        display: grid;
        grid-template-columns: 1fr;
        div {
          p {
            padding-bottom: 0px;
          }
        }

        div:nth-child(1) {
          padding-right: 0px;
        }

        div:nth-child(2) {
          padding-left: 0px;
        }
      }
    }
  }

  @media ${device.mobileL} {
    .branches-content {
      padding: 0px 0 80px 0;
    }
  }
`;

const car = keyframes`
  0% { transform: translateY(0); }
 50% { transform: translateY(2px); }
 100% { transform: translateY(0); }
`;

const BranchesSvgStyle = styled(BranchesSvg)`
  width: 100%;
  height: 100%;
  transform: translateY(-30px);

  #Car_1,
  #Car_light_1,
  #Car_2,
  #Car_light_2 {
    animation-name: ${car};
    animation-duration: 0.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: both;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const BranchesMSvgStyle = styled(BranchesMSvg)`
  display: none;

  #Car_1,
  #Car_light_1,
  #Car_2,
  #Car_light_2 {
    animation-name: ${car};
    animation-duration: 0.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: both;
  }

  @media ${device.tablet} {
    display: block;
    width: 100%;
    height: 100%;
    transform: translateY(-60px);
  }
`;

export default function Branches() {
  AosConfig();
  return (
    <BranchesStyle id="section3">
      <div data-aos="fade-down">
        <BranchesSvgStyle />
        <BranchesMSvgStyle />
      </div>
      <div className="branches-content wrapper" data-aos="fade-down">
        <h2>MUMS IR DIVAS MĀJAS</h2>
        <div className="branches-text">
          <div>
            <p>
              <span>Kaņieru iela 10a</span>, Ilona Francuzeviča, t.27540005,
              kanieri@zepasaka.lv
            </p>
            <p>
              Kopš 2013. gada Daugavas krastā. Latviskā dzīvesziņa, gadskārtu
              ieražas, sirsnīgas tradīcijas un pārbaudītas vērtības. Esam lieli
              folkloras pētnieki un braši ārā gājēji. Nav sliktu laikapstākļu,
              ir nepiemērots apģērbs un apavi.
            </p>
          </div>
          <div>
            <p>
              <span>Prūšu iela 81</span>, Diāna Samsonova, t.25561034,
              prusi@zepasaka.lv
            </p>
            <p>
              Kopš 2021. gada pārņemtas bijušā dārziņa Apelsīnu pasaka telpas.
              Lielo iespēju zeme ar plašām grupām, lielu āra teritoriju,
              mākslas, mūzikas, logopēdijas, smilšu lampas, keramikas, silto
              graudu kastes un citām iespējām. Mūsdienīga domāšana un
              laikmetīgas idejas visam pa priekšu.
            </p>
          </div>
        </div>
      </div>
    </BranchesStyle>
  );
}
