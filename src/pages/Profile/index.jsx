import ProfileMenu from '../../components/ProfileMenu/index';
import ProfileInformations from './Informations'

const Profile = () => {


	return(
		<div className="profile-container">
			<div className="profile-menu">
				<ProfileMenu/>
			</div>
			<div className="profile-content" id="profile-content">
				<ProfileInformations/>
				{/* faire un router ici */}
			</div>

		</div>
	)
}

export default Profile;