import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    FlatList,
    View,
    Text
} from 'react-native';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import {CATEGORY_KOR, KOR_CATEGORY_TO_ENG, ISNULL} from "../util";
import Highlighter from 'react-native-highlight-words';


export default class ListComponent extends Component {
    constructor (props) {
        super(props);
    }


    _renderItem = ({item}) => (

        <ListItem
            key={item.key}
            getNoteItem={this.props.getNoteItem}
            id={item.id}
            title={item.title}
            cultureName={CATEGORY_KOR(item.culture)}
            sometime={item.sometime}
            place={item.place}
            favorite={item.favorite}
            imageUrl={item.imageUrl}
            withWho={item.withWho}
        />
    );

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
    render() {
        const cultureList = this.props.cultureList;
        const listTitle = this.props.listTitle;
        return (
            ISNULL(cultureList) ?
                ISNULL(listTitle) ?
                    <View style={styles.culture_null_wrapper}>
                        <Text style={styles.culture_null_subtitle}>{'경험한 문화생활을 기록하세요!'}</Text>
                        <Highlighter
                            highlightStyle={{
                                color: "#f15642"
                            }}
                            searchWords={
                                ["♥"]
                            }
                            style={styles.culture_null_title}
                            textToHighlight={`맘에 드는 컬러들에 ♥ 하세요!`}>

                        </Highlighter>
                    </View>
                :
                    <View style={styles.culture_null_wrapper}>
                        <Text style={styles.culture_null_title}>{'다양한 문화생활이\n당신을 기다리고 있어요!'}</Text>
                        <Text style={styles.culture_null_subtitle}>{'지금 바로 검색을 통해 새로운 컬러를 찾아보세요!'}</Text>
                    </View>
            :
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
        marginTop: 84,
    },
    culture_null_wrapper : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    culture_null_title : {
        marginTop: 10,
        fontFamily: "Noto Sans KR",
        fontWeight: "700",
        fontSize: 18,
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.37,
        textAlign: "center",
        color: "#5c5c5c"
    },
    culture_null_subtitle : {
        marginTop: 10,
        fontFamily: "Noto Sans KR",
        fontWeight: "300",
        fontSize: 14,
        fontStyle: "normal",
        lineHeight: 18,
        letterSpacing: -0.29,
        textAlign: "center",
        color: "#5c5c5c"
    },
});

ListComponent.navigationOptions = {
    header : null,
};
ListComponent.PropTypes = {
    cultureList : PropTypes.array,
    getNoteItem : PropTypes.func, // diaryList 의 action
};
