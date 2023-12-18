import classNames from "classnames";
import { Review } from "../review/component";

import styles from "./styles.module.css";

export const Reviews = ({ restaurant, className }) => {
  return (
    <div className={classNames(className, styles.reviews)}>
      Reviews:
      <ul>
        {restaurant.map((review) => (
          <li>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
