import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { COOKIE_NAME } from '../../config/config';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      Cookies.get(COOKIE_NAME) ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    )
  )} />
);

export default PrivateRoute;