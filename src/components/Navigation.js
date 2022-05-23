// Main packages
import React from "react";
// Components
import LogoName from "../images/Logo_name.svg";
// Style
import styled from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";
import { device } from "../styles/mediaQueries";

// CSS
const NavigationStyle = styled.div`
  .navigation {
    display: grid;
    padding-top: 10px;
    .nav-items {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      align-items: center;
      text-align: center;
      margin: 0;
      padding: 0;
      list-style: none;

      .logo-wrapper {
        padding: 0;
        display: flex;
        justify-content: center;
      }

      li {
        color: var(--fourthgreen);
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1.5px;
      }
    }
  }

  // Resposive style
  @media ${device.laptop1} {
    .navigation {
      .nav-items {
        li {
          font-size: 14px;
          letter-spacing: 1px;
        }
      }
    }
  }
`;

const LogoNameStyle = styled(LogoName)`
  width: 80%;
`;

export default function Navigation() {
  AosConfig();
  return (
    <NavigationStyle>
      <div className="wrapper navigation" data-aos="fade-down">
        <ul className="nav-items">
          <li>PAR MUMS</li>
          <li>DIVAS MĀJAS</li>
          <li>DARBA LAIKS</li>
          <li>KONTAKTI</li>
          <li>VĒRTĪBAS</li>
          <li>DRAUGI</li>
        </ul>
      </div>
    </NavigationStyle>
  );
}
