import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image

} from 'react-native';
import {RatioCalculator} from "../../util";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

const category_types = ["영화, "]
export default function ItemDetailScreen() {
    return (

        <View style={styles.container}>

            <Text style={styles.suggestion_text}>
                당신의 다이어리를 채울
                새로운 컬러를 찾아보세요!
            </Text>

            <View style={styles.search_bar}>

            </View>
            <View style={styles.category_wrapper}>

                <View style={styles.category_selector_item_wrapper}>
                    <View>
                        <Image style={styles.category_selector_item_icon}/>
                    </View>

                    <Text style={styles.category_selector_item_title}>
                        영화
                    </Text>
                </View>

                <View style={styles.category_selector_item_wrapper}>

                    <View>
                        <Image style={styles.category_selector_item_icon}/>
                    </View>

                    <Text style={styles.category_selector_item_title}>
                        뮤지컬
                    </Text>

                </View>

                <View style={styles.category_selector_item_wrapper}>

                    <View>
                        <Image style={styles.category_selector_item_icon}/>
                    </View>

                    <Text style={styles.category_selector_item_title}>
                        콘서트
                    </Text>
                </View>
                <View style={styles.category_selector_item_wrapper}>

                    <Image style={styles.category_selector_item_icon}/>

                    <Text style={styles.category_selector_item_title}>
                        연극
                    </Text>
                </View>
                <View style={styles.category_selector_item_wrapper}>

                    <Image style={styles.category_selector_item_icon}/>

                    <Text style={styles.category_selector_item_title}>
                        기타
                    </Text>
                </View>
            </View>

            <Text style={styles.order_selector}>
                신규순
            </Text>

            <View style={styles.bottom_wrapper}>
                <View style={styles.item_pair_wrapper}>
                    <View style={styles.category_left_wrapper}>
                        <View style={styles.category_item_wrapper}>
                            <Image style={styles.category_item_icon}>

                            </Image>
                            <Text style={styles.category_item_title}>
                                가나
                            </Text>
                            <Text style={styles.category_item_number}>
                                다라마
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
                                가나
                            </Text>
                            <Text style={styles.category_item_number}>
                                다라마

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
                                나나다
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

};


