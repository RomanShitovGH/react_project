import { RestaurantTab } from "../restaurantTab/component";

export const RestaurantsTabs = ({ restaurantsNames }) => {
  return (
    <ul>
      {restaurantsNames.map((item) => (
        <RestaurantTab restaurantName={item} />
      ))}
    </ul>
  );
};
