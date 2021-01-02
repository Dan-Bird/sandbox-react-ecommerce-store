import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import styles from './CartDropdown.module.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className={styles['cart-dropdown']}>
      <div className={styles['cart-items']}>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
