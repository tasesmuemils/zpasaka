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
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

// CSS
const Section7Style = styled.div`
  position: relative;
  background-color: var(--red);
  padding-top: 100px;

  .section7-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 250px;
    /* z-index: 5; */

    .contact-intro {
      font-weight: bold;
    }
    p {
      color: var(--white);
    }
    ul {
      padding: 10px 0 0 0;
      li {
        list-style: none;
        color: var(--white);
        /* padding-top: 5px; */
        /* transform: translateY(0px); */
        /* font-weight: bold; */
      }
    }
    .social-icons {
      display: flex;
      li {
        padding: 0 10px;
        font-size: 40px;
        a {
          text-decoration: none;
          color: var(--white);
        }
      }
      li:hover {
        transform: translateY(-3px);
        transition: all 0.3s ease-in-out;
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

      .social-icons {
        li {
          font-size: 30px;
        }
      }
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

  @media ${device.mobileM} {
    .section7-content {
      .small-email {
        padding-top: 5px;
        font-size: 16px;
        font-weight: bold;
        /* letter-spacing: 1px; */
        /* word-break: normal; */
      }
    }
  }

  @media ${device.mobileS} {
    .section7-content {
      .small-email {
        font-size: 12px;
      }
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
      {/*  */}
      <div className="section7-content wrapper" data-aos="fade-up">
        <div>
          <p className="contact-intro">ZELTĀBELES PASAKA</p>
          <ul>
            <li>Kaņiera 10a, Rīga. LV-1063,</li>
            <li>Ķengarags</li>
            <li>Ilona Francuzeviča, t. 27540005</li>
            <li className="small-email">kanieri@zepasaka.lv</li>
          </ul>
          <ul>
            <li>Prūšu 81, Rīga, LV - 1057</li>
            <li>Ķengarags</li>
            <li>Diāna Samsonova, t. 25561034</li>
            <li className="small-email">prusi@zepasaka.lv</li>
          </ul>
          <ul>
            <li>Saimniece Sanita Ozoliņa - Žubule</li>
            <li>t.26545599</li>
            <li className="small-email">sanita.ozolina.zubule@gmail.com</li>
          </ul>
          <ul className="social-icons">
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/Zeltabelespasaka.Kanieri/"
                aria-label="Facebook"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/zeltabelespasaka/"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
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
