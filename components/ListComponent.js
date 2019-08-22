import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    FlatList,
} from 'react-native';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import {CATEGORY_KOR, KOR_CATEGORY_TO_ENG} from "../util";



export default class ListComponent extends Component {
    constructor (props) {
        super(props);
    }


    state = {
        data: [
            {
                id: 0,
                title: '소란',
                sometime : "2019-08-20",
                place: '난지한강공원',
                withWho : '',
                content : "hello world",
                imageUrl : "",
                favorite: false,
                culture : '콘서트',
            },

        ]
    };

    _renderItem = ({item}) => (
        <ListItem
            key={item.key}
            getNoteItem={this.props.getNoteItem}
            id={item.id}
            title={item.title}
            culture={CATEGORY_KOR(item.culture)}
            date={item.sometime}
            place={item.place}
            favorite={item.favorite}

        />
    );
    render() {
        return (
            <FlatList

                data={this.props.cultureList}
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
        marginTop: 28,
    }
});

ListComponent.navigationOptions = {
    header : null,
};
ListComponent.PropTypes = {
    cultureList : PropTypes.array,
    getNoteItem : PropTypes.func, // diaryList 의 action
};
