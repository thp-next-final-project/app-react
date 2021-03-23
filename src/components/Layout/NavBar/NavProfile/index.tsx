import { useState, useEffect } from 'react';
import { 
  Link,
  useHistory,
  useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from "../../../../stores/actions";
import logo from "../../../../assets/logo.png";

const MenuProfile = () => {
  const page:any = useLocation();
  const [ toggle, setToggle ] = useState(false);
  const [ hover, setHover ] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const user:any = useSelector((state) => state);

  const navHeight = window.innerHeight/10;
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
		if (!user.isLogged) {
			history.push(`/`);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])
  
  const handleActive = (path:string) => {
    if (path === page.pathname) {
        return true
    }
    return false
  }
  
  const handleEnter = () => {
    setHover(true)
  }
  const handleLeave = () => {
    setHover(false)
  }
  const handleClick = (e:any) => {    
    setToggle(!toggle);
  }
  const handleLogout = () => {
    dispatch( { type: LOGOUT } );
  };

 

 const handleScroll =() => {    
      //console.log(window.scrollY);
      if (window.scrollY > navHeight){
          //console.log("scroll class")
          setNavToggle(true)
      } else {        
          setNavToggle(false)
      }
  }
 
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);



  return (
    <nav className={`nav-profile ${navToggle? "scrolledNavbar" : ""}`} >
      
        <Link className="nav-left" to="/">                
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
          <li onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={`menu-nav-item ${toggle ? "open" : ""} ${!hover && handleActive("/") ? "active" : ""}`}>
              <Link onClick={handleClick} className="navItemsBurger" to="/">
                Profil
              </Link>
          </li>
          <li onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={`menu-nav-item ${toggle ? "open" : ""} ${!hover && handleActive("/parameters") ? "active" : ""}`}>
              <Link onClick={handleClick} className="navItemsBurger" to="/parameters">
                Paramètres du compte
              </Link>
          </li>
          <button className="btn btnBurger" onClick={handleLogout}>Se déconnecter</button>
        </ul>
      </div>
    </nav>
  )
}

export default MenuProfile;