import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import LottieView from 'lottie-react-native';
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
import SplashIcon from './asset/appIcon_splash.svg';

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);


export default class SplashScreen extends Component {
    render() {
        return (

            <View>
                <View style={styles.container}>

                    <View style={styles.splash_image}>
                        <LottieView source={require('./asset/splash.json')} autoPlay loop imageAssetsFolder={'lottie/images'}/>
                        {/* <SplashIcon  width={73} height={73}/> */}
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

