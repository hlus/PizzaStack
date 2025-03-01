import React from 'react';
import clsx from 'clsx';

interface RadioInputProps extends React.ComponentProps<'input'> {
  label?: string;
}

export const RadioInput: React.FC<RadioInputProps> = ({ label, ...rest }) => {
  const radioId = React.useId();

  const labelClasses = clsx(
    `relative before:content-[''] before:relative before:top-0.5 before:inline-block before:h-4 before:w-4 before:rounded-full before:border before:border-gray-300 before:mr-3
     before:bg-white before:box-border before:transition-all before:peer-checked:border-amber-400 before:peer-checked:border-5`
  );

  return (
    <div>
      <input type="radio" id={radioId} className="hidden peer" {...rest} />
      <label htmlFor={radioId} className={labelClasses}>
        {label}
      </label>
    </div>
  );
};
