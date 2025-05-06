import { useContext } from "react";
import { GlobalContext } from "../../context";

function contextTextComponent() {
  const { theme } = useContext(GlobalContext);
  return (
    <h1
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "blue" : "yellow",
        fontSize: theme === "light" ? "50px" : "100px",
      }}
    >
      Change Text
    </h1>
  );
}

export default contextTextComponent;
