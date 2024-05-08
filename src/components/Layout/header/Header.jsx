import "./header.css";
import NavBar from "./NavBar";

import "../main/main.css";

function Header() {
  return (
    <>
      <header className="heading">
        <section className="header-container">
          <p className="name2 lg:visible">Stella Ugoo-Okonkwo</p>
        </section>
        <section className="nav-bar">
          <NavBar />
        </section>
      </header>
    </>
  );
}

export default Header;
