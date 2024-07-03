import React from "react";
import { AdvancedImage } from "@cloudinary/react";

import { cloudinary } from "@app/core/cloudinary";

interface Props {
  image: string;
  weight: number;
  title: string;
  ingredients: string;
  price: number;
}

export const MenuItem: React.FC<Props> = ({
  image,
  weight,
  title,
  ingredients,
  price,
}) => {
  const imageCloud = cloudinary
    .image(image)
    .addTransformation("c_fill,w_384,h_240");

  return (
    <div className="w-96 shadow-xl rounded-2xl bg-white">
      <div className="relative">
        <AdvancedImage cldImg={imageCloud} width={384} height={240} className="rounded-t-2xl"/>
        <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
          {weight} г
        </span>
      </div>
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-8">{ingredients}</p>
        <span className="text-xl font-semibold">{price} грн.</span>
      </div>
    </div>
  );
};
