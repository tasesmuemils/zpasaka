// Main packages
import React from "react";
// Components
import LogoName from "../images/Logo_name.svg";
// Style
import styled from "styled-components";
import { device } from "../styles/mediaQueries";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";

// CSS
const FooterStyle = styled.div`
  .footer-wrapper {
    position: absolute;
    bottom: 0;
    right: 10%;
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

  // Responsive style
  @media ${device.tablet} {
    .footer-wrapper {
      position: absolute;
      bottom: 0;
      right: 0;
      padding-bottom: 15px;
    }
  }

  @media ${device.mobileL} {
    .footer-wrapper {
      padding-bottom: 0px;
      .footer-content {
        width: 150px;
      }
    }
  }

  @media ${device.mobileM} {
    .footer-wrapper {
      .footer-content {
        width: 120px;
      }
    }
  }
`;

const LogoNameStyle = styled(LogoName)`
  vertical-align: middle;
  width: 100%;

  // Responsive style
  @media ${device.laptop1} {
    width: 80%;
  }
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
