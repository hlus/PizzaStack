import clsx from 'clsx';
import React from 'react';
import { AdvancedImage } from '@cloudinary/react';

import { addItemToCart } from '@app/modules/cart/store/cart-state';
import { Button } from '@app/common/components/button/button.component';
import { useCloudinaryImage } from '@app/common/hooks/use-cloudinary-image.hook';

interface Props {
  id: string;
  image: string;
  weight?: number | null;
  title: string;
  ingredients?: string | null;
  price: number;
  fitImage?: boolean;
}

export const MenuItem: React.FC<Props> = ({ id, image, weight, title, ingredients, price, fitImage = false }) => {
  const transformations = ['w_384', 'h_240'];

  if (fitImage) {
    transformations.push('c_pad');
  }

  const imageCld = useCloudinaryImage(image, transformations);

  const titleClasses = clsx('text-xl font-semibold', {
    'mb-2': ingredients,
    'mb-8': !ingredients,
  });

  const handleAddToCart = () => addItemToCart(id);

  return (
    <div className="w-96 shadow-xl rounded-2xl bg-white">
      <div className="relative">
        <AdvancedImage cldImg={imageCld} width={384} height={240} className="rounded-t-2xl" />
        {weight && <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">{weight} г</span>}
      </div>
      <div className="flex flex-col justify-between h-60 p-8">
        <div>
          <h2 className={titleClasses}>{title}</h2>
          {ingredients && <p className="mb-8 line-clamp-3">{ingredients}</p>}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">{price} грн.</span>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};
