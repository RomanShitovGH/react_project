import { useState } from "react";
import { RestaurantCard } from "../../components/restaurant-card/component";
import { RestaurantsTabs } from "../../components/restaurants-tabs/component";

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
      />
      {filteredRestaurant && <RestaurantCard restaurant={filteredRestaurant} />}
    </>
  );
};
