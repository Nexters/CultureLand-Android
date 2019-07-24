import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    TextInput

} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Ionicons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import {RatioCalculator} from "../../util";
import TabBarIcon from "../../components/TabBarIcon";

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

function illustrateCarousel(number, title, type) {

}

export default function ItemDetailScreen() {
    return (

        <View style={styles.container}>
            <View style={styles.note_wrapper}>
                <Text style={styles.note_title}>{'십센치 크리스마스 콘서트 \n 이게 두 줄이 되어도 잘 나오나'}</Text>
                <Image style={styles.note_image}/>
                <View style={styles.note_top_container}>
                    <View style={styles.note_top_item}>
                        <Text style={styles.note_sub_title}>언제</Text>
                        <TextInput value="19.12.25" style={styles.note_top_text}/>
                    </View>
                    <View style={styles.note_top_item}>
                        <Text style={styles.note_sub_title}>어디서</Text>
                        <TextInput value="한강공원에서" style={styles.note_top_text}/>
                    </View>
                    <View style={styles.note_top_item}>
                        <Text style={styles.note_sub_title}>누구와</Text>
                        <TextInput value="혜데이랑" style={styles.note_top_text}/>
                    </View>
                </View>
                <View style={styles.note_bottom_container}>
                    <Text style={styles.note_sub_title}>느낀점</Text>
                    <TextInput
                        multiline={true} 
                        numberOfLines={11}
                        value="재미있었다 재미있었다 짱짱 재미있었다 재미있었다 짱짱 재미있었다 재미있었다 짱짱"
                        style={styles.note_bottom_text}
                    />
                </View>
            </View>
        </View>
    )

};


