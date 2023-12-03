import { useState } from "react";
import { RestaurantCard } from "../../components/restaurant-card/component";
import { RestaurantsTabs } from "../../components/restaurants-tabs/component";

import styles from "./styles.module.css";
import classNames from "classnames";
import { useTheme } from "../../components/theme-provider/hooks";

export const RestaurantPage = ({ restaurants }) => {
  const restaurantsNames = Array.from(
    new Set(restaurants.map(({ name }) => name))
  );

  const [selectedTab, setSelectedTab] = useState();

  const filteredRestaurant = restaurants.find(
    ({ name }) => name === selectedTab
  );

  const { buttonTheme } = useTheme();

  if (!restaurants) {
    return null;
  }

  return (
    <div
      className={classNames({
        [styles.themeTrue]: buttonTheme,
        [styles.themeFalse]: !buttonTheme,
      })}
    >
      <RestaurantsTabs
        restaurantsNames={restaurantsNames}
        onTabSelect={(selectedTabName) => setSelectedTab(selectedTabName)}
        className={styles.restaurantTabs}
      />
      {filteredRestaurant && (
        <RestaurantCard
          restaurant={filteredRestaurant}
          className={styles.restaurantCard}
        />
      )}
    </div>
  );
};
