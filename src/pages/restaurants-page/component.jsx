import { Cards } from "../../components/Cards/component";
import { NamesList } from "../../components/names-list/component";

export const RestaurantPage = ({ restaurants }) => {
  const reastaurantNames = Array.from(
    new Set(restaurants.map(({ name }) => name))
  );

  return (
    <>
      <NamesList reastaurantNames={reastaurantNames} />
      <Cards restaurants={restaurants} />
    </>
  );
};
