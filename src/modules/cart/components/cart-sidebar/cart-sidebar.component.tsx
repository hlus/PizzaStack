import clsx from 'clsx';
import React from 'react';
import { useReactiveVar } from '@apollo/client';

import { cartState } from '../../store/cart-state';
import { CartItem } from '../cart-item/cart-item.component';
import { Button } from '@app/common/components/button/button.component';
import { cartOpenedState, closeCart } from '../../store/cart-open-state';
import { ReactComponent as PizzaIcon } from '@app/assets/icons/pizza.svg';
import { useOnClickOutside } from '@app/common/hooks/use-on-click-outside.hook';
import { ReactComponent as XMarkSolidIcon } from '@app/assets/icons/x-mark-solid.svg';
import { GetMenuItemsForCartQuery, useGetMenuItemsForCartQuery } from '@app/core/types';

export const CartSidebar: React.FC = () => {
  const sidebar = React.useRef(null);
  const isOpened = useReactiveVar(cartOpenedState);
  const cartItems = useReactiveVar(cartState);

  const { data, previousData } = useGetMenuItemsForCartQuery({ variables: { menuIds: Object.keys(cartItems) } });

  const total = data?.menu.reduce((acc, cartItem) => acc + cartItem.price * cartItems[cartItem.id], 0) ?? 0;

  const renderCartItem = (item: GetMenuItemsForCartQuery['menu'][0]) => (
    <CartItem key={`cart-item-${item.id}`} id={item.id} title={item.title} image={item.image} amount={cartItems[item.id]} price={item.price} />
  );

  const cartClasses = clsx('w-112 h-[calc(100vh_-_3rem)] p-6 shadow-xl fixed z-10 bg-white right-0 top-12 transition-all', {
    'translate-x-full': !isOpened,
  });

  useOnClickOutside(sidebar, () => {
    if (isOpened) {
      closeCart();
    }
  });

  return (
    <div ref={sidebar} className={cartClasses}>
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-medium text-gray-900">Cart</span>
        <button onClick={closeCart}>
          <XMarkSolidIcon className="w-3.5 h-3.5 [&>*]:fill-gray-400" />
        </button>
      </div>
      {Object.keys(cartItems).length === 0 ? (
        <div className="flex w-full h-[calc(100%_-_3.25rem)] border-2 border-dashed border-gray-200 justify-center items-center">
          <div className="flex flex-col items-center">
            <PizzaIcon className="w-28 h-24 [&>*]:fill-gray-400 mb-6" />
            <span className="text-lg font-medium text-gray-900">Cart is empty</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 h-[calc(100%_-_3.25rem)] ">
          <div className="flex flex-col gap-6 overflow-y-auto">{(data || previousData)?.menu.map(renderCartItem)}</div>
          <div className="border-t border-gray-200 pt-6 text-right text-sm font-medium text-gray-900">Total: {total} UAH</div>
          <Button>Checkout</Button>
        </div>
      )}
    </div>
  );
};
