import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {RatioCalculator} from "../util";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);

export class Header extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => alert('Arrow clicked')}
                    activeOpacity={0.7} 
                    style={styles.floating_button}
                >
                    {'<'}
                </TouchableOpacity>
                <Text style={styles.header_title}>2019</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header : {
        width: '100%',
        height: calc.getRegHeightDp(50),
    }
})