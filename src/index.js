import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
