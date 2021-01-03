import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';
import styles from './CheckoutItem.module.scss';

const CheckoutItem = ({ cartItem, clearItem, ...otherProps }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <tr className={styles['checkout-item']} {...otherProps}>
      <td>
        <img className={styles['item-image']} src={imageUrl} alt="item" />
      </td>
      <td className={styles.name}>{name}</td>
      <td className={styles.quantity}>{quantity}</td>
      <td className={styles.price}>£{price}</td>
        <button className={styles.button} onClick={() => clearItem(cartItem)}>
          &#10005;
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
