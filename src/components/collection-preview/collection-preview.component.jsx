import React from 'react';
import './_collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items.slice(0, 4).map((item) => (
        <CollectionItem
          key={item.id}
          id={item.id}
          price={item.price}
          name={item.name}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
