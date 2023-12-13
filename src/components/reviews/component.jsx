import classNames from "classnames";
import { Review } from "../review/component";

import styles from "./styles.module.css";
import { useGetReviewsQuery } from "../../redux/services/api";

export const Reviews = ({ restaurant, className }) => {
  const { data, isFetching } = useGetReviewsQuery(restaurant.id);

  if (isFetching) {
    return "Загрузка";
  }

  return (
    <div className={classNames(className, styles.reviews)}>
      Reviews:
      <ul>
        {data.map((review) => (
          <li>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
