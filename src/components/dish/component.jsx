import { Counter } from "../counter/component";

export const Dish = ({ dish }) => {
  return (
    <>
      {dish.name}, price: {dish.price}
      <Counter minValue={0} maxValue={5} />
    </>
  );
};
