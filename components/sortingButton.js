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

        </View>
    )

};


