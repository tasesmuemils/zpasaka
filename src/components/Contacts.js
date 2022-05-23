// Main packages
import React from "react";
// Components
import ContactsSvg from "../images/Contacts.svg";
// Style
import styled, { keyframes } from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";
import { device } from "../styles/mediaQueries";

// CSS
const ContactsStyle = styled.div`
  position: relative;
  background-color: var(--green);
  /* display: flex; */
  padding: 100px 0;

  .contacts-content {
    /* flex-basis: auto; */
    color: var(--white);
    .contacts-text {
      ul {
        padding: 20px 0;
        li {
          list-style: none;
        }
      }
    }
  }

  .contact-svg-wrapper {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr;
    /* width: 80%; */
    right: 3%;
    top: 7%;
  }

  // Responsive style
  @media ${device.laptopL} {
    .contact-svg-wrapper {
      right: 0%;
      top: 15%;
    }
  }

  @media ${device.laptop1} {
    .contact-svg-wrapper {
      top: 20%;
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

const ContactsSvgStyle = styled(ContactsSvg)`
  flex-basis: auto;
  height: 100%;
  #Vector_2,
  #Shape_5 {
    transform-box: fill-box;
    transform-origin: center;
    animation-name: ${rotateShapes};
    animation-duration: 5s;
    /* animation-delay: 1s; */
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  #Vector_4,
  #Vector_3 {
    transform-box: fill-box;
    transform-origin: center;
    animation-name: ${rotateShapes2};
    animation-duration: 5s;
    /* animation-delay: 1s; */
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  // Responsive style
  @media ${device.laptopL} {
    width: 85%;
  }

  // Responsive style
  @media ${device.laptop1} {
    width: 75%;
  }
`;

export default function Contacts() {
  AosConfig();
  return (
    <ContactsStyle>
      <div className="contacts-content wrapper" data-aos="fade-right">
        <h2>ZELTĀBELES PASAKA</h2>
        <div className="contacts-text">
          <ul>
            <li>Kaņiera 10a, Rīga. LV-1063,</li>
            <li>Ķengarags</li>
            <li>Ilona Marksa, t. 27540005</li>
            <li>kanieri@zepasaka.lv</li>
          </ul>
          <ul>
            <li>Prūšu 81, Rīga, LV - 1057</li>
            <li>Ķengarags</li>
            <li>Viktorija Seļuna, t. 26106724</li>
            <li>Prusi@zepasaka.lv</li>
          </ul>
          <ul>
            <li>Saimniece Sanita Ozoliņa - Žubule</li>
            <li>t.26545599</li>
            <li>Info@zepasaka.lv</li>
          </ul>
        </div>
      </div>
      <div
        className="contact-svg-wrapper"
        data-aos="fade-up"
        data-aos-offset="100"
      >
        <ContactsSvgStyle />
      </div>
    </ContactsStyle>
  );
}
