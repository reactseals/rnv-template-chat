import React from 'react';
import { View , StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'
import NavigationService from '../../config/NavigationService';

const Header = props => (
  <View style={styles.container}>
    <Icon
      raised
      color="#03A9F4"
      name="settings"
      onPress={() => NavigationService.navigate('Settings')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Header;
