import { useState } from "react";
import { Counter } from "../counter/component";

import styles from "./styles.module.css";
import classNames from "classnames";

export const Dish = ({ dish, className }) => {
  const [amount, setAmount] = useState(0);

  if (!dish) {
    return null;
  }

  return (
    <div className={classNames(className, styles.dish)}>
      {dish.name}, price:
      <div className={styles.price}>{dish.price * amount}</div>
      <Counter
        value={amount}
        increment={() => setAmount(amount + 1)}
        decriment={() => setAmount(amount - 1)}
        className={styles.counterPosition}
      />
    </div>
  );
};
