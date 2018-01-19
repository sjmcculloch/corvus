import { StackNavigator } from 'react-navigation';

import Index from './Index';
import Edit from './Edit';
import NavOptions from '../../config/options';

const StackHome = StackNavigator(
  {
    Index: {
      screen: Index,
    },
    Edit: {
      screen: Edit,
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: NavOptions,
  },
);

export default StackHome;
