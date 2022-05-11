// Main packages
import React from "react";
// Styling
import GlobalStyles from "../styles/GlobalStyles";
// import styled from "styled-components";
import Typography from "../styles/Typography";
// Components
// import SEO from "./SEO";

// const Wrapper = styled.div`
//   display: grid;
//   position: relative;
// `;

export default function Layout({ children }) {
  return (
    <>
      {/* <SEO title={`Zeltābeles pasaka`} /> */}
      <GlobalStyles />
      <Typography />
      {children}
    </>
  );
}
