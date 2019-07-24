import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image

} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Ionicons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import {RatioCalculator} from "../../util";
import TabBarIcon from "../../components/TabBarIcon";

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

function illustrateCarousel(number, title, type) {

}

export default function ItemDetailScreen() {
    return (

        <View style={styles.container}>
            <View elevation={5} style={styles.top_wrapper}>

                <Text style={styles.user_name_text}>
                    마이페이지
                </Text>
                <View style={styles.user_wrapper}>
                    <Image style={styles.user_profile_image}>


                    </Image>
                    <Text style={styles.user_email}>
                        4whomtbts@gmail.com
                    </Text>
                    <Text style={styles.user_logout}>
                        로그아웃
                    </Text>
                    <View/>

                </View>
            </View>


            <View style={styles.bottom_wrapper}>
                <View style={styles.item_pair_wrapper}>
                    <View style={styles.category_left_wrapper}>
                        <View style={styles.category_item_wrapper}>
                            <Image style={styles.category_item_icon}>

                            </Image>
                            <Text style={styles.category_item_title}>
                                가sk
                            </Text>
                            <Text style={styles.category_item_number}>
                                나나달
                            </Text>
                        </View>
                    </View>

                    <View style={styles.category_right_wrapper}>
                        <View style={styles.category_item_wrapper}>
                            <Image style={styles.category_item_icon}>

                            </Image>
                            <Text style={styles.category_item_title}>

                            </Text>
                            <Text style={styles.category_item_number}>

                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.item_pair_wrapper}>
                    <View style={styles.category_left_wrapper}>
                        <View style={styles.category_item_wrapper}>
                            <Image style={styles.category_item_icon}>

                            </Image>
                            <Text style={styles.category_item_title}>
                                가sk
                            </Text>
                            <Text style={styles.category_item_number}>
                                나나달
                            </Text>
                        </View>
                    </View>
                    <View style={styles.category_right_wrapper}>
                        <View style={styles.category_item_wrapper}>
                            <Image style={styles.category_item_icon}>

                            </Image>
                            <Text style={styles.category_item_title}>

                            </Text>
                            <Text style={styles.category_item_number}>

                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.item_pair_wrapper}>
                    <View style={styles.category_left_wrapper}>
                        <View style={styles.category_item_wrapper}>
                            <Image style={styles.category_item_icon}>

                            </Image>
                            <Text style={styles.category_item_title}>
                                가
                            </Text>
                            <Text style={styles.category_item_number}>
                                나나달
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

};


