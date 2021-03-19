import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProfileMenu from '../../components/ProfileMenu/index';
import ProfileInformations from './Informations'

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
		<div className="profile-container">
			<div className="profile-menu">
				<ProfileMenu/>
			</div>
			<div className="profile-content">
				<ProfileInformations/>
			</div>

		</div>
	)
}

export default Profile;