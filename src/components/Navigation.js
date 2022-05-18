// Main packages
import React from "react";
// Components
import LogoName from "../images/Logo_name.svg";
// Style
import styled from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";

// CSS
const NavigationStyle = styled.div`
  .navigation {
    display: grid;
    justify-content: center;
    padding-top: 10px;
    .nav-items {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      justify-content: center;
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
        flex-basis: auto;
        color: var(--fourthgreen);
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1.5px;
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
          <li className="logo-wrapper">
            <LogoNameStyle />
          </li>
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
