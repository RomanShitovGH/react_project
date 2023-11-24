export const Counter = ({
  value,
  increment,
  decriment,
  minValue = 0,
  maxValue = 5,
}) => {
  return (
    <>
      <button onClick={decriment} disabled={value <= minValue}>
        -
      </button>
      {value}
      <button onClick={increment} disabled={value >= maxValue}>
        +
      </button>
    </>
  );
};
