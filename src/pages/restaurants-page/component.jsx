import { useState } from "react";
import { RestaurantCard } from "../../components/restaurant-card/component";
import { RestaurantsTabs } from "../../components/restaurants-tabs/component";

import styles from "./styles.module.css";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantPage = () => {
  const [selectedTab, setSelectedTab] = useState();
  const { data, isFetching } = useGetRestaurantsQuery();

  if (isFetching) {
    return "Загрузка";
  }
  return (
    <div>
      <RestaurantsTabs
        onTabSelect={(selectedTabName) => setSelectedTab(selectedTabName)}
        className={styles.restaurantTabs}
      />
      {selectedTab && (
        <RestaurantCard
          restaurant={data?.find(({ id }) => id === selectedTab)}
          className={styles.restaurantCard}
        />
      )}
    </div>
  );
};
