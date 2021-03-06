import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';
import Spinner from '../../components/Spinner/spinner.componnent';

const CollectionOverview = lazy(() =>
  import(
    '../../components/collections-overview/collections-overview.component'
  ),
);
const CollectionPage = lazy(() => import('../collection/collection.component'));

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const isFetchingCollections = useSelector(selectIsCollectionFetching);
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverview isLoading={isFetchingCollections} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPage isLoading={!isCollectionsLoaded} {...props} />
          )}
        />
      </Suspense>
    </div>
  );
};

export default ShopPage;
