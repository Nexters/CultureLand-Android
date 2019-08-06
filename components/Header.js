import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import {RatioCalculator, ConvertZepSizeToRegularizedSize} from "../util";
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);

export class Header extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        // const centerText = this.props.centerText ? '' : null;

        return (
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => alert(props.centerText)}
                    activeOpacity={0.7} 
                    style={styles.header_left}
                >
                    <Ionicons name="ios-arrow-back" size={24} color="#292929" style={styles.header_button}/>
                </TouchableOpacity>
                <Text style={styles.header_center}>2019</Text>
                <Text style={styles.header_right}>저장</Text>
                {/* {isCenterContent ? (
                    <Text style={styles.header_center}>2019</Text>
                ) : (
                    <Text style={styles.header_right}>저장</Text>
                )} */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: calc.getRegHeightDp(56),
        paddingHorizontal: calc.getRegWidthDp(23),
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.01,
        textAlign: "center",
        color: "#5c5c5c",
        backgroundColor: '#f6f6f6',
    },
    header_left : {
        flex: 1,
        // backgroundColor: 'lime',
    },
    header_button : {
        // size: calc.getRegWidthDp(18),
    },
    header_center : {
        // backgroundColor: 'yellow',
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: -0.41,
        textAlign: "center",
        color: "#464646"
    },
    header_right : {
        flex: 1,
        textAlign: 'right',
        // backgroundColor: 'aqua',
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.01,
        color: "#5c5c5c"
    }
})