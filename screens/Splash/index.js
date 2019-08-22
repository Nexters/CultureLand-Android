import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    FlatList

} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {RatioCalculator} from "../../util";
import HomeScreen from "../HomeScreen";
import PlanedListScreen from "../PlannedList";
import CategoryType from "../../domain/CategoryType";
import Entypo from '@expo/vector-icons/Entypo'
import SplashIcon from './asset/appIcon_splash.svg';

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);


export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.categories = [
            new CategoryType("좋아하는\n기록", "", 4,"#e44343"),
            new CategoryType("전시", "", 5),
            new CategoryType("콘서트", "", 3),
            new CategoryType("뮤지컬", "", 4),
            new CategoryType("연극", "", 1),
            new CategoryType("기타", "", 0)
        ];
        this.contentJSX = new Array(this.categories.length);


    }


    render() {
        return (

            <View>
                <View style={styles.container}>

                    <View style={styles.splash_image}>
                        <SplashIcon  width={73} height={73}/>
                    </View>

                    <Text style={styles.splash_message}>
                        당신의 기록은{"\n"}
                        <Text style={styles.splash_bold}>
                            어떤 색인가요?
                        </Text>
                    </Text>



                </View>
            </View>
        )
    }
}

