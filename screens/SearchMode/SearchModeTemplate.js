import React, {Component} from 'react';
import styleFn from "./styles"
import {Dimensions, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image,View} from 'react-native';
import {numberWithCommas, omitAutoCompleteText, RatioCalculator} from "../../util";
import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import PropTypes from 'prop-types';
import Highlighter from 'react-native-highlight-words';
import PlanedListScreen from "../PlannedList/plannedListTemplate";
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
            keyword : '',
            submitted : false,
        };


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

        if(diff < 100){
            return;
        }else{
            console.log("now : "+now +" , "+this.state.lastSearchRequest+", "+
                diff+", 입력 텍스트"+keyword);

            this.setState({lastSearchRequest : now});
            this.setState({keyword : keyword});

            this.props.searchRequest(keyword);
        }
    }

    navigateToDetailView(itemId){
        this.props.getItemInfo(itemId);
        this.props.isWishedRequest(itemId);
        this.props.navigation.navigate('ItemDetail');

    }

    submitEditing(){
        this.props.submitSearchRequest(this.state.keyword);

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
                                           onSubmitEditing={this.submitEditing.bind(this)}
                                           selectionColor={"#f15642"}
                                >
                                </TextInput>

                                <View style={styles.magnifying_glass}>
                                    <TouchableWithoutFeedback onPress={this.submitEditing.bind(this)}>
                                    <Entypo
                                        name="magnifying-glass" size={calc.getRegHeightDp(20)} color="#292929"/>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>

                        <View
                            style={styles.active_hor_line}>
                        </View>

                        {

                            this.props.submitted?
                                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom :330}} >


                                    <Highlighter

                                        highlightStyle={{
                                            fontFamily: "Noto Sans KR",
                                            fontWeight: "700",
                                        }}
                                        searchWords={
                                            [`${numberWithCommas(searchedProductList.length)}`]
                                        }
                                        style={styles.number_of_items}
                                        textToHighlight={`총 ${numberWithCommas(searchedProductList.length)} 건`}>

                                    </Highlighter>

                                    <View style={{
                                        flexDirection : 'row',
                                        flexWrap : 'wrap',
                                        alignItems : 'flex-start',
                                        width: '100%',
                                        paddingHorizontal: 18

                                        }}>

                                    {

                                        searchedProductList.map((item) => {
                                            return (
                                                <TouchableOpacity
                                                    style={{
                                                        width : "33.3%",
                                                        height : 150,
                                                        padding: 6,
                                                        // paddingHorizontal: 12,
                                                    }}
                                                    onPress={
                                                        ()=>this.props.onSelectSearchResult(item.id)
                                                    }>
                                                    <View style={styles.item_img_wrapper}>
                                                        <Image style={{
                                                            backgroundColor : "#000",
                                                            flex: 1,
                                                            // width : "33.3%",
                                                            // height : 136,
                                                            // marginLeft : 14,
                                                            // marginBottom : 12,
                                                            borderRadius : 10,
                                                        }}
                                                            source={{uri: 'http:' + item.imageUrl}}
                                                        >
                                                        </Image>
                                                        <Text style={styles.item_text} numberOfLines={1}>{item.title}</Text>
                                                    </View>
                                                </TouchableOpacity>)
                                        })
                                    }
                                    </View>
                                </ScrollView>

                                :



                                <ScrollView>
                                    {
                                        searchedProductList.map((item) => {
                                            return (
                                                <TouchableOpacity
                                                    onPress={
                                                        ()=>this.props.onSelectSearchResult(item.id)
                                                    }>
                                                    <View style={styles.active_search_result_wrapper}>
                                                        <Highlighter

                                                            highlightStyle={{
                                                                color: '#f15642',
                                                            }}
                                                            searchWords={
                                                                [this.state.keyword]
                                                            }
                                                            style={styles.active_search_result_content}
                                                            textToHighlight={omitAutoCompleteText(item.title)}>
                                                        </Highlighter>
                                                    </View>
                                                </TouchableOpacity>)
                                        })
                                    }
                                </ScrollView>
                        }
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

SearchModeScreen.navigationOptions = {
    header: null,
};


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