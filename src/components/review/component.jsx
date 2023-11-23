export const Review = ({ item }) => {
  return (
    <>
      {item.user}(rating-{item.rating}): {item.text}
    </>
  );
};
