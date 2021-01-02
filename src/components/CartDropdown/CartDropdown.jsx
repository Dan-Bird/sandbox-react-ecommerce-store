import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import styles from './CartDropdown.module.scss';

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className={styles['cart-dropdown']}>
      <div className={styles['cart-items']}>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className={styles['empty-message']}>Your cart is empty!</span>
        )}
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>
        Go To Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
