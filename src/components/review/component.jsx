import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/features/entities/review/selectors";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  return (
    <>
      {review.user}(rating-{review.rating}): {review.text}
    </>
  );
};
