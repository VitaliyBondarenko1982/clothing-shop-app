import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';
import Spinner from '../../components/Spinner/spinner.componnent';

const CollectionPage = ({ match, isLoading }) => {
  const collection = useSelector(selectCollection(match.params.collectionId));

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <CollectionPageContainer>
          <CollectionTitle>{collection.title}</CollectionTitle>
          <CollectionItemsContainer>
            {collection.items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </CollectionItemsContainer>
        </CollectionPageContainer>
      )}
    </>
  );
};

export default CollectionPage;
