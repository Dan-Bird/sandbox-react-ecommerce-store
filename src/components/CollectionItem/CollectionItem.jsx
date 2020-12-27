import React from 'react';
import styles from './CollectionItem.module.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <article className={styles['collection-item']}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <footer className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span>£{price}</span>
      </footer>
    </article>
  );
};

export default CollectionItem;
