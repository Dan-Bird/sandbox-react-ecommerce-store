import React from 'react';
import styles from './CheckoutItem.module.scss';

const CheckoutItem = ({
  cartItem: { name, quantity, price, imageUrl },
  ...otherProps
}) => {
  return (
    <tr className={styles['checkout-item']} {...otherProps}>
      <td>
        <img className={styles['item-image']} src={imageUrl} alt="item" />
      </td>
      <td className={styles.name}>{name}</td>
      <td className={styles.quantity}>{quantity}</td>
      <td className={styles.price}>£{price}</td>
      <td>
        <button className={styles['remove-button']}>&#10005;</button>
      </td>
    </tr>
  );
};

export default CheckoutItem;
