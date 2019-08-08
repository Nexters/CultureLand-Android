import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    StatusBar

} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Ionicons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import {RatioCalculator} from "../../util";
import TabBarIcon from "../../components/TabBarIcon";
import {FloatingButton} from "../../components/FloatingButton"
import {ListComponent} from "../../components/ListComponent"

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

export default function MyPageListScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => alert(props.centerText)}
                    activeOpacity={0.7} 
                    style={styles.header_left}
                >
                    <Ionicons name="ios-arrow-back" size={24} color="#292929" style={styles.header_button}/>
                </TouchableOpacity>
                <Text style={styles.header_center}>전시</Text>
                <Text style={styles.header_right}></Text>
            </View>
            <ListComponent/>
            <FloatingButton/>
        </View>
    )
};