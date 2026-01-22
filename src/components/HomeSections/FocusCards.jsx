import { useTranslation } from "react-i18next";
import "./HomeSections.css";

export default function FocusCards() {
  const { t } = useTranslation();

  return (
    <section className="focus-section">
      <div className="focus-row" id="impact">
        <div className="focus-text">
          <h3>{t("home.impact.title")}</h3>
          <p>{t("home.impact.text")}</p>
        </div>
        <div className="focus-image">
          <img src="/images/impact.jpg" alt="Impact REE GIC" />
        </div>
      </div>
      <div className="focus-row reverse" id="organisation">
        <div className="focus-text">
          <h3>{t("home.organisation.title")}</h3>
          <p>{t("home.organisation.text")}</p>
        </div>
        <div className="focus-image">
          <img src="/images/organisation.jpg" alt="Organisation REE GIC" />
        </div>
      </div>

    </section>
  );
}
