import classNames from "classnames";

import styles from "./styles.module.css";
import { Button } from "../button/component";

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
      <Button onClick={decriment} disabled={value <= minValue}>
        -
      </Button>
      <div className={styles.counterValue}>{value}</div>
      <Button onClick={increment} disabled={value >= maxValue}>
        +
      </Button>
    </div>
  );
};
