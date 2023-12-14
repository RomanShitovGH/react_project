import classNames from "classnames";
import { Dish } from "../dish/component";

import styles from "./styles.module.css";

export const Dishes = ({ dishesIds, className }) => {
  return (
    <div className={classNames(className, styles.dishes)}>
      Menu:
      <ul>
        {dishesIds.map((dishId) => (
          <li>
            <Dish dishId={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
