import React from 'react';
import { useSelector } from 'react-redux';
import './_collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForOverview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForOverview);

  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};

export default CollectionsOverview;
