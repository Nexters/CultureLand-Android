import {FACE_BOOK_APP_ID} from '../../Constant';
import React, {Component} from 'react';
import styleFn from "./styles"
import {Dimensions, TouchableWithoutFeedback, Text, View} from 'react-native';
import * as SecureStore from 'expo-secure-store';

import {Pagination} from 'react-native-snap-carousel';
import {ImageCarousel} from './carousel/index'
import {RatioCalculator} from "../../util";
import FacebookLogo from './asset/facebook.svg';
import KakaoLogo from './asset/kakaotalk.svg'
import * as Facebook from 'expo-facebook';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const calc = new RatioCalculator(screenWidth, screenHeight);

const styles = styleFn(screenWidth, screenHeight, calc);


export default class SignScreen extends Component {

    async faceBookAuth() {


        try {
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync(FACE_BOOK_APP_ID, {
                permissions: ['public_profile','email'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`);
                const responseJSON = await response.json();
                console.log(`접속 ${JSON.stringify(responseJSON)}! token with ${token}`);
                try {
                    await SecureStore.setItemAsync('access_token',token);
                    await SecureStore.setItemAsync('userName',responseJSON.name);
                    //SecureStore.setItemAsync('userEmail',userE);
                }catch(e){
                    console.log("SecureStore exception "+ e);
                }
            } else {
                // type === 'cancel'
                console.log("cancel!");
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }

        SecureStore.getItemAsync("access_token").then((token) =>{
            const {navigate} = this.props.navigation;
            if(token){
                navigate('Home');
            }
        });
        SecureStore.getItemAsync("userEmail").then((email) =>{
            console.log("현재 유저의 이메일 "+email);
        });
        SecureStore.getItemAsync("userName").then((name) =>{
            console.log("현재 유저의 이름  "+name);
        });

        await fetch("http://54.180.86.141:8080/signInOrUp?snsName=facebook", {
            method : "POST",
            headers : {
                "Content-Type": "application/json; charset=utf-8"
            },
            body : JSON.stringify({
                accessToken : "EAAFdyUdC4hsBAPWzY3ky1hDujAYrLdfiK4unoil8ZBbYDmuqoU85mqhwqApSTmU4JJfmoqIfzjRE5yl9rew8hUIwr6Bni2h20ZAdwG2k48aZCrIbuiZBeZC8YplgBD0uf5ODkaAeV9cysk2DHcGPnKzG8uMcGyL2mJ7P17bZA0ckxUD236yZB2Gx45D60jFIsesbKH0FGH1mXMVq3sdDbQZAuXodfSxrTH9astbA0ZBlnFAZDZD"
            })
        }).then(e => e.json()).then(e => console.log("토큰서버 응답 => "+JSON.stringify(e)));

    }


    kakaoAuth() {

    }

    render() {
        return (

            <View style={styles.container}>

                <View style={styles.sign_illustrate_wrapper}>
                    <ImageCarousel style={styles.sign_illustrate_image}>
                    </ImageCarousel>
                </View>
                <Pagination dotsLength={3} activeDotIndex={0}>

                </Pagination>

                <View style={styles.sign_social_select_wrapper}>

                    <View style={styles.sign_social_service}>

                        <TouchableWithoutFeedback
                            onPress={this.kakaoAuth}
                        >
                            <View style={styles.sign_social_item_image}>
                                <KakaoLogo width={56} height={56}>

                                </KakaoLogo>
                            </View>
                        </TouchableWithoutFeedback>
                        <Text style={styles.sign_social_item_text}>
                            {`카카오톡으로\n시작하기`}
                        </Text>
                    </View>
                    <View style={styles.sign_social_service}>
                        <TouchableWithoutFeedback
                            onPress={this.faceBookAuth}
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

