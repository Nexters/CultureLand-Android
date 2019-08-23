import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
// import {LottieView} from 'lottie-react-native'
// import LottieView from "lottie-react-native";
import { DangerZone } from "expo";
const { Lottie } = DangerZone;
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


export default class SplashScreens extends Component {
    componentDidMount() {
        this.animation.play(30, 120);
    }

    resetAnimation = () => {
        this.animation.reset();
        this.animation.play();
    };
    render() {
        return (

            <View>
                <View style={styles.container}>
                    <Lottie
                        ref={animation => {
                            this.animation = animation;
                        }}
                        style={{
                            width: 400,
                            height: 400,
                            backgroundColor: '#fff',
                        }}
                        speed={0.7}
                        // source={require('./asset/simpleLoading.json')}
                        // imageAssetsFolder={'images/'}
                        autoPlay
                        loop
                        hardwareAccelerationAndroid
                        resizeMode="contain"
                    />
                    {/* <Lottie
                    ref={animation => {
                        this.animation = animation;
                    }}
                    resizeMode="contain"
                    source={this.state.animation}
                    style={styles.image}
                    imageAssetsFolder="assets"
                    /> */}
                    {/* <LottieView speed={0.7} hardwareAccelerationAndroid resizeMode="contain" source={require('./asset/splash.json')} autoPlay loop imageAssetsFolder={'images'}/> */}
                    {/* <View style={styles.splash_image}>
                        <SplashIcon  width={73} height={73}/>
                    </View>
                    <Text style={styles.splash_message}>
                        당신의 기록은{"\n"}
                        <Text style={styles.splash_bold}>
                            어떤 색인가요?
                        </Text>
                    </Text> */}

                </View>
            </View>
        )
    }
}

