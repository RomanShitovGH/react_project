import { useState } from "react";
import { RestaurantCard } from "../../components/restaurant-card/component";
import { RestaurantsTabs } from "../../components/restaurants-tabs/component";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantByIds } from "../../redux/features/entities/restaurant/selectors";

export const RestaurantPage = () => {
  const [selectedTab, setSelectedTab] = useState();

  const restaurant = useSelector((state) =>
    selectRestaurantByIds(state, selectedTab)
  );

  return (
    <div>
      <RestaurantsTabs
        onTabSelect={(selectedTabName) => setSelectedTab(selectedTabName)}
        className={styles.restaurantTabs}
      />
      {restaurant && (
        <RestaurantCard
          restaurantId={restaurant.id}
          className={styles.restaurantCard}
        />
      )}
    </div>
  );
};
