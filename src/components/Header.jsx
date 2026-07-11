import "./components.css";

function Header() {
  return (
    <header id="header" className="header section">
      <div className="header-container">
        <div className="header-image">
          <img
            src="/imagep.jpg"
            alt="Keerthi Priya"
          />
        </div>

        <div className="header-content">
          <span className="section-tag">
            Welcome to my portfolio
          </span>

          <h1>
            D. Keerthi Priya
          </h1>

          <h2>
            Front-end Developer
          </h2>

          <p>
            Computer Science Engineering student passionate about building
            responsive, user-friendly, and modern web applications.
          </p>

          <div className="header-details">
            <span>
              Branch: CSE
            </span>

            <span>
              Frontend Development
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;