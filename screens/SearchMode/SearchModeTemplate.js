import React, {Component} from 'react';
import styleFn from "./styles"
import {Dimensions, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {RatioCalculator} from "../../util";
import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import PropTypes from 'prop-types';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);


export default class SearchModeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isFocused: false,
            isSearchMode: this.props.isSearchMode,
            errorMessage: "",
            lastSearchRequest : 0,
        };


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

    componentDidMount(){
    }
    onSearchFocus = function () {
        this.props.onSearchFocus();
        this.setState({isFocused: true});
    };

    searchByKeyword(keyword){
        let now  = parseInt((new Date).getTime());
        let diff = parseInt(now-this.state.lastSearchRequest);

        if(diff < 500){
            return;
        }else{
            console.log("now : "+now +" , "+this.state.lastSearchRequest+", "+
                diff+", 입력 텍스트"+keyword);

            this.setState({lastSearchRequest : now});

            this.props.searchRequest(keyword);
        }
    }


    render() {


        const
        {
            searchedProductList,
            keyword,
            searchedProductError
        } = this.props;

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
                                           onChangeText={this.searchByKeyword.bind(this)}
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
                                searchedProductList.map((item) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={this.props.onSelectSearchResult}>
                                            <View style={styles.active_search_result_wrapper}>

                                                <Text style={styles.active_search_result_content}>
                                                    {item.title}
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
                        style={styles.container}
                        onPress={this.props.onSearchFocus}
                    >
                        <View style={styles.container}>

                            <View style={styles.input_text}
                                  onChangeText={this.searchByKeyword}
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
    searchProduct : PropTypes.func,
    searchedProductList : PropTypes.array,
    keyword : PropTypes.string,
    searchedProductError : PropTypes.string,
    lastSearchRequest: PropTypes.number,
    searchRequest : PropTypes.func,
};