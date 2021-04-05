import React from 'react';
import { gql } from 'apollo-boost';

import CollectionPage from './Collection';
import Spinner from '../../components/Spinner/Spinner';
import { Query } from 'react-apollo';

const GET_COLLECTIONS_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionContainer = ({ match }) => {
  return (
    <Query
      query={GET_COLLECTIONS_BY_TITLE}
      variables={{ title: match.params.collectionId }}
    >
      {({ loading, data }) => {
        if (loading) return <Spinner />;
        const { getCollectionsByTitle } = data;
        return <CollectionPage collection={getCollectionsByTitle} />;
      }}
    </Query>
  );
};

export default CollectionContainer;
