import classNames from "classnames";

import styles from "./styles.module.css";
import { useTheme } from "../theme-provider/hooks";

export const Counter = ({
  value,
  increment,
  decriment,
  minValue = 0,
  maxValue = 5,
  className = "",
}) => {
  const { buttonTheme } = useTheme();

  return (
    <div className={classNames(className, styles.counter)}>
      <button
        onClick={decriment}
        disabled={value <= minValue}
        className={classNames({
          [styles.themeTrue]: buttonTheme,
          [styles.themeFalse]: !buttonTheme,
        })}
      >
        -
      </button>
      <div className={styles.counterValue}>{value}</div>
      <button
        onClick={increment}
        disabled={value >= maxValue}
        className={classNames({
          [styles.themeTrue]: buttonTheme,
          [styles.themeFalse]: !buttonTheme,
        })}
      >
        +
      </button>
    </div>
  );
};
