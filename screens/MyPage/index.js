import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    FlatList

} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {RatioCalculator} from "../../util";
import HomeScreen from "../HomeScreen";
import PlanedListScreen from "../PlannedList";
import CategoryType from "../../domain/CategoryType";
import Entypo from '@expo/vector-icons/Entypo'

console.log("마이페이지");
const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);


export default class MyPageScreen extends Component {

    constructor(props) {
        super(props);
        this.categories = [
            new CategoryType("좋아하는\n기록", "", 4,"#e44343"),
            new CategoryType("전시", "", 5),
            new CategoryType("콘서트", "", 3),
            new CategoryType("뮤지컬", "", 4),
            new CategoryType("연극", "", 1),
            new CategoryType("기타", "", 0)
        ];
        this.contentJSX = new Array(this.categories.length);


    }

    returnArrowButton(){
        return (
            <View style={styles.category_item_arrow_button}>
                <Entypo
                    name="chevron-thin-right" size={calc.getRegHeightDp(16)} color="#292929"/>
            </View>
        )
    }

    generateCategories() {
        let residueColumn = this.categories.length % 2;
        let numberOfRow = this.categories.length / 2;
        if (residueColumn) {
            numberOfRow++;
        }
        for (let i = 0; i < numberOfRow; i++) {
            this.contentJSX.push(
                <View style={styles.item_pair_wrapper}>
                    <View style={styles.category_left_wrapper}>
                        <View style={styles.category_item_wrapper}>
                            <Image style={styles.category_item_icon}>

                            </Image>
                            <View style={styles.category_item_content_wrapper}>
                                <View style={styles.category_item_title_wrapper}>
                                <Text style={{
                                    ...styles.category_item_title,
                                    color: this.categories[i * 2].getTextColor()
                                }}>
                                    {this.categories[i * 2].getName()}
                                </Text>
                                </View>
                                <Text style={styles.category_item_number}>
                                    {this.categories[i * 2].getNumberOfItem()}
                                </Text>
                                {this.returnArrowButton()}
                            </View>
                        </View>
                    </View>
                    {this.categories.length > (i * 2 + 1) ?
                        <View style={styles.category_right_wrapper}>
                            <View style={styles.category_item_wrapper}>
                                <Image style={styles.category_item_icon}>

                                </Image>
                                <View style={styles.category_item_content_wrapper}>
                                    <View style={styles.category_item_title_wrapper}>
                                    <Text style={styles.category_item_title}>
                                        {this.categories[i * 2 + 1].getName()}
                                    </Text>
                                    </View>
                                    <Text style={styles.category_item_number}>
                                        {this.categories[i * 2 + 1].getNumberOfItem()}
                                    </Text>
                                    {this.returnArrowButton()}
                                </View>
                            </View>
                        </View>
                        : <View/>
                    }
                </View>);
        }
        return this.contentJSX;
    }

    render() {
        return (

            <View>
                <View style={styles.top_wrapper}>
                    <Text style={styles.user_name_text}>
                        마이페이지
                    </Text>
                    <View style={styles.user_wrapper}>

                        <Text style={styles.user_email}>
                            4whomtbts@gmail.com
                        </Text>
                        <Text style={styles.user_logout}>
                            로그아웃
                        </Text>
                        <View/>

                    </View>
                    <View style={styles.number_of_data_wrapper}>
                        <View style={styles.data_symbol}>

                        </View>
                        <Text style={styles.number_of_data_title}>
                            총 기록 개수
                        </Text>
                        <Text style={styles.number_of_data_content}>
                            13
                        </Text>

                    </View>

                </View>


                <View style={styles.bottom_wrapper}>
                    {this.generateCategories()}
                </View>
            </View>
        )
    }
}

MyPageScreen.navigationOptions = {
    header: null,
};