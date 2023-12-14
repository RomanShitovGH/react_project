import classNames from "classnames";
import { Dish } from "../dish/component";

import styles from "./styles.module.css";
import { useGetDishesQuery } from "../../redux/services/api";

export const Dishes = ({ restaurant, className }) => {
  const { data, isFetching } = useGetDishesQuery(restaurant.id);

  if (isFetching) {
    return "Загрузка";
  }

  return (
    <div className={classNames(className, styles.dishes)}>
      Menu:
      <ul>
        {data?.map((dish) => (
          <li>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
