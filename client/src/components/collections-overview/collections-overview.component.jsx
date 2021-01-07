import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForOverview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForOverview);

  return (
    <CollectionsOverviewContainer>
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
