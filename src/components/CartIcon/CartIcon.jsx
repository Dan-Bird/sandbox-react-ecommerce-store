import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className={styles.cart} onClick={toggleCartHidden}>
      <ShoppingIcon className={styles['shopping-icon']} />
      <small className={styles['item-count']}>0</small>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
