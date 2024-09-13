import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NextUIProvider } from "@nextui-org/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { URL_BASE_GRAPHQL } from './constants';
import { UIProvider } from './contexts/UIContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  uri: URL_BASE_GRAPHQL,
  cache: new InMemoryCache(),
});



root.render(
  <React.StrictMode>
    <NextUIProvider>
      <UIProvider>


        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </UIProvider>
    </NextUIProvider>
  </React.StrictMode>
);


reportWebVitals();
