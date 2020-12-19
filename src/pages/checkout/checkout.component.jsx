import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './_checkout.styles.scss';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0,
    );
  }, [cartItems]);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => cartItem.name)}
      <div className="total">
        <span>Total: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
