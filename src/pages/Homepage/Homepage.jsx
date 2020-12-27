import React from 'react';
import styles from './homepage.module.scss';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles['directory-menu']}>
        <div className={styles['menu-item']}>
          <div className={styles.content}>
            <h2 className={styles.title}>Hats</h2>
            <span className={styles.subtitle}>Shop Now</span>
          </div>
        </div>
        <div className={styles['menu-item']}>
          <div className={styles.content}>
            <h2 className={styles.title}>Jackets</h2>
            <span className={styles.subtitle}>Shop Now</span>
          </div>
        </div>
        <div className={styles['menu-item']}>
          <div className={styles.content}>
            <h2 className={styles.title}>Shoes</h2>
            <span className={styles.subtitle}>Shop Now</span>
          </div>
        </div>
        <div className={styles['menu-item']}>
          <div className={styles.content}>
            <h2 className={styles.title}>Women's</h2>
            <span className={styles.subtitle}>Shop Now</span>
          </div>
        </div>
        <div className={styles['menu-item']}>
          <div className={styles.content}>
            <h2 className={styles.title}>Men's</h2>
            <span className={styles.subtitle}>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
