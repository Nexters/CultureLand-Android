import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


export class ListItem extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.list_item}>
                <Text style={styles.list_item_tit}>소란 콘서트</Text>
                <Text style={styles.list_item_date}>2019.08.23</Text>
                <Text style={styles.list_item_place}>홍대 뭐시기</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list_item: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginBottom: 12,
        borderRadius: 7,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#979797"
    },
    list_item_tit : {
        fontSize: 22,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.01,
        color: "#292929"
    },
    list_item_date : {
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.01,
        color: "#969696"
    },
    list_item_place : {
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0.01,
        color: "#969696"
    }
})