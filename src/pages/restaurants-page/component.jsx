import { useState } from "react";
import { RestaurantCard } from "../../components/restaurant-card/component";
import { RestaurantsTabs } from "../../components/restaurants-tabs/component";

import styles from "./styles.module.css";

export const RestaurantPage = () => {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <div>
      <RestaurantsTabs
        onTabSelect={(selectedTabName) => setSelectedTab(selectedTabName)}
        className={styles.restaurantTabs}
      />
      {selectedTab && (
        <RestaurantCard
          restaurantId={selectedTab}
          className={styles.restaurantCard}
        />
      )}
    </div>
  );
};
