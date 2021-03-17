import { useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from './hooks/useFetch';
import Cookies from 'js-cookie';

import { COOKIE_ID } from './config/config';
import { GET_USER } from './stores/actions';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './components/Layout/NavBar';
import { Footer } from './components/Layout/Footer';

const App = (): JSX.Element => {
  const user:any = useSelector((state) => state);
  const { data, get } = useFetch(true);
	const dispatch = useDispatch();
	
  const autoLogin = (id?:string) => {
    get(`api/users/${id}`);
  }

  useEffect(() => {
    const id = Cookies.get(COOKIE_ID);
		if (!user.isLogged && id) {
			autoLogin(id);
      console.log(data);
		}
    if (!user.isLogged && id && data) {
      dispatch({ type: GET_USER, data });
    }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, data])

  return (
      
      <Router>
       <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/signup" exact>
            <Register/>
          </Route>
          <Route path="/profile" exact>
            <Profile/>
          </Route>
        </Switch>
        <Footer/>
      </Router>      
   

  );
};

export default App;
