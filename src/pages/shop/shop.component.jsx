import React, { useState } from 'react';
import SHOP_DATA from '../../data/shopData';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
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

export default ShopPage;
