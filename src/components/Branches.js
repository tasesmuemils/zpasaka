// Main packages
import React from "react";
// Components
import BranchesSvg from "../images/Branches.svg";
// Styles
import styled from "styled-components";

// CSS
const BranchesStyle = styled.div`
  position: relative;
  background-color: var(--darkgreen);

  .branches-content {
    position: relative;
    display: grid;
    padding: 50px 70px;
    color: var(--lightgreen);

    .branches-text {
      display: flex;
      p {
        padding-right: 70px;

        span {
          font-weight: bold;
        }
      }
    }
  }
`;

const BranchesSvgStyle = styled(BranchesSvg)`
  /* position: absolute; */
  width: 100%;
  transform: translateY(-50px);
`;

export default function Branches() {
  return (
    <BranchesStyle>
      <BranchesSvgStyle />
      <div className="branches-content">
        <h2>MUMS IR DIVAS MĀJAS</h2>
        <div className="branches-text">
          <p>
            Kaņieru iela 10a, saimniece Ilona Marksa, t.27540005,
            kanieri@zepasaka.lv Kopš 2013. gada Daugavas krastā. Latviskā
            dzīvesziņa, gadskārtu ieražas, sirsnīgas tradīcijas un pārbaudītas
            vērtības. Esam lieli folkloras pētnieki un braši ārā gājēji. Nav
            sliktu laikapstākļu, ir nepiemērots apģērbs un apavi.
          </p>
          <p>
            Prūšu iela 81, saimniece Viktorija Seļuna, t.26106724,
            prusi@zepasaka.lv Kopš 2021. gada pārņemtas bijušā dārziņa Apelsīnu
            pasaka telpas. Lielo iespēju zeme ar plašām grupām, lielu āra
            teritoriju, mākslas, mūzikas, logopēdijas, smilšu lampas, keramikas,
            silto graudu kastes un citām iespējām. Mūsdienīga domāšana un
            laikmetīgas idejas visam pa priekšu.
          </p>
        </div>
      </div>
    </BranchesStyle>
  );
}
