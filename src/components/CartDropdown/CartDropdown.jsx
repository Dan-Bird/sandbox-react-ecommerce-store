import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import styles from './CartDropdown.module.scss';

const CartDropdown = () => {
  return (
    <div className={styles['cart-dropdown']}>
      <div className={styles['cart-items']} />
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
