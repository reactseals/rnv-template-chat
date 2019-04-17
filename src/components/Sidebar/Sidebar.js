import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import UserList from './UserList';
import Header from './Header';


const Sidebar = (props) => (
  <View style={[styles.container, styles.drawer]}>
    <Header />
    <UserList />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    marginRight: 2
  },
});

export default Sidebar;
