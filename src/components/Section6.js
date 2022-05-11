// Main packages
import React from "react";
// Components
import Section6Svg from "../images/Section_6.svg";
import Element3Svg from "../images/Element_3.svg";
// Style
import styled from "styled-components";

// CSS
const Section6Style = styled.div`
  background-color: var(--thirdgreen);
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .section6-content {
    align-items: center;
    p {
      padding: 0 70px;
      color: var(--white);
      span {
        font-weight: bold;
      }
    }
  }
`;

const Section6SvgStyle = styled(Section6Svg)`
  text-align: center;
  width: 100%;
`;

const Element3SvgStyle = styled(Element3Svg)`
  padding-top: 30px;
  padding-left: 70px;
  path {
    fill: var(--lightgreen);
  }
`;

export default function Section6() {
  return (
    <Section6Style>
      <Section6SvgStyle />
      <div className="section6-content">
        <p>
          <span>Kā mēs dzīvojam?</span> Saskaņā ar sevi un dabu. Mācāmies
          ieklausīties paši sevī, citos un apkārtējās norisēs. Izbaudīt šeit un
          tagad un apzināties to, kas notiek tieši šobrīd. Klausāmies klusumu.
          Baudām mirkli un atbalstām zaļo domāšanu.
        </p>
        <p>
          <span>Koncepcija:</span> Mūsu darba viducītī ir bērniņš, kuram mēs
          palīdzam augt par drošu, zinātkāru, pašapzinīgu un atbildīgu
          personību. Cienām sevi un citus. Mācāmies spēlējoties.
        </p>
        <p>
          <span>Vērtības:</span> mēs nemērām un nesveram. Un nenosakām provi.
          Mēs mācāmies vērtību saskatīt ikkatrā vietā un lietā un ļaujam tai
          būt. Dzīvojam tā, lai pašam prieks un kaimiņam arī. Lai mūsu ieradumi
          parāda mūsu vērtības.
        </p>
        <Element3SvgStyle />
      </div>
    </Section6Style>
  );
}
