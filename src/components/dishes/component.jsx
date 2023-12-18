import classNames from "classnames";
import { Dish } from "../dish/component";

import styles from "./styles.module.css";

export const Dishes = ({ restaurant, className }) => {
  return (
    <div className={classNames(className, styles.dishes)}>
      Menu:
      <ul>
        {restaurant?.map((dish) => (
          <li>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
