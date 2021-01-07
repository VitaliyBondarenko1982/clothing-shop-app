import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const itemsCount = useMemo(() => {
    return cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0,
    );
  }, [cartItems]);

  const handleClick = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <CartContainer onClick={handleClick}>
      <ShoppingIcon />
      <ItemCountContainer>{itemsCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
