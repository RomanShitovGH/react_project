import classNames from "classnames";
import { Dishes } from "../dishes/component";
import { ReviewForm } from "../review-form/component";
import { Reviews } from "../reviews/component";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantByIds } from "../../redux/entities/restaurant/selectors";

export const RestaurantCard = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantByIds(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return (
    <div className={classNames(className)}>
      <div className={classNames(styles.card, styles.cardBorder)}>
        ReastaurantName: {restaurant.name}
      </div>

      <Dishes restaurantId={restaurantId} className={styles.card} />
      <Reviews restaurantId={restaurantId} className={styles.card} />
      <ReviewForm className={styles.card} />
    </div>
  );
};
