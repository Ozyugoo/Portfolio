import "./header.css"

function Header() {
  return (
    <>
      <div className="header-container">
        <p className="name">Stella Ozioma Ugoo-Okonkwo</p>
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
    </>
  )
}

export default Header
