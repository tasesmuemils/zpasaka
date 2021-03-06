// Main packages
import React from "react";
// Components
import WorkHoursSvg from "../images/Work_Hours.svg";
import Element2Svg from "../images/Element_2.svg";
import Element3Svg from "../images/Element_3.svg";
// Style
import styled, { keyframes } from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";
import { device } from "../styles/mediaQueries";

// CSS
const WorkHoursStyle = styled.div`
  position: relative;
  overflow-x: hidden;
  background-color: var(--lightgreen);
  padding: 80px 0;

  .work-hours-content {
    z-index: 3;
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
      overflow-x: hidden;
      padding-left: 50px;
      display: grid;
      justify-items: center;
    }
  }
  .svg-wrapper {
    position: absolute;
    bottom: 20%;
    left: 0;
  }

  // Responsive styles
  @media ${device.laptop1} {
    padding: 40px 0;

    .work-hours-content {
      padding: 50px 0;
    }
    .svg-wrapper {
      bottom: 22%;
    }
  }

  @media ${device.laptop2} {
    .svg-wrapper {
      bottom: 50%;
    }
  }

  @media ${device.tablet} {
    padding: 50px 0 30px 0;

    .work-hours-content {
      grid-template-columns: repeat(1, 1fr);
      padding: 0px 0;

      .work-hours-text-1 {
        padding-right: 0px;
        padding-bottom: 200px;
      }

      .work-hours-text-2 {
        justify-items: end;
        padding-left: 0px;
        padding-top: 50px;
        p {
          margin: 0;
        }
      }
    }
    .svg-wrapper {
      position: absolute;
      /* top: 15%; */
      margin: 0px 0;
      display: flex;
      justify-content: center;
    }
  }

  @media ${device.mobileL} {
    .work-hours-content {
      .work-hours-text-2 {
        padding-top: 0px;
      }
    }

    .svg-wrapper {
      bottom: 60%;
    }
  }

  @media ${device.mobileM} {
    .svg-wrapper {
      bottom: 66%;
    }
  }

  @media ${device.mobileS} {
    .work-hours-content {
      .work-hours-text-1 {
        padding-bottom: 150px;
      }
    }

    .svg-wrapper {
      bottom: 70%;
    }
  }
`;

const person = keyframes`
  0% { transform: translateY(0); }
 50% { transform: translateY(-7px); }
 100% { transform: translateY(0); }
`;

const person1 = keyframes`
 0% { transform: translateY(0); }
 10% { transform: translateY(0); }
 20% { transform: translateY(0); }
 30% { transform: translateY(-20px); }
 40% { transform: translateY(-20px); }
 50% { transform: translateY(5px); }
 60% { transform: translateY(0); }
 70% { transform: translateY(0); }
 80% { transform: translateY(0); }
 90% { transform: translateY(0); }
 100% { transform: translateY(0); }
`;
const person2 = keyframes`
 0% { transform: translateY(0); }
 10% { transform: translateY(0); }
 20% { transform: translateY(-20px); }
 30% { transform: translateY(-20px); }
 40% { transform: translateY(5px); }
 50% { transform: translateY(0); }
 60% { transform: translateY(0); }
 70% { transform: translateY(0); }
 80% { transform: translateY(0); }
 90% { transform: translateY(0); }
 100% { transform: translateY(0); }
`;
const person3 = keyframes`
 0% { transform: translateY(0); }
 10% { transform: translateY(-20px); }
 20% { transform: translateY(-20px); }
 30% { transform: translateY(5px); }
 40% { transform: translateY(0); }
 50% { transform: translateY(0); }
 60% { transform: translateY(0); }
 70% { transform: translateY(0); }
 80% { transform: translateY(0); }
 90% { transform: translateY(0); }
 100% { transform: translateY(0); }
`;

const Element2SvgStyle = styled(Element2Svg)`
  position: absolute;
  top: 20%;
  left: 67%;
  width: 50px;

  // Responsive style
  @media ${device.laptop1} {
    width: 35px;
  }

  @media ${device.laptop1} {
    top: 13%;
    left: 80%;
  }

  @media ${device.tablet} {
    left: 80%;
  }

  @media ${device.mobileL} {
    top: 25%;
    left: 80%;
  }
`;

const WorkHoursSvgStyle = styled(WorkHoursSvg)`
  width: 100%;
  height: 100%;

  #Head {
    animation-name: ${person};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }

  #Person_1 {
    animation-name: ${person1};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }

  #Person_2 {
    animation-name: ${person2};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }

  #Person_3 {
    animation-name: ${person3};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }

  // Responsive style
  @media ${device.laptopL} {
    width: 85%;
  }

  @media ${device.laptop1} {
    width: 73%;
  }

  @media ${device.laptop2} {
    width: 50%;
  }

  @media ${device.tablet} {
    width: 70%;
  }

  @media ${device.mobileL} {
    width: 90%;
  }

  @media ${device.mobileS} {
    width: 100%;
  }
`;

const Element3SvgStyle = styled(Element3Svg)`
  width: 40px;
  padding: 40px 0;

  @media ${device.laptop1} {
    width: 35px;
    padding: 20px 0;
  }

  @media ${device.tablet} {
    width: 30px;
    padding: 0px 100px 20px 0px;
  }
`;

export default function WorkHours() {
  AosConfig();
  return (
    <WorkHoursStyle id="section4">
      <div className="work-hours-content wrapper">
        <div className="work-hours-text-1" data-aos="fade-right">
          <p>
            <span>M??su d??rzi???? visi ir person??bas</span> un k?? t??di ar?? dr??kst
            uzvesties. Protams, ir ar?? mums r??mis:
          </p>
          <ul>
            <li>Darba laiks: 7-19</li>
            <li>Brokastis 9:00 </li>
            <li>Pusdienas 12:00</li>
            <li>Launags 15:30</li>
          </ul>
          <Element2SvgStyle data-aos="fade-right" />
        </div>
        <div className="work-hours-text-2" data-aos="fade-left">
          <p>
            Bet cien??m katra individu??los paradumus un pieejam liet??m rado??i.
            Dro????ba pirmaj?? viet??, k??jas siltum?? un visi laim??gi. Pilnai laimei
            daudz dz??vojamies pa ??ru, da??reiz esam nom??r??ju??ies, bet vienm??r
            gatavi izteikt viedokli, mekl??t, kur tas ????is, iebrist j??r?? l??dz
            ce??iem un izgl??bt pasauli. M??c??mies katr?? liet?? saskat??t pozit??vo,
            ieraudz??t visus ce??us un tikt gal?? ar bezizej??m, no kur??m vienm??r ir
            vismaz divas izejas. Piektdien??s cepam k??kas, vasar?? s??jam d??rzu
            savam trusim, pirmdienu r??tos s????am kl??p?? audzin??t??j??m, lai vi????m
            nav b??d??gi un svinam visus latvie??u sv??tkus t?? pa ??stam - ar blu??a
            vilk??anu, masko??anos, siera sie??anu un cit??m izdar??b??m. Dzied??dami.
          </p>
          <Element3SvgStyle />
        </div>
      </div>
      <div className="svg-wrapper" data-aos="fade-right">
        <WorkHoursSvgStyle />
      </div>
    </WorkHoursStyle>
  );
}
