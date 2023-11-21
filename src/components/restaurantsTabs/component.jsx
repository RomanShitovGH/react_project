import { RestaurantTab } from "../restaurantTab/component";

export const RestaurantsTabs = ({ restaurantsNames, onTabSelect }) => {
  return (
    <ul>
      {restaurantsNames.map((item) => (
        <RestaurantTab
          restaurantName={item}
          onClick={() => onTabSelect(item)}
        />
      ))}
    </ul>
  );
};
