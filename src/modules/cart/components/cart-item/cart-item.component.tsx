import React from 'react';
import { AdvancedImage } from '@cloudinary/react';

import { changeItemAmount, removeItemFromCart } from '../../store/cart-state';
import { useCloudinaryImage } from '@app/common/hooks/use-cloudinary-image.hook';
import { InputNumber } from '@app/common/components/input-number/input-number.component';
import { InputNumberSize } from '@app/common/components/input-number/input-number.types';
import { Button, ButtonSize, ButtonVariant } from '@app/common/components/button/button.component';

interface CartItemProps {
  id: string;
  title: string;
  image: string;
  amount: number;
  price: number;
}

export const CartItem: React.FC<CartItemProps> = ({ id, title, image, amount, price }) => {
  const imageCld = useCloudinaryImage(image, ['w_128', 'h_128', 'c_fill']);

  const handleDelete = () => removeItemFromCart(id);

  const handleChangeAmount = (newValue: number) => changeItemAmount(id, newValue);

  return (
    <div className="border-t border-gray-200 pt-6">
      <div className="flex gap-6">
        <AdvancedImage cldImg={imageCld} width={128} height={128} className="rounded-md" />
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-gray-900">{title}</span>
            <span className="text-xs font-medium text-gray-500">
              Price: {amount} x {price} UAH = {amount * price} UAH
            </span>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="h-auto w-24">
              <InputNumber readOnly hideError fullWidth value={amount ?? 0} label="Qty" size={InputNumberSize.Sm} setValue={handleChangeAmount} />
            </div>
            <Button variant={ButtonVariant.Danger} size={ButtonSize.SM} onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
