import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex">
      <nav>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="btn-menu block font-extrabold text-3xl"
          >
            ⋮
          </button>
        </div>
        <ul className={`"nav-link" ${isOpen ? "block" : "hidden"}`}>
          <li>
            <a href="#" className="hover:text-gray-300" onClick={closeMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
