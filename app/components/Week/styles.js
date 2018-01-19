import EStyleSheet from 'react-native-extended-stylesheet';

const dayButton = {
  borderWidth: 0,
  borderColor: 'rgba(0,0,0,0.2)',
  alignItems: 'center',
  justifyContent: 'center',
  width: 30,
  height: 30,
  backgroundColor: '#fff',
  borderRadius: 30,
};

export default EStyleSheet.create({
  week: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dayLabel: {
    marginBottom: 2,
  },
  dayButton,
  dayButtonSelected: {
    ...dayButton,
    backgroundColor: '#f48603',
  },
  dayText: {
    marginTop: 2,
  },
  dayTextSelected: {
    color: 'white',
  },
  dayHasDetail: {
    alignItems: 'center',
    lineHeight: 2,
  },
  dayHasDetailSelected: {
    alignItems: 'center',
    lineHeight: 2,
    color: '#fff',
  },
});
