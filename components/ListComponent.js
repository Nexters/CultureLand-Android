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
import {ListItem} from './ListItem'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);

export class ListComponent extends Component {
    constructor (props) {
        super(props);
}
    state = {
        data: [
            {
                key: 0,
                title: '소란',
                category: '콘서트',
                date: '2019.08.05',
                where: '난지한강공원',
            },
            {
                key: 1,
                title: '아이유',
                category: '전시',
                date: '2019.08.05',
                where: '세종문화회관',
            },
            {
                key: 3,
                title: '소란',
                category: '콘서트',
                date: '2019.08.05',
                where: '난지한강공원',
            },
            {
                key: 4,
                title: '아이유',
                category: '전시',
                date: '2019.08.05',
                where: '세종문화회관',
            },
            {
                key: 5,
                title: '아이유',
                category: '전시',
                date: '2019.08.05',
                where: '세종문화회관',
            },
            {
                key: 6,
                title: '아이유',
                category: '전시',
                date: '2019.08.05',
                where: '세종문화회관',
            },
            {
                key: 7,
                title: '아이유',
                category: '전시',
                date: '2019.08.05',
                where: '세종문화회관',
            },
]
    };

    _renderItem = ({item}) => (
        <ListItem 
            key={item.key} 
            title={item.title}
            category={item.category}
            date={item.date}
            where={item.where}
        />
    );
    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={this._renderItem}
                style={styles.list_container}
            >
            </FlatList>
        )
    }
}

const styles = StyleSheet.create({
    list_container: {
        flex: 1,
        marginTop: calc.getRegHeightDp(28),
        paddingHorizontal: calc.getRegWidthDp(21),
    }
})