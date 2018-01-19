import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '$background',
  },
  containerAlt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$backgroundAlt',
  },
  containerHolder: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,
  },
  containerFooter: {
    height: 75,
    backgroundColor: '#FFF',
    width: '100%',
    flexDirection: 'row',
  },
  containerHalf: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
