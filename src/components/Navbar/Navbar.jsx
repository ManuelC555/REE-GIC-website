import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-inner" ref={navRef}>
        
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <img src="/ree.jpg" alt="GIC" />
          <span>REE – GIC</span>
        </a>

        <div className="burger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li className="nav-item">
            <a href="#home" onClick={() => setOpen(false)}>
              {t("nav.home")}
            </a>
          </li>

          <li className="nav-item has-dropdown">
            <span className="nav-link">{t("nav.about")}</span>

            <div className="dropdown">
              <a href="#mission" onClick={() => setOpen(false)}>Mission</a>
              <a href="#vision" onClick={() => setOpen(false)}>Vision</a>
              <a href="#values" onClick={() => setOpen(false)}>Values</a>
              <a href="#impact" onClick={() => setOpen(false)}>Impact</a>
              <a href="#organisation" onClick={() => setOpen(false)}>Organisation</a>
            </div>
          </li>

          <li className="nav-item">
            <a href="#donate" onClick={() => setOpen(false)}>
              {t("nav.donate")}
            </a>
          </li>

          <li className="nav-lang">
            <button onClick={() => i18n.changeLanguage("fr")}>FR</button>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          </li>
        </ul>

      </div>
    </header>
  );
}
