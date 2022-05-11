// Main packages
import React from "react";
// Components
import ContactsSvg from "../images/Contacts.svg";
// Style
import styled from "styled-components";

// CSS
const ContactsStyle = styled.div`
  background-color: var(--green);
  display: flex;
  justify-content: space-between;
  padding: 70px;

  .contacts-content {
    /* padding: 0px 70px; */
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

const ContactsSvgStyle = styled(ContactsSvg)`
  width: 40%;
`;

export default function Contacts() {
  return (
    <ContactsStyle>
      <div className="contacts-content">
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
