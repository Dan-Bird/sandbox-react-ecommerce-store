import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/CartProvider';
import styles from './CheckoutItem.module.scss';

const CheckoutItem = ({ cartItem, ...otherProps }) => {
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  const { name, quantity, price, imageUrl } = cartItem;

  const handleClearItem = () => clearItemFromCart(cartItem);
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

export default CheckoutItem;
