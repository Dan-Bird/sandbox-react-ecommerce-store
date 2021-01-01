import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import styles from './HeaderNav.module.scss';
import { ReactComponent as Logo } from '../../assets/crown-logo.svg';

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
            className={styles['sign-out-button']}
            onClick={() => auth.signOut()}
          >
            Sign Out
          </button>
        ) : (
          <Link
            className={`${styles['nav-link']} ${styles['nav-link--sign-in']}`}
            to="/signin"
          >
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HeaderNav);
