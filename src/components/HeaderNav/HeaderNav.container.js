import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import HeaderNav from './HeaderNav';

const GET_CLIENT_PROPERTIES = gql`
  {
    cartHidden @client
    currentUser @client
  }
`;

const HeaderNavContainer = () => (
  <Query query={GET_CLIENT_PROPERTIES}>
    {({ data: { cartHidden, currentUser } }) => (
      <HeaderNav hidden={cartHidden} currentUser={currentUser} />
    )}
  </Query>
);

export default HeaderNavContainer;
