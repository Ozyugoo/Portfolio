import "./header.css"
import Hero from "../hero/Heros.jsx";
import '../body/body.css'

function Header() {
  return (
    <>
      <div className="heading .col12">
        <div className="header-container .col6">
          <p className="name">Stella</p>
          <p className="name2" hidden>Stella Ugoo-Okonkwo</p>
        </div>
        <div className="nav-bar .col4">
          <nav>
              <ul className=".col12">
                  <li className=".col1"><a href="#">Home</a></li>
                  <li className=".col1"><a href="#">About</a></li>
                  <li className=".col1"><a href="#">Contact</a></li>
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
