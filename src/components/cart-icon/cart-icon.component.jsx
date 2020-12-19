import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './_cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
