import React from 'react';
import styles from './MenuItem.module.scss';

const MenuItem = ({ title, imageUrl, isLarge }) => {
  return (
    <div
      className={`${styles['menu-item']} ${
        isLarge ? styles['menu-item--large'] : null
      }`}
    >
      <div
        className={styles['background-image']}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.subtitle}>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
