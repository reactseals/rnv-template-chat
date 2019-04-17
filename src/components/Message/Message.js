import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageAvatar from './MessageAvatar';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends Component {
  renderAvatar() {
    return <MessageAvatar message={this.props.message}/>;
  }

  render() {
    const { message } = this.props;

    return (
      <View
        style={[
          styles.container,
          'left' === message.position ? styles.pushLeft : styles.pushRight
        ]}>
        {'left' === message.position && this.renderAvatar()}
        <Text
          style={[
            styles.messageBody,
            'left' === message.position ? styles.marginLeft : styles.marginRight
          ]}>
          {message.text}
        </Text>
        {'right' === message.position && this.renderAvatar()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap:'wrap',
    marginBottom: 10
  },
  messageBody: {
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 5,
    padding: 20,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
  },
  pushLeft: {
    justifyContent: 'flex-start'
  },
  pushRight: {
    justifyContent: 'flex-end'
  },
  marginLeft: {
    marginLeft: 5
  },
  marginRight: {
    marginRight: 5
  },
});

Message.propTypes = {
  message: PropTypes.object.isRequired
};
