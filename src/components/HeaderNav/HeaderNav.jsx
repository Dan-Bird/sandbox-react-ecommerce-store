import React, { useContext } from 'react';
import CurrentUserContext from '../../contexts/current-user/current-user-context';
import { CartContext } from '../../providers/cart/CartProvider';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import styles from './HeaderNav.module.scss';
import { ReactComponent as Logo } from '../../assets/crown-logo.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const HeaderNav = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

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
