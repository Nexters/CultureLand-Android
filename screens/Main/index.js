import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    Picker,
    ScrollView,
    StatusBar,

} from 'react-native';
import {RatioCalculator} from "../../util";
import {MainCarousel} from "../../components/MainCarousel"
import {FloatingButton} from "../../components/FloatingButton"

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

const isStarter = false;

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.main_top_wrapper}>
                    <Picker 
                        style={styles.main_top_year}
                        itemStyle={styles.main_top_year_item}
                    >
                        <Picker.Item label="2019" value="2019" />
                        <Picker.Item label="2018" value="2018" />
                        <Picker.Item label="2017" value="2017" />
                    </Picker>
                    <Text style={styles.main_top_description}>
                        Today is
                        <Text style={styles.main_top_date}>  2019.08.03</Text>
                    </Text>
                    
                </View>
                {isStarter ? (
                    <View style={styles.main_starter_wrapper}>
                        <Text style={styles.main_starter_title}>{'아직 기록하신\n문화생활이 없으시군요!'}</Text>
                        <Text style={styles.main_starter_subtitle}>{'어서 밖으로 나가서 문화생활을 즐기고\n컬러에 기록을 남겨주세요!'}</Text>
                    </View>
                ) : (
                    <View style={styles.main_wrapper}>
                        <View style={styles.carousel_wrapper}>
                            <View style = {styles.main_title_line} />
                            <Text style={styles.main_title}>월별 기록</Text>
                            <MainCarousel style={styles.main_carousel_container} />
                        </View>
                        <View style={styles.wating_wrapper}>
                            <View style = {styles.main_title_line} />
                            <Text style={styles.main_title}>고민 중인 기록들</Text>
                            <View style={styles.wating_list}>
                                <View style={styles.wating_item}>
                                    <View style={styles.image_container}>
                                        <Image style={styles.image}/>
                                    </View>
                                    <View style={styles.text_container}>
                                        <Text style={styles.subtitle}>콘서트</Text>
                                        <Text style={styles.title}>안녕 - 이것은 안녕</Text>
                                    </View>
                                    <View style={styles.icon_container}>
                                        <Image style={styles.icon}/>
                                    </View>
                                </View>
                                <View style={styles.wating_item}>
                                    <View style={styles.image_container}>
                                        <Image style={styles.image}/>
                                    </View>
                                    <View style={styles.text_container}>
                                        <Text style={styles.subtitle}>콘서트</Text>
                                        <Text style={styles.title}>안녕 - 이것은 안녕</Text>
                                    </View>
                                    <View style={styles.icon_container}>
                                        <Image style={styles.icon}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            </ScrollView>
            <FloatingButton/>
        </View>
    )
}