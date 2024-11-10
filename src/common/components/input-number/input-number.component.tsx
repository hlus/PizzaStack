import React, { ComponentProps, useId } from 'react';

import { InputNumberSize } from './input-number.types';
import { useInputNumberClasses } from './use-input-number-classes';
import { ReactComponent as Plus16Icon } from '@app/assets/icons/plus16.svg';
import { ReactComponent as Minus16Icon } from '@app/assets/icons/minus16.svg';
import { ReactComponent as ExclamationCircleIcon } from '@app/assets/icons/exclamation-circle.svg';

interface InputNumberProps extends Omit<ComponentProps<'input'>, 'size' | 'value'> {
  value?: number;
  label?: string;
  error?: string;
  fullWidth?: boolean;
  size?: InputNumberSize;
  hideError?: boolean;

  setValue?: (value: number) => void;
}

const nbsp = '\u00A0';

export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ label, error, fullWidth, size = InputNumberSize.Base, hideError, setValue, onFocus, onBlur, ...rest }, ref) => {
    const inputId = useId();

    const [isFocused, setIsFocused] = React.useState(false);

    const { inputClasses, buttonMinusClasses, buttonPlusClasses, iconsClasses, inputWrapperClasses, errorIconClasses } = useInputNumberClasses({
      size,
      error,
      fullWidth,
      isFocused,
      hideError,
    });

    const handleInputFocus: React.FocusEventHandler<HTMLInputElement> = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      if (onFocus) {
        onFocus(e);
      }

      setIsFocused(true);
    };
    const handleInputBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
      if (onBlur) {
        onBlur(e);
      }

      setIsFocused(false);
    };

    const handleDecrement = () => {
      if (setValue && rest.value) {
        setValue(rest.value - 1);
      }
    };

    const handleIncrement = () => {
      if (setValue && rest.value) {
        setValue(rest.value + 1);
      }
    };

    return (
      <div>
        <label htmlFor={inputId} className="block text-sm font-medium text-grey-900 mb-1">
          {label}
        </label>
        <div className={inputWrapperClasses}>
          <button className={buttonMinusClasses} onClick={handleDecrement}>
            <Minus16Icon className={iconsClasses} />
          </button>
          <input ref={ref} id={inputId} className={inputClasses} type="number" onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest} />
          {error && <ExclamationCircleIcon className={errorIconClasses} />}
          <button className={buttonPlusClasses} onClick={handleIncrement}>
            <Plus16Icon className={iconsClasses} />
          </button>
        </div>
        {!hideError && <span className="block text-sm text-red-600">{error || nbsp}</span>}
      </div>
    );
  }
);
