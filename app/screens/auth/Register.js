import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Holder } from '../../components/Container';
import { Input } from '../../components/Input';
import { Button } from '../../components/Buttons';

class Register extends Component {
  static navigationOptions = () => ({
    title: 'Register',
  });

  render() {
    return (
      <Container>
        <Holder margin>
          <Input type="username" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button text="Register" onPress={() => {}} />
        </Holder>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  authorizing: state.user.authorizing,
  authorized: state.user.authorized,
  avatar: state.user.avatar,
});

export default connect(mapStateToProps)(Register);
