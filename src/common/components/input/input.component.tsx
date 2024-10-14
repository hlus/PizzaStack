import clsx from "clsx";
import React, { ComponentProps, useId } from "react";

import { ReactComponent as ExclamationCircleIcon } from "@app/assets/icons/exclamation-circle.svg";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  error?: string;
  fullWidth?: boolean;
}

const nbsp = "\u00A0";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth, ...rest }, ref) => {
    const inputId = useId();

    const inputClasses = clsx(
      "block border border-gray-300 shadow-sm bg-white rounded-md px-3 py-2 text-sm placeholder-gray-400 outline-none transition-all",
      {
        "border-red-300 focus:border-red-500 text-red-900": error,
        "w-full": fullWidth,
      }
    );

    const inputWrapperClasses = clsx("relative inline-block", {
      "w-full": fullWidth,
    });

    return (
      <div>
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-grey-900 mb-1"
        >
          {label}
        </label>
        <div className={inputWrapperClasses}>
          <input ref={ref} id={inputId} className={inputClasses} {...rest} />
          {error && (
            <ExclamationCircleIcon className="absolute right-3 top-2.75" />
          )}
        </div>
        <span className="block text-sm text-red-600">{error || nbsp}</span>
      </div>
    );
  }
);
