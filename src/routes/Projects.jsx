import Candles from "../components/Candles";
import "./Projects.scss";

const Projects = () => {
  return (
    <main className="projects">
      <h1>Experiments</h1>
      <Candles />
      <p>
        See the Pen{" "}
        <a href="https://codepen.io/caroliveira/pen/rNOmOjb">
          Pure CSS Candles
        </a>{" "}
        by Caroliveira (
        <a href="https://codepen.io/caroliveira">@caroliveira</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </p>
    </main>
  );
};

export default Projects;
