import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/CartProvider';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className={styles.cart} onClick={toggleHidden}>
      <ShoppingIcon className={styles['shopping-icon']} />
      <small className={styles['item-count']}>{cartItemsCount}</small>
    </div>
  );
};

export default CartIcon;
