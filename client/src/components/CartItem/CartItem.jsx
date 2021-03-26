import React from 'react';
import styles from './CartItem.module.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className={styles['cart-item']}>
      <img className={styles['item-image']} src={imageUrl} alt="" />
      <div className={styles['item-details']}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x £{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
