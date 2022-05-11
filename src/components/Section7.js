// Main packages
import React from "react";
// Components
import Section7Svg from "../images/Section_7.svg";
// Styles
import styled from "styled-components";

// CSS
const Section7Style = styled.div`
  position: relative;
  background-color: var(--red);
  padding: 100px 0;

  .section7-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 100px;
    p {
      color: var(--white);
    }
    ul {
      padding: 0;
      li {
        list-style: none;
        padding-top: 15px;
        a {
          text-decoration: none;
          color: var(--white);
          font-weight: bold;
        }
      }
    }
  }
`;

const Section7SvgStyle = styled(Section7Svg)`
  position: absolute;
  bottom: 0;
  right: 300px;
`;

export default function Section7() {
  return (
    <Section7Style>
      <div className="section7-content wrapper">
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

      <Section7SvgStyle />
    </Section7Style>
  );
}
