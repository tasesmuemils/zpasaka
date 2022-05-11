// Main packages
import React from "react";
// Components
import Section21svg from "../images/Section_2_1.svg";
import Section22svg from "../images/Section_2_2.svg";
import Element from "../images/Element.svg";
// Styles
import styled from "styled-components";

// CSS
const Section2Style = styled.div`
  position: relative;
  background-color: var(--secondgreen);

  .section2SVGs {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .section-2-text {
    position: relative;
    display: flex;
    padding-bottom: 100px;

    p {
      color: var(--white);
      padding: 50px 50px;
    }
  }
`;

const Section21svgStyle = styled(Section21svg)`
  width: 45%;
`;

const Section22svgStyle = styled(Section22svg)`
  padding-top: 9rem;
  width: 45%;
`;

const ElementStyle = styled(Element)`
  padding-left: 50px;

  path {
    fill: var(--lightgreen);
  }
`;

export default function Section2() {
  return (
    <Section2Style>
      <div className="section2SVGs">
        <Section21svgStyle />
        <Section22svgStyle />
      </div>
      <div className="section-2-text wrapper">
        <p>
          <span>Ja tu lasi šo, tad mēs jau esam satikušies.</span> Nākošais
          solis ir pieteikties uz ciemošanos. Zvani, raksti vai sūti telegrammu
          un viss notiks. Mašīnu var noparkot pie dārziņa uz ielas, divriteni
          vai ratus iestumt teritorijā, bet slotu piesliet pie sētas.
          <br />
          <br />
          Pie mums varēsi spēlēties, mācīties, sēdēt klēpī, domāt lielas domas,
          garšīgi paēst, izskraidīties, uzdot daudz, daudz jautājumus, pētīt,
          kur gliemezim kājas, un augt liels un gudrs.
        </p>
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
