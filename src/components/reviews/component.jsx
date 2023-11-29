import classNames from "classnames";
import { Review } from "../review/component";

import styles from "./styles.module.css";

export const Reviews = ({ reviews, className }) => {
  return (
    <div className={classNames(className, styles.reviews)}>
      Reviews:
      <ul>
        {reviews.map((item) => (
          <li>
            <Review item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
