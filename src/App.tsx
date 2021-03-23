import { useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from './hooks/useFetch';

import { API_URL } from './config/config';
import { GET_USER, LOGOUT } from './stores/actions';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import MenuProfile from './components/Layout/NavBar/NavProfile/index';
import MenuHome from './components/Layout/NavBar/NavHome';
import { Footer } from './components/Layout/Footer';
import ProfileInformations from './pages/Profile/Informations';
import UpdateRegister from './pages/UpdateRegister';
import Wods from './pages/Wods';
import Mod from './pages/Mod';


const App = (): JSX.Element => {
  const user:any = useSelector((state) => state);
  const { headers } = useFetch(true);
  const dispatch = useDispatch();

	const getUser = () => {
    fetch(`${API_URL}/api/users/${user.id}`,{ headers })
    .then((response) => response.json())
	  .then ((data) => {
      dispatch({ type: GET_USER, data });
		})
    .catch((error) => {
      console.log(error)
      dispatch({ type: LOGOUT })
    })
  }

  useEffect(() => {
    if (user.id) {
      getUser()
    } 
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

  return (
      
      <Router>
       { user.isLogged ?  <MenuProfile/> : <MenuHome/> }
        <Switch>
          <Route path="/" exact>
            { user.isLogged ? <Profile/> : <Home/> }
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/signup" exact>
            <Register/>
          </Route>
          <Route path="/informations" exact>
            { user.isLogged ? <ProfileInformations/> : <Home/> }
          </Route>
          { user.isLogged &&
            <Route path="/parameters" exact>
              <UpdateRegister/>  
            </Route> 
          }
          { user.isLogged &&
            <Route path="/meals-of-the-day" exact>
              <Mod/>  
            </Route> 
          }
          <Route path="/wods" exact>
            <Wods/>
          </Route>
        </Switch>
        <Footer/>
      </Router>      
   

  );
};

export default App;
