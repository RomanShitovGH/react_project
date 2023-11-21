import { useState } from "react";
import { RestaurantsCards } from "../../components/restaurantsCards/component";
import { RestaurantsTabs } from "../../components/restaurantsTabs/component";

export const RestaurantPage = ({ restaurants }) => {
  const restaurantsNames = Array.from(
    new Set(restaurants.map(({ name }) => name))
  );

  const [selectedTab, setSelectedTab] = useState();

  const filteredRestaurant = restaurants.filter(
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
      {}
      <RestaurantsCards restaurants={filteredRestaurant} />
    </>
  );
};
