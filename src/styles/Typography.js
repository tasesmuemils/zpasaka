// Style
import { createGlobalStyle } from "styled-components";
import { device } from "./mediaQueries";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";

const Typography = createGlobalStyle`
  * {
    font-family: "Roboto";
  }

  p,li {
    font-size: 28px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 45px;
  }

  span {
    font-weight: bold;
  }

  // Responsive design
  @media ${device.laptopL} {
    p,li {
    font-size: 25px;

  }}

`;

export default Typography;
