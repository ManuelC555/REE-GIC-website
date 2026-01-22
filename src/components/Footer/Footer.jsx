import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>
            <a href="#home" className="footer-logo">
              REE – GIC
            </a>
          </h3>
          <p>{t("footer.description")}</p>
        </div>
        <div>
          <h4>{t("footer.navigation")}</h4>
          <ul>
            <li><a href="#home">{t("nav.home")}</a></li>
            <li><a href="#vision">{t("nav.vision")}</a></li>
            <li><a href="#mission">{t("nav.mission")}</a></li>
            <li><a href="#values">{t("nav.values")}</a></li>
            <li><a href="#impact">{t("nav.impact")}</a></li>
            <li><a href="#organisation">{t("nav.organization")}</a></li>
          </ul>
        </div>
        <div>
          <h4>{t("footer.contact")}</h4>
          <p>Email : contact@ree-gic.org</p>
          <p>Gonaïves, Haïti</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} REE – GIC — {t("footer.rights")}
      </div>
    </footer>
  );
}
