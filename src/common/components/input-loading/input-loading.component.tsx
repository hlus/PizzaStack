import clsx from 'clsx';
import React from 'react';

export enum InputLoadingSize {
  Sm = 'small',
  Base = 'base',
}

interface Props {
  size?: InputLoadingSize;
}

export const InputLoading: React.FC<Props> = ({ size = InputLoadingSize.Base }) => {
  const inputLoadingClasses = clsx('w-full bg-gray-200 rounded-full', {
    'h-10': size === InputLoadingSize.Base,
    'h-6': size === InputLoadingSize.Sm,
  });

  return (
    <div>
      <div className="w-16 h-5 bg-gray-200 rounded-full mb-1" />
      <div className={inputLoadingClasses} />
    </div>
  );
};
