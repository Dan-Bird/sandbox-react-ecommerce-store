import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import HeaderNav from './HeaderNav';

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderNavContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {({ data: { cartHidden } }) => <HeaderNav hidden={cartHidden} />}
  </Query>
);

export default HeaderNavContainer;
