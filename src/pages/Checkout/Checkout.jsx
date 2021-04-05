import React from 'react';
import { default as CheckoutItem } from '../../components/CheckoutItem/CheckoutItem.container';
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton';
import styles from './Checkout.module.scss';

const Checkout = ({ cartItems, cartTotal }) => {
  return (
    <div className={styles.checkout}>
      <table className={styles.table}>
        <thead className={styles['table-header']}>
          <tr>
            <th className={styles['table-heading']}>Product</th>
            <th className={styles['table-heading']}>Description</th>
            <th className={styles['table-heading']}>Quantity</th>
            <th className={styles['table-heading']}>Price</th>
            <th className={styles['table-heading']}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length ? renderTableBody(cartItems) : <tr></tr>}
        </tbody>
        <tfoot>
          <tr>
            <td className={styles.total} colSpan="5">
              TOTAL: £{cartTotal}
            </td>
          </tr>
        </tfoot>
      </table>
      <div className={styles['checkout-button']}>
        <StripeCheckoutButton price={cartTotal} />
      </div>
      <div className={styles['test-warning']}>
        * Please use the following test card for payments * <br /> 4242 4242
        4242 4242 - Exp: 01/23 - CVV: 123
      </div>
    </div>
  );
};

function renderTableBody(cartItems) {
  return cartItems.map(item => <CheckoutItem cartItem={item} key={item.id} />);
}

export default Checkout;
