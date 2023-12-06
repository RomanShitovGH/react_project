import classNames from "classnames";
import { RestaurantTab } from "../restaurant-tab/component";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/features/entities/restaurant/selectors";
v;

export const RestaurantsTabs = ({ onTabSelect, className }) => {
  const restaurant = useSelector(selectRestaurantIds);

  return (
    <div className={classNames(styles.tabs, className)}>
      <ul className={styles.tabsUl}>
        {restaurant.map((item) => (
          <RestaurantTab id={item} onClick={() => onTabSelect(item)} />
        ))}
      </ul>
    </div>
  );
};
