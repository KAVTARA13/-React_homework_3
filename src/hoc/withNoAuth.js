import { Redirect } from 'react-router';
import { AUTH_TOKEN } from '../utils/constant';
import { HOME } from '../utils/routePaths';

export const withNoAuth = (Component) => {
  const WithNoAuth = (props) => {
    const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
    if (token) return <Redirect to={HOME} />;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };

  return WithNoAuth;
};

export default withNoAuth;