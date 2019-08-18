import React, {Component} from 'react';
import styleFn from "./styles"
import {Dimensions, TouchableWithoutFeedback, Text, View} from 'react-native';
import * as SecureStore from 'expo-secure-store';

import {Pagination} from 'react-native-snap-carousel';
import {ImageCarousel} from './carousel/index'
import {RatioCalculator} from "../../util";
import FacebookLogo from './asset/facebook.svg';
import KakaoLogo from './asset/kakaotalk.svg'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const calc = new RatioCalculator(screenWidth, screenHeight);

const styles = styleFn(screenWidth, screenHeight, calc);


export default class SignScreen extends Component {

    faceBookAuth() {
        try {
            SecureStore.setItemAsync("key","heyyyyyyyyyyy").then()
        }catch(e){
            console.log("저장되었습니;다");
        }

        SecureStore.getItemAsync("key").then((data) =>{
            console.log("가져왔습니다 "+data);
        })



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

