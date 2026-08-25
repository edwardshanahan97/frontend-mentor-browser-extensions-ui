import "./Navbar.css";
import Logo from "../Logo/Logo";
import SunIcon from "../../assets/images/icon-sun.svg";
import MoonIcon from "../../assets/images/icon-moon.svg";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <Logo />

      <button
        onClick={toggleTheme}
        className="navbar__toggle"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <img src={SunIcon} alt="Sun Icon" />
        ) : (
          <img src={MoonIcon} alt="Moon Icon" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
