import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './_checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

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
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${totalPrice}</span>
      </div>
      <div className="test-warning">
        *Please use following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};

export default CheckoutPage;
