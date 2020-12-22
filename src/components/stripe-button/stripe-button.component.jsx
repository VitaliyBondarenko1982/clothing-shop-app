import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51I1DUrIKfdhj9qTFnsAlbZWXRcaQjSWwBjHjy8Gvw4xYZzcPuoWdvAO8AoPylmEAECTPt9htqWRmFzLjP8Vn4UpB00WK2fWPkh';

  const onToken = (token) => {
    console.log('Payment Successful', token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      shippingAddress
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
