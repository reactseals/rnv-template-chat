import React from 'react';
import { Avatar } from 'react-native-elements'
import PropTypes from 'prop-types';
import NavigationService from '../../config/NavigationService';

const MessageAvatar = props => {
  let avatarProps = {};
  if (!!props.message.avatarUrl) {
    avatarProps = {source: {uri: props.message.avatarUrl}};
  } else {
    avatarProps = {title: props.message.author.charAt(0)};
  }

  return (
    <Avatar
      medium
      rounded
      activeOpacity={0.7}
      {...avatarProps}
      onPress={() => NavigationService.navigate('UserInfo')}
    />
  )
};

MessageAvatar.propTypes = {
  message: PropTypes.object.isRequired
};

export default MessageAvatar;
