import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { Timeline } from './';

const CalendarRow = ({ item }) => (
  <View style={styles.row}>
    <Timeline startDateTime={item.startDateTime} endDateTime={item.endDateTime} />
    <View style={styles.rowDetail}>
      <View style={styles.rowDetailItem}>
        <Icon name="calendar-check-o" size={18} color="#FFF" />
        <Text style={styles.rowDetailItemText}>{item.groupSchedule}</Text>
      </View>
    </View>
  </View>
);

CalendarRow.propTypes = {
  item: PropTypes.shape({
    startDateTime: PropTypes.number.isRequired,
    endDateTime: PropTypes.number.isRequired,
  }),
};

export default CalendarRow;
