import { Payment_Types_Enum } from "@app/core/types";
import { CustomerFront } from "@app/modules/user/types/user";

export const paymentTypeOptions = [
  { label: 'Cash', value: Payment_Types_Enum.Cash },
  { label: 'Card', value: Payment_Types_Enum.Card },
];

export enum FormField {
  Name = 'name',
  Phone = 'phone',
  Address = 'address',
  Comment = 'comment',
  PaymentType = 'paymentType',
}

export interface FormValues {
  [FormField.Name]: string;
  [FormField.Phone]: string;
  [FormField.Address]: string;
  [FormField.Comment]?: string;
  [FormField.PaymentType]: Payment_Types_Enum;
}

export interface UseCheckoutFormOptions {
  callback?: (data: FormValues) => Promise<void>;
}

export interface CheckoutFormProps {
  initialValues?: CustomerFront;
  submitCallback?: UseCheckoutFormOptions['callback'];
}
