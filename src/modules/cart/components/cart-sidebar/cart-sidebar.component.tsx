import React from 'react';

import { ReactComponent as PizzaIcon } from '@app/assets/icons/pizza.svg';
import { ReactComponent as XMarkSolidIcon } from '@app/assets/icons/x-mark-solid.svg';

export const CartSidebar: React.FC = () => {
  return (
    <div className="w-112 h-screen p-6 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-medium text-gray-900">Cart</span>
        <button>
          <XMarkSolidIcon className="w-3.5 h-3.5 [&>*]:fill-gray-400" />
        </button>
      </div>
      <div className="flex w-full h-[calc(100%_-_3.25rem)] border-2 border-dashed border-gray-200 justify-center items-center">
        <div className="flex flex-col items-center">
          <PizzaIcon className="w-28 h-24 [&>*]:fill-gray-400 mb-6" />
          <span className="text-lg font-medium text-gray-900">Cart is empty</span>
        </div>
      </div>
    </div>
  );
};
