import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard
} from 'react-native';

export default class MessageInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  submitMessage() {
    if (!!this.state.text) {
      this.props.onMessageSubmit(this.state.text);
    }

    this.setState({text: ''});
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          containerViewStyle={styles.btn}
          backgroundColor="#0288D1"
          icon={{name: 'send'}}
          title='Send message'
          onPress={this.submitMessage.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    marginLeft: 0,
  },
  input: {
    padding: 10,
    height: 40
  }
});
