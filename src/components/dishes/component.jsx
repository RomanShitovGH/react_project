import { Dish } from "../dish/component";

export const Dishes = ({ menu }) => {
  return (
    <ul>
      {menu.map((item) => (
        <li>
          <Dish dish={item} />
        </li>
      ))}
    </ul>
  );
};
