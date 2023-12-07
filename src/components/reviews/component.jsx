import classNames from "classnames";
import { Review } from "../review/component";

import styles from "./styles.module.css";

export const Reviews = ({ reviewsIds, className }) => {
  return (
    <div className={classNames(className, styles.reviews)}>
      Reviews:
      <ul>
        {reviewsIds.map((reviewId) => (
          <li>
            <Review reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
