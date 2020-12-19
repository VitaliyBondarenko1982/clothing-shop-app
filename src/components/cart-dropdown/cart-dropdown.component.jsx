import React from 'react';
import { useSelector } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './_cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
