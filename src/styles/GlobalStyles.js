// Style
import { createGlobalStyle } from "styled-components";
import { device } from "./mediaQueries";
const GlobalStyles = createGlobalStyle`

* {
  /* border: 1px solid red; */
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
      max-width: 1160px;
      /* border: 2px solid yellow; */

    }
    
    @media ${device.laptop1} {
      max-width: 930px;
      /* border: 2px solid red; */

    }

    @media ${device.laptop2} {
      max-width: 600px;
      /* border: 2px solid blue; */
    }

    @media ${device.tablet} {
      max-width: 480px;
      /* border: 2px solid purple; */
    }

    @media ${device.mobileL} {
      max-width: 320px;
      /* border: 2px solid purple; */
    }

    @media ${device.mobileM} {
      max-width: 250px;
      /* border: 2px solid purple; */
    }

    @media ${device.mobileS} {
      max-width: 200px;
      /* border: 2px solid purple; */
    }
  }

`;

export default GlobalStyles;
