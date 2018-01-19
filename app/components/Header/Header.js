import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ children }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{children}</Text>
  </View>
);

Header.propTypes = {
  // eslint-disable-next-line
  children: PropTypes.any,
};

export default Header;
