import { useTranslation } from "react-i18next";
import "./HomeSections.css";

export default function IntroSection() {
  const { t } = useTranslation();

  return (
    <section className="intro-section" id="home">
      <h2>{t("home.intro.title")}</h2>
      <p>{t("home.intro.text")}</p>
    </section>
  );
}
