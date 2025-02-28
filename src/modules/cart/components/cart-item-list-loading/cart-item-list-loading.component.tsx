import React from 'react';

import { CartItemLoading } from '../cart-item-loading/cart-item-loading.component';

export const CartItemListLoading: React.FC = () => (
  <div className="flex flex-col gap-6">
    <CartItemLoading />
    <CartItemLoading />
    <CartItemLoading />
  </div>
);
