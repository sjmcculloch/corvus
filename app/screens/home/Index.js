import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../../components/Container';

class Index extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  goToSignIn = () => {
    this.props.navigation.navigate('SignIn');
  };

  goToRegister = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <Container>
        <Text>Hello</Text>
      </Container>
    );
  }
}

Index.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

export default Index;
