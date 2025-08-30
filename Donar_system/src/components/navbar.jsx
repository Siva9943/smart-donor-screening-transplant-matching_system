import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();

  // Theme toggle
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  // Language selector
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "English"
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const activeClass = ({ isActive }) =>
    isActive ? "active-link" : undefined;

  return (
    <>
      <div className="top_nav">
        <button id="mood" onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>

        <button id="donate_btn" onClick={() => navigate("/donor")}>
          Donate
        </button>

        <select
          name="language"
          id="lang"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>


      <nav>
        <div className="logo">Donor Web</div>
        <div className="menu">
          <ul>
            <li><NavLink to="/" className={activeClass} end>Home</NavLink></li>
            <li><NavLink to="/about" className={activeClass}>About</NavLink></li>
            <li><NavLink to="/donor" className={activeClass}>Donor</NavLink></li>
            <li><NavLink to="/recipient" className={activeClass}>Recipient</NavLink></li>
            <li><NavLink to="/activities" className={activeClass}>Activities</NavLink></li>
            <li><NavLink to="/blog" className={activeClass}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={activeClass}>Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
