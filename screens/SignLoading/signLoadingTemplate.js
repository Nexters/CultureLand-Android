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
import {SERVICE_ACCESS_TOKEN} from "../../util";
import {Client} from "../../api/Client";

export default class SignLoadingScreen extends Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        // 로그인 상태 확인 후 로그인 페이지 / 메인 페이지 출력
        const serviceToken = await SecureStore.getItemAsync(SERVICE_ACCESS_TOKEN);

        this.props.navigation.navigate(serviceToken? 'App' : 'Auth',{ param : "대충파라미터"});
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

SignLoadingScreen.PropTypes = {};

SignLoadingScreen.navigationOptions = {
    header: null,
};