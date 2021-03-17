import { Link } from "react-router-dom";

import logo from "../../../../assets/logo.png";

const MenuHome = () => {
    return (
        <nav className="menu-home">
            <div className="nav-left">
                <img className="logo" src={logo} alt="logo" />
                <div className="text-logo">         
                    <div className="sport">Sport</div><div className="eat">eat</div>
                </div>
            </div>
            <div className="nav-right">
              <Link className="navItems" to="/about">
                À propos
              </Link>
              <Link className="navItems" to="/login">
                Se connecter
              </Link>
              <Link className="navItems" to="/signup">
                Nous rejoindre
              </Link>
            </div>
        </nav>
    )
}

export default MenuHome;