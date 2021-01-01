import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

const CartIcon = () => {
  return (
    <div className={styles.cart}>
      <ShoppingIcon className={styles['shopping-icon']} />
      <small className={styles['item-count']}>0</small>
    </div>
  );
};

export default CartIcon;
