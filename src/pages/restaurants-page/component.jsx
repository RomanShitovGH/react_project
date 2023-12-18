import { RestaurantsTabs } from "../../components/restaurants-tabs/component";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

export const RestaurantPage = () => {
  return (
    <div>
      <RestaurantsTabs className={styles.restaurantTabs} />
      <Outlet />
    </div>
  );
};
