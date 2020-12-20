import React from 'react';
import './_checkout-item.styles.scss';
import { useDispatch } from 'react-redux';
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions';

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
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeQuantityHandleClick} aria-hidden>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addQuantityHandleClick} aria-hidden>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={removeHandleClick}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
