
import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import Reducer from './stores';
import Login  from './pages/Login';
import Register from './pages/Register';
import Profil from './pages/Profil';
import PrivateRoute from './components/PrivateRoute';
import { Navbar } from './components/layout/nav/index';
import { Footer } from './components/layout/footer/index';
import { Homepage } from './pages/homepage/index';

const App = (): JSX.Element => {
  return (
    <Provider store={Reducer}>
     <Navbar/>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage/>
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
      <Footer/>
    </Provider> 

  );
};

export default App;
