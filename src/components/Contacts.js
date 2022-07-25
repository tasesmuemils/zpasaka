// Main packages
import React from "react";
// Components
import ContactsSvg from "../images/Contacts.svg";
// Style
import styled, { keyframes } from "styled-components";
import "aos/dist/aos.css";
import AosConfig from "./AosConfig";
import { device } from "../styles/mediaQueries";

// CSS
const ContactsStyle = styled.div`
  position: relative;
  background-color: var(--green);
  padding: 100px 0;

  .contacts-content {
    color: var(--white);
    .contacts-text {
      ul {
        padding: 20px 0;
        width: 45%;
        li {
          list-style: none;
          padding-top: 5px;
          transform: translateY(0px);
          font-weight: bold;
          padding: 30px 0;
          a {
            padding: 5px 0;
            text-decoration: none;
            color: var(--white);
            font-weight: bold;
          }
        }
        .link-wrapper {
          width: fit-content;
          padding-bottom: 10px;
        }
        .link-wrapper:hover {
          transform: translateY(-3px);
          transition: all 0.3s ease-in-out;
        }
        .link-description {
          p {
            margin: 0;
          }
        }
      }
    }
  }

  .contact-svg-wrapper {
    position: absolute;
    display: grid;
    /* width: 80%; */
    right: 3%;
    top: 30%;
  }

  // Responsive style
  @media ${device.laptopL} {
    padding: 100px 0 100px;
    .contact-svg-wrapper {
      right: 0%;
      top: 30%;
    }
  }

  @media ${device.laptop1} {
    padding: 100px 0 150px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .contacts-content {
      padding-left: 20px;
      padding-bottom: 20px;
      .contacts-text {
        ul {
          width: 80%;
        }
      }
    }

    .contact-svg-wrapper {
      position: relative;
      right: 3%;
      top: auto;
    }
  }

  @media ${device.tablet} {
    padding: 80px 0;
    grid-template-columns: repeat(1, 1fr);

    .contacts-content {
      .contacts-content-tablet {
        padding: 0 0px 0 0;
        .contacts-text {
          text-align: left;
          ul {
            width: auto;
            padding: 10px 0;
          }
        }
      }
    }

    .contact-svg-wrapper {
      position: relative;
      display: grid;
      grid-template-columns: 1fr;
      right: 0%;
      top: 0%;
      max-width: 500px;
      margin: 0 auto;
      padding: 50px 20px;
    }
  }

  @media ${device.mobileL} {
    padding: 60px 0;
    .contacts-content {
      .contacts-content-tablet {
        padding: 0 0px 0 0;
      }
    }

    .contact-svg-wrapper {
      padding: 20px 20px;
    }
  }
`;

const rotateShapes = keyframes`
  0% { transform: rotate(0deg); }
 25% { transform: rotate(90deg); }
 50% { transform: rotate(180deg); }
 75% { transform: rotate(270deg); }
 100% { transform: rotate(360deg); }
`;

const rotateShapes2 = keyframes`
  0% { transform: rotate(0deg); }
 25% { transform: rotate(-90deg); }
 50% { transform: rotate(-180deg); }
 75% { transform: rotate(-270deg); }
 100% { transform: rotate(-360deg); }
`;

const ContactsSvgStyle = styled(ContactsSvg)`
  height: 100%;
  #Vector_2,
  #Shape_5 {
    transform-box: fill-box;
    transform-origin: center;
    animation-name: ${rotateShapes};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  #Vector_4,
  #Vector_3 {
    transform-box: fill-box;
    transform-origin: center;
    animation-name: ${rotateShapes2};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  // Responsive style
  @media ${device.laptopL} {
    width: 85%;
  }

  @media ${device.laptop1} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;

export default function Contacts() {
  AosConfig();
  return (
    <ContactsStyle id="section5">
      <div className="contacts-content wrapper" data-aos="fade-right">
        <div className="contacts-content-tablet">
          <p>
            Kopš 2013. gada esam piedzīvojuši daudz burvīgu mirkļu.
            <br />
            Jo mums ir lieliski draugi un sadarbības partneri.
          </p>
          <div className="contacts-text">
            <ul>
              <li>
                <div className="link-wrapper">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/channel/UCyrPpiDtk1zg4M1ZsJrK1SA"
                  >
                    Disks
                  </a>
                </div>
                <div className="link-description">
                  <p>
                    2018. gadā, satikāmies ar komponistu Jāni Ķirsi un nolēmām
                    ierakstīt mūzikas albumu. Visu gribējām darīt paši. No
                    savas, bērnu un vecāku bērnības savācām skaitāmpantiņus,
                    kuriem Jānis sakomponēja mūziku. Mācījāmies dziesmas,
                    braucām uz studiju - pirmo reizi mūžā. Kopā ar mums ar lielu
                    prieku dziedāja Rūta Dūduma, Raimonds Bramanis, Eremijs
                    Sējāns. Un tapa lieliskas 14 dziesmas ar instrumentālajiem
                    pavadījumiem. Tajā pašā gadā kļuvām par mūzikas ierakstu
                    gada balvas Zelta Mikrofons laureātiem.{" "}
                  </p>
                </div>
              </li>
              <li>
                <div className="link-wrapper">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=k2DpcvO8RLI"
                  >
                    Vislabākā latviešu dziesmu izlase
                  </a>
                </div>

                <div className="link-description">
                  <p>
                    Ar savām dziesmām iekļuvām Vislabāko latviešu dziesmu
                    izlasē.
                  </p>
                </div>
              </li>
              <li>
                <div className="link-wrapper">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=b2rJt8YsCbY"
                  >
                    Video „Še tev dālders”
                  </a>
                </div>
                <div className="link-description">
                  <p>
                    Pašiem dziedāšana un darbošanās patika tik ļoti, ka dziesmai
                    "Še tev dālders" tapa video.
                  </p>
                </div>
              </li>
              <li>
                <div className="link-wrapper">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=OQXN1QlqrJY"
                  >
                    Animācija
                  </a>
                </div>
                <div className="link-description">
                  <p>
                    Pateicoties atbalstam no ZAB Glimstedt un partneri,
                    mākslinieks Krišs Salmanis palīdzēja mums izveidot animāciju
                    dziesmai "Jājam, jājam mēs ar zirgu".
                  </p>
                </div>
              </li>
              <li>
                <div className="link-wrapper">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/1455396878058055/posts/1795233450741061/"
                  >
                    Kas te, es te
                  </a>
                </div>
                <div className="link-description">
                  <p>Piedalījāmies raidījumā "Kas te, es te".</p>
                </div>
              </li>
              {/* <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=b2rJt8YsCbY"
                >
                  Martas video
                </a>
              </li> */}
              <li>
                <div className="link-wrapper">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://replay.lsm.lv/lv/ieraksts/ltv/113692/bernu-muzikas-albums-zeltabele"
                  >
                    Rīta ziņas
                  </a>
                </div>
                <div className="link-description">
                  <p>Mūsu dziedāšanas prieks izskanēja arī televīzijā</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="contact-svg-wrapper"
        data-aos="fade-up"
        data-aos-offset="100"
      >
        <ContactsSvgStyle />
      </div>
    </ContactsStyle>
  );
}
