import classNames from "classnames";

import styles from "./styles.module.css";

export const Counter = ({
  value,
  increment,
  decriment,
  minValue = 0,
  maxValue = 5,
  classNameButton = "",
}) => {
  return (
    <div className={classNames(styles.counter)}>
      <button
        onClick={decriment}
        disabled={value <= minValue}
        className={classNames(classNameButton)}
      >
        -
      </button>
      <div className={styles.counterValue}>{value}</div>
      <button
        onClick={increment}
        disabled={value >= maxValue}
        className={classNames(classNameButton)}
      >
        +
      </button>
    </div>
  );
};
