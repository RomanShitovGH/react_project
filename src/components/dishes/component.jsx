import classNames from "classnames";
import { Dish } from "../dish/component";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { selectDishesIdsByRestaurantId } from "../../redux/entities/restaurant/selectors";

export const Dishes = ({ restaurantId, className }) => {
  const dispatch = useDispatch();

  const dishes = useSelector((state) =>
    selectDishesIdsByRestaurantId(state, restaurantId)
  );

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [restaurantId]);

  return (
    <div className={classNames(className, styles.dishes)}>
      Menu:
      <ul>
        {dishes.map((dishId) => (
          <li>
            <Dish dishId={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
