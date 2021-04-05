import React from 'react';
import { withRouter } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import styles from './CartDropdown.module.scss';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const handleClick = () => {
    history.push('/checkout');
    toggleCartHidden();
  };

  return (
    <div className={styles['cart-dropdown']}>
      <div className={styles['cart-items']}>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className={styles['empty-message']}>Your cart is empty!</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>Go To Checkout</CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
