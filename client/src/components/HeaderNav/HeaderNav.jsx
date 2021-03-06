import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import styles from './HeaderNav.module.scss';
import { ReactComponent as Logo } from '../../assets/crown-logo.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const HeaderNav = ({ currentUser, hidden, signOutStart }) => {
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
            onClick={signOutStart}
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
