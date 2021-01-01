import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import styles from './HeaderNav.module.scss';
import { ReactComponent as Logo } from '../../assets/crown-logo.svg';
import CartIcon from '../CartIcon/CartIcon';

const HeaderNav = ({ currentUser }) => {
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
    </header>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HeaderNav);
