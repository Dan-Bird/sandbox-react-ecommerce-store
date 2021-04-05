import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Checkout from './Checkout';

const GET_ITEMS_AND_TOTAL = gql`
  {
    cartItems @client
    cartTotal @client
  }
`;

const CheckoutContainer = () => (
  <Query query={GET_ITEMS_AND_TOTAL}>
    {({ data: { cartItems, cartTotal } }) => (
      <Checkout cartItems={cartItems} cartTotal={cartTotal} />
    )}
  </Query>
);

export default CheckoutContainer;
