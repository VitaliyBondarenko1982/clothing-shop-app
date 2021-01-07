import React from 'react';
import { useHistory } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/shop/${title.toLowerCase()}`);
  };

  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={handleClick}>{title}</TitleContainer>
      <PreviewContainer>
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
