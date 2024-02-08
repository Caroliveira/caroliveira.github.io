import { useNavigate } from "react-router-dom";
import illustration from "/src/assets/images/lina-illustration.png";
import styles from "./styles.module.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1 className={styles.home__intro}>
          Hey there! <br />
          I&apos;m <strong>Lina Oliveira</strong>, <br />
          Front end Developer
        </h1>
        <div className={styles.home__buttons}>
          <button onClick={() => navigate("/developments")}>
            Learn more about me
          </button>
          <button onClick={() => navigate("/contact")}>Get in touch</button>
        </div>
      </div>
      <img
        alt="Illustration of Lina, a woman with olive skin tone, dark brown eyes, and curly black hair in a bob cut."
        src={illustration}
        className={styles.home__illustration}
      />
    </>
  );
};

export default Home;
