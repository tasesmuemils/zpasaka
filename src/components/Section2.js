// Main packages
import React from "react";
// Components
import Section2svg from "../images/Section_2.svg";
import Section2Msvg from "../images/Section_2_mobile.svg";
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

  // Resposive style
  @media ${device.tablet} {
    .section-2-text {
      grid-template-columns: 1fr;
      padding: 0px 0 80px 0;

      div {
        color: var(--white);
        padding: 0px 0;
      }

      div:nth-child(1) {
        padding-right: 0px;
      }

      div:nth-child(2) {
        padding-left: 0px;
      }
    }
  }
`;

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

  @media ${device.tablet} {
    display: none;
  }
`;

const Section2MsvgStyle = styled(Section2Msvg)`
  display: none;
  #Group_3 {
    animation: ${bounce} 0.5s cubic-bezier(0.5, 0.05, 1, 0.5);
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  // Resposive style
  @media ${device.laptop1} {
    transform: translateY(-30px);
  }

  @media ${device.tablet} {
    display: block;
    width: 100%;
    height: 100%;
    transform: translateY(-30px);
  }

  @media ${device.mobileL} {
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

  @media ${device.tablet} {
    display: none;
  }
`;

export default function Section2() {
  AosConfig();
  return (
    <Section2Style id="section2">
      <div data-aos="fade-up">
        <Section2svgStyle />
        <Section2MsvgStyle />
      </div>
      <div data-aos="fade-up" className="section-2-text wrapper">
        <div>
          <p>
            <span>Ja tu lasi ??o, tad m??s jau esam satiku??ies.</span> N??ko??ais
            solis ir pieteikties uz ciemo??anos. Zvani, raksti vai s??ti
            telegrammu un viss notiks. Ma????nu var noparkot pie d??rzi??a uz ielas,
            divriteni vai ratus iestumt teritorij??, bet slotu piesliet pie
            s??tas.
          </p>
          <p>
            Pie mums var??si sp??l??ties, m??c??ties, s??d??t kl??p??, dom??t lielas
            domas, gar????gi pa??st, izskraid??ties, uzdot daudz, daudz jaut??jumus,
            p??t??t, kur gliemezim k??jas, un augt liels un gudrs.
          </p>
        </div>
        <div>
          <p>
            Liel??k?? da??a m??su kol????u ir vecum?? no pusotra l??dz septi??iem gadiem.
            S??kum?? aicin??m l??dzi mammas vai t??tus uz adapt??cijas periodu, bet
            tos kop??j?? statistik?? ner????in??m, jo vi??i parasti ??tri atbirst. V??l
            mums ir da??as p??raugu??as aukl??tes un audzin??t??jas. Laikam p??r??k labi
            adapt??ju????s.
          </p>
          <ElementStyle />
        </div>
      </div>
    </Section2Style>
  );
}
