import React from 'react';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { phoneRegexp } from '@app/common/utils/regex';
import { Input } from '@app/common/components/input/input.component';
import { Button } from '@app/common/components/button/button.component';
import { Counter } from '@app/common/components/counter/counter.component';

interface LoginFormProps {}

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

export const LoginForm: React.FC<LoginFormProps> = () => {
  const [loginStep, setLoginStep] = React.useState<LoginFormStep>(LoginFormStep.GettingPhoneNumber);
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: yupResolver(generateValidationSchema(loginStep) as yup.ObjectSchema<LoginFormValues>),
    defaultValues: {
      [LoginFormFields.PhoneNumber]: '',
      [LoginFormFields.Code]: '',
    },
  });

  const submitForm = (values: LoginFormValues) => {
    if (loginStep === LoginFormStep.GettingPhoneNumber) {
      setLoginStep(LoginFormStep.VerifySMSCode);
      return;
    }

    console.log({ values });
  };

  const handleOnRestart = () => {
    console.log('handleOnRestart');
  };

  return (
    <div className="w-112 py-8 px-10 bg-white rounded-lg shadow mx-auto">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col gap-2">
          <Controller
            control={control}
            name={LoginFormFields.PhoneNumber}
            render={({ field, fieldState }) => <Input fullWidth label="+380671111111" error={fieldState.error?.message} {...field} />}
          />
          {loginStep === LoginFormStep.VerifySMSCode && (
            <Controller
              control={control}
              name={LoginFormFields.Code}
              render={({ field, fieldState }) => <Input fullWidth label="Код" error={fieldState.error?.message} {...field} />}
            />
          )}
          <div className="text-center">
            <Button type="submit">{loginStep === LoginFormStep.GettingPhoneNumber ? 'Отримати код' : 'Війти'}</Button>
          </div>
          <div>{loginStep === LoginFormStep.VerifySMSCode && <Counter onRestart={handleOnRestart}>Відправити код ще раз</Counter>}</div>
        </div>
      </form>
    </div>
  );
};
