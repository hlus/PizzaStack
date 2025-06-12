import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Payment_Types_Enum } from '@app/core/types';
import { phoneRegexp } from '@app/common/utils/regex';
import { FormField, FormValues, UseCheckoutFormOptions } from './checkout-form.types';

export const validation = yup.object({
  [FormField.Name]: yup.string().required('Name is required'),
  [FormField.Phone]: yup.string().trim().matches(phoneRegexp, 'Invalid phone number').required('Phone is required'),
  [FormField.Address]: yup.string().required('Address is required'),
  [FormField.Comment]: yup.string().notRequired(),
  [FormField.PaymentType]: yup.string().oneOf(Object.values(Payment_Types_Enum)).required('Payment type is required'),
});

export const useCheckoutForm = (options?: UseCheckoutFormOptions) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    resolver: yupResolver(validation) as Resolver<FormValues>,
    defaultValues: {
      [FormField.Name]: '',
      [FormField.Phone]: '',
      [FormField.Address]: '',
      [FormField.Comment]: '',
      [FormField.PaymentType]: Payment_Types_Enum.Cash,
    },
  });

  const submitForm = async (data: FormValues) => {
    if (options?.callback) {
      try {
        await options.callback(data);
        toast.success('Order created!');
      } catch (error) {
        toast.error('Error creating order');
      }
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { control, onSubmit, reset };
};
