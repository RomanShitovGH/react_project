import { NameItem } from "../name-item/component";

export const NamesList = ({ reastaurantNames }) => {
  return (
    <>
      <ul>
        {reastaurantNames.map((item) => (
          <NameItem item={item} />
        ))}
      </ul>
    </>
  );
};
