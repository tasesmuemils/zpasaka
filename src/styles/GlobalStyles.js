// Style
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  /* border: 1px s olid red; */
}

  :root {
          // Define main colors
          --green: #738928;
          --lightgreen: #CDD496;
          --darkgreen: #40500E;
          --secondgreen: #A0AA46;
          --thirdgreen: #A1AC45;
          --red: #BE111F;
          --white: #ffffff;
          
  }
  .wrapper {
    width: 1341px;
    /* width: 1173px; */
    margin: 0 auto;
    /* display: grid; */
    /* justify-content: center; */
  }
`;

export default GlobalStyles;
