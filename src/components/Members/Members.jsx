import { useTranslation } from "react-i18next";
import "./Members.css";

const members = [
  {
    name: "Nirva Jn Batiste",
    roleKey: "members.member",
    photo: "/members/nirva.jpg"
  },
  {
    name: "Yvel Jn Batiste",
    roleKey: "members.member",
    photo: "/members/yvel.jpg"
  },
  {
    name: "Ancy Loctamar",
    roleKey: "members.member",
    photo: "/members/ancy.jpg"
  },
  {
    name: "Sheila Jn Batiste",
    roleKey: "members.member",
    photo: "/members/sheila.jpg"
  },
  {
    name: "Lusson Renet Jr",
    roleKey: "members.member",
    photo: "/members/lusson.jpg" 
  },
  {
    name: "Philippe Louis",
    roleKey: "members.member",
    photo: "/members/philippe.jpg"
  },
  {
    name: "Marie Judith Josué",
    roleKey: "members.member",
    photo: "/members/judith.jpg"
  },
  {
    name: "Pierre Line Jean Baptiste",
    roleKey: "members.member",
    photo: "/members/pierreline.jpg"
  },
  {
    name: "Israel Joseph",
    roleKey: "members.member",
    photo: "/members/israel.jpg"
  },
  {
    name: "Jean Réné Papayé",
    roleKey: "members.member",
    photo: "/members/jeanrene.jpg"
  },
  {
    name: "Andersen De Nadal",
    roleKey: "members.member",
    photo: "/members/andersen.jpg"
  },
  {
    name: "Emmanuel Charles",
    roleKey: "members.member",
    photo: "/members/emmanuel.jpg"
  },
  {
    name: "Weston Antoine",
    roleKey: "members.member",
    photo: "/members/weston.jpg"
  }
];

export default function Members() {
  const { t } = useTranslation();

  return (
    <section id="members" className="members-section">
      <h2>{t("members.title")}</h2>

      <div className="members-grid">
        {members.map((m, index) => (
          <div key={index} className="member-card">
            <img src={m.photo} alt={m.name} />
            <h4>{m.name}</h4>
            <span>{t(m.roleKey)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
