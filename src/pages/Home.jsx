import { useTranslation } from "react-i18next";
import HomeHero from "../components/HomeHero/HomeHero";
import AboutPreview from "../components/AboutSections/AboutSections";
import IntroSection from "../components/HomeSections/IntroSection";
import FocusCards from "../components/HomeSections/FocusCards";
import StrategicAreas from "../components/StrategicAreas/StrategicAreas";
import Members from "../components/Members/Members";
import JoinTeamSection from "../components/JoinTeamSection/JoinTeamSection";
import Footer from "../components/Footer/Footer";

import "./home.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main id="home">

      <HomeHero />
      <IntroSection /> 
      <AboutPreview />
      <StrategicAreas />
      <FocusCards />       
      <Members />
      <JoinTeamSection />
      <Footer />

    </main>
  );
}
