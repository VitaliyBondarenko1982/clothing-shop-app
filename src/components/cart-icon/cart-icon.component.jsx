import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './_cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

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
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

export default CartIcon;
