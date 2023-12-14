import classNames from "classnames";
import { Dishes } from "../dishes/component";
import { ReviewForm } from "../review-form/component";
import { Reviews } from "../reviews/component";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import {
  selectRestaurantByIds,
  selectDishesIdsByRestaurantId,
  selectReviewsIdsByRestaurantId,
} from "../../redux/features/entities/restaurant/selectors";

export const RestaurantCard = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantByIds(state, restaurantId)
  );

  const dishesIds = useSelector((state) =>
    selectDishesIdsByRestaurantId(state, restaurantId)
  );

  const reviewsIds = useSelector((state) =>
    selectReviewsIdsByRestaurantId(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return (
    <div className={classNames(className)}>
      <div className={classNames(styles.card, styles.cardBorder)}>
        ReastaurantName: {restaurant.name}
      </div>

      <Dishes dishesIds={dishesIds} className={styles.card} />
      <Reviews reviewsIds={reviewsIds} className={styles.card} />
      <ReviewForm className={styles.card} />
    </div>
  );
};
