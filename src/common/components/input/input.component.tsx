import clsx from "clsx";
import React, { ComponentProps, useId } from "react";

import { ReactComponent as ExclamationCircleIcon } from "@app/assets/icons/exclamation-circle.svg";

interface Props extends ComponentProps<"input"> {
  label: string;
  error?: string;
}

const nbsp = "\u00A0";

export const Input: React.FC<Props> = ({ label, error, ...rest }) => {
  const inputId = useId();

  const inputClasses = clsx(
    "block border border-gray-300 shadow-sm bg-white rounded-md px-3 py-2 text-sm placeholder-gray-400 outline-none transition-all",
    {
      "border-red-300 focus:border-red-500 text-red-900": error,
    }
  );

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-grey-900 mb-1"
      >
        {label}
      </label>
      <div className="relative inline-block">
        <input id={inputId} className={inputClasses} {...rest} />
        {error && (
          <ExclamationCircleIcon className="absolute right-3 top-2.75" />
        )}
      </div>
      <span className="block text-sm text-red-600">{error || nbsp}</span>
    </div>
  );
};
