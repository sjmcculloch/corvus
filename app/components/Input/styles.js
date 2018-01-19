import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  default: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: '$txtPrimary',
    fontWeight: '700',
    fontSize: 20,
    flex: 1,
  },
  defaultHolder: {
    borderBottomWidth: 0.5,
    borderColor: '$inputBorder',
    marginBottom: 25,
    width: '100%',
  },
  defaultText: {
    color: '$txtPrimary',
    fontWeight: '700',
  },
  inputHolder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
