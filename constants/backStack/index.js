import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import  styleFn  from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image

} from 'react-native';

import { Ionicons} from '@expo/vector-icons'
import {Pagination} from 'react-native-snap-carousel';
import {ImageCarousel} from '../../screens/Sign/carousel/index'


import Carousel from 'react-native-snap-carousel'
const screenWidth= Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = styleFn(screenWidth,screenHeight);

function illustrateCarousel(number, title, type){

}

export default function ItemDetailScreen() {
    return  (

        <View style={styles.container}>

            <View>
                <View>

                </View>
            </View>



        </View>

    )

}

