import "./Candles.scss";

const Candles = () => {
  return (
    <div className="candles">
      <div className="candles__first">
        <div className="candles__fire" />
        <div className="candles__top">
          <div className="candles__wick" />
        </div>
        <div className="candles__first__body">
          <div className="candles__head">
            <div className="candles__eyes">
              <div className="candles__eye" />
              <div className="candles__eye" />
            </div>
          </div>
        </div>
        <div className="candles__bottom" />
      </div>
      <div className="candles__second">
        <div className="candles__top">
          <div className="candles__wick" />
        </div>
        <div className="candles__second__body">
          <div className="candles__head">
            <div className="candles__eyes">
              <div className="candles__eye" />
              <div className="candles__eye" />
            </div>
            <div className="candles__mouth" />
          </div>
        </div>
        <div className="candles__bottom" />
      </div>
      <div className="candles__shadow" />
    </div>
  );
};

export default Candles;
