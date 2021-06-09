import { NavLink } from 'react-router-dom';
import * as routes from '../../utils/routePaths';

const Navigation = () => {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        <NavLink to={routes.BOOKS} className="p-2 link-secondary">
          Books
        </NavLink>
        <NavLink to={'/U.S.'} className="p-2 link-secondary">
          U.S.
        </NavLink>
        <NavLink to={'/Technology'} className="p-2 link-secondary">
          Technology
        </NavLink>
        <NavLink to={'/Design'} className="p-2 link-secondary">
          Design
        </NavLink>
        <NavLink to={'/Culture'} className="p-2 link-secondary">
          Culture
        </NavLink>
        <NavLink to={'/Business'} className="p-2 link-secondary">
          Business
        </NavLink>
        <NavLink to={'/Politics'} className="p-2 link-secondary">
          Politics
        </NavLink>
        <NavLink to={'/Opinion'} className="p-2 link-secondary">
          Opinion
        </NavLink>
        <NavLink to={'/Science'} className="p-2 link-secondary">
          Science
        </NavLink>
        <NavLink to={'/Health'} className="p-2 link-secondary">
          Health
        </NavLink>
        <NavLink to={'/Style'} className="p-2 link-secondary">
          Style
        </NavLink>
        <NavLink to={'/Travel'} className="p-2 link-secondary">
          Travel
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
