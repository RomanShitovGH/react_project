import { useCallback, useState } from "react";
import { ThemeContext } from "./context";

export const ThemeProvider = ({ children }) => {
  const [buttonTheme, setButtonTheme] = useState(true);

  const changeButtonTheme = useCallback(
    () => setButtonTheme((currentTheme) => !currentTheme),
    []
  );

  return (
    <ThemeContext.Provider value={{ buttonTheme, changeButtonTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
