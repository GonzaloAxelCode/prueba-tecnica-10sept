import { ApolloProvider } from '@apollo/client';
import { NextUIProvider } from "@nextui-org/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { clientGHQL } from './config/graphql';
import { DataProvider } from './contexts/DataContext';
import { UIProvider } from './contexts/UIContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <NextUIProvider>
      <DataProvider>


        <UIProvider>
          <ApolloProvider client={clientGHQL}>
            <App />
          </ApolloProvider>
        </UIProvider>
      </DataProvider>
    </NextUIProvider>
  </React.StrictMode>
);


reportWebVitals();
