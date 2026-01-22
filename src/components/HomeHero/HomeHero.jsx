import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./HomeHero.css";

const images = [
 "/heromembers.jpg",
  "/bg-website.jpg",
  "/hero.jpg",
  "/hero1.jpg",
  "/ree.jpg"
];

export default function HomeHero() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-hero">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className={`home-hero-bg ${i === index ? "active" : ""}`}
        />
      ))}

      <div className="home-hero-overlay" />

      <div className="home-hero-bottom-left">
        <span className="home-hero-tag">REE & GIC</span>
        <h1>{t("home.hero.title")}</h1>
        <p>{t("home.hero.subtitle")}</p>
      </div>
    </section>
  );
}

