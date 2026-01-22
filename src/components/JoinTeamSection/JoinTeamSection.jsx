import { useTranslation } from "react-i18next";
import "./JoinTeamSection.css";

export default function JoinTeamSection() {
  const { t } = useTranslation();

  return (
    <section className="join-team-section">
      <div className="join-team-overlay"></div>

      <div className="join-team-content">
        <img
          src="/images/team-ht.jpg"
          alt="Investir ensemble"
          className="join-team-image"
        />

        <p className="join-team-quote">
          “{t("joinTeam.quote")}”
        </p>

        <button className="join-team-btn">
          {t("joinTeam.button")}
        </button>
      </div>
    </section>
  );
}
