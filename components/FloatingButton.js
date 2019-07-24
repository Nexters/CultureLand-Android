import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export class FloatingButton extends Component {
    render () {
        return (
            <TouchableOpacity activeOpacity={0.7} style={styles.floating_button}>
                <Text style={styles.button_icon}>+</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    floating_button: {
        position: 'absolute',
        right: 27,
        bottom: 85,
        alignItems: 'center',
        justifyContent: 'center',
        width: 53.2,
        height: 53.2,
        borderRadius: 30, 
        elevation: 8 ,
        backgroundColor: "#434343",
    },
    button_icon : {
        fontSize: 40, 
        color: 'white' 
    }
})