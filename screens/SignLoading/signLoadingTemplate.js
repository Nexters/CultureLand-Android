import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import NavigatorService from "../../util/NavigatorService";
import PropTypes from 'prop-types';

export default class SignLoadingScreen extends Component {

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    // const userToken = await SecureStore.getItemAsync("access_token");
    const userToken = true;
    // NavigatorService.navigate(userToken ? 'App' : 'Auth')
    NavigatorService.navigate('App')
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

SignLoadingScreen.propTypes = {
};