import React from 'react';
import { Route } from 'react-router-dom';
import { default as CollectionsOverview } from '../../components/CollectionsOverview/CollectionsOverview.container';
import { default as Collection } from '../Collection/Collection.container';

const Shop = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`}>
        <CollectionsOverview />
      </Route>

      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
