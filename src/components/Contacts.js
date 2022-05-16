// Main packages
import React from "react";
// Components
import ContactsSvg from "../images/Contacts.svg";
// Style
import styled, { keyframes } from "styled-components";

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
  position: absolute;
  right: 100px;
  bottom: 20px;
  width: 30%;

  #Shape_2,
  #Shape_4 {
    transform-box: fill-box;
    transform-origin: center;
    animation-name: ${rotateShapes};
    animation-duration: 5s;
    /* animation-delay: 1s; */
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  #Shape_3,
  #Shape_5 {
    transform-box: fill-box;
    transform-origin: center;
    animation-name: ${rotateShapes2};
    animation-duration: 5s;
    /* animation-delay: 1s; */
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`;

export default function Contacts() {
  return (
    <ContactsStyle>
      <div className="contacts-content wrapper">
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
      <ContactsSvgStyle />
    </ContactsStyle>
  );
}
