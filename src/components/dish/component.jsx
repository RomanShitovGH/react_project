import { useState } from "react";
import { Counter } from "../counter/component";

export const Dish = ({ dish }) => {
  const [amount, setAmount] = useState(0);

  if (!dish) {
    return null;
  }

  return (
    <>
      {dish.name}, price: {dish.price}
      <Counter
        value={amount}
        increment={() => setAmount(amount + 1)}
        decriment={() => setAmount(amount - 1)}
      />
    </>
  );
};
