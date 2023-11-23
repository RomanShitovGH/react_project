import { Dishes } from "../dishes/component";
import { Reviews } from "../reviews/component";

export const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      ReastaurantName: {restaurant.name}
      <br />
      Menu:
      <Dishes menu={restaurant.menu} />
      Reviews:
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
