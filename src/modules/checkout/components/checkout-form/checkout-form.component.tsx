import React from 'react';
import { Controller } from 'react-hook-form';

import { useCheckoutForm } from './use-checkout-form';
import { Input } from '@app/common/components/input/input.component';
import { FormField, paymentTypeOptions } from './checkout-form.types';
import { Button } from '@app/common/components/button/button.component';
import { TextArea } from '@app/common/components/text-area/text-area.component';
import { RadioGroup } from '@app/common/components/radio-group/radio-group.component';

export const CheckoutForm: React.FC = () => {
  const { control, onSubmit } = useCheckoutForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <Controller
        control={control}
        name={FormField.Name}
        render={({ field, fieldState }) => (
          <Input fullWidth {...field} label="Name" placeholder="Enter your name" error={fieldState.error?.message} />
        )}
      />
      <Controller
        control={control}
        name={FormField.Phone}
        render={({ field, fieldState }) => (
          <Input fullWidth {...field} label="Phone" placeholder="Enter your phone" error={fieldState.error?.message} />
        )}
      />
      <Controller
        control={control}
        name={FormField.Address}
        render={({ field, fieldState }) => (
          <Input fullWidth {...field} label="Address" placeholder="Enter your address" error={fieldState.error?.message} />
        )}
      />
      <Controller
        control={control}
        name={FormField.Comment}
        render={({ field }) => <TextArea fullWidth {...field} label="Comment" placeholder="Enter your comment" />}
      />
      <Controller
        control={control}
        name={FormField.PaymentType}
        render={({ field }) => <RadioGroup label="Payment Type" options={paymentTypeOptions} {...field} />}
      />
      <Button type="submit" fullWidth>
        Place Order
      </Button>
    </form>
  );
};
