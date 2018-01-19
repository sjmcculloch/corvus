import { StackNavigator } from 'react-navigation';

import Index from './Index';
import SignIn from './SignIn';
import Register from './Register';

import NavOptions from '../../config/options';

const StackAuth = StackNavigator(
  {
    Index: {
      screen: Index,
    },
    SignIn: {
      screen: SignIn,
    },
    Register: {
      screen: Register,
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: NavOptions,
  },
);

export default StackAuth;
