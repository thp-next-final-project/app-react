import { 
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import Cookies from 'js-cookie';
import { COOKIE_ID } from './config/config';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from './hooks/useFetch';
import { useEffect } from 'react';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { GET_USER } from './stores/actions';
import { Navbar } from './components/layout/nav';
import { Footer } from './components/layout/footer';
import Home from './pages/Home';

const App = (): JSX.Element => {
  const user:any = useSelector((state) => state);
  const { data, get } = useFetch(true);
	const dispatch = useDispatch();

  const autoLogin = () => {
    const id = Cookies.get(COOKIE_ID);
    get(`api/users/${id}`);
  }
  useEffect(() => {
		if (!user.isLogged) {
			autoLogin();
      console.log(data);
		}
    if (!user.isLogged && data) {
      dispatch({ type: GET_USER, data });
    }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, data])
  return (
    <>
      { !user.isLogged &&
        <Navbar/>
      }
      <Router>
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
      </Router>
      <Footer/>
    </>

  );
};

export default App;
