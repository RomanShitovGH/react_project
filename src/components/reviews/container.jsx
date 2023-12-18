import { useParams } from "react-router-dom";
import { useGetReviewsQuery } from "../../redux/services/api";
import { Reviews } from "./component";

import styles from "./styles.module.css";

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const { data, isFetching } = useGetReviewsQuery(restaurantId);

  if (isFetching) {
    return "Загрузка отзывов";
  }
  return <Reviews restaurant={data} className={styles.card} />;
};
