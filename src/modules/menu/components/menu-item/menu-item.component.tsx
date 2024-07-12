import clsx from "clsx";
import React from "react";
import { AdvancedImage } from "@cloudinary/react";

import { cloudinary } from "@app/core/cloudinary";

interface Props {
  image: string;
  weight?: number | null;
  title: string;
  ingredients?: string | null;
  price: number;
  fitImage?: boolean;
}

export const MenuItem: React.FC<Props> = ({
  image,
  weight,
  title,
  ingredients,
  price,
  fitImage = false,
}) => {
  const imageCld = cloudinary.image(image);
  const transformations = ["w_384", "h_240", "dpr_2.0"];

  if (fitImage) {
    transformations.push("c_pad");
  }

  imageCld.addTransformation(transformations.join(","));

  const titleClasses = clsx("text-xl font-semibold", {
    "mb-2": ingredients,
    "mb-8": !ingredients,
  });

  return (
    <div className="w-96 shadow-xl rounded-2xl bg-white">
      <div className="relative">
        <AdvancedImage
          cldImg={imageCld}
          width={384}
          height={240}
          className="rounded-t-2xl"
        />
        {weight && (
          <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
            {weight} г
          </span>
        )}
      </div>
      <div className="p-8">
        <h2 className={titleClasses}>{title}</h2>
        {ingredients && <p className="mb-8">{ingredients}</p>}
        <span className="text-xl font-semibold">{price} грн.</span>
      </div>
    </div>
  );
};
