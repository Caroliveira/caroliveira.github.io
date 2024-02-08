import Candles from "../Candles";
import styles from "./styles.module.scss";

const Experiments = () => {
  return (
    <div className={styles.experiments}>
      <Candles />
      <a href="https://codepen.io/caroliveira/pen/rNOmOjb">Pure CSS Candles</a>
    </div>
  );
};

export default Experiments;
