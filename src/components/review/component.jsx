export const Review = ({ item }) => {
  return (
    <>
      <li>
        {item.user}(rating-{item.rating}): {item.text}
      </li>
    </>
  );
};
