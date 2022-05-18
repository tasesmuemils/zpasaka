// Main packages
import React from "react";
// Components
import Section21svg from "../images/Section_2_1.svg";
import Section22svg from "../images/Section_2_2.svg";
import Section2svg from "../images/Section_2.svg";
import Element from "../images/Element.svg";
// Styles
import styled, { keyframes } from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";

// CSS
const Section2Style = styled.div`
  position: relative;
  background-color: var(--secondgreen);

  .section-2-text {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    padding-bottom: 100px;

    div {
      color: var(--white);
      padding: 0px 0;
    }

    div:nth-child(1) {
      padding-right: 50px;
    }

    div:nth-child(2) {
      padding-left: 50px;
    }
  }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
 100% { transform: rotate(90deg); }
`;

const jumpBall = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  12.5% { transform: translateY(-10) rotate(45deg); }
  25% { transform: translateY(-20px) rotate(90deg); }
 50% { transform: translateY(-40px) rotate(180deg); }
 75% { transform: translateY(0px) rotate(270deg); }
 100% { transform: translateY(0) rotate(360deg); }
`;

const Section2svgStyle = styled(Section2svg)`
  width: 100%;
  transform: translateY(-60px);

  #Group_3 {
    transform-box: fill-box;
    transform-origin: center;
    animation: ${jumpBall};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

const ElementStyle = styled(Element)`
  padding-top: 50px;
  path {
    fill: var(--lightgreen);
  }
`;

export default function Section2() {
  AosConfig();
  return (
    <Section2Style>
      <div data-aos="fade-up">
        <Section2svgStyle />
      </div>
      <div data-aos="fade-up" className="section-2-text wrapper">
        <div>
          <p>
            <span>Ja tu lasi šo, tad mēs jau esam satikušies.</span> Nākošais
            solis ir pieteikties uz ciemošanos. Zvani, raksti vai sūti
            telegrammu un viss notiks. Mašīnu var noparkot pie dārziņa uz ielas,
            divriteni vai ratus iestumt teritorijā, bet slotu piesliet pie
            sētas.
          </p>
          <p>
            Pie mums varēsi spēlēties, mācīties, sēdēt klēpī, domāt lielas
            domas, garšīgi paēst, izskraidīties, uzdot daudz, daudz jautājumus,
            pētīt, kur gliemezim kājas, un augt liels un gudrs.
          </p>
        </div>
        <div>
          <p>
            Lielākā daļa mūsu kolēģu ir vecumā no pusotra līdz septiņiem gadiem.
            Sākumā aicinām līdzi mammas vai tētus uz adaptācijas periodu, bet
            tos kopējā statistikā nerēķinām, jo viņi parasti ātri atbirst. Vēl
            mums ir dažas pāraugušas auklītes un audzinātājas. Laikam pārāk labi
            adaptējušās.
          </p>
          <ElementStyle />
        </div>
      </div>
    </Section2Style>
  );
}
