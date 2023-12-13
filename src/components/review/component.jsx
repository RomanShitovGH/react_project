export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  return (
    <div>
      {review.user}(rating-{review.rating}): {review.text}
    </div>
  );
};
