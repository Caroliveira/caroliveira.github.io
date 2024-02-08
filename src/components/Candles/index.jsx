import styles from "./styles.module.scss";

const Candles = () => {
  return (
    <div className={styles.candles}>
      <div className={styles.candles__first}>
        <div className={styles.candles__fire} />
        <div className={styles.candles__top}>
          <div className={styles.candles__wick} />
        </div>
        <div className={styles.candles__first__body}>
          <div className={styles.candles__head}>
            <div className={styles.candles__eyes}>
              <div className={styles.candles__eye} />
              <div className={styles.candles__eye} />
            </div>
          </div>
        </div>
        <div className={styles.candles__bottom} />
      </div>
      <div className={styles.candles__second}>
        <div className={styles.candles__top}>
          <div className={styles.candles__wick} />
        </div>
        <div className={styles.candles__second__body}>
          <div className={styles.candles__head}>
            <div className={styles.candles__eyes}>
              <div className={styles.candles__eye} />
              <div className={styles.candles__eye} />
            </div>
            <div className={styles.candles__mouth} />
          </div>
        </div>
        <div className={styles.candles__bottom} />
      </div>
      <div className={styles.candles__shadow} />
    </div>
  );
};

export default Candles;
