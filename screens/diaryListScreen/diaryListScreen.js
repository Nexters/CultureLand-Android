import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    StatusBar,

} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Ionicons} from '@expo/vector-icons'
import {RatioCalculator} from "../../util";
import {FloatingButton} from "../../components/FloatingButton"
import ListComponent from "../../components/ListComponent";
import PropTypes from 'prop-types';
import {LIST_TYPE} from "../../util";
import NavigatorService from "../../util/NavigatorService";

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

export default class DiaryListScreen extends Component {


    render() {

        this.props.getDiaryList(LIST_TYPE.FOR_DATE);

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => NavigatorService.pop()}
                        activeOpacity={0.7}
                        style={styles.header_left}
                    >
                        <Ionicons name="ios-arrow-back" size={24} color="#292929" style={styles.header_button}/>
                    </TouchableOpacity>
                    <Text style={styles.header_center}>2019.7</Text>
                    <Text style={styles.header_right}></Text>
                </View>
                <ListComponent />

                <FloatingButton/>
            </View>
        )
    }
};

DiaryListScreen.navigationOptions = {
    header: null,
};

DiaryListScreen.PropTypes={
    listType : PropTypes.string,
};