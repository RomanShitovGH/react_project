import { Card } from "../Card/component";

export const Cards = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};
