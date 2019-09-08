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
import {Auth} from '../../util/Auth';

export default class SignScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            error : null,
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
                            onPress={Auth.googleAuth.bind(this)}
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
                            onPress={Auth.faceBookAuth.bind(this)}
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

