import { useState } from "react";
import { RestaurantCard } from "../../components/restaurant-card/component";
import { RestaurantsTabs } from "../../components/restaurants-tabs/component";

import styles from "./styles.module.css";

export const RestaurantPage = ({ restaurants }) => {
  const restaurantsNames = Array.from(
    new Set(restaurants.map(({ name }) => name))
  );

  const [selectedTab, setSelectedTab] = useState();

  const filteredRestaurant = restaurants.find(
    ({ name }) => name === selectedTab
  );

  if (!restaurants) {
    return null;
  }

  return (
    <>
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
    </>
  );
};
