import React, { useContext } from 'react';
import CurrentUserContext from '../../contexts/current-user/current-user-context';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import styles from './HeaderNav.module.scss';
import { ReactComponent as Logo } from '../../assets/crown-logo.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const HeaderNav = ({ hidden }) => {
  const currentUser = useContext(CurrentUserContext);

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

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(HeaderNav);
