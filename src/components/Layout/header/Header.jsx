import "./header.css"
import '../main/main.css'

function Header() {
  return (
    <>
      <div className="heading col12">
        <div className="header-container col6">
          <p className="name">Stella</p>
          <p className="name2" hidden>Stella Ugoo-Okonkwo</p>
        </div>
        <div className="nav-bar col6">
          <nav className="col12">
              <ul className="col12">
                  <li><a href="#">Work</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </nav>
        </div>
      </div>      
    </>
  )
}

export default Header
