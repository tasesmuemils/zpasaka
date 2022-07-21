// Main packages
import React from "react";
// Components
import Section6Svg from "../images/Section_6.svg";
import Element4Svg from "../images/Element_4.svg";
// Style
import styled, { keyframes } from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";
import { device } from "../styles/mediaQueries";

// CSS
const Section6Style = styled.div`
  overflow-x: hidden;
  position: relative;
  background-color: var(--thirdgreen);
  padding: 100px 0;

  .section6-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    div {
      grid-column-start: 2;
      p {
        color: var(--white);
      }
    }
  }

  .section6-svg-wrapper {
    position: absolute;
    top: 3%;
    left: 10%;
  }

  // Responsive style
  @media ${device.laptopL} {
    .section6-svg-wrapper {
      position: absolute;
      top: 10%;
      left: 15%;
    }
  }

  @media ${device.laptop1} {
    .section6-svg-wrapper {
      position: absolute;
      top: 11%;
      left: 12%;
    }
  }

  @media ${device.laptop2} {
    .section6-svg-wrapper {
      position: absolute;
      top: 20%;
      left: 4%;
    }
  }

  @media ${device.tablet} {
    padding: 80px 0;

    .section6-content {
      grid-template-columns: 1fr;

      div {
        grid-column-start: 0;
      }

      p:nth-child(2) {
        padding-bottom: 0%;
      }

      p:nth-child(3) {
        padding: 40% 0;
      }
    }

    .section6-svg-wrapper {
      position: absolute;
      width: 100%;
      height: 60%;
      /* display: grid; */
      /* justify-content: center; */
      top: auto;
      bottom: 5%;
      left: 0%;
    }
  }
`;

const horseEyes = keyframes`
 0% { opacity: 1 }
 10% { opacity: 1 }
 19% { opacity: 1 }
 20% { opacity: 0 }
 21% { opacity: 1 }
 30% { opacity: 1 }
 40% { opacity: 1 }
 50% { opacity: 1 }
 60% { opacity: 1 }
 80% { opacity: 1 }
 90% { opacity: 1 }
 100% { opacity: 1 }
`;

const birdEye = keyframes`
 0% { opacity: 1 }
 10% { opacity: 1 }
 20% { opacity: 1 }
 30% { opacity: 1 }
 40% { opacity: 1 }
 50% { opacity: 1 }
 57% { opacity: 1 }
 60% { opacity: 0 }
 63% { opacity: 1 }
 80% { opacity: 1 }
 90% { opacity: 1 }
 100% { opacity: 1 }
`;

const Section6SvgStyle = styled(Section6Svg)`
  width: 90%;
  height: 100%;
  #Horse_Eye_1,
  #Horse_Eye_2 {
    animation-name: ${horseEyes};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  #Bird_eye {
    animation-name: ${birdEye};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  // Responsive style
  @media ${device.laptopL} {
    width: 70%;
  }

  @media ${device.tablet} {
    /* position: absolute; */
    /* bottom: 0; */
    width: 100%;
  }
`;

const Element4SvgStyle = styled(Element4Svg)`
  padding-top: 30px;
  path {
    fill: var(--lightgreen);
  }

  @media ${device.laptop1} {
    width: 30px;
    padding-top: 10px;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export default function Section6() {
  AosConfig();
  return (
    <Section6Style id="section6">
      <div className="section6-svg-wrapper" data-aos="fade-right">
        <Section6SvgStyle />
      </div>
      <div className="section6-content wrapper" data-aos="fade-left">
        <div>
          <p>
            <span>Kā mēs dzīvojam?</span> Saskaņā ar sevi un dabu. Mācāmies
            ieklausīties paši sevī, citos un apkārtējās norisēs. Izbaudīt šeit
            un tagad un apzināties to, kas notiek tieši šobrīd. Klausāmies
            klusumu. Baudām mirkli un atbalstām zaļo domāšanu.
          </p>
          <p>
            Mūsu darba viducītī ir bērniņš, kuram mēs palīdzam augt par drošu,
            zinātkāru, pašapzinīgu un atbildīgu personību. Cienām sevi un citus.
            Mācāmies spēlējoties.
          </p>
          <p>
            <span>Vērtības:</span> mēs nemērām un nesveram. Un nenosakām provi.
            Mēs mācāmies vērtību saskatīt ikkatrā vietā un lietā un ļaujam tai
            būt. Dzīvojam tā, lai pašam prieks un kaimiņam arī. Lai mūsu
            ieradumi parāda mūsu vērtības.
          </p>
          <Element4SvgStyle />
        </div>
      </div>
    </Section6Style>
  );
}
