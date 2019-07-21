import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image
} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import { MainCarousel } from "../../components/MainCarousel"

const styles = styleFn(screenWidth, screenHeight);


export default function Main() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.main_title}>{'안녕하세요!\n처음 기록유도하는 말'}</Text>
            <View style={styles.main_thumb}>
                <Image style={styles.main_thumb_img} />
            </View>
        </View>
        <View>
            <MainCarousel />
        </View>
    </View>
  );
}
