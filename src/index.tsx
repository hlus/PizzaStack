import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { App } from '@app/App';
import { apolloClient } from '@app/core/apollo-client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={apolloClient}>
    <Helmet titleTemplate="%s - 🍕 PizzaStack" defaultTitle="🍕 PizzaStack" />
    <ToastContainer />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
