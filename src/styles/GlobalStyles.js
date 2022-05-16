// Style
import { createGlobalStyle } from "styled-components";
import { device } from "./mediaQueries";
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
          --fourthgreen: #E7EEAF;
          --red: #BE111F;
          --white: #ffffff;
          
  }
  .wrapper {
    max-width: 1341px;
    /* width: 1173px; */
    margin: 0 auto;
    /* display: grid; */
    /* justify-content: center; */
    
    @media ${device.laptopL} {
      max-width: 960px;

    }

    @media ${device.laptop} {
      max-width: 700px;
    }
  }
`;

export default GlobalStyles;
