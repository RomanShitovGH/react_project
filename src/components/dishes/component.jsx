import { Dish } from "../dish/component";

export const Dishes = ({ menu }) => {
  return (
    <>
      <ul>
        {menu.map((item) => (
          <Dish item={item} />
        ))}
      </ul>
    </>
  );
};
