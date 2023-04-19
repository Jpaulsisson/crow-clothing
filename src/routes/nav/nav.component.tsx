import { Outlet, Link } from 'react-router-dom';
import './nav.styles.scss';
import { default as logo } from '../../assets/crown.svg';

function Nav() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/signIn">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
