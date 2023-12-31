import { useReducer } from "react";
import { Counter } from "../counter/component";
import classNames from "classnames";

import styles from "./styles.module.css";
import {
  useCreateReviewsMutation,
  useGetUsersQuery,
} from "../../redux/services/api";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
        text: DEFAULT_FORM_VALUE.text,
        rating: DEFAULT_FORM_VALUE.rating,
      };
    case "setText":
      return { ...state, text: action.payload };

    case "setRating":
      return { ...state, rating: action.payload };

    default:
      return state;
  }
};

export const ReviewForm = ({ restaurant, className }) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const [createReaview] = useCreateReviewsMutation();

  const { data } = useGetUsersQuery();
  console.log("data =", data);
  return (
    <div className={classNames(className, styles.reviewForm)}>
      <div>Leave your review:</div>
      <div className={styles.inputBlock}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
          className={styles.inputField}
        />
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="text">Text</label>
        <input
          id="text"
          type="text"
          value={formValue.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
          className={styles.inputField}
        />
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="rating">Rating</label>
        <Counter
          value={formValue.rating}
          increment={() =>
            dispatch({ type: "setRating", payload: formValue.rating + 0.5 })
          }
          decriment={() =>
            dispatch({ type: "setRating", payload: formValue.rating - 0.5 })
          }
          minValue={1}
          maxValue={5}
          className={styles.counterPosition}
        />
      </div>
      <button
        onClick={() =>
          createReaview({
            restaurantId: restaurant.id,
            newReview: {
              userId: data?.[0].id,
              text: formValue.text,
              rating: formValue.rating,
            },
          })
        }
      >
        Save
      </button>
    </div>
  );
};
