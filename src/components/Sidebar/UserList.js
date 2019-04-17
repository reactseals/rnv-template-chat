import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import { List, ListItem } from 'react-native-elements'
import NavigationService from '../../config/NavigationService';

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const users = [
      {
        key: '0',
        fullName: 'John Doe',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
      },
      {
        key: '1',
        fullName: 'Amy Farha',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
      },
      {
        key: '2',
        fullName: 'John Doe',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
      },
      {
        key: '3',
        fullName: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
      },
      {
        key: '4',
        fullName: 'John Doe',
        avatarUrl: ''
      },
    ];

    this.setState({users: users});
  }

  renderListItemProps(item) {
    let props = {};
    if (!!item.avatarUrl) {
      props = {avatar: {uri:item.avatarUrl}};
    } else {
      props = {leftIcon: {name:'camera'}};
    }
    return props;
  }

  render() {
    return (
      <View style={[styles.container, styles.drawer]}>
        <List>
          <FlatList
            data={this.state.users}
            renderItem={({item}) =>
              <ListItem
                roundAvatar
                hideChevron
                {...this.renderListItemProps(item)}
                title={item.fullName}
                onPress={() => NavigationService.navigate('UserInfo', {'id': ''})}
              />
            }
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
