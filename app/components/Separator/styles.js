import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  separator: {
    backgroundColor: '#EEE',
    width: '100%',
    height: StyleSheet.hairlineWidth,
  },
  separatorClear: {
    backgroundColor: '#FFF',
    width: '100%',
    height: StyleSheet.hairlineWidth,
    paddingTop: 10,
  },
});
