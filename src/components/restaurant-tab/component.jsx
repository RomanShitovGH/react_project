import classNames from "classnames";
import styles from "./styles.module.css";
import { useTheme } from "../theme-provider/hooks";

export const RestaurantTab = ({ restaurantName, onClick }) => {
  const { buttonTheme } = useTheme();
  return (
    <button
      onClick={onClick}
      className={classNames(styles.tab, {
        [styles.themeTrue]: buttonTheme,
        [styles.themeFalse]: !buttonTheme,
      })}
    >
      {restaurantName}
    </button>
  );
};
