import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';
import styles from './CheckoutItem.module.scss';

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
  ...otherProps
}) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const handleClearItem = () => clearItem(cartItem);
  const handleAddItem = () => addItem(cartItem);
  const handleRemoveItem = () => removeItem(cartItem);

  return (
    <tr className={styles['checkout-item']} {...otherProps}>
      <td>
        <img className={styles['item-image']} src={imageUrl} alt="item" />
      </td>
      <td className={styles.name}>{name}</td>
      <td>
        <button className={styles.button} onClick={handleRemoveItem}>
          &#10094;
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button className={styles.button} onClick={handleAddItem}>
          &#10095;
        </button>
      </td>
      <td className={styles.price}>£{price}</td>
      <td className={styles['remove-column']}>
        <button className={styles.button} onClick={handleClearItem}>
          &#10005;
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
