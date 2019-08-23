import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    Picker,
    ScrollView,
    StatusBar,
    Button,
    TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import {Dropdown} from 'react-native-material-dropdown';
import {CATEGORY_KOR, LIST_TYPE, RatioCalculator} from "../../util";
import NavigatorService from "../../util/NavigatorService";
import MainCarousel from "../../components/MainCarousel/index"
import {FloatingButton} from "../../components/FloatingButton"
import WishListComponent from "../../components/WishListComponent/index"
import moment from "moment";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);


export default class MainScreen extends Component {
    /**
     *
     *  처음 불러올 떄, 노트 리스트 && 찜 리스트 동시 없으면 초기 안내 스크린 출력
     *  
     */

    constructor(props){
        super(props);

        this.state = {
            isData : true,
            selectedYear : 2019,
        }
    }

    componentDidMount(){

        this.props.navigation.addListener("willFocus",()=>{
            this.props.getMainWishList();
            this.props.getMainCount(this.state.selectedYear);
        });
    }

    onDropDownChangeHandler(year){
        this.setState({selectedYear : year});
        this.props.getMainCount(this.state.selectedYear);
    }


    render () {
        const currentDate= moment(new Date()).format("YYYY-MM-DD")
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.main_top_wrapper}>
                        <Dropdown
                            value={"2019"}
                            data={[
                                {
                                    value: "2019"
                                },
                                {
                                    value: "2018"
                                },
                                {
                                    value: "2017"
                                },
                                {
                                    value: "2016"
                                },
                            ]}
                            onChangeText={value=>this.onDropDownChangeHandler(value)}
                            fontSize={24}
                            dropdownPosition={0}
                            inputContainerStyle={{
                                borderBottomColor: 'transparent',
                            }}
                            containerStyle={{
                                width: calc.getRegWidthDp(114),
                                height: calc.getRegHeightDp(70),
                            }}
                            pickerStyle={{
                                marginTop : calc.getRegHeightDp(60),
                            }}
                            itemTextStyle={{
                                fontFamily: "noto-sans",
                                fontWeight: '400',
                                fontSize: 24,
                                lineHeight: 28,
                            }}
                            style={{
                                fontFamily: "noto-sans",
                                fontWeight: '700',
                                fontSize: 24,
                                lineHeight: 28,
                            }}
                        />
                        <View style={styles.main_top_description}>
                            <Text style={styles.main_top_text}>Today is </Text>
                            <Text style={styles.main_top_date}> {currentDate} </Text>
                        </View>
                    </View>
                    {this.state.isData ?
                        (<View style={styles.main_wrapper}>
                            <View style={styles.carousel_wrapper}>
                                <View style = {styles.main_title_line} />
                                <Text style={styles.main_title}>월별 기록</Text>
                                <MainCarousel
                                    style={styles.main_carousel_container}
                                    onMonthPressHandler={this.props.getDiaryList}

                                />
                            </View>
                            <View style={styles.wishlist_wrapper}>
                                <View style = {styles.main_title_line} />
                                <Text style={styles.main_title}>찜 목록</Text>
                                <WishListComponent style={styles.wishlist_list}/>
                            </View>
                        </View>)
                        :
                        (<View style={styles.main_starter_wrapper}>
                            <Text style={styles.main_starter_title}>{'아직 기록하신\n문화생활이 없으시군요!'}</Text>
                            <Text style={styles.main_starter_subtitle}>{'어서 밖으로 나가서 문화생활을 즐기고\n컬러에 기록을 남겨주세요!'}</Text>
                        </View>)
                    }
                </ScrollView>
                <FloatingButton/>
            </View>
        )
    }
}

MainScreen.PropTypes = {
    noteList : PropTypes.string,
    wishList : PropTypes.string,
    getLoading : PropTypes.string,
    getError : PropTypes.string,
};

MainScreen.navigationOptions = {
    header: null,
    headerMode: 'none',
};