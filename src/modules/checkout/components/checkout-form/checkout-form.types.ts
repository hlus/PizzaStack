export enum PaymentType {
  Cash = 'cash',
  Card = 'card',
}

export const paymentTypeOptions = [
  { label: 'Cash', value: PaymentType.Cash },
  { label: 'Card', value: PaymentType.Card },
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
  [FormField.PaymentType]: PaymentType;
}

export interface UseCheckoutFormOptions {
  callback?: (data: FormValues) => Promise<void>;
}
