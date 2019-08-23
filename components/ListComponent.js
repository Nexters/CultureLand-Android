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
        const cultureList = this.props.cultureList;
        const listTitle = this.props.listTitle;
        console.log(ISNULL(cultureList));
        console.log(ISNULL(listTitle));
        return (
            ISNULL(cultureList) ?
                ISNULL(listTitle) ?
                    <View style={styles.culture_null_wrapper}>
                        <Text style={styles.culture_null_title}>{'아직 기록하신\n문화생활이 없으시군요!'}</Text>
                        <Text style={styles.culture_null_subtitle}>{'어서 밖으로 나가서 문화생활을 즐기고\n컬러에 기록을 남겨주세요!'}</Text>
                    </View>
                :
                    <View style={styles.culture_null_wrapper}>
                        <Text style={styles.culture_null_title}>{'아직 기록하신\n문화생활이 없으시군요!'}</Text>
                        <Text style={styles.culture_null_subtitle}>{'어서 밖으로 나가서 문화생활을 즐기고\n컬러에 기록을 남겨주세요!'}</Text>
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
        fontFamily: "noto-sans-bold",
        fontSize: 18,
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.37,
        textAlign: "center",
        color: "#5c5c5c"
    },
    culture_null_subtitle : {
        marginTop: 15,
        fontFamily: "noto-sans",
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
