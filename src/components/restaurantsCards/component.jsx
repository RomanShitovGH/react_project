import { RestaurantCard } from "../restaurantCard/component";

export const RestaurantsCards = ({ restaurants }) => {
  if (!restaurants) {
    return null;
  }

  return (
    <div>
      {restaurants.map((item) => (
        <RestaurantCard restaurant={item} />
      ))}
    </div>
  );
};
