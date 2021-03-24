import ProfileMenu from '../../components/ProfileMenu/index';
import ProfileInformations from './Informations';
import Wods from '../Wods';
import Mod from '../Mod';
import NoMatch from '../../pages/NoMatch';

import { 
	BrowserRouter as Router,
	Switch,
	Route } from "react-router-dom";


const Profile = () => {


	return(
		<div className="profile-container">
			<ProfileMenu/>
		<div>
			<Switch>			
				
				<Route path="/" component={ProfileInformations} exact></Route>

				<Route path="/meals-of-the-day" component={Mod} ></Route>

				<Route path="/wods" component={Wods} ></Route>

				<Route path="/parameters" component={ProfileInformations} ></Route>

				<Route path="/train" exact>
					<Wods/>
				</Route>
				<Route path="/train/progress/:section?">
					<Wods/>
				</Route>

				<Route>
					<NoMatch />
				</Route> 			
				
			</Switch>
			
		</div>
		</div>
	)
}

export default Profile;