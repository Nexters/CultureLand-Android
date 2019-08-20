import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {RatioCalculator} from "../util";
import NavigatorService from "../util/NavigatorService";
import WriteImage from "../assets/images/icon/write.svg";


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);

export class FloatingButton extends Component {
    render () {
        return (
            <TouchableOpacity 
                onPress={() => NavigatorService.navigate('NoteEdit')}
                activeOpacity={0.7} 
                style={styles.floating_button}
            >
                <WriteImage width={34} height={34} style={styles.button_icon}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    floating_button: {
        position: 'absolute',
        right: 27,
        bottom: calc.getRegHeightDp(25),
        alignItems: 'center',
        justifyContent: 'center',
        width: calc.getRegWidthDp(60),
        height: calc.getRegWidthDp(60),
        borderRadius: 60, 
        elevation: 8 ,
        backgroundColor: "#f15642",
    },
    button_icon : {
        fontSize: 40, 
        color: 'white' 
    }
})