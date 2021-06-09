import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthGuestAction } from '../../redux/actions';
import { AUTH_TOKEN } from '../../utils/constant';
import { authSelector } from '../../redux/selectors/auth-selectors';
import * as routes from '../../utils/routePaths';

function Header() {
  const dispatch = useDispatch();

  const authorized = useSelector(authSelector);

  const onLogOut = () => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch(setAuthGuestAction());
  };

  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
          <NavLink to={'/Subscribe'} className="p-2 link-secondary">
            Subscribe
          </NavLink>
        </div>
        <div className="col-4 text-center">
        <input
        className="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
        {!authorized ? (
            <NavLink to={routes.SIGN_UP} className="btn btn-sm btn-outline-secondary">
            Sign up
          </NavLink>
          ) : null}
          {authorized ? (
            <button className="btn btn-sm btn-outline-secondary" onClick={onLogOut} type="button">
            Log Out
          </button>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
