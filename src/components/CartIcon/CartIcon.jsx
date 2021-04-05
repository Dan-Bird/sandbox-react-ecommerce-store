import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className={styles.cart} onClick={toggleCartHidden}>
      <ShoppingIcon className={styles['shopping-icon']} />
      <small className={styles['item-count']}>{itemCount}</small>
    </div>
  );
};

export default CartIcon;
