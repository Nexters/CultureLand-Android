import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image

} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Ionicons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import {RatioCalculator} from "../../util";
import TabBarIcon from "../../components/TabBarIcon";
import {FloatingButton} from "../../components/FloatingButton"
import {Header} from "../../components/Header"
import {ListComponent} from "../../components/ListComponent"

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

export class PlannedListScreen  extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <ListComponent />
                <FloatingButton/>
            </View>
        )
    }
};


