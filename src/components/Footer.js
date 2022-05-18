// Main packages
import React from "react";
// Components
import LogoName from "../images/Logo_name.svg";
// Style
import styled from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";

// CSS
const FooterStyle = styled.div`
  .footer-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    text-align: center;
    padding-bottom: 50px;

    p {
      margin: 0;
      color: var(--fourthgreen);
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 1.1px;
    }
  }
`;

const LogoNameStyle = styled(LogoName)`
  width: 30%;
`;

export default function Footer() {
  AosConfig();
  return (
    <FooterStyle>
      <div className="wrapper" data-aos="fade-right">
        <div className="footer-wrapper">
          <div>
            <LogoNameStyle />
            <p>&#169; {new Date().getFullYear()} Zeltābeles pasaka</p>{" "}
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
