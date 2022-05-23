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
    opacity: 1;
    display: grid;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 35px;

    .footer-content {
      text-align: center;
      width: 200px;
      p {
        margin: 0;
        color: var(--fourthgreen);
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1.1px;
      }
    }
  }
`;

const LogoNameStyle = styled(LogoName)`
  vertical-align: middle;
  width: 100%;
`;

export default function Footer() {
  AosConfig();
  return (
    <FooterStyle>
      <div className="wrapper">
        <div className="footer-wrapper">
          <div className="footer-content">
            <div>
              <LogoNameStyle />
            </div>
            {/* <p>&#169; {new Date().getFullYear()} Zeltābeles pasaka</p>{" "} */}
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
