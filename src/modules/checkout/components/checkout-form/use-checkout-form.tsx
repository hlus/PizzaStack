import * as yup from 'yup';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { phoneRegexp } from '@app/common/utils/regex';
import { FormField, FormValues, PaymentType, UseCheckoutFormOptions } from './checkout-form.types';

export const validation = yup.object({
  [FormField.Name]: yup.string().required('Name is required'),
  [FormField.Phone]: yup.string().trim().matches(phoneRegexp, 'Invalid phone number').required('Phone is required'),
  [FormField.Address]: yup.string().required('Address is required'),
  [FormField.Comment]: yup.string().notRequired(),
  [FormField.PaymentType]: yup.string().oneOf(Object.values(PaymentType)).required('Payment type is required'),
});

export const useCheckoutForm = (options?: UseCheckoutFormOptions) => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(validation) as Resolver<FormValues>,
    defaultValues: {
      [FormField.Name]: '',
      [FormField.Phone]: '',
      [FormField.Address]: '',
      [FormField.Comment]: '',
      [FormField.PaymentType]: PaymentType.Cash,
    },
  });

  const submitForm = async (data: FormValues) => {
    if (options?.callback) {
      await options.callback(data);
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { control, onSubmit };
};
