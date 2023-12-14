import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../button/component";
import { selectRestaurantByIds } from "../../redux/features/entities/restaurant/selectors";
import { useSelector } from "react-redux";

export const RestaurantTab = ({ id, onClick }) => {
  const restaurant = useSelector((state) => selectRestaurantByIds(state, id));

  if (!restaurant) {
    return null;
  }

  return (
    <Button onClick={onClick} className={classNames(styles.tab)}>
      {restaurant.name}
    </Button>
  );
};
