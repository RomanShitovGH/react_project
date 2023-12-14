import classNames from "classnames";
import { Review } from "../review/component";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectReviewsIdsByRestaurantId } from "../../redux/entities/restaurant/selectors";
import { useEffect } from "react";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";

export const Reviews = ({ restaurantId, className }) => {
  const dispatch = useDispatch();

  const reviews = useSelector((state) =>
    selectReviewsIdsByRestaurantId(state, restaurantId)
  );

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [restaurantId]);

  return (
    <div className={classNames(className, styles.reviews)}>
      Reviews:
      <ul>
        {reviews.map((reviewId) => (
          <li>
            <Review reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
