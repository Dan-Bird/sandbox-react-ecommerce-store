import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
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
              TOTAL: ${cartTotal}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

function renderTableBody(cartItems) {
  return cartItems.map(item => <CheckoutItem cartItem={item} key={item.id} />);
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
