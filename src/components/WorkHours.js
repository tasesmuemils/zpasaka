// Main packages
import React from "react";
// Components
import WorkHoursSvg from "../images/Work_Hours.svg";
import Element2Svg from "../images/Element_2.svg";
import Element3Svg from "../images/Element_3.svg";
// Style
import styled from "styled-components";

// CSS
const WorkHoursStyle = styled.div`
  position: relative;
  background-color: var(--lightgreen);
  padding: 50px 0;

  .work-hours-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 50px 0;

    p {
      color: var(--darkgreen);
      span {
        font-weight: bold;
      }
    }

    .work-hours-text-1 {
      padding: 0 70px;
      ul {
        padding: 0;
        li {
          color: var(--darkgreen);
          list-style: none;
        }
      }
    }

    .work-hours-text-2 {
      padding: 0 70px;
      display: grid;
      justify-items: center;
    }
  }
`;

const Element2SvgStyle = styled(Element2Svg)`
  position: absolute;
  top: 30%;
  left: 32%;
  width: 60px;
  /* height: 10%; */
`;

const WorkHoursSvgStyle = styled(WorkHoursSvg)`
  width: 80%;
`;

const Element3SvgStyle = styled(Element3Svg)`
  width: 40px;
  padding: 40px 0;
`;

export default function WorkHours() {
  return (
    <WorkHoursStyle>
      <div className="work-hours-content">
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
