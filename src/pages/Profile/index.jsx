import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MenuHamburger from '../../components/MenuHamburger';

const Profile = () => {
	const user = useSelector((state) => state);
	const history = useHistory();
	useEffect(() => {
		if (!user.isLogged ) {
			history.push('/');  
		} 
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return(
		<>
			<MenuHamburger/>
			<p>Mon Profile</p>
			
		</>
	)
}

export default Profile;