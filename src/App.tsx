import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import Reducer from './stores';
import Login from './pages/Login';
import Register from './pages/Register';
import Profil from './pages/Profil';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <Provider store={Reducer}>
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
          <PrivateRoute path="/profil" component={Profil} />
        </Switch>
      </Router>
    </Provider> 
  );
};

export default App;
