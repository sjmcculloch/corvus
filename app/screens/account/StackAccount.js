import { StackNavigator } from 'react-navigation';

import Index from './Index';
import NavOptions from '../../config/options';

const StackAccount = StackNavigator(
  {
    Index: {
      screen: Index,
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: NavOptions,
  },
);

export default StackAccount;
