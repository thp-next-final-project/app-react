import ProfileMenu from '../../components/ProfileMenu/index';
import ProfileInformations from './Informations'

const Profile = () => {


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