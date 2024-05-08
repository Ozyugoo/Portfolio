import { useState } from "react";
import { Link } from "react-router-dom";


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
          <div >
            <button
              onClick={toggleMenu}
              className="btn-menu block font-extrabold text-3xl lg:hidden"
            >
              ☰
            </button>
          </div>
          <ul
            className={`"nav-link lg:flex lg:visible" ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link
                to="/home"
                className="hover:text-gray-300 mx-4"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="hover:text-gray-300 mx-4"
                onClick={closeMenu}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="hover:text-gray-300 mx-4"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-300 mx-4"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

       
    </div>
  );
}

export default NavBar;
