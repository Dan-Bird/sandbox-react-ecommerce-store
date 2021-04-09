import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import styles from './HeaderNav.module.scss';
import { ReactComponent as Logo } from '../../assets/crown-logo.svg';
import { default as CartIcon } from '../CartIcon/CartIcon.container';
import { default as CartDropdown } from '../CartDropdown/CartDropdown.container';

const HeaderNav = ({ currentUser, hidden }) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <Link className={styles['nav-link']} to="/shop">
          Shop
        </Link>
        <Link className={styles['nav-link']} to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <button
            className={`${styles['nav-link']} ${styles['sign-out-button']}`}
            onClick={() => auth.signOut()}
          >
            Sign Out
          </button>
        ) : (
          <Link className={styles['nav-link']} to="/signin">
            Sign In
          </Link>
        )}

        <CartIcon />
      </nav>
      {!hidden && <CartDropdown />}
    </header>
  );
};

export default HeaderNav;
