import React, { useContext } from 'react';
import CartContext from '../../contexts/cart/cart-context';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

const CartIcon = ({ itemCount }) => {
  const { toggleHidden } = useContext(CartContext);

  return (
    <div className={styles.cart} onClick={() => toggleHidden()}>
      <ShoppingIcon className={styles['shopping-icon']} />
      <small className={styles['item-count']}>{itemCount}</small>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
