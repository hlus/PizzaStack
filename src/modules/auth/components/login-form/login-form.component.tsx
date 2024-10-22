import React from 'react';
import { toast } from 'react-toastify';
import { Controller, ControllerProps } from 'react-hook-form';

import { useLoginForm } from './use-login-form';
import { Input } from '@app/common/components/input/input.component';
import { Button } from '@app/common/components/button/button.component';
import { Counter } from '@app/common/components/counter/counter.component';
import { LoginFormFields, LoginFormStep, LoginFormValues } from './login-form.types';

interface LoginFormProps {
  onSendPhoneNumber?: (phoneNumber: string) => Promise<void>;
  onVerifyCode?: (phoneNumber: string, code: string) => Promise<void>;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSendPhoneNumber, onVerifyCode }) => {
  const [loginStep, setLoginStep] = React.useState<LoginFormStep>(LoginFormStep.GettingPhoneNumber);
  const { control, getValues, onSubmit, isSubmitting } = useLoginForm(loginStep, setLoginStep, onSendPhoneNumber, onVerifyCode);

  const handleResendSMS = async () => {
    const phoneNumber = getValues(LoginFormFields.PhoneNumber);

    try {
      if (onSendPhoneNumber) {
        await onSendPhoneNumber(phoneNumber);
      }
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
      <form onSubmit={onSubmit}>
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
