import * as React from "react";
// Components
import Hero from "../components/Hero";
import Section2 from "../components/Section2";
import Branches from "../components/Branches";
import WorkHours from "../components/WorkHours";
import Contacts from "../components/Contacts";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
// Styles
import "normalize.css";

export default function IndexPage() {
  return (
    <div>
      {/*<!--  HERO SECTION -->*/}
      <Hero />
      {/*<!--  SECOND SECTION -->*/}
      <Section2 />
      {/*<!--  BRANCHES SECTION -->*/}
      <Branches />
      {/*<!--  WORK HOURS SECTION -->*/}
      <WorkHours />
      {/*<!--  CONTACTS SECTION -->*/}
      <Contacts />
      {/*<!--  SIXTH SECTION -->*/}
      <Section6 />
      {/*<!--  SEVENTH SECTION -->*/}
      <Section7 />
    </div>
  );
}
