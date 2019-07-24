import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import {ListItem} from './ListItem'

export class List extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        var listArr = [];
        for(let i = 0; i < 10; i ++) {
            listArr.push(
                <ListItem key={i}/>
            )
        }
        return (
            <ScrollView>
                <View style={styles.list_container}>
                    {listArr}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    list_container: {
        flex: 1,
        marginTop: 97,
        marginHorizontal: 26,
    }
})