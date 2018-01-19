import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import PropTypes from 'prop-types';

import Home from './screens/home/StackHome';
import Account from './screens/account/StackAccount';
import Availability from './screens/availability/StackAvailability';

const tabBarOptions = {
  activeTintColor: '#f48603',
  inactiveTintColor: '#1e3c78',
  style: {
    backgroundColor: 'white',
    height: 55,
  },
  labelStyle: {
    fontWeight: '700',
    marginBottom: 10,
    fontSize: 8,
  },
};

const TabIcon = ({ name, color }) => <Icon name={name} color={color} size={22} />;

const TabIndexNavigator = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'MEMBERS',
        tabBarIcon: ({ tintColor }) => <Icon name="people" color={tintColor} size={22} />, // eslint-disable-line
      },
    },
    Availability: {
      screen: Availability,
      navigationOptions: {
        tabBarLabel: 'AVAILABILITY',
        tabBarIcon: ({ tintColor }) => <TabIcon name="user" color={tintColor} />, // eslint-disable-line
      },
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarLabel: 'ACCOUNT',
        tabBarIcon: ({ tintColor }) => <TabIcon name="user" color={tintColor} />, // eslint-disable-line
      },
    },
  },
  {
    tabBarOptions,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    initialRouteName: 'Availability',
  },
);

class TabIndex extends Component {
  static navigationOptions = {
    gesturesEnabled: false,
  };

  render() {
    return <TabIndexNavigator />;
  }
}

TabIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

module.exports = TabIndex;
