import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight } from 'lodash';
import { gql } from 'apollo-boost';

import CartIcon from './CartIcon';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = ({ data: { itemCount }, toggleCartHidden }) => (
  <CartIcon itemCount={itemCount} toggleCartHidden={toggleCartHidden} />
);

export default flowRight(
  graphql(GET_ITEM_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' })
)(CartIconContainer);
