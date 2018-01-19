import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { connectAlert } from '../../components/Alert';
import { Calendar } from '../../components/Calendar';
import { Container, Holder } from '../../components/Container';
import { SeparatorClear } from '../../components/Separator';
import { Week } from '../../components/Week';
import { ButtonNavBar } from '../../components/Buttons';

import { setSelectedDate, startWeekChange } from '../../actions';

import availabilityData from '../../data/availability';

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
        <Calendar items={availabilityData.data} onPressItem={this.onPressItem} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  authorized: state.user.authorized,
  selectedDate: state.availability.selectedDate,
  isChangingWeek: state.availability.isChangingWeek,
});

Index.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(moment),
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

export default connect(mapStateToProps)(connectAlert(Index));
