// Style
import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";

const Typography = createGlobalStyle`
  * {
    font-family: "Roboto";
  }

  p,li {
    font-size: 28px;
    font-weight: 300;
  }

  span {
    font-weight: bold;
  }

`;

export default Typography;
