import { RestaurantsCards } from "../../components/restaurantsCards/component";
import { RestaurantsTabs } from "../../components/restaurantsTabs/component";

export const RestaurantPage = ({ restaurants }) => {
  const restaurantsNames = Array.from(
    new Set(restaurants.map(({ name }) => name))
  );

  return (
    <>
      <RestaurantsTabs restaurantsNames={restaurantsNames} />
      <RestaurantsCards restaurants={restaurants} />
    </>
  );
};
