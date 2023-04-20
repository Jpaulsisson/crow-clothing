import { Outlet, Link } from 'react-router-dom';
import './nav.styles.scss';
import { default as logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { useContext } from 'react';
import { signOutUser } from '../../utils/firebase/firebase.utils'

function Nav() {

  const { currentUser } = useContext(UserContext);

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
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutUser}>Sign Out</span>
            ) : (
            <Link className="nav-link" to="/auth">
            Sign in
          </Link>)
          }
          
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
