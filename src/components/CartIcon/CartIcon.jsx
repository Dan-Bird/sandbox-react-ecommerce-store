import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
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

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulated, currentItem) => accumulated + currentItem.quantity,
    0
  ),
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
