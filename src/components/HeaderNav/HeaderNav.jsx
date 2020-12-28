import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderNav.module.scss';
import { ReactComponent as Logo } from '../../assets/crown-logo.svg';

const HeaderNav = () => {
  return (
    <header className={styles.header}>
      <Link className={styles['logo-container']} to="/">
        <Logo className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <Link className={styles['nav-link']} to="/shop">
          Shop
        </Link>
        <Link className={styles['nav-link']} to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default HeaderNav;
