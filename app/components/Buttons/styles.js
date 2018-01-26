import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: '$txtWhite',
    textAlign: 'center',
  },
  textStyleSecondary: {
    fontSize: 20,
    color: '$txtWhite',
    textAlign: 'center',
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: '$primaryButton',
    width: '100%',
  },
  buttonStyleSecondary: {
    padding: 10,
    backgroundColor: '$secondaryButton',
    width: '100%',
  },
  buttonNavBarIcon: {
    marginRight: 10,
    color: '#FFF',
  },
  buttonRow: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
  buttonRowTitle: {
    fontSize: 11,
    fontWeight: '900',
    paddingTop: 5,
  },
  buttonRowDescription: {
    paddingBottom: 5,
  },
});
