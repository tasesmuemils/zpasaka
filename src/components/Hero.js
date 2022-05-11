// Main packages
import React from "react";
//Components
import HeroLogo from "../images/HERO_LOGO.svg";
// Styling
import styled from "styled-components";

// CSS
const HEROStyle = styled.div`
  /* * {
    border: 1px solid red;
  } */
  background-color: var(--green);
  display: grid;
  justify-content: center;
  /* padding: 120px 0; */

  .hero-logo {
    padding-top: 120px;
    display: flex;
    justify-content: center;
    svg {
      /* width: 30%; */
      height: 30%;
    }
  }

  .hero-text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    p {
      color: var(--lightgreen);
      padding: 50px 10px;
      margin: 30px 10px;
    }
  }
`;

export default function Hero() {
  return (
    <HEROStyle>
      <div className="wrapper">
        <div className="hero-logo">
          <HeroLogo />
        </div>
        <div className="hero-text">
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
