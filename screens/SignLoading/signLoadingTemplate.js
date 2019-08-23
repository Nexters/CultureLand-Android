import React, {Component} from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image
} from 'react-native';
import styleFn from "./styles"
var jwtDecode = require('jwt-decode');
import * as SecureStore from 'expo-secure-store';
import NavigatorService from "../../util/NavigatorService";
import PropTypes from 'prop-types';
import {OAUH_SOCIAL_SERVICE, SERVICE_ACCESS_TOKEN, EXPIRED_AT, SOCIAL_ACCESS_TOKEN} from "../../util";
import {Client} from "../../api/Client";
import SplashIcon from './asset/appIcon_splash.svg';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {RatioCalculator} from "../../util";
const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

export default class SignLoadingScreen extends Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        console.log(1);

        // 로그인 상태 확인 후 로그인 페이지 / 메인 페이지 출력
        const socialService = await SecureStore.getItemAsync(OAUH_SOCIAL_SERVICE);
        const serviceToken = await SecureStore.getItemAsync(SERVICE_ACCESS_TOKEN);
        const socialToken = await SecureStore.getItemAsync(SOCIAL_ACCESS_TOKEN);


        console.log(`SocialService [${socialService}]
        ServiceToken [${serviceToken}]
        SocialToken [${socialToken}]
        `);


        if(!serviceToken){
            this.props.navigation.navigate('Auth');
            return;
        }

        Client.setSocialService(socialService);
        Client.setSocialAccessToken(socialToken);

        const response = await Client.signInOrUp(socialService);

        let token;
        try {
            token = response.message.token;
        }catch (e){
            console.log("익셉션 : "+e);
        }

        let isLoginValid = false;

        if(!response.error) {
                console.log("리스폰스 성공 : "+JSON.stringify(response));
                const decodedToken = jwtDecode(token);
                Client.setSocialAccessToken(socialToken);
                Client.setServerAccessToken(token);
                Client.setExpiredAt(decodedToken.exp);
                await SecureStore.setItemAsync(EXPIRED_AT, decodedToken.exp.toString());
                await SecureStore.setItemAsync(SERVICE_ACCESS_TOKEN,token);
                isLoginValid = true;

        }else{
            console.log("에러"+JSON.stringify(response));
        }
        console.log("인증네비게이트");
        this.props.navigation.navigate(isLoginValid? 'App' : 'Auth');
    };

    render() {
        return (
            <View>
                {/* <ActivityIndicator/>
                <StatusBar barStyle="default"/>
                <SplashIcon  width={73} height={73}/> */}
                <View style={styles.container}>
                    <Image source={{uri: './asset/splash.png'}} style={styles.thumbnail}/>
                    {/* <View style={styles.splash_image}>
                        <SplashIcon  width={73} height={73}/>
                    </View>
                    <Text style={styles.splash_message}>
                        당신의 기록은{"\n"}
                        <Text style={styles.splash_bold}>
                            어떤 색인가요?
                        </Text>
                    </Text> */}

                </View>
            </View>
        );
    }
}


SignLoadingScreen.PropTypes = {
};

SignLoadingScreen.navigationOptions = {
  header: null,
  headerMode: 'none',
};