import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import { RadioInput } from '../radio-input/radio-input.component';

export interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps extends Partial<ControllerRenderProps<any, any>> {
  name: string;
  options: RadioOption[];
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(({ options, name, onChange, value }, ref) => {
  const renderOption = (option: RadioOption) => (
    <RadioInput key={`${name}-${option.value}`} {...option} name={name} onChange={onChange} defaultChecked={value === option.value} />
  );

  return <div ref={ref}>{options.map(renderOption)}</div>;
});
