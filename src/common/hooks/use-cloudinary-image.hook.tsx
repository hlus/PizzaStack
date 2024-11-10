import { cloudinary } from '@app/core/cloudinary';

export const useCloudinaryImage = (cloudinaryImage: string, transformations: string[]) => {
  const image = cloudinary.image(cloudinaryImage);

  image.addTransformation([...transformations, 'dpr_2.0'].join(','));

  return image;
};
