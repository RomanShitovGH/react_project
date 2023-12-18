import classNames from "classnames";
import { RestaurantTab } from "../restaurant-tab/component";

import styles from "./styles.module.css";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantsTabs = ({ className }) => {
  const { data } = useGetRestaurantsQuery();

  if (!data) {
    return null;
  }

  return (
    <div className={classNames(styles.tabs, className)}>
      <ul className={styles.tabsUl}>
        {data.map((rastaurant) => (
          <RestaurantTab rastaurant={rastaurant} />
        ))}
      </ul>
    </div>
  );
};
