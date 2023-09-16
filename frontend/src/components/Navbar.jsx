import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = ({ handleLoginClick }) => {
  const handleClick = () => {
    handleLoginClick()
  }
  return (
    <>
      <nav className="navGlobal">
        <ul className="liste">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/Boutique">
            Boutique
          </NavLink>
          <NavLink className="navlink" to="/Createurs">
            Createurs
          </NavLink>
          <NavLink className="navlink" to="/Test">
            Test
          </NavLink>
        </ul>
        <img
          className="imagelogo"
          src="http://localhost:4242/assets/images/autre/AlterWord.PNG"
          alt=""
        />
        <div className="panier">
          <a href="/Panier">
            <img
              src="http://localhost:4242/assets/images/autre/panier.png"
              alt=""
            />
          </a>
        </div>
        <div className="buttonContainer">
          <button onClick={handleClick} className="loginicon log">
            Login
          </button>
          <a href="/Formulaire">
            <button className="loginicon sig">Sign up</button>
          </a>
        </div>
      </nav>
    </>
  )
}

export default NavBar
