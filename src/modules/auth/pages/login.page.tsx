import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import { isLoggedInReactive } from '../store/reactive-vars';
import { LoginForm } from '../components/login-form/login-form.component';
import { validateApolloResponse } from '@app/common/utils/validate-apollo-response';
import { useCustomerLoginLazyQuery, useCustomerVerifyCodeLazyQuery } from '@app/core/types';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [sendPhoneNumber] = useCustomerLoginLazyQuery({ fetchPolicy: 'network-only' });
  const [sendPhoneWithCode] = useCustomerVerifyCodeLazyQuery({ fetchPolicy: 'network-only' });

  const handleSendPhoneNumber = async (phoneNumber: string) => {
    const queryResult = await sendPhoneNumber({ variables: { phoneNumber } });

    validateApolloResponse(queryResult);
  };

  const handleVerifyCode = async (phoneNumber: string, code: string) => {
    const queryResult = await sendPhoneWithCode({ variables: { phoneNumber, code } });

    validateApolloResponse(queryResult);

    if (queryResult.data?.customerVerifyCode?.accessToken) {
      localStorage.setItem('jwt', queryResult.data?.customerVerifyCode?.accessToken);
      isLoggedInReactive(true);

      navigate('/');
    }
  };

  return (
    <>
      <Helmet title="Login" />
      <div>
        <h1 className="text-3xl font-bold text-center mb-12">Увійти до вашого кабінету 🍕 PizzaStack</h1>
        <LoginForm onSendPhoneNumber={handleSendPhoneNumber} onVerifyCode={handleVerifyCode} />
      </div>
    </>
  );
};
