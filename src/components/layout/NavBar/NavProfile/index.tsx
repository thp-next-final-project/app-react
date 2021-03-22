import { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from "../../../../stores/actions";
import logo from "../../../../assets/logo.png";

const MenuProfile = () => {
  const [ toggle, setToggle ] = useState(false);
  const [ itemActive, setItemActive ] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const user:any = useSelector((state) => state);


  useEffect(() => {
		if (!user.isLogged) {
			history.push(`/`);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])
  const handleClick = (e:any) => {
    e.preventDefault();
    setToggle(!toggle);
    setItemActive(false);
  }
  const handleLogout = () => {
    dispatch( { type: LOGOUT } );
  };
  return (
    <nav className="nav-profile">
      
        <Link className="nav-left" to="/profile">                
            <img className="logo" src={logo} alt="logo" />
            <div className="text-logo">         
                <div className="sport">Sport</div><div className="eat">eat</div>
            </div>
        </Link>
      
      <div onClick={handleClick} className="menu-btn">
        <span  className={`menu-btn burger ${toggle ? "open" : ""}`}></span>
      </div>
      <div className={`nav-burger ${toggle ? "open" : ""}`}>
        <ul className={`menu-nav ${toggle ? "open" : ""}`}>
          <li className={`menu-nav-item ${toggle ? "open" : ""} ${itemActive ? "active" : ""}`}>
              <Link className="navItems" to="/profile">
                Mon profil
              </Link>
          </li>
          <li className={`menu-nav-item ${toggle ? "open" : ""} ${itemActive ? "active" : ""}`}>
              <Link className="navItems" to="/login">
                Mes informations
              </Link>
          </li>
          <button className="btn" onClick={handleLogout}>Se déconnecter</button>
        </ul>
      </div>
    </nav>
  )
}

export default MenuProfile;