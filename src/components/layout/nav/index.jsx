import logo from "../../../assets/logo.png";


export const Navbar = () => {
    return (
        <nav>
            <div className="nav-left">
                <img className="logo" src={logo} alt="logo" />
                <div className="text-logo">         
                    <div className="sport">Sport</div><div className="eat">eat</div>
                </div>
            </div>
            <div className="nav-right">
                <div>
                    <a href="" className="navItems">A propos</a>
                </div>
                <div>
                    <a href="" className="navItems">Nous rejoindre</a>
                </div>
            </div>
        </nav>
    )
}