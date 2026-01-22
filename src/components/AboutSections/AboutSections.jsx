import { useTranslation } from "react-i18next";
import "./AboutSections.css";

export default function AboutSections() {
  const { t } = useTranslation();

  return (
    <section className="about-sections" id="about">
      <div className="about-block mission" id="mission">
        <div className="about-overlay" />

        <div className="about-inner">
          <div className="about-media">
            <div className="media-card">
              <div className="about-team">
                <img src="/team/member1.jpg" alt="" />
                <img src="/team/member2.jpg" alt="" />
                <img src="/team/member3.jpg" alt="" />
                <img src="/team/member4.jpg" alt="" />
              </div>
              <div className="quote-text">
                <p>“{t("quotes.mission.text")}”</p>
                <span>{t("quotes.mission.author")}</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <h2>{t("about.mission.title")}</h2>
            <p>{t("about.mission.text")}</p>
          </div>

        </div>
      </div>

      <div className="about-block vision" id="vision">
        <div className="about-overlay" />

        <div className="about-inner">

          <div className="about-media">
            <div className="media-card">

              <div className="about-team">
                <img src="/team/member5.jpg" alt="" />
                <img src="/team/member6.jpg" alt="" />
                <img src="/team/member7.jpg" alt="" />
                <img src="/team/member8.jpg" alt="" />
              </div>

              <div className="quote-text">
                <p>“{t("quotes.vision.text")}”</p>
                <span>{t("quotes.vision.author")}</span>
              </div>

            </div>
          </div>

          <div className="about-content">
            <h2>{t("about.vision.title")}</h2>
            <p>{t("about.vision.text")}</p>
          </div>

        </div>
      </div>

      <div className="about-block values" id="values">
        <div className="about-overlay" />

        <div className="about-inner">

          <div className="about-media">
            <div className="media-card">

              <div className="about-team">
                <img src="/team/member9.jpg" alt="" />
                <img src="/team/member10.jpg" alt="" />
                <img src="/team/member11.jpg" alt="" />
                <img src="/team/member12.jpg" alt="" />
              </div>

              <div className="quote-text">
                <p>“{t("quotes.values.text")}”</p>
                <span>{t("quotes.values.author")}</span>
              </div>

            </div>
          </div>

          <div className="about-content">
            <h2>{t("about.values.title")}</h2>
            <p>{t("about.values.text")}</p>
          </div>

        </div>
      </div>

    </section>
  );
}
