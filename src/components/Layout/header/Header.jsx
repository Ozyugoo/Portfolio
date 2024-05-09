import "./header.css";
import NavBar from "./NavBar.jsx";
import "../main/main.css";

function Header() {
  return (
    <>
      <header className="heading">
        <section className="header-container">
          <h4 className="name2">Stella Ugoo-Okonkwo</h4>
        </section>
        <section className="nav-bar">
          <NavBar />
        </section>
      </header>
    </>
  );
}

export default Header;
