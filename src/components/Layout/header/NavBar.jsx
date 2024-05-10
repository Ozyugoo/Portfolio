import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav">
      <nav>
        <div className="btn-menu">
          <div onClick={toggleMenu}>
            <svg
              className="hambugBar"
              width="44"
              height="40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 16h32M6 28h32" stroke="#C7C7C7" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <ul
          className={`nav-link md:flex md:visible ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <p onClick={toggleMenu} className="toggle">
            &#10006;
          </p>
          <li>
            <Link to="/" className="navList" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Project" className="navList" onClick={closeMenu}>
              Project
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={closeMenu} className="navList">
              About
            </Link>
          </li>
          <Scroll
            className="navList"
            onClick={closeMenu}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Scroll>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
