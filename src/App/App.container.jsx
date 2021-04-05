import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import App from './App';

const SET_CURRENT_USER = gql`
  mutation SetCurrentUser($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

const AppContainer = () => (
  <Mutation mutation={SET_CURRENT_USER}>
    {setCurrentUser => (
      <Query query={GET_CURRENT_USER}>
        {({ data: { currentUser } }) => (
          <App currentUser={currentUser} setCurrentUser={setCurrentUser} />
        )}
      </Query>
    )}
  </Mutation>
);

export default AppContainer;
