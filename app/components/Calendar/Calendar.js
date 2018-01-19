import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import { CalendarRow } from './';
import { Separator } from '../Separator';

import styles from './styles';

const Calendar = ({ items, onPressItem }) => (
  <ScrollView style={styles.calendar}>
    {items.map(item => (
      <View key={item.startDateTime}>
        <DayHeader item={item} />
        <TouchableOpacity onPress={() => onPressItem()}>
          <CalendarRow item={item} />
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>
);

let currentDay;
const DayHeader = ({ item }) => {
  let header = (
    <View style={styles.rowHeader}>
      <Text style={styles.rowHeaderText}>
        {moment
          .unix(item.startDateTime)
          .format('dddd, DD MMMM')
          .toUpperCase()}
      </Text>
    </View>
  );
  if (currentDay === undefined) {
    currentDay = item.startDateTime;
  } else if (
    moment.unix(item.startDateTime).format('YYYY-MM-DD') ===
    moment.unix(currentDay).format('YYYY-MM-DD')
  ) {
    header = <Separator />;
  } else {
    currentDay = item.startDateTime;
  }

  return <View>{header}</View>;
};

Calendar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    startDateTime: PropTypes.number.isRequired,
    endDateTime: PropTypes.number.isRequired,
  })),
  onPressItem: PropTypes.func,
};

DayHeader.propTypes = {
  item: PropTypes.shape({
    startDateTime: PropTypes.number.isRequired,
    endDateTime: PropTypes.number.isRequired,
  }),
};

export default Calendar;
