import React, { Component } from 'react';
import firebase from '../../config/firebase';
import { Button } from '../../components/Buttons';
import { Center, Container, Holder } from '../../components/Container';

class Index extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  handleLogout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <Container>
        <Center>
          <Holder margin>
            <Button text="Logout" onPress={this.handleLogout} />
          </Holder>
        </Center>
      </Container>
    );
  }
}

export default Index;
