import { RestaurantCard } from "../restaurantCard/component";

export const RestaurantsCards = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((item) => (
        <RestaurantCard restaurant={item} />
      ))}
    </div>
  );
};
