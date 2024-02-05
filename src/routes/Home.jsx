import illustration from "/src/assets/lina-illustration.png";
import "./Home.scss";

const Home = () => {
  return (
    <main>
      <h1 className="home__intro">
        Hey there! <br />
        I&apos;m <strong>Lina Oliveira</strong>, <br />
        Front end Developer
      </h1>
      <img
        alt="Illustration of Lina, a woman with olive skin tone, dark brown eyes, and curly black hair in a bob cut."
        src={illustration}
        className="home__illustration"
      />
    </main>
  );
};

export default Home;
