import clsx from 'clsx';
import React from 'react';

import { GetMenuItemsForCartQuery } from '@app/core/types';
import { CartItem } from '../cart-item/cart-item.component';
import { useCartItems } from '@app/modules/checkout/hooks/use-cart-items';
import { CartItemListLoading } from '../cart-item-list-loading/cart-item-list-loading.component';

export enum CartSumItemPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

interface Props {
  appendix?: React.ReactNode;
  scrollDisabled?: boolean;
  cartSumItemPosition?: CartSumItemPosition;
}

export const CartList: React.FC<Props> = ({ appendix, scrollDisabled = false, cartSumItemPosition = CartSumItemPosition.BOTTOM }) => {
  const { data, previousData, loading, cartItems } = useCartItems();

  const total = data?.menu.reduce((acc, cartItem) => acc + cartItem.price * cartItems[cartItem.id], 0) ?? 0;

  const renderCartItem = (item: GetMenuItemsForCartQuery['menu'][0]) => (
    <CartItem key={`cart-item-${item.id}`} id={item.id} title={item.title} image={item.image} amount={cartItems[item.id]} price={item.price} />
  );

  if (!data && !previousData && loading) {
    return <CartItemListLoading amount={Object.keys(cartItems).length} />;
  }

  const wrapperClasses = clsx('flex flex-col gap-6', {
    'h-[calc(100%_-_3.25rem)]': !scrollDisabled,
  });

  const listWrapperClasses = clsx('flex flex-col gap-6', {
    'overflow-y-auto': !scrollDisabled,
  });

  const cartSumItemClasses = clsx('text-right text-sm font-medium text-gray-900', {
    'border-t border-gray-200 pt-6': cartSumItemPosition === CartSumItemPosition.BOTTOM,
  });

  const cartSumItem = <div className={cartSumItemClasses}>Total: {total} UAH</div>;

  return (
    <div className={wrapperClasses}>
      {cartSumItemPosition === CartSumItemPosition.TOP && cartSumItem}
      <div className={listWrapperClasses}>{(data || previousData)?.menu.map(renderCartItem)}</div>
      {cartSumItemPosition === CartSumItemPosition.BOTTOM && cartSumItem}
      {appendix}
    </div>
  );
};
