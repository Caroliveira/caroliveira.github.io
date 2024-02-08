import AchievementCard from "../AchievementCard";
import bizCapital from "../../assets/images/bizCapital.jpg";
import andela from "../../assets/images/andela.jpg";
import styles from "./styles.module.scss";

const achievements = [
  {
    title: "Integration of PIX Payment System at BizCapital",
    description:
      "The most challenging project for me was the integration of Brazil's instant payment system, PIX, at BizCapital, mid its early adoption phase in the digital banking sector. This project was a significant learning curve, marking my first experience with React Native and TypeScript against a pressing deadline. The initiative required quick adaptation to these new technologies and innovative problem-solving, as there was limited precedent for such implementations in Brazil at the time.",
    img: bizCapital,
    imgAlt: "Company BizCapital logo",
  },
  {
    title: "From Initiative to Impact at Andela",
    description:
      "The most fulfilling project for me at Andela wasn't just a project, but the whole experience leading up to my promotion. Before the title made it official, I was already in deep, leading the charge on cool initiatives that changed how we did things, from coding standards to how we tackled project management and worked together. It was all about making our software better, our team stronger, and our work life more enjoyable. That promotion? It was just the cherry on top, recognizing the leadership role I'd already taken on. It's the journey and the people I shared it with that really mattered.",
    img: andela,
    imgAlt: "Company Andela logo",
  },
];

const Achievements = () => {
  return (
    <div className={styles.achievements}>
      {achievements.map((achv) => (
        <AchievementCard key={achv.title} {...achv} />
      ))}
    </div>
  );
};

export default Achievements;
