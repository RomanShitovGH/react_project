import { Dishes } from "../dishes/component";
import { Reviews } from "../reviews/component";

export const Card = ({ item }) => {
  return (
    <div>
      ReastaurantName: {item.name}
      <br />
      Menu:
      <Dishes menu={item.menu} />
      Reviews:
      <Reviews reviews={item.reviews} />
    </div>
  );
};
