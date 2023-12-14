import { useCallback, useState } from "react";
import { ThemeContext } from "./context";
import { DEFAULT_THEME } from "./constants";

export const ThemeProvider = ({ children, defultTheme = DEFAULT_THEME }) => {
  const [buttonTheme, setButtonTheme] = useState(defultTheme);

  const changeButtonTheme = useCallback(
    () =>
      setButtonTheme((currentTheme) =>
        currentTheme === "light" ? "dark" : "light"
      ),
    []
  );

  return (
    <ThemeContext.Provider value={{ buttonTheme, changeButtonTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
