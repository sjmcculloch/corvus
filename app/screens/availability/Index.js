import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { connectAlert } from '../../components/Alert';

import { ButtonNavBar } from '../../components/Buttons';
import { Calendar, Week } from '../../components/Calendar';
import { Container, Holder } from '../../components/Container';
import { Progress } from '../../components/Progress';
import { SeparatorClear } from '../../components/Separator';

import { setSelectedDate, startWeekChange } from '../../actions';

class Index extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'My Availability',
    headerRight: <ButtonNavBar onPress={() => navigation.navigate('Edit')} icon="plus" />,
  });

  onChangeDate = (dt) => {
    this.props.dispatch(setSelectedDate(dt));
  };

  onPressItem = () => {
    this.props.navigation.navigate('Edit');
  };

  onScrollEnd = (e) => {
    this.props.dispatch(startWeekChange());
    const { layoutMeasurement, contentOffset } = e.nativeEvent;
    const activeIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    let dt;
    if (activeIndex === -1) {
      dt = this.props.selectedDate.add(-1, 'weeks').startOf('isoWeek');
    } else {
      dt = this.props.selectedDate.add(1, 'weeks').startOf('isoWeek');
    }
    this.props.dispatch(setSelectedDate(dt));
  };

  render() {
    // get start of week unix timestamp
    const startOfWeek = moment(this.props.selectedDate)
      .isoWeekday(1)
      .startOf('isoweek');
    const endOfWeek = moment(this.props.selectedDate)
      .isoWeekday(1)
      .endOf('isoweek');

    // will be replaced by graphql calls

    // eslint-disable-next-line
    const filteredItems = this.props.items.filter(
      item => item.startDateTime >= startOfWeek.unix() && item.startDateTime < endOfWeek.unix());

    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Holder margin>
          <ScrollView
            horizontal
            onScrollEndDrag={this.onScrollEnd}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <Week onChangeDate={this.onChangeDate} selectedDate={this.props.selectedDate} />
          </ScrollView>
        </Holder>
        <SeparatorClear />
        {this.props.isChangingWeek && <Progress />}
        <Calendar items={filteredItems} onPressItem={this.onPressItem} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  authorized: state.user.authorized,
  selectedDate: state.availability.selectedDate,
  isChangingWeek: state.availability.isChangingWeek,
  items: state.availability.items,
});

Index.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(moment),
  isChangingWeek: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    startDateTime: PropTypes.number.isRequired,
    endDateTime: PropTypes.number.isRequired,
  })),
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

export default connect(mapStateToProps)(connectAlert(Index));
