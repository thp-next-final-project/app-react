import { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from "../../../../stores/actions";

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
    <>
      <div onClick={handleClick} className="menu-btn">
        <span  className={`menu-btn burger ${toggle ? "open" : ""}`}></span>
      </div>
      <nav className={`nav-burger ${toggle ? "open" : ""}`}>
        <ul className={`menu-nav ${toggle ? "open" : ""}`}>
          <li className={`menu-nav-item ${toggle ? "open" : ""} ${itemActive ? "active" : ""}`}>
              <Link className="navItems" to="/login">
                Mes informations
              </Link>
          </li>

          <li className={`menu-nav-item ${toggle ? "open" : ""} ${itemActive ? "active" : ""}`}>
              <Link className="navItems" to="/login">
                Paramètres de connexion
              </Link>         
          </li>
       
          <div onClick={handleLogout}>Se déconnecter</div>
        </ul>
      </nav>
    </>
  )
}

export default MenuProfile;