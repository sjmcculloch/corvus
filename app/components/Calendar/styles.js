import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  calendar: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#FFF',
  },
  rowDetail: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  rowDetailItem: {
    margin: 5,
    padding: 5,
    backgroundColor: '#68a0cf',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  rowDetailItemText: {
    color: '#fff',
  },
  rowHeader: {
    paddingLeft: 10,
    backgroundColor: '#EEE',
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },
  rowHeaderText: {
    fontSize: 11,
  },
  timeline: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 120,
    justifyContent: 'center', // center the dot
    alignItems: 'center',
  },
  timelineRow: {
    padding: 4,
    paddingLeft: 0,
  },
  line: {
    position: 'absolute',
    top: 0,
    left: 59,
    width: 2,
    bottom: 0,
  },
  topLine: {
    flex: 1,
    width: 2,
    backgroundColor: '#DDD',
  },
  bottomLine: {
    flex: 1,
    width: 2,
    backgroundColor: '#DDD',
  },
  hiddenLine: {
    width: 0,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: '#DDD',
  },
  content: {
    marginRight: 20,
  },
  contentText: {
    fontSize: 12,
    color: '#6B6B6B',
    textAlign: 'right',
  },
});
