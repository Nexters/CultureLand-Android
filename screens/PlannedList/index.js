import
    * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
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
import {RatioCalculator} from "../../util";
import SearchBar from '../../components/SearchBar';
import Highlighter from 'react-native-highlight-words';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view-forked'
import DropDown from "../../components/DropDown";
import TabBarIcon from "../../components/TabBarIcon";
import SearchModeScreen from '../SearchMode'
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

let data = [{
    value: 'Banana',
}, {
    value: 'Mango',
}, {
    value: 'Pear',
}];
export default class PlanedListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSearchMode: false,
            data: 1,

        };
        this.searchManager = new PlannedListSearchManagerImpl(this)

    }

    onSearchFocus() {
        this.setState({isSearchMode: true});
    }


    triggerChange(){
    }


    render() {
        const state = this.state;

        return (
            <View>



                {!this.state.isSearchMode ? (
                    <ScrollView
                        ref={(ref)=>{
                            this.scrollView = ref;
                        }}
                        style={styles.container}
                        //scrollToOverflowEnabled={false}
                        //onScroll={this.handleScroll}
                        //bounces={true}
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
                                textToHighlight={"당신의 다이어리를 채울\n새로운 컬러를 찾아보세요!"}>

                            </Highlighter>

                            <SearchModeScreen
                                onSearchFocus={this.onSearchFocus.bind(this)}
                                SearchManager={this.state.searchManager}>
                            </SearchModeScreen>

                            <ScrollableTabView
                                style={styles.scrollable_tab_layout}
                                renderTabBar={() => (
                                    <ScrollableTabBar
                                        style={styles.scrollStyle}
                                        tabStyle={styles.tabStyle}
                                    />
                                )}


                                tabBarTextStyle={styles.tabBarTextStyle}
                                tabBarInactiveTextColor={"#797979"}
                                tabBarActiveTextColor={'black'}
                                tabBarUnderlineStyle={styles.category_underline}
                                initialPage={2}
                            >

                                <View key={'1'} tabLabel={'전체'} style={{flex: 1, backgroundColor: 'black'}}/>
                                <View key={'2'} tabLabel={'전시'} style={{flex: 1, backgroundColor: 'black'}}/>
                                <View key={'3'} tabLabel={'콘서트'} style={{flex: 1, backgroundColor: 'black'}}/>
                                <View key={'4'} tabLabel={'뮤지컬'} style={{flex: 1, backgroundColor: 'black'}}/>
                                <View key={'5'} tabLabel={'연극'} style={{flex: 1, backgroundColor: 'black'}}/>
                                <View key={'6'} tabLabel={'기타'} style={{flex: 1, backgroundColor: 'black'}}/>

                            </ScrollableTabView>

                            <View style={styles.item_information_labels_wrapper}>
                                <Text style={styles.number_of_items}>총 3,032건</Text>

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



