import classNames from "classnames";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const RestaurantTab = ({ rastaurant }) => {
  return (
    <NavLink to={`${rastaurant.id}`} className={classNames(styles.tab)}>
      {rastaurant.name}
    </NavLink>
  );
};
