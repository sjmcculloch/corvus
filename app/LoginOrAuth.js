import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import firebase from './config/firebase';
import StackAuth from './screens/auth/StackAuth';
import TabIndex from './TabIndex';

import { userNoExist, userAuthorized } from './actions';

class LoginOrAuth extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      if (user === null) this.props.dispatch(userNoExist());
      if (user) this.props.dispatch(userAuthorized());
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    if (this.state.loading) return null;
    if (this.props.authorized) return <TabIndex />;
    return <StackAuth />;
  }
}

const mapStateToProps = state => ({
  authorized: state.user.authorized,
});

LoginOrAuth.propTypes = {
  authorized: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LoginOrAuth);
