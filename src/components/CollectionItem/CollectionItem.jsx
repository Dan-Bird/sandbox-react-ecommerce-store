import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/CartProvider';
import CustomButton from '../CustomButton/CustomButton';
import styles from './CollectionItem.module.scss';

const CollectionItem = ({ item }) => {
  const { addItem } = useContext(CartContext);
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
