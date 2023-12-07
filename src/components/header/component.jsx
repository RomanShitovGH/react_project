import classNames from "classnames";
import styles from "./styles.module.css";
import { useTheme } from "../theme-provider/hooks";

export const Header = ({ className }) => {
  const { changeButtonTheme } = useTheme();

  return (
    <div className={classNames(styles.root, className)}>
      <button>Заказ</button>
      <button onClick={changeButtonTheme}>Смена темы</button>
    </div>
  );
};
