// Main packages
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// Style
import styled from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";
import { device } from "../styles/mediaQueries";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { CgClose } from "@react-icons/all-files/cg/CgClose";

// CSS
const NavigationStyle = styled.div`
  .nav-button-open,
  .nav-button-close {
    display: none;
  }
  .navigation {
    position: relative;
    display: grid;
    padding-top: 10px;
    .nav-items {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      align-items: center;
      text-align: center;
      margin: 0;
      padding: 0;
      list-style: none;

      .logo-wrapper {
        padding: 0;
        display: flex;
        justify-content: center;
      }

      li {
        cursor: pointer;
        color: var(--fourthgreen);
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1.5px;
      }
    }
  }

  .hide {
    display: none;
  }

  // Resposive style
  @media ${device.laptop1} {
    .navigation {
      .nav-items {
        li {
          font-size: 14px;
          letter-spacing: 1px;
        }
      }
    }
  }

  @media ${device.laptop2} {
    .navigation {
      .nav-items {
        li {
          font-size: 11px;
          letter-spacing: 0.5px;
        }
      }
    }
  }

  @media ${device.tablet} {
    z-index: 10;

    button {
      cursor: pointer;
      border: none;
      background: none;
      outline: none;
      color: var(--fourthgreen);
      font-size: 25px;
    }
    .nav-button-open {
      display: block;
      /* position: absolute; */
      margin: 10px 0 0 10px;
    }
    .nav-button-close {
      display: block;
      position: absolute;
      right: 5%;
      top: 5%;
    }
    position: absolute;
    width: 100%;
    .navigation {
      display: grid;
      align-items: center;
      .nav-items {
        visibility: hidden;
        display: flex;
        flex-direction: column;
        li {
          padding: 10px 0;
          font-size: 15px;
        }
        /* grid-template-columns: repeat(1, 1fr); */
      }
    }

    .check {
      overflow-y: hidden;
      position: fixed;
      background-color: var(--green);
      width: 100%;
      height: 100%;
      z-index: 2;

      .showMenu {
        /* border: 1px solid red; */
        visibility: visible;
        background-color: var(--green);
      }
    }
  }
`;

export default function Navigation() {
  //Navigation button
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  // AOS animation
  AosConfig();
  return (
    <NavigationStyle>
      <button
        class={`${navbarOpen ? "hide" : "nav-button-open"}`}
        onClick={handleToggle}
      >
        <GiHamburgerMenu />
      </button>

      <div className={`${navbarOpen ? " check" : ""} navigation`}>
        <button
          class={`${navbarOpen ? "nav-button-close" : "hide"}`}
          onClick={handleToggle}
        >
          <CgClose />
        </button>
        <ul className={`nav-items ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              PAR MUMS
            </Link>
          </li>
          <li>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              DIVAS MĀJAS
            </Link>
          </li>
          <li>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
            >
              DARBA LAIKS
            </Link>
          </li>
          <li>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
            >
              KONTAKTI
            </Link>
          </li>
          <li>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="section6"
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
            >
              VĒRTĪBAS
            </Link>
          </li>
          <li>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="section7"
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
            >
              DRAUGI
            </Link>
          </li>
        </ul>
      </div>
    </NavigationStyle>
  );
}
