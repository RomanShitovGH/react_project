import classNames from "classnames";
import { RestaurantTab } from "../restaurant-tab/component";

import styles from "./styles.module.css";

export const RestaurantsTabs = ({
  restaurantsNames,
  onTabSelect,
  className,
}) => {
  return (
    <div className={classNames(styles.tabs, className)}>
      <ul className={styles.tabsUl}>
        {restaurantsNames.map((item) => (
          <RestaurantTab
            restaurantName={item}
            onClick={() => onTabSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
};
