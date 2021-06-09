import { Redirect } from 'react-router';
import { AUTH_TOKEN } from '../utils/constant';
import { HOME } from '../utils/routePaths';

export const withAuthProtected = (Component) => {
  const WithAuthProtected = (props) => {
    const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
    if (!token) return <Redirect to={HOME} />;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };

  return WithAuthProtected;
};

export default withAuthProtected;