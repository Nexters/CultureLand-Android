import
    * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    ScrollView,
    TouchableWithoutFeedback,

    Keyboard

} from 'react-native';

import {CATEGORY, CATEGORY_KEY} from "../../actionTypes/productList";
import {numberWithCommas, RatioCalculator} from "../../util";
import SearchBar from '../../components/SearchBar';
import Highlighter from 'react-native-highlight-words';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view-forked'
import DropDown from "../../components/DropDown";
import TabBarIcon from "../../components/TabBarIcon";
import SearchModeScreen from '../SearchMode/index'
import PlannedListSearchManagerImpl from "../../util/PlannedListSearchImpl";
import MyPageScreen from "../MyPage";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

const category_types = ["영화", "뮤지컬", "콘서트", "연극", "기타"];
const sorting_types = ["신규순", "인기순"];


function make_items(index) {
    let items = [];
    for (let i = 0; i < 3; i++) {
        items.push(
            <View
                key={i + index}
                style={styles.item_wrapper}>

                <Text>{i + index}</Text>

            </View>
        )
    }
    return items;
}

function make_bottom() {
    let items = [];

    for (let i = 0; i < 5; i++) {

        items.push(<View
                key={i}
                style={styles.item_group_wrapper}>
                {make_items(i * 3)}
            </View>
        );
    }
    return items;

}

export default class PlanedListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSearchMode: false,
            filter: true,
            data: 1,

        };
        this.searchManager = new PlannedListSearchManagerImpl(this);

        console.log(JSON.stringify(this.props.productList));
     //   this.props.getProductList(CATEGORY.ALL_PRODUCT);
    }

    componentDidMount() {


    }


    onSearchFocus() {
        this.setState({isSearchMode: true});
    }


    render() {

        const {
            productList
        } = this.props;
        return (
            <View>
                {!this.state.isSearchMode ? (
                        <ScrollView
                            ref={(ref) => {
                                this.scrollView = ref;
                            }}
                            style={styles.container}
                        >
                            <View>
                                <Highlighter

                                    highlightStyle={{
                                        color: "black",
                                        fontWeight: "800"
                                    }}
                                    searchWords={
                                        ["새로운 컬러"]
                                    }
                                    style={styles.suggestion_text}
                                    textToHighlight={`당신의 다이어리를 채울\n새로운 컬러를 찾아보세요!`}>

                                </Highlighter>

                                <SearchModeScreen
                                    onSearchFocus={this.onSearchFocus.bind(this)}
                                    SearchManager={this.state.searchManager}>
                                </SearchModeScreen>

                                <ScrollableTabView
                                    style={styles.category_scrollable_tab_layout}
                                    renderTabBar={() => (
                                        <ScrollableTabBar
                                            style={styles.category_scrollStyle}
                                            tabStyle={styles.category_tabStyle}
                                        />
                                    )}
                                    tabBarTextStyle={styles.tabBarTextStyle}
                                    tabBarInactiveTextColor={"#797979"}
                                    tabBarActiveTextColor={'black'}
                                    tabBarUnderlineStyle={styles.category_underline}
                                    initialPage={0}
                                >

                                    <View key={CATEGORY_KEY(CATEGORY.ALL_PRODUCT)} tabLabel={'전체'}
                                    style={{marginRight:15,}}
                                    />
                                    <View key={CATEGORY_KEY(CATEGORY.EXHIBITION)} tabLabel={'전시'}/>
                                    <View key={CATEGORY_KEY(CATEGORY.CONCERT)} tabLabel={'콘서트'}/>
                                    <View key={CATEGORY_KEY(CATEGORY.MUSICAL)} tabLabel={'뮤지컬'}/>
                                    <View key={CATEGORY_KEY(CATEGORY.PLAY)} tabLabel={'연극'}/>
                                    <View key={CATEGORY_KEY(CATEGORY.ETC)} tabLabel={'기타'}/>

                                </ScrollableTabView>

                                <View style={styles.item_information_labels_wrapper}>
                                    <Text style={styles.number_of_items}>총
                                        {" "+numberWithCommas(productList.length)} 건</Text>

                                    <DropDown/>


                                </View>


                                <View style={styles.bottom_wrapper}>
                                    {
                                        make_bottom()
                                    }
                                </View>
                            </View>
                        </ScrollView>

                    ) :
                    <SearchModeScreen
                        isSearchMode={true}
                        doSearch={this.searchManager.doSearch.bind(this)}
                        onSelectSearchResult={this.searchManager.onSelectSearchResult.bind(this)}
                        cancelSearch={this.searchManager.cancelSearch.bind(this)}

                    />


                }
            </View>
        )
    }
}

PlanedListScreen.navigationOptions = {
    header: null,
};

PlanedListScreen.propTypes = {
    productList : PropTypes.array,
};
