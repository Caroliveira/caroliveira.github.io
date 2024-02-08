import Candles from "../Candles";
import styles from "./styles.module.scss";

const Experiments = () => {
  return (
    <div className={styles.experiments}>
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
