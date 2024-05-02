import "./header.css";
import "../main/main.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <header className="heading">
        <section className="header-container">
          <p className="name" hidden>
            Stella
          </p>
          <p className="name2">Stella Ugoo-Okonkwo</p>
        </section>
        <section className="nav-bar">
          <NavBar />
        </section>
      </header>
    </>
  );
}

export default Header;
