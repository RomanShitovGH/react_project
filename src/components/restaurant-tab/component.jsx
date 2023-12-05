import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../button/component";

export const RestaurantTab = ({ restaurantName, onClick }) => {
  return (
    <Button onClick={onClick} className={classNames(styles.tab)}>
      {restaurantName}
    </Button>
  );
};
