import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {RatioCalculator} from "../util";
import {WishListItem} from './WishListItem'
import InactiveImage from "../assets/images/icon/search/inactive.svg";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);

export class WishListComponent extends Component {
    constructor (props) {
        super(props);
    }
    state = {
        data: [
            {
                key: 0,
                category: '콘서트',
                title: '2019 렛츠락 페스티벌',
                date: '2019.09.21 ~ 2019.09.22',
                // like: true
            },
            {
                key: 0,
                category: '콘서트',
                title: '2019 렛츠락 페스티벌',
                date: '2019.09.21 ~ 2019.09.22',
                // like: true
            },
            {
                key: 0,
                category: '콘서트',
                title: '2019 렛츠락 페스티벌',
                date: '2019.09.21 ~ 2019.09.22',
                // like: true
            },
        ]
    }

    _renderItem = ({item}) => (
        <WishListItem 
            key={item.key} 
            category={item.category}
            title={item.title}
            date={item.date}
            // like={item.like}
        />
    )
    render() {
        return (
            <View style={styles.wishlist_container}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => alert('hello')}
                    style={styles.wishlist_noitem}
                >
                    <InactiveImage style={styles.noitem_icon}/>
                    <Text style={styles.noitem_text}>{'당신의 다이어리를 채울\n'}<Text style={styles.noitem_text_bold}>새로운 컬러</Text>를 찾아보세요!</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                >
                </FlatList>
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
        elevation: 3,
        borderRadius: 6,
        backgroundColor: "#ffffff"
    },
    noitem_icon : {
        width: calc.getRegWidthDp(26),
        height: calc.getRegHeightDp(26),
    },
    noitem_text : {
        marginLeft: calc.getRegWidthDp(13),
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