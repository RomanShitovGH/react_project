import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((item) => (
        <li>
          <Review item={item} />
        </li>
      ))}
    </ul>
  );
};
