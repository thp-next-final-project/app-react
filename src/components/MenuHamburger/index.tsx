import { useState } from 'react';

const MenuHamburger = () => {
  const [ toggle, setToggle ] = useState(false);
  const [ itemActive, setItemActive ] = useState(false);

  const handleClick = (e:any) => {
    e.preventDefault();
    setToggle(!toggle);
    setItemActive(false);
  }
  return (
    <header>
      <div onClick={handleClick} className="menu-btn">
        <span  className={`menu-btn burger ${toggle ? "open" : ""}`}></span>
      </div>
      <nav className={`nav-burger ${toggle ? "open" : ""}`}>
        <ul className={`menu-nav ${toggle ? "open" : ""}`}>
          <li className={`menu-nav-item ${toggle ? "open" : ""} ${itemActive ? "active" : ""}`}>
            <a href="test" >Test</a>
          </li>
          <li className={`menu-nav-item ${toggle ? "open" : ""} ${itemActive ? "active" : ""}`}>
            <a href="test" >Test</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MenuHamburger;