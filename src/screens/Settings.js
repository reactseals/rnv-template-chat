import React, { Component } from 'react';
import { isEmpty } from 'hubr-validator';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Avatar
} from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      fullName: '',
      avatarUrl: '',
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(value, name) {
    this.setState({
      [name]: value,
      errors: {
        ...this.state.errors,
        [name]: ''
      }
    })
  }

  validate() {
    const validationFields = ['userName', 'fullName'];
    var valid = true;
    var errors = [];
    validationFields.map(key => {
      if (isEmpty(this.state[key])) {
        errors[key] = 'This value should not be blank';
        valid = false;
      }
    });

    this.setState({errors: errors})

    return valid;
  }

  submit() {
    if (!this.validate()) {
      return;
    }

    //Submit form
  }

  render() {
    const { userName, fullName, avatarUrl, errors } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.avatar}>
            <Avatar
              large
              rounded
              activeOpacity={0.7}
              title="AA"
            />
          </View>
          <FormLabel>User Name</FormLabel>
          <FormInput
            onChangeText={(text) => this.handleChange(text, 'userName')}
            shake={!!errors.userName ? true : false}
          />
          {!!errors.userName &&
            <FormValidationMessage>{errors.userName}</FormValidationMessage>
          }
          <FormLabel>Full Name</FormLabel>
          <FormInput
            onChangeText={(text) => this.handleChange(text, 'fullName')}
            shake={!!errors.fullName ? true : false}
          />
          {!!errors.fullName &&
            <FormValidationMessage>{errors.fullName}</FormValidationMessage>
          }
          <Button
            style={styles.btn}
            onPress={this.submit}
            backgroundColor="#03A9F4"
            title='Submit'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  btn: {
    marginTop: 10
  },
  form: {
    marginTop: 25
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  }
});
