import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import styles from './CollectionItem.module.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

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
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </article>
  );
};

export default CollectionItem;
