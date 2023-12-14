import classNames from "classnames";
import { Dishes } from "../dishes/component";
import { ReviewForm } from "../review-form/component";
import { Reviews } from "../reviews/component";

import styles from "./styles.module.css";

export const RestaurantCard = ({ restaurant, className }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <div className={classNames(className)}>
      <div className={classNames(styles.card, styles.cardBorder)}>
        ReastaurantName: {restaurant.name}
      </div>

      <Dishes restaurant={restaurant} className={styles.card} />
      <Reviews restaurant={restaurant} className={styles.card} />
      <ReviewForm restaurant={restaurant} className={styles.card} />
    </div>
  );
};
