const jwtDecode = require('jwt-decode');

import {FACE_BOOK_APP_ID, GOOGLE_ANDROID_ID, GOOGLE_IOS_ID} from '../../Constant';
import React, {Component} from 'react';
import styleFn from "./styles"
import {Dimensions, TouchableWithoutFeedback, Text, View} from 'react-native';
import * as SecureStore from 'expo-secure-store';

import {Pagination} from 'react-native-snap-carousel';
import {ImageCarousel} from './carousel/index'
import * as Google from 'expo-google-app-auth';

import {
    ACCESS_TOKEN, RatioCalculator, CATEGORY, SORT_BY_NEW, SORT_BY_POPULAR, EXPIRED_AT,
    OAUH_SOCIAL_SERVICE, FACEBOOK, SOCIAL_ACCESS_TOKEN, SERVICE_ACCESS_TOKEN, GOOGLE
} from "../../util";
import FacebookLogo from './asset/facebook.svg';
import KakaoLogo from './asset/kakaotalk.svg'
import GoogleLogo from './asset/google.svg';
import * as Facebook from 'expo-facebook';
import {Client} from '../../api/Client';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);
import Toast, {DURATION} from 'react-native-easy-toast';

export default class SignScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            error : null,
        }
    }

    async registerSocialCredentials(socialService, socialToken){
        await SecureStore.setItemAsync(SOCIAL_ACCESS_TOKEN, socialToken);
        await SecureStore.setItemAsync(OAUH_SOCIAL_SERVICE,socialService);
        Client.setSocialService(socialService);
        Client.setSocialAccessToken(socialToken);
    }

    async registerServerCredentials(token){

        const decodedToken = jwtDecode(token);
        await SecureStore.setItemAsync(SERVICE_ACCESS_TOKEN, token);

        await SecureStore.setItemAsync(EXPIRED_AT, decodedToken.exp.toString());

        await SecureStore.getItemAsync(EXPIRED_AT).then((expiredDate) => {
            console.log("만료예정시간 " + expiredDate);
        });

        await SecureStore.getItemAsync(SERVICE_ACCESS_TOKEN).then((token) => {
            console.log("토큰 " + token);
            Client.setServerAccessToken(token);
        });
    }
    async faceBookAuth() {


        try {
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync(FACE_BOOK_APP_ID, {
                permissions: ['public_profile', 'email'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`);
                const responseJSON = await response.json();
                console.log(`접속 ${JSON.stringify(responseJSON)}! token with ${token}`);
                try {

                    await this.registerSocialCredentials(FACEBOOK,token);

                } catch (e) {
                    console.log("SecureStore exception " + e);
                }

            } else {
                console.log("cancel!");
            }
        } catch ({message}) {
            console.log("")
            return;
        }


        try {
            const response = await Client.signInOrUp(FACEBOOK);


            if(response.error){
                this.setState({error : response.error});
                return;
            }
            await this.registerServerCredentials(response.message);
            this.props.navigation.navigate('App');

        } catch (e) {
            // TODO 토스트메세지 오류알림
            console.log("익셉션발생 : " + e);
        }

    }

    errorRenderer(){
        if(this.state.error){
            this.refs.toast.show(this.state.error, 1000, () => {
                // something you want to do at close
                this.setState({error : null});
            });
        }
    }

    async googleAuth() {
        try {
            const result = await Google.logInAsync({
                androidClientId: GOOGLE_ANDROID_ID,
                iosClientId: GOOGLE_IOS_ID,
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                console.log("구글로그인 : "+result.accessToken);

                await this.registerSocialCredentials(GOOGLE,result.accessToken);

                const response = await Client.signInOrUp(GOOGLE);

                console.log("리스폰스 : "+JSON.stringify(response));
                /*
                await this.registerServerCredentials(response.message);
                */

            } else {
                return { cancelled: true };
            }
        } catch (e) {
            console.log("구글로그인 예외 : "+e);

            return { error: true };
        }
    }


    render() {


        return (

            <View style={styles.container}>
                <Toast ref="toast"/>
                {this.errorRenderer()}
                <View style={styles.sign_illustrate_wrapper}>
                    <ImageCarousel style={styles.sign_illustrate_image}>
                    </ImageCarousel>
                </View>

                <View style={styles.sign_social_select_wrapper}>

                    <View style={styles.sign_social_service}>

                        <TouchableWithoutFeedback
                            onPress={this.googleAuth.bind(this)}
                        >
                            <View style={styles.sign_social_item_image}>
                                <GoogleLogo width={56} height={56}>

                                </GoogleLogo>
                            </View>
                        </TouchableWithoutFeedback>
                        <Text style={styles.sign_social_item_text}>
                            {`구글로\n시작하기`}
                        </Text>
                    </View>
                    <View style={styles.sign_social_service}>
                        <TouchableWithoutFeedback
                            onPress={this.faceBookAuth.bind(this)}
                        >
                            <View style={styles.sign_social_item_image}>
                                <FacebookLogo width={56} height={56}>

                                </FacebookLogo>
                            </View>
                        </TouchableWithoutFeedback>
                        <Text style={styles.sign_social_item_text}>
                            {`페이스북으로\n시작하기`}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

}

