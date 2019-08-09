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
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableOpacity


} from 'react-native';
import {RatioCalculator} from "../../util";
import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import PropTypes from 'prop-types';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);
/**
 * FLOW
 *
 * 기능은 DI를 통하여 이용됨.
 *
 * searchModeScreen 을 포함하고 있는 객체는 데이터를 어디서 어떻게 받는지
 *
 */



export default class SearchModeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isFocused: false,
            isSearchMode: this.props.isSearchMode,
            errorMessage: "",
        }


        this.item = [
            "친구랑 친척이랑", "친구랑 손절", "친구와의 우정",
            "친구랑 친척이랑", "친구랑 손절", "친구와의 우정",
            "친구랑 친척이랑", "친구랑 손절", "친구와의 우정",
            "친구랑 친척이랑", "친구랑 손절", "친구와의 우정",
            "친구랑 친척이랑", "친구랑 손절", "친구와의 우정",
            "친구랑 친척이랑", "친구랑 손절", "친구와의 우정",
            "친구랑 친척이랑", "친구랑 손절", "친구와의 우정",
            "친구랑 친척이랑", "친구랑 손절", "친구와의 우정",
        ];

    }


    onSearchFocus = function () {
        this.props.onSearchFocus();
        this.setState({isFocused: true});
    };


    render() {
        return (
            <View>
                {this.state.isSearchMode ?
                    <View>
                        <View style={styles.active_container}>
                            <TouchableWithoutFeedback onPress={this.props.cancelSearch}>
                                <View style={styles.back_button}>
                                    <AntDesign
                                        name="left" size={calc.getRegHeightDp(20)} color="#292929"/>
                                </View>
                            </TouchableWithoutFeedback>

                            <View style={styles.active_wrapper}>

                                <TextInput style={styles.active_input_text}
                                           onChangeText={this.props.doSearch}
                                           selectionColor={"#f15642"}
                                >
                                </TextInput>

                                <View style={styles.magnifying_glass}>
                                    <Entypo
                                        name="magnifying-glass" size={calc.getRegHeightDp(20)} color="#292929"/>
                                </View>
                            </View>
                        </View>

                        <View
                            style={styles.active_hor_line}>
                        </View>

                        <ScrollView>
                            {
                                this.item.map((item) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={this.props.onSelectSearchResult}>
                                            <View style={styles.active_search_result_wrapper}>

                                                <Text style={styles.active_search_result_content}>
                                                    {item}

                                                </Text>
                                            </View>
                                        </TouchableOpacity>)
                                })
                            }
                        </ScrollView>
                    </View>

                    :
                    <TouchableWithoutFeedback
                    ref={(input) => {
                    this.textInput = input;
                }}
                    style={styles.input_text}
                    onPress={this.props.onSearchFocus}
                    >
                    <View style={styles.container}>

                    <View style={styles.input_text}
                    onChangeText={this.props.doSearch}
                    selectionColor={"#f15642"}
                    >
                    </View>

                    <View style={styles.magnifying_glass}>
                    <Entypo
                    name="magnifying-glass" size={calc.getRegHeightDp(20)} color="#292929"/>
                    </View>
                    </View>

                    </TouchableWithoutFeedback>

                    }


            </View>

        )
    }
}

SearchModeScreen.propTypes = {
    doSearch: PropTypes.func,
    cancelSearch: PropTypes.func,
    onSelectSearchResult: PropTypes.func,
    onSearchFocus: PropTypes.func,
    isSearchMode: PropTypes.bool,
};


