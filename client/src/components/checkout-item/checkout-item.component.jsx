import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

  const removeHandleClick = () => {
    dispatch(clearItemFromCart(cartItem));
  };

  const addQuantityHandleClick = () => {
    dispatch(addItem(cartItem));
  };

  const removeQuantityHandleClick = () => {
    dispatch(removeItem(cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div className="arrow" onClick={removeQuantityHandleClick} aria-hidden>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addQuantityHandleClick} aria-hidden>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={removeHandleClick}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
