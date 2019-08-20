import React, {Component} from 'react';
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
    // 로그인 상태 확인 후 로그인 페이지 / 메인 페이지 출력 
    // const userToken = await SecureStore.getItemAsync("access_token");
    const userToken = true;
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
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

SignLoadingScreen.PropTypes = {
};

SignLoadingScreen.navigationOptions = {
  header : null,
};