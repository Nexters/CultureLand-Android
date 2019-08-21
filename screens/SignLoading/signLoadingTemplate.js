import React, {Component} from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,

} from 'react-native';

var jwtDecode = require('jwt-decode');
import * as SecureStore from 'expo-secure-store';
import NavigatorService from "../../util/NavigatorService";
import PropTypes from 'prop-types';
import {OAUH_SOCIAL_SERVICE, SERVICE_ACCESS_TOKEN, EXPIRED_AT, SOCIAL_ACCESS_TOKEN} from "../../util";
import {Client} from "../../api/Client";

export default class SignLoadingScreen extends Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        // 로그인 상태 확인 후 로그인 페이지 / 메인 페이지 출력
        const socialService = await SecureStore.getItemAsync(OAUH_SOCIAL_SERVICE);
        const serviceToken = await SecureStore.getItemAsync(SERVICE_ACCESS_TOKEN);
        const socialToken = await SecureStore.getItemAsync(SOCIAL_ACCESS_TOKEN);
        const response = await Client.signInOrUp(socialService);
        const token = response.message.token;

        let isLoginValid = false;

        if(!response.error) {
                const decodedToken = jwtDecode(token);
                Client.setSocialAccessToken(socialToken);
                Client.setServerAccessToken(token);
                Client.setExpiredAt(decodedToken.exp);
                await SecureStore.setItemAsync(EXPIRED_AT, decodedToken.exp.toString());
                await SecureStore.setItemAsync(SERVICE_ACCESS_TOKEN,token)
                isLoginValid = true;

        }else{
            console.log("에러"+JSON.stringify(response));
        }

        this.props.navigation.navigate(isLoginValid? 'App' : 'Auth');
    };

    render() {
        return (
            <View>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}

<<<<<<< HEAD
SignLoadingScreen.PropTypes = {};

SignLoadingScreen.navigationOptions = {
    header: null,
=======
SignLoadingScreen.PropTypes = {
};

SignLoadingScreen.navigationOptions = {
  header: null,
  headerMode: 'none',
>>>>>>> 5f71b2af4a7cd09b4cc514ec480bd3f4128e4a63
};