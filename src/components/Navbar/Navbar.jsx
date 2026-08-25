import "./Navbar.css";
import Logo from "../Logo/Logo";
import SunIcon from "../../assets/images/icon-sun.svg";
import MoonIcon from "../../assets/images/icon-moon.svg";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav onClick={toggleTheme} className="navbar">
      <Logo />

      <button className="navbar__toggle">
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
