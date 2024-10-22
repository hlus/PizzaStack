export enum LoginFormFields {
  PhoneNumber = 'phoneNumber',
  Code = 'code',
}

export interface LoginFormValues {
  [LoginFormFields.PhoneNumber]: string;
  [LoginFormFields.Code]: string;
}

export enum LoginFormStep {
  GettingPhoneNumber,
  VerifySMSCode,
}
