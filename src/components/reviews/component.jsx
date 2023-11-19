import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews.map((item) => (
          <Review item={item} />
        ))}
      </ul>
    </>
  );
};
