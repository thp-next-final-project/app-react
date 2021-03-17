import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";



export const Navbar = () => {
    return (
        <nav>            
            <Link className="nav-left" to="/">                
                <img className="logo" src={logo} alt="logo" />
                <div className="text-logo">         
                    <div className="sport">Sport</div><div className="eat">eat</div>
                </div>
            </Link>
            
            <div className="nav-right">
                <Link className="navItems" to="/about">
                    A propos
                </Link>
                <Link className="navItems" to="/signup">
                    Nous rejoindre
                </Link>                
            </div>
        </nav>
    )
}