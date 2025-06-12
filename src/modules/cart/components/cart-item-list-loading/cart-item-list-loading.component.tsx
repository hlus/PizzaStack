import React from 'react';

import { CartItemLoading } from '../cart-item-loading/cart-item-loading.component';

interface Props {
  amount?: number;
}

export const CartItemListLoading: React.FC<Props> = ({ amount = 3 }) => {
  const loadingItems = Array.from({ length: amount });

  const renderLoadingItem = (_: unknown, index: number) => <CartItemLoading key={`cart-item-loading-${index}`} />;

  return <div className="flex flex-col gap-6">{loadingItems.map(renderLoadingItem)}</div>;
};
