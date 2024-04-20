import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function hanggleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello world !</p>
        <button onClick={hanggleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
