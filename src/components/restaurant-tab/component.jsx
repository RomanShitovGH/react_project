import styles from "./styles.module.css";

export const RestaurantTab = ({ restaurantName, onClick }) => {
  return (
    <button onClick={onClick} className={styles.tab}>
      {restaurantName}
    </button>
  );
};
