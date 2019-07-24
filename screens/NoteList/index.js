import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    Button

} from 'react-native';
import { StackNavigator } from 'react-navigation';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Ionicons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import {RatioCalculator} from "../../util";
import TabBarIcon from "../../components/TabBarIcon";
import {FloatingButton} from "../../components/FloatingButton"
import {List} from "../../components/List"

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

export default class NoteListScreen extends Component {
    render() {
        // const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <List />
                <FloatingButton/>
            </View>
        )
    }

};