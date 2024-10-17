import { ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_BASE_URL,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('jwt');

  if (token) {
    operation.setContext({ headers: { authorization: `Bearer ${token}` } });
  }

  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});
