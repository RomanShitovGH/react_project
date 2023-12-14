import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../button/component";

export const RestaurantTab = ({ rastaurant, onClick }) => {
  if (!rastaurant) {
    return null;
  }

  return (
    <Button onClick={onClick} className={classNames(styles.tab)}>
      {rastaurant.name}
    </Button>
  );
};
