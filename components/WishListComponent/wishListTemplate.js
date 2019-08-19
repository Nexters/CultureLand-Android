import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import {RatioCalculator, MAIN_MONTH, ISNULL} from "../../util";
import {WishListItem} from '../WishListItem'
import InactiveImage from "../../assets/images/icon/search/inactive.svg";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);

export default class WishListComponent extends Component {
    constructor (props) {
        super(props);
    }

    _renderItem = ({item}) => (
        <WishListItem 
            key={item.key} 
            category={item.category}
            title={item.title}
            date={item.date}
            isLiked={item.isLiked}
            imageUrl={item.imageUrl}
        />
    )
    render() {
        const wishList = this.props.wishList;
        const wishListPropsArray = []
        wishList.map((wishList, index) => {
            wishListPropsArray.push({
                key: index,
                category: wishList.category,
                title: wishList.title,
                date: wishList.date,
                isLiked: wishList.isLiked,
                imageUrl: wishList.imageUrl,
            })
        })
        return (
            <View style={styles.wishlist_container}>
                {  ISNULL(wishList) ? 
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => alert('hello')}
                        style={styles.wishlist_noitem}
                    >
                        <InactiveImage style={styles.noitem_icon}/>
                        <Text style={styles.noitem_text}>{'당신의 다이어리를 채울\n'}<Text style={styles.noitem_text_bold}>새로운 컬러</Text>를 찾아보세요!</Text>
                    </TouchableOpacity>
                :
                    <FlatList
                        data={wishListPropsArray}
                        renderItem={this._renderItem}
                    >
                    </FlatList>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wishlist_container: {
        flex: 1,
        marginTop: calc.getRegHeightDp(28),
        paddingHorizontal: calc.getRegWidthDp(21),
    },
    wishlist_noitem : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: calc.getRegWidthDp(21),
        paddingVertical: calc.getRegHeightDp(13),
        // elevation: 3,
        borderRadius: 6,
        backgroundColor: "#ffffff"
    },
    noitem_icon : {
        width: calc.getRegWidthDp(26),
        height: calc.getRegHeightDp(26),
    },
    noitem_text : {
        marginLeft: calc.getRegWidthDp(13),
        fontFamily: "noto-sans",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing:  -0.25,
        color: "#464646"
    },
    noitem_text_bold : {
        fontWeight: "bold",
    },
})

WishListComponent.PropTypes ={
    wishList : PropTypes.string,
    getLoading : PropTypes.string,
    getError : PropTypes.string,
};