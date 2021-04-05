import React from 'react';
import styles from './CheckoutItem.module.scss';

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
  ...otherProps
}) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <tr className={styles['checkout-item']} {...otherProps}>
      <td>
        <img className={styles['item-image']} src={imageUrl} alt="item" />
      </td>
      <td className={styles.name}>{name}</td>
      <td>
        <button className={styles.button} onClick={() => removeItem(cartItem)}>
          &#10094;
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button className={styles.button} onClick={() => addItem(cartItem)}>
          &#10095;
        </button>
      </td>
      <td className={styles.price}>£{price}</td>
      <td className={styles['remove-column']}>
        <button className={styles.button} onClick={() => clearItem(cartItem)}>
          &#10005;
        </button>
      </td>
    </tr>
  );
};

export default CheckoutItem;
