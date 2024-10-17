import React from 'react';
import * as yup from 'yup';
import { Controller, ControllerProps, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { phoneRegexp } from '@app/common/utils/regex';
import { Input } from '@app/common/components/input/input.component';
import { Button } from '@app/common/components/button/button.component';
import { Counter } from '@app/common/components/counter/counter.component';
import { toast } from 'react-toastify';

interface LoginFormProps {
  onSendPhoneNumber?: (phoneNumber: string) => Promise<void>;
  onVerifyCode?: (phoneNumber: string, code: string) => Promise<void>;
}

enum LoginFormFields {
  PhoneNumber = 'phoneNumber',
  Code = 'code',
}

interface LoginFormValues {
  [LoginFormFields.PhoneNumber]: string;
  [LoginFormFields.Code]: string;
}

enum LoginFormStep {
  GettingPhoneNumber,
  VerifySMSCode,
}

const generateValidationSchema = (loginStep: LoginFormStep) => {
  const baseValidation = {
    [LoginFormFields.PhoneNumber]: yup
      .string()
      .trim()
      .required('Введіть телефонний номер')
      .matches(phoneRegexp, 'Введіть коректний телефонний номер'),
  };
  if (loginStep === LoginFormStep.GettingPhoneNumber) {
    return yup.object(baseValidation);
  }

  return yup.object({
    ...baseValidation,
    [LoginFormFields.Code]: yup.string().required('Введіть код'),
  });
};

export const LoginForm: React.FC<LoginFormProps> = ({ onSendPhoneNumber = () => null, onVerifyCode = () => null }) => {
  const [loginStep, setLoginStep] = React.useState<LoginFormStep>(LoginFormStep.GettingPhoneNumber);
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
        await onSendPhoneNumber(values[LoginFormFields.PhoneNumber]);
        setLoginStep(LoginFormStep.VerifySMSCode);
        return;
      }

      if (loginStep === LoginFormStep.VerifySMSCode) {
        await onVerifyCode(values[LoginFormFields.PhoneNumber], values[LoginFormFields.Code]);
      }
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  const handleResendSMS = async () => {
    const phoneNumber = getValues(LoginFormFields.PhoneNumber);

    try {
      await onSendPhoneNumber(phoneNumber);
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  const renderPhoneNumberInput: ControllerProps<LoginFormValues, LoginFormFields.PhoneNumber>['render'] = ({ field, fieldState }) => (
    <Input
      fullWidth
      placeholder="+380671111111"
      label="Телефон"
      error={fieldState.error?.message}
      disabled={loginStep === LoginFormStep.VerifySMSCode}
      {...field}
    />
  );

  const renderCodeInput: ControllerProps<LoginFormValues, LoginFormFields.Code>['render'] = ({ field, fieldState }) => (
    <Input fullWidth label="Код" error={fieldState.error?.message} {...field} />
  );

  return (
    <div className="w-112 py-8 px-10 bg-white rounded-lg shadow mx-auto">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col gap-2">
          <Controller control={control} name={LoginFormFields.PhoneNumber} render={renderPhoneNumberInput} />
          {loginStep === LoginFormStep.VerifySMSCode && <Controller control={control} name={LoginFormFields.Code} render={renderCodeInput} />}
          <div className="text-center">
            <Button type="submit" disabled={isSubmitting}>
              {loginStep === LoginFormStep.GettingPhoneNumber ? 'Отримати код' : 'Війти'}
            </Button>
          </div>
          <div>{loginStep === LoginFormStep.VerifySMSCode && <Counter onRestart={handleResendSMS}>Відправити код ще раз</Counter>}</div>
        </div>
      </form>
    </div>
  );
};
