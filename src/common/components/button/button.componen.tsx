import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export enum ButtonSize {
  SM,
  Base,
}

export enum ButtonVariant {
  Primary,
  Danger,
}

interface Props extends ComponentProps<'button'> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button: React.FC<Props> = ({ size = ButtonSize.Base, variant = ButtonVariant.Primary, children, ...rest }) => {
  const buttonClasses = clsx(`text-sm text-gray-900  px-4 rounded-md transition-all`, {
    'py-2': size === ButtonSize.Base,
    'py-0.5': size === ButtonSize.SM,
    'opacity-50 cursor-not-allowed': rest.disabled,
    'bg-amber-400 hover:bg-amber-500 hover:border-amber-500 disabled:hover:bg-amber-400 disabled:hover:border-amber-400':
      variant === ButtonVariant.Primary,
    'bg-red-400 hover:bg-red-500 hover:border-red-500 disabled:hover:bg-red-400 disabled:hover:border-red-400': variant === ButtonVariant.Danger,
  });

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};
