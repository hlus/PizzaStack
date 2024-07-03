import { Cloudinary } from "@cloudinary/url-gen";

export const cloudinary = new Cloudinary({
  cloud: { cloudName: process.env.REACT_APP_CLOUDINARY_NAME },
});
