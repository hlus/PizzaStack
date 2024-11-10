import { clsx } from 'clsx';

import { InputNumberSize } from './input-number.types';

interface InputNumberClassesDependantValues {
  size: InputNumberSize;
  error?: string;
  fullWidth?: boolean;
  isFocused?: boolean;
  hideError?: boolean;
}

export const useInputNumberClasses = ({ size, error, fullWidth, isFocused, hideError }: InputNumberClassesDependantValues) => {
  const inputClasses = clsx('block border border-gray-300 shadow-sm bg-white rounded-md text-sm placeholder-gray-400 outline-none transition-all', {
    'py-2 px-15': size === InputNumberSize.Base,
    'pr-16': size === InputNumberSize.Base && !hideError,
    'py-0.5 px-9': size === InputNumberSize.Sm,
    'pr-12': size === InputNumberSize.Sm && !hideError,
    'border-red-300 focus:border-red-500 text-red-900': error,
    'w-full': fullWidth,
  });

  const commonButtonClasses = clsx('absolute top-px text-center transition', {
    'w-9 h-9': size === InputNumberSize.Base,
    'w-6 h-6': size === InputNumberSize.Sm,
    'border-gray-300': !error,
    'border-red-500': error && isFocused,
    'border-red-300': error && !isFocused,
  });
  const buttonMinusClasses = clsx('border-r', commonButtonClasses);
  const buttonPlusClasses = clsx('right-0 border-l', commonButtonClasses);
  const iconsClasses = clsx('mx-auto transition-all', {
    'w-3 h-3': size === InputNumberSize.Sm,
    '[&>*]:stroke-gray-400': !error,
    '[&>*]:stroke-red-500': error && isFocused,
    '[&>*]:stroke-red-400': error && !isFocused,
  });

  const inputWrapperClasses = clsx('relative inline-block', {
    'w-full': fullWidth,
  });

  const errorIconClasses = clsx('absolute', {
    'top-2.75 right-12': size === InputNumberSize.Base,
    'top-1.25 right-8': size === InputNumberSize.Sm,
  });

  return {
    inputClasses,
    buttonMinusClasses,
    buttonPlusClasses,
    iconsClasses,
    inputWrapperClasses,
    errorIconClasses,
  };
};
