import classNames from "classnames";
import { RestaurantTab } from "../restaurant-tab/component";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";

export const RestaurantsTabs = ({ onTabSelect, className }) => {
  const restaurant = useSelector(selectRestaurantIds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <div className={classNames(styles.tabs, className)}>
      <ul className={styles.tabsUl}>
        {restaurant.map((restaurantId) => (
          <RestaurantTab
            id={restaurantId}
            onClick={() => onTabSelect(restaurantId)}
          />
        ))}
      </ul>
    </div>
  );
};
