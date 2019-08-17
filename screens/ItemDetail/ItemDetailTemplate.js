import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image

} from 'react-native';
import {RatioCalculator} from "../../util";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import PropTypes from 'prop-types';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

//TODO 글자수 넘어가면 복수라인처리

export default class ItemDetailScreen extends Component {

    /**
     *
     *  처음 불러올 떄, 위시리스트에 있으면 별 채워진 상태로 로딩!
     *  채워진 상태에서 별을 다시 누르면, 위시리스트에서 삭제 요청을 한다
     *  별 누르면 -> 서버에 위시리스트에 추가
     */
    /** TODO
     *  상품정보 불러오기
     *  위시리스트 등록함수(api)
     *  위시리스트 삭제함수(api)
     *  isWished 인지 확인함수(api)
     */



    constructor(props){
        super(props);

        this.state = {
            isWished : false,
        }
    }

    doWish(){

    }
    cancelWish(){

    }
    checkIsWished(){

    }

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.back_button}>
                    <AntDesign
                        name="left" size={calc.getRegHeightDp(33)} color="#f4f4f4"/>
                </View>
                <View style={styles.center_image}>

                </View>
                <View style={styles.bottom_info_wrapper}>

                    <View style={styles.title_row}>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <View style={styles.star_button}>

                            {this.state.isWished ?
                                // 위시 리스트에 있으면 채워진 상태로 로딩
                                <Ionicons
                                    name="ios-star" size={30} color="#8f8f8"
                                />
                                :
                                <Ionicons
                                    name="ios-star-outline" size={30} color="#8f8f8"
                                />
                            }

                        </View>
                    </View>
                    <View style={styles.info_row}>
                        <Text style={styles.row_title}>
                            유형
                        </Text>
                        <Text style={styles.row_content}>
                            뮤지컬
                        </Text>
                    </View>
                    <View style={styles.info_row}>
                        <Text style={styles.row_title}>
                            기간
                        </Text>
                        <Text style={styles.row_content}>
                            2019.07.13~2019.09.08
                        </Text>
                    </View>
                    <View style={styles.info_row}>
                        <Text style={styles.row_title}>
                            장소
                        </Text>
                        <Text style={styles.row_content}>
                            대학로 TOM 시어터 2 관
                        </Text>
                    </View>
                </View>


            </View>
        )
    }

};

ItemDetailScreen.PropTypes ={
    imageURL : PropTypes.string,
    title : PropTypes.string,
    category : PropTypes.string,
    location : PropTypes.string,
};