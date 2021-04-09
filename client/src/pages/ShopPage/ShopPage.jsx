import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/CollectionsOverview/CollectionsOverviewContainer')
);
const CollectionPageContainer = lazy(() =>
  import('../Collection/CollectionContainer')
);

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />

        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
