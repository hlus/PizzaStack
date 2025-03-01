import clsx from 'clsx';
import React, { ComponentProps, useId } from 'react';

import { ReactComponent as ExclamationCircleIcon } from '@app/assets/icons/exclamation-circle.svg';

interface TextAreaProps extends ComponentProps<'textarea'> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const nbsp = '\u00A0';

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label, error, fullWidth, ...rest }, ref) => {
  const inputId = useId();

  const textAreaClasses = clsx(
    `block border border-gray-300 shadow-sm bg-white rounded-md pl-3 pr-8 py-2 text-sm placeholder-gray-400 outline-none transition-all
     disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed resize-none`,
    {
      'border-red-300 focus:border-red-500 text-red-900': error,
      'w-full': fullWidth,
    }
  );

  const inputWrapperClasses = clsx('relative inline-block', { 'w-full': fullWidth });

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-grey-900 mb-1">
        {label}
      </label>
      <div className={inputWrapperClasses}>
        <textarea ref={ref} id={inputId} className={textAreaClasses} rows={7} {...rest} />
        {error && <ExclamationCircleIcon className="absolute right-3 top-2.75" />}
      </div>
      <span className="block text-sm text-red-600">{error || nbsp}</span>
    </div>
  );
});
