// Style
import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";

const Typography = createGlobalStyle`
  * {
    font-family: "Roboto";
  }

  p,li {
    font-size: 36px;
    font-weight: 300;
  }

`;

export default Typography;
