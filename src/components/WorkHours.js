// Main packages
import React from "react";
// Components
import WorkHoursSvg from "../images/Work_Hours.svg";
import Element2Svg from "../images/Element_2.svg";
import Element3Svg from "../images/Element_3.svg";
// Style
import styled, { keyframes } from "styled-components";

// CSS
const WorkHoursStyle = styled.div`
  position: relative;
  background-color: var(--lightgreen);
  padding: 80px 0;

  .work-hours-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 50px 0;

    p {
      color: var(--darkgreen);
    }

    .work-hours-text-1 {
      padding-right: 50px;
      ul {
        padding: 0;
        li {
          color: var(--darkgreen);
          list-style: none;
        }
      }
    }

    .work-hours-text-2 {
      padding-left: 50px;
      display: grid;
      justify-items: center;
    }
  }
`;

const person = keyframes`
  0% { transform: translateY(0); }
 50% { transform: translateY(-7px); }
 100% { transform: translateY(0); }
`;

const Element2SvgStyle = styled(Element2Svg)`
  position: absolute;
  top: 28%;
  left: 35%;
  width: 50px;
`;

const WorkHoursSvgStyle = styled(WorkHoursSvg)`
  /* width: 80%; */
  position: absolute;
  bottom: 26%;
  left: 0;

  #Person_1,
  #Person_2,
  #Person_3,
  #Head {
    animation-name: ${person};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: both;
  }
`;

const Element3SvgStyle = styled(Element3Svg)`
  width: 40px;
  padding: 40px 0;
`;

export default function WorkHours() {
  return (
    <WorkHoursStyle>
      <div className="work-hours-content wrapper">
        <div className="work-hours-text-1">
          <p>
            <span>Mūsu dārziņā visi ir personības</span> un kā tādi arī drīkst
            uzvesties. Protams, ir arī mums rāmis:
          </p>
          <ul>
            <li>Darba laiks: 7-19</li>
            <li>Brokastis 9:00 </li>
            <li>Pusdienas 12:00</li>
            <li>Launags 15:30</li>
          </ul>
          <Element2SvgStyle />
          <WorkHoursSvgStyle />
        </div>
        <div className="work-hours-text-2">
          <p>
            Bet cienām katra individuālos paradumus un pieejam lietām radoši.
            Drošība pirmajā vietā, kājas siltumā un visi laimīgi. Pilnai laimei
            daudz dzīvojamies pa āru, dažreiz esam nomūrējušies, bet vienmēr
            gatavi izteikt viedokli, meklēt, kur tas āķis, iebrist jūrā līdz
            ceļiem un izglābt pasauli. Mācāmies katrā lietā saskatīt pozitīvo,
            ieraudzīt visus ceļus un tikt galā ar bezizejām, no kurām vienmēr ir
            vismaz divas izejas. Piektdienās cepam kūkas, vasarā sējam dārzu
            savam trusim, pirmdienu rītos sēžam klēpī audzinātājām, lai viņām
            nav bēdīgi un svinam visus latviešu svētkus tā pa īstam - ar bluķa
            vilkšanu, maskošanos, siera siešanu un citām izdarībām. Dziedādami.
          </p>
          <Element3SvgStyle />
        </div>
      </div>
    </WorkHoursStyle>
  );
}
