import { Navigate } from 'react-router-dom';
import React, { PropsWithChildren, ReactElement } from 'react';

export const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const jwt = localStorage.getItem('jwt');

  if (!jwt) {
    return <Navigate to="/login" />;
  }

  return children as ReactElement;
};
