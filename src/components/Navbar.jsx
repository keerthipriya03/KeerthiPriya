import "./components.css";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

function Navbar({ theme, setTheme }) {

  const [menu, setMenu] = useState(false);


  return (
    <nav className="navbar">

      <h2 className="logo">
        &lt;KP /&gt;
      </h2>

      <button
        className="menu-btn"
        onClick={() => setMenu(!menu)}
      >
        {
          menu 
          ? <HiX />
          : <HiMenuAlt3 />
        }
      </button>


      <div className={`nav-links ${menu ? "active" : ""}`}>

        <a href="#hero">
          About
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#contact">
          Contact
        </a>


        <button
          className="theme-btn"
          onClick={() =>
            setTheme(
              theme === "dark"
              ? "light"
              : "dark"
            )
          }
        >
          {
            theme === "dark"
            ? "☀️"
            : "🌙"
          }
        </button>


        <a
          href="https://drive.google.com/file/d/16oe4koniNCCOxiV1Wv2Gmfq9a-wLRz0l/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          My Resume
        </a>

      </div>

    </nav>
  );
}

export default Navbar;
