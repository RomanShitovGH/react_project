import classNames from "classnames";
import { useTheme } from "../theme-provider/hooks";

import styles from "./styles.module.css";

export const Button = ({ children, onClick, disabled, className }) => {
  const { buttonTheme } = useTheme();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(className, {
        [styles.light]: buttonTheme === "light",
        [styles.dark]: buttonTheme === "dark",
      })}
    >
      {children}
    </button>
  );
};
