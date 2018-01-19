import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

import { connectAlert } from '../../components/Alert';
import firebase from '../../config/firebase';
import { Container, Holder } from '../../components/Container';
import { Input } from '../../components/Input';
import { Button } from '../../components/Buttons';

import { userAuthorized } from '../../actions';

class SignIn extends Component {
  static navigationOptions = () => ({
    title: 'Sign In',
  });

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      authorizing: false,
    };
  }

  handleSignIn = () => {
    this.setState({ authorizing: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({ authorizing: false });
        this.props.dispatch(userAuthorized());
      })
      .catch((error) => {
        this.props.alertWithType('error', 'Login Error', error.message);
        this.setState({ authorizing: false });
      });
  };

  render() {
    return (
      <Container>
        <Holder margin>
          <Input
            type="email"
            placeholder="Email"
            onChangeText={(value) => {
              this.state.email = value;
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            onChangeText={(value) => {
              this.state.password = value;
            }}
          />
          <Button text="Sign In" onPress={this.handleSignIn} disabled={this.state.authorizing} />
          {this.state.authorizing && (
            <View
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ActivityIndicator size="large" />
            </View>
          )}
        </Holder>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  authorized: state.user.authorized,
});

SignIn.propTypes = {
  alertWithType: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(connectAlert(SignIn));
