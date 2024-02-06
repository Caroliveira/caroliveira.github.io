import Candles from "./Candles";
import "./Experiments.scss";

const Experiments = () => {
  return (
    <div className="experiments">
      <Candles />
      <p>
        See{" "}
        <a href="https://codepen.io/caroliveira/pen/rNOmOjb">
          Pure CSS Candles
        </a>{" "}
        on <a href="https://codepen.io">CodePen</a>.
      </p>
    </div>
  );
};

export default Experiments;
