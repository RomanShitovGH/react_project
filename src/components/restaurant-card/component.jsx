import classNames from "classnames";
import { Dishes } from "../dishes/component";
import { ReviewForm } from "../review-form/component";
import { Reviews } from "../reviews/component";

import styles from "./styles.module.css";

export const RestaurantCard = ({ restaurant, className }) => {
  return (
    <div className={classNames(className)}>
      <div className={classNames(styles.card, styles.cardBorder)}>
        ReastaurantName: {restaurant.name}
      </div>

      <Dishes menu={restaurant.menu} className={styles.card} />
      <Reviews reviews={restaurant.reviews} className={styles.card} />
      <ReviewForm className={styles.card} />
    </div>
  );
};
