import { useState } from "react";
import { Counter } from "../counter/component";

import styles from "./styles.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/selectors";

export const Dish = ({ dishId, className }) => {
  const [amount, setAmount] = useState(0);

  const dish = useSelector((state) => selectDishById(state, dishId));

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
