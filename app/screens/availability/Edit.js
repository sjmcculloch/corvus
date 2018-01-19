import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Container, Holder } from '../../components/Container';

class Edit extends Component {
  static navigationOptions = () => ({
    title: 'Add Availability',
  });

  render() {
    return (
      <Container>
        <Holder>
          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
              paddingBottom: 5,
              backgroundColor: '#FFF',
            }}
          >
            <Text>DATE</Text>
            <Text>Thursday, 18 January 2018</Text>
          </View>
        </Holder>
      </Container>
    );
  }
}

export default Edit;
