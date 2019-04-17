import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import MessageContainer from '../components/Message';
import Drawer from 'react-native-drawer';
import SideMenu from 'react-native-side-menu';
import { fetchMessages } from 'hubr-networking';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      users: []
    }
  }

  componentDidMount() {
    fetchMessages()
      .then(res => {
        this.setState({
          messages: res
        });
      }).catch(
        err => console.log(err)
    );
  }

  messageSubmit(newMessage) {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          key: (this.state.messages.length + 1).toString(),
          text: newMessage,
          position: 'right',
          author: 'Curren user'
        }
      ]
    })
  }

  render() {
    const { messages } = this.state;
    return(
      <SideMenu
        menu={<Sidebar />}>
        <MessageContainer messages={messages} onNewMessage={this.messageSubmit.bind(this)}/>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
