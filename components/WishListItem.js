import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button,
} from 'react-native';
import {RatioCalculator} from "../util";
import NavigatorService from "../util/NavigatorService";
import StarImage from "../assets/images/icon/star.svg";
import StarChkImage from "../assets/images/icon/star_checked.svg";
import RBSheet from "react-native-raw-bottom-sheet";
import CategoryType from '../domain/CategoryType';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);


export class WishListItem extends Component {
    /**
     *
     *  처음 불러올 떄, 위시리스트에 있으면 별 채워진 상태로 로딩!
     *  채워진 상태에서 별을 다시 누르면, 위시리스트에서 삭제 요청을 한다
     *  별 누르면 -> 서버에 위시리스트에 추가
     */

    constructor(props){
        super(props);

        this.state = {
            isWished : true,
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
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => NavigatorService.push('CultureDetail')}
                style={styles.wishlist_item}
            >
                <View style={styles.wishlist_image_container}>
                    <Image source={{uri : this.props.imageUrl}}/>
                </View>
                <View style={styles.wishlist_text_container}>
                    <Text style={styles.wishlist_subtitle}>{this.props.category}</Text>
                    <Text style={styles.wishlist_title}>{this.props.title}</Text>
                    <Text style={styles.wishlist_date}>{this.props.date}</Text>
                </View>
                <View style={styles.wishlist_icon_container}>
                    {this.state.isWished ?
                        // 위시 리스트에 있으면 채워진 상태로 로딩
                        <StarChkImage style={styles.wishlist_icon}/>
                        :
                        <StarImage style={styles.wishlist_icon}/>
                    }
                    
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    
    wishlist_item : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: calc.getRegHeightDp(13),
        padding: calc.getRegWidthDp(8),
        // elevation: 3,
        borderRadius: 6,
        backgroundColor: "#ffffff"
    },
    wishlist_image_container : {
        width: calc.getRegWidthDp(54),
        height: calc.getRegWidthDp(80),
    },
    wishlist_image : {
        flex: 1,
        backgroundColor: '#ebebeb',
    },
    wishlist_text_container : {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-start',
        textAlign: 'left',
        paddingLeft: calc.getRegWidthDp(8),
        paddingVertical: calc.getRegWidthDp(2),
    },
    wishlist_subtitle : {
        fontFamily: "noto-sans",
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.2,
        color: "#b0b0b0"
    },
    wishlist_title : {
        flex: 1,
        marginTop: calc.getRegHeightDp(3),
        fontFamily: "noto-sans",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.25,
        color: "#464646"
    },
    wishlist_date : {
        fontFamily: "noto-sans",
        fontSize: 12,
        // fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: -0.15,
        color: "#b0b0b0"
    },
    wishlist_icon_container : {
        width: calc.getRegWidthDp(44),
        height: calc.getRegHeightDp(44),
        // marginRight: calc.getRegWidthDp(10),
        
    },
    wishlist_icon : {
        flex: 1,
        // backgroundColor: '#ebebeb',
    },
})