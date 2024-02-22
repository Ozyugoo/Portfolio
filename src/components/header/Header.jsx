import "./header.css"
import Hero from "../hero/Heros.jsx";

function Header() {
  return (
    <>
      <div className="heading">
        <div className="header-container">
          <p className="name">Stella</p>
          <p className="name2" hidden>Stella Ugoo-Okonkwo</p>
        </div>
        <div className="nav-bar">
          <nav>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </nav>
        </div>
      </div>

      <div>
        <Hero />
      </div>
    </>
  )
}

export default Header
