import React from 'react';
import App from './App';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const ApolloProviderWrapper = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default ApolloProviderWrapper;
