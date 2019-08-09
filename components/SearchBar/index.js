import
    * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    ScrollView,
    TextInput

} from 'react-native';
import {RatioCalculator} from "../../util";
import Entypo from '@expo/vector-icons/Entypo'
import PropTypes from 'prop-types';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);



export default class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            isFocused : false,
            errorMessage : "",
        }
    }


    render() {

        return (

            <View style={styles.container}>

                <TextInput style={styles.input_text}
                           onFocus={this.props.onSearchFocus}
                    onChangeText={(text)=>{
                    }}
                >

                </TextInput>
                <View style={styles.magnifying_glass}>
                    <Entypo
                        name="magnifying-glass" size={calc.getRegHeightDp(20)} color="#292929"/>
                </View>


            </View>

        )
    }


}

SearchBar.propTypes = {
    onSearchFocus : PropTypes.func,
};


