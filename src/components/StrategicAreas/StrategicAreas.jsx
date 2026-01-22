import { useTranslation } from "react-i18next";
import "./StrategicAreas.css";

export default function StrategicAreas() {
  const { t } = useTranslation();

  return (
    <section id="areas" className="areas-section">
      <div className="areas-overlay"></div>

      <div className="areas-inner">
        <h2>{t("areas.title")}</h2>

        <div className="areas-grid">
          <div className="area-card">
            <h3>{t("areas.production")}</h3>
            <p>{t("areas.production_desc")}</p>
          </div>

          <div className="area-card">
            <h3>{t("areas.transformation")}</h3>
            <p>{t("areas.transformation_desc")}</p>
          </div>

          <div className="area-card">
            <h3>{t("areas.services")}</h3>
            <p>{t("areas.services_desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
