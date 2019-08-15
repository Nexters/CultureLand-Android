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
import {Dropdown} from 'react-native-material-dropdown';
import {RatioCalculator} from "../../util";
import {MainCarousel} from "../../components/MainCarousel"
import {FloatingButton} from "../../components/FloatingButton"
import {WishListComponent} from "../../components/WishListComponent"

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
                    <Dropdown
                        value={"2019"}
                        data={[
                            {
                                value: "2019"
                            },
                            {
                                value: "2018"
                            },
                            {
                                value: "2017"
                            },
                            {
                                value: "2016"
                            },
                        ]}
                        fontSize={24}
                        // dropdownOffset={{top: 0, left: 0}}
                        dropdownPosition={0}
                        inputContainerStyle={{
                            borderBottomColor: 'transparent',

                        }}
                        containerStyle={{
                            width: calc.getRegWidthDp(114),
                            height: calc.getRegHeightDp(70),
                        }}
                        overlayStyle={{

                        }}
                        pickerStyle={{
                            marginTop : calc.getRegHeightDp(60),

                        }}
                    />
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
                        <View style={styles.wishlist_wrapper}>
                            <View style = {styles.main_title_line} />
                            <Text style={styles.main_title}>찜 목록</Text>
                            <WishListComponent style={styles.wishlist_list}/>
                        </View>
                    </View>
                )}
            </ScrollView>
            <FloatingButton/>
        </View>
    )
}

MainScreen.navigationOptions = {
    header: null,
};