// Main packages
import React from "react";
// Components
import Section7Svg from "../images/Section_7.svg";
import Footer from "./Footer";
// Styles
import styled, { keyframes } from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";
import { device } from "../styles/mediaQueries";

// CSS
const Section7Style = styled.div`
  position: relative;
  background-color: var(--red);
  padding-top: 100px;

  .section7-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 250px;
    p {
      color: var(--white);
    }
    ul {
      padding: 10px 0 0 0;
      li {
        list-style: none;
        padding-top: 0px;
        a {
          padding: 0;
          text-decoration: none;
          color: var(--white);
          font-weight: bold;
        }
      }
    }
  }

  .section7-svg-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    bottom: 0px;
    right: 25%;
  }

  // Responsive style
  @media ${device.laptopL} {
    .section7-svg-wrapper {
      right: 25%;
    }
  }

  @media ${device.tablet} {
    padding-top: 80px;
    display: grid;
    justify-content: center;

    .section7-content {
      grid-template-columns: 1fr;
      padding-bottom: 0px;
    }
    .section7-svg-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      position: relative;
      bottom: auto;
      right: auto;
      max-width: 500px;
    }
  }
`;

const rotateShapes = keyframes`
  0% { transform: rotate(0deg); }
 25% { transform: rotate(90deg); }
 50% { transform: rotate(180deg); }
 75% { transform: rotate(270deg); }
 100% { transform: rotate(360deg); }
`;

const rotateShapes2 = keyframes`
  0% { transform: rotate(0deg); }
 25% { transform: rotate(-90deg); }
 50% { transform: rotate(-180deg); }
 75% { transform: rotate(-270deg); }
 100% { transform: rotate(-360deg); }
`;

const Section7SvgStyle = styled(Section7Svg)`
  vertical-align: middle;
  #Bread_3,
  #Bread_5,
  #Bread_7 {
    transform-box: fill-box;
    transform-origin: center;
    animation-name: ${rotateShapes};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.94, -0.15, 0, 1.07);
  }

  #Bread_4,
  #Bread_6,
  #Bread_8 {
    transform-box: fill-box;
    transform-origin: center;
    animation-name: ${rotateShapes2};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.94, -0.15, 0, 1.07);
  }

  // Responsive style
  @media ${device.laptopL} {
    width: 95%;
    height: 100%;
  }

  @media ${device.laptop1} {
    width: 80%;
    height: 100%;
  }

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
  }

  @media ${device.mobileL} {
    width: 80%;
    height: 100%;
  }
`;

export default function Section7() {
  AosConfig();
  return (
    <Section7Style id="section7">
      <div className="section7-content wrapper" data-aos="fade-up">
        <div>
          <p>
            Kopš 2013. gada esam piedzīvojuši daudz burvīgu mirkļu. Jo mums ir
            lieliski draugi un sadarbības partneri.
          </p>
          <ul>
            <li>
              <a href="">Disks</a>
            </li>
            <li>
              <a href="">Vislabākā latviešu dziesmu izlase</a>
            </li>
            <li>
              <a href="">Video „Še tev dālders”</a>
            </li>
            <li>
              <a href="">Animācija</a>
            </li>
            <li>
              <a href="">Kas te, es te</a>
            </li>
            <li>
              <a href="">Martas video</a>
            </li>
            <li>
              <a href="">Rīta ziņas</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section7-svg-wrapper" data-aos="fade-right">
        <Section7SvgStyle />
      </div>
      <Footer />
    </Section7Style>
  );
}
