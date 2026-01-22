import { useTranslation } from "react-i18next";

export default function AboutDropdown() {
  const { t } = useTranslation();

  return (
    <div className="about-dropdown">
      <a href="/about#vision">{t("about.vision")}</a>
      <a href="/about#mission">{t("about.mission")}</a>
      <a href="/about#impact">{t("about.impact")}</a>
      <a href="/about#organization">{t("about.organization")}</a>
    </div>
  );
}
