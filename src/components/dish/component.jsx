export const Dish = ({ item }) => {
  return (
    <>
      <li>
        {item.name}, price: {item.price}
      </li>
    </>
  );
};
