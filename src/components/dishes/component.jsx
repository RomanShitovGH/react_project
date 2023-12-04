import classNames from "classnames";
import { Dish } from "../dish/component";

import styles from "./styles.module.css";

export const Dishes = ({ menu, className }) => {
  return (
    <div className={classNames(className, styles.dishes)}>
      Menu:
      <ul>
        {menu.map((item) => (
          <li>
            <Dish dish={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
