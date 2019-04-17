import React, { Component } from 'react';
import Message from './Message';
import MessageInput from '../AddMessage';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

const MessageContainer = ({messages, onNewMessage}) => (
  <View style={styles.container}>
    <FlatList
      style={styles.listContainer}
      ref={ref => this.listView = ref}
      onContentSizeChange={(contentWidth, contentHeight)=>{
        this.listView.scrollToEnd({animated: true});
      }}
      data={messages}
      renderItem={({item}) => <Message message={item} />}
    />
    <View>
      <MessageInput onMessageSubmit={(newMessage) => onNewMessage(newMessage)} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FDFC"
  },
  listContainer: {
    paddingTop: 10
  }
});

export default MessageContainer;
