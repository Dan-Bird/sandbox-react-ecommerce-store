import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './MenuItem.module.scss';

const MenuItem = ({ title, imageUrl, isLarge, history, linkUrl, match }) => {
  const handleClick = () => history.push(`${match.url}${linkUrl}`);

  return (
    <div
      className={`${styles['menu-item']} ${
        isLarge ? styles['menu-item--large'] : null
      }`}
      onClick={handleClick}
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

export default withRouter(MenuItem);
