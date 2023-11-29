import classNames from "classnames";

import styles from "./styles.module.css";

export const Counter = ({
  value,
  increment,
  decriment,
  minValue = 0,
  maxValue = 5,
  className = "",
}) => {
  return (
    <div className={classNames(className, styles.counter)}>
      <button onClick={decriment} disabled={value <= minValue}>
        -
      </button>
      <div className={styles.counterValue}>{value}</div>
      <button onClick={increment} disabled={value >= maxValue}>
        +
      </button>
    </div>
  );
};
