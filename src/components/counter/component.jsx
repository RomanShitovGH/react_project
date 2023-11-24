import { useState } from "react";

export const Counter = ({ minValue, maxValue }) => {
  const [counter, setCounter] = useState(0);

  const counterInc = () => {
    if (counter < maxValue) {
      setCounter(counter + 1);
    }
  };

  const counterDec = () => {
    if (counter > minValue) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <button onClick={counterDec} disabled={counter <= minValue}>
        -
      </button>
      {counter}
      <button onClick={counterInc} disabled={counter >= maxValue}>
        +
      </button>
    </>
  );
};
