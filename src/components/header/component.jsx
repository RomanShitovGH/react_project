import classNames from "classnames";
import styles from "./styles.module.css";
import { useTheme } from "../theme-provider/hooks";
import { NavLink } from "react-router-dom";

export const Header = ({ className }) => {
  const { changeButtonTheme } = useTheme();
  return (
    <div className={classNames(styles.root, className)}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          classNames(styles.link, {
            [styles.active]: isActive,
          })
        }
      >
        Главная
      </NavLink>
      <NavLink
        to="/restaurants"
        className={({ isActive }) =>
          classNames(styles.link, {
            [styles.active]: isActive,
          })
        }
      >
        Рестораны
      </NavLink>
      <button>Заказ</button>
      <button onClick={changeButtonTheme}>Смена темы</button>
    </div>
  );
};
