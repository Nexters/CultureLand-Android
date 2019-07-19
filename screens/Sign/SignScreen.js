import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import  styleFn  from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image

} from 'react-native';

import {Pagination} from 'react-native-snap-carousel';
import {ImageCarousel} from '../../components/ImageCarousel'
import Carousel from 'react-native-snap-carousel'
const screenWidth= Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = styleFn(screenWidth,screenHeight);

function illustrateCarousel(number, title, type){

}

export default function LoginScreen() {
        return  (

           <View style={styles.container}>

                   <View style={styles.sign_illustrate_wrapper}>
                       <ImageCarousel >

                       </ImageCarousel >
                       <Pagination dotsLength={3} activeDotIndex={0} style={styles.sign_illustrate_carousel}>

                       </Pagination>

                   </View >
                   <View style={styles.sign_social_select_wrapper}>

                       <View style={styles.sign_social_naver}>
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

