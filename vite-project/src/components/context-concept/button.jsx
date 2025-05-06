import { useContext } from "react";
import { GlobalContext } from "../../context";

function contextButtonComponent() {
  const { handleChangeThemeOnClick } = useContext(GlobalContext);
  return <button onClick={handleChangeThemeOnClick}>Change Theme</button>;
}

export default contextButtonComponent;
