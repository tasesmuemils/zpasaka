// Main packages
import React from "react";
// Components
import Section6Svg from "../images/Section_6.svg";
import Element4Svg from "../images/Element_4.svg";
// Style
import styled, { keyframes } from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";

// CSS
const Section6Style = styled.div`
  position: relative;
  background-color: var(--thirdgreen);
  padding: 100px 0;

  .section6-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    div {
      grid-column-start: 2;
      /* grid-column-end: 5; */
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
`;

const horseBody = keyframes`
  0% { transform: translateY(0); }
 50% { transform: translateY(-8px); }
 70% { transform: translateY(0px); }
 100% { transform: translateY(0); }
`;

const bird = keyframes`
  0% { transform: translateY(0px); }
 5% { transform: translateY(-20px); }
 10% { transform: translateY(0px); }
 100% { transform: translateY(0px); }
`;

const Section6SvgStyle = styled(Section6Svg)`
  width: 90%;
  #HorseBody {
    animation-name: ${horseBody};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  #Bird {
    animation-name: ${bird};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
  }
`;

const Element4SvgStyle = styled(Element4Svg)`
  padding-top: 30px;
  path {
    fill: var(--lightgreen);
  }
`;

export default function Section6() {
  AosConfig();
  return (
    <Section6Style>
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
            <span>Koncepcija:</span> Mūsu darba viducītī ir bērniņš, kuram mēs
            palīdzam augt par drošu, zinātkāru, pašapzinīgu un atbildīgu
            personību. Cienām sevi un citus. Mācāmies spēlējoties.
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
