import { ThemeConsumer } from "../contexts/ThemeContext";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <p onClick={toggleTheme}>
            {theme === "light" ? <FaRegMoon /> : <FaRegSun />}
          </p>
        );
      }}
    </ThemeConsumer>
  );
}

export default ToggleTheme;
