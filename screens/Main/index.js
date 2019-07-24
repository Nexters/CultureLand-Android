import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    Picker

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
            {isStarter ? (
                <View style={styles.main_starter_wrapper}>
                    <Text style={styles.main_starter_title}>{'안녕하세요!\n처음 기록유도하는 말'}</Text>
                    <Image style={styles.main_starter_image}></Image>
                </View>
            ) : (
                <View style={styles.main_wrapper}>
                    <Picker style={styles.main_carousel_picker}>
                        <Picker.Item label="2019" value="2019" />
                        <Picker.Item label="2018" value="2018" />
                        <Picker.Item label="2017" value="2017" />
                    </Picker>
                    <MainCarousel style={styles.main_carousel_container} />
                </View>
            )}
            <FloatingButton/>
        </View>
    )
}