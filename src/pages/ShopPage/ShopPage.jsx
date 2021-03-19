import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import Collection from '../Collection/Collection';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match, hasCollectionLoaded, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  useEffect(() => {
    console.log(`isCollectionLoaded: `, hasCollectionLoaded);
  });

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner
            isLoading={!hasCollectionLoaded}
            {...props}
          />
        )}
      />

      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionWithSpinner isLoading={!hasCollectionLoaded} {...props} />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  hasCollectionLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
