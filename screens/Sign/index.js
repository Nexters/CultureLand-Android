import React, {Component} from 'react';
import styleFn from "./styles"
import {Dimensions, Image, Text, View} from 'react-native';


import {Pagination} from 'react-native-snap-carousel';
import {ImageCarousel} from './carousel/index'
import {RatioCalculator} from "../../util";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const calc = new RatioCalculator(screenWidth, screenHeight);

const styles = styleFn(screenWidth, screenHeight, calc);


export default class SignScreen extends Component {
    render() {
        return (

            <View style={styles.container}>

                <View style={styles.sign_illustrate_wrapper}>
                    <ImageCarousel style={styles.sign_illustrate_image}>

                    </ImageCarousel>
                </View>
                <Pagination dotsLength={3} activeDotIndex={0}>

                </Pagination>
                <Text style={styles.getting_start_text}>
                    시작하기
                </Text>
                <View style={styles.sign_social_select_wrapper}>

                    <View style={styles.sign_social_service}>
                        <Image style={styles.sign_social_item_image}>

                        </Image>
                        <Text style={styles.sign_social_item_text}>
                            네이버 아이디로 로그인
                        </Text>
                    </View>
                    <View style={styles.sign_social_service}>
                        <Image style={styles.sign_social_item_image}>

                        </Image>
                        <Text style={styles.sign_social_item_text}>
                            페이스북 아이디로 로그인
                        </Text>

                    </View>
                </View>
                <View style={styles.sign_guide_wrapper}>

                    <Text style={styles.sign_guide_message}>
                        혹시, 컬쳐랜드가 처음이신가요?
                    </Text>
                    <Text style={styles.sign_guide_message_btn}>
                        회원가입
                    </Text>
                </View>

            </View>
        )
    }

}

