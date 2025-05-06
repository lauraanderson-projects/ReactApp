//create the context
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

//create the global state that receipe component as a children

function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");

  function handleChangeThemeOnClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <GlobalContext.Provider value={{ theme, handleChangeThemeOnClick }}>
      {children}
    </GlobalContext.Provider>
  );
}
//export the context and the provider
export default GlobalState;
