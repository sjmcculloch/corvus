import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import EStyleSheet from 'react-native-extended-stylesheet';

import LoginOrAuth from './LoginOrAuth';

import { AlertProvider } from './components/Alert';
import rootReducer from './reducers';

EStyleSheet.build({
  $background: '#EEE',
  $backgroundAlt: '#1e3c78',

  $primaryButton: '#f48603',
  $secondaryButton: '#1c87c9',

  $txtWhite: '#FFFFFF',
  $txtPrimary: '#1e3c78',
  $txtSecondary: '#1c87c9',
  $txtBlack: '#000000',

  $border: '#E2E2E2',
  $primaryBorder: '#1e3c78',
  $secondaryBorder: '#1c87c9',
  $inputBorder: '#797979',

  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
});

// const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const App = () => (
  <AlertProvider>
    <Provider store={store}>
      <LoginOrAuth />
    </Provider>
  </AlertProvider>
);

export default App;
