// Main packages
import React from "react";
// Components
import Section2svg from "../images/Section_2.svg";
import Element from "../images/Element.svg";
// Styles
import styled, { keyframes } from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";
import { device } from "../styles/mediaQueries";

// CSS
const Section2Style = styled.div`
  position: relative;
  background-color: var(--secondgreen);

  .section-2-text {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    padding: 50px 0 100px 0;

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

  // Resposive style
  @media ${device.laptop1} {
    .section-2-text {
      padding: 40px 0 80px 0;
    }
  }
`;

// const rotate = keyframes`
//   0% { transform: rotate(0deg); }
//  100% { transform: rotate(90deg); }
// `;

const bounce = keyframes`
  from  { transform: translate3d(0, -100px, 0);}
  to  { transform: translate3d(0, 0px, 0);}
`;

const Section2svgStyle = styled(Section2svg)`
  width: 100%;
  height: 100%;
  transform: translateY(-30px);

  #Group_3 {
    animation: ${bounce} 0.5s cubic-bezier(0.5, 0.05, 1, 0.5);
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  // Resposive style
  @media ${device.laptop1} {
    transform: translateY(-30px);
  }
`;

const ElementStyle = styled(Element)`
  padding-top: 50px;
  path {
    fill: var(--lightgreen);
  }

  // Resposive style
  @media ${device.laptopL} {
    padding-top: 20px;
    width: 20%;
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
