import { useNavigate } from "react-router-dom";
import illustration from "/src/assets/images/lina-illustration.png";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1 className="home__intro">
          Hey there! <br />
          I&apos;m <strong>Lina Oliveira</strong>, <br />
          Front end Developer
        </h1>
        <div className="home__buttons">
          <button>Learn more about me</button>
          <button onClick={() => navigate("/contact")}>Get in touch</button>
        </div>
      </div>
      <img
        alt="Illustration of Lina, a woman with olive skin tone, dark brown eyes, and curly black hair in a bob cut."
        src={illustration}
        className="home__illustration"
      />
    </>
  );
};

export default Home;
