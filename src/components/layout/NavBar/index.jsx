import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import MenuHome from './MenuHome';
import MenuProfile from './MenuProfile';

const NavBar = () => {
    const user = useSelector((state) => state);
    const history = useHistory();

    useEffect(() => {
		if (user.isLogged) {
			history.push(`/profile`);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

    return (
        <header>
            { 
                user.isLogged ?  <MenuProfile/> : <MenuHome/>
            }
            
        </header>
    )
}

export default NavBar;