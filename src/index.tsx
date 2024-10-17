import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@app/App';
import { apolloClient } from '@app/core/apollo-client';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={apolloClient}>
    <ToastContainer />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
