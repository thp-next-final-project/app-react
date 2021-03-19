import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
			<p>Mon Profile</p>
			<h3>test</h3>
			<p>hfhfhf</p>

		</>
	)
}

export default Profile;