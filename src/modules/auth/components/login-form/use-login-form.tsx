import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { phoneRegexp } from '@app/common/utils/regex';
import { LoginFormFields, LoginFormStep, LoginFormValues } from './login-form.types';

export const generateValidationSchema = (loginStep: LoginFormStep) => {
  const baseValidation = {
    [LoginFormFields.PhoneNumber]: yup.string().trim().required('Enter phone number').matches(phoneRegexp, 'Enter valid phone number'),
  };
  if (loginStep === LoginFormStep.GettingPhoneNumber) {
    return yup.object(baseValidation);
  }

  return yup.object({
    ...baseValidation,
    [LoginFormFields.Code]: yup.string().required('Enter code'),
  });
};

export const useLoginForm = (
  loginStep: LoginFormStep,
  setLoginStep: (step: LoginFormStep) => void,
  onSendPhoneNumber?: (phoneNumber: string) => Promise<void>,
  onVerifyCode?: (phoneNumber: string, code: string) => Promise<void>
) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(generateValidationSchema(loginStep) as yup.ObjectSchema<LoginFormValues>),
    defaultValues: {
      [LoginFormFields.PhoneNumber]: '',
      [LoginFormFields.Code]: '',
    },
  });

  const submitForm = async (values: LoginFormValues) => {
    try {
      if (loginStep === LoginFormStep.GettingPhoneNumber) {
        if (onSendPhoneNumber) {
          await onSendPhoneNumber(values[LoginFormFields.PhoneNumber]);
        }
        setLoginStep(LoginFormStep.VerifySMSCode);
        return;
      }

      if (loginStep === LoginFormStep.VerifySMSCode) {
        if (onVerifyCode) {
          await onVerifyCode(values[LoginFormFields.PhoneNumber], values[LoginFormFields.Code]);
        }
      }
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { control, onSubmit, getValues, isSubmitting };
};
