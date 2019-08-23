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
    ActivityIndicator,
    Keyboard

} from 'react-native';

// import {CATEGORY, CATEGORY_KEY} from "../../actionTypes/productList";
import {numberWithCommas, RatioCalculator, CATEGORY, CATEGORY_KEY, CATEGORY_BY_INDEX} from "../../util";
import SearchBar from '../../components/SearchBar';
import Highlighter from 'react-native-highlight-words';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view-forked'
import DropDown from "../../components/DropDown";
import TabBarIcon from "../../components/TabBarIcon";
import SearchModeScreen from '../SearchMode/index'
import PlannedListSearchManagerImpl from "../../util/PlannedListSearchImpl";
import NavigatorService from "../../util/NavigatorService";
import MyPageScreen from "../MyPage";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);


export default class PlanedListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSearchMode: false,
            filter: true,
            data: 1,
            loading : true,
            categoryTabIndex : 0,

        };
        this.searchManager = new PlannedListSearchManagerImpl(this);
        this.props.getProductList(CATEGORY.CONCERT, 0);

    }

    componentDidMount() {

        //this.props.getProductList(CATEGORY.ALL_PRODUCT,0);

    }


    onSearchFocus() {
        this.setState({isSearchMode: true});
    }

    navigateToDetailView(itemId){
        this.props.getItemInfo(itemId);
        this.props.isWishedRequest(itemId);
        this.props.navigation.navigate('ItemDetail',{ id : itemId });

    }

    make_items(index) {
        let items=[];
        for (let i = 0; i < 3; i++) {
            let item = this.props.productList[index+i];

            if(index+i < this.props.productList.length){
                items.push(
                    <View
                        key={item.id}
                        style={styles.item_wrapper}
                    >
                        <TouchableWithoutFeedback

                            onPress={()=>this.navigateToDetailView(item.id)}
                        >

                            <Image source={{uri: 'http:'+item.imageUrl}}

                                   style={styles.thumbnail}
                            />
                        </TouchableWithoutFeedback>

                    </View>
                )
            }
        }
        return items;
    }

    make_bottom() {
        let items = [];
        for (let i = 0; i < this.props.productList.length/3 ; i++) {

            items.push(<View
                    key={i}
                    style={styles.item_group_wrapper}>
                    {this.make_items(i * 3)}
                </View>
            );
        }
        return items;

    }

    changeListCategory(event) {

        this.props.getProductList(CATEGORY_BY_INDEX(event.i), 0);
        this.setState({categoryTabIndex : event.i});

    }




    render() {


        const {
            productList
        } = this.props;


        if(this.props.loading){
            return (
                <View style = {styles.activityIndicator_container}>
                    <ActivityIndicator 
                        color = '#f15642'
                        size = "large"
                        style = {styles.activityIndicator}
                    />
                </View>
            );
        }else{

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
                                            fontFamily: 'noto-sans-bold',
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
                                        tabBarTextStyle={styles.category_tabBar_text_style}
                                        tabBarInactiveTextColor={"#797979"}
                                        tabBarActiveTextColor={'black'}
                                        tabBarUnderlineStyle={styles.category_underline}
                                        initialPage={this.state.categoryTabIndex}
                                        onChangeTab={this.changeListCategory.bind(this)}
                                    >
                                        <View key={CATEGORY_KEY(CATEGORY.ALL_PRODUCT)} tabLabel={'전체'}
                                              style={styles.category_item}/>
                                        <View key={CATEGORY_KEY(CATEGORY.EXHIBITION)} tabLabel={'전시'}/>
                                        <View key={CATEGORY_KEY(CATEGORY.CONCERT)} tabLabel={'콘서트'}/>
                                        <View key={CATEGORY_KEY(CATEGORY.MUSICAL)} tabLabel={'뮤지컬'}/>
                                        <View key={CATEGORY_KEY(CATEGORY.PLAY)} tabLabel={'연극'}/>
                                        <View key={CATEGORY_KEY(CATEGORY.ETC)} tabLabel={'기타'}/>

                                    </ScrollableTabView>
                                    <View style={styles.item_information_labels_wrapper}>
                                        <Highlighter

                                            highlightStyle={{
                                                fontFamily: 'noto-sans-bold',
                                            }}
                                            searchWords={
                                                [`${numberWithCommas(productList.length)}`]
                                            }
                                            style={styles.number_of_items}
                                            textToHighlight={`총 ${numberWithCommas(productList.length)} 건`}>

                                        </Highlighter>

                                        <DropDown/>

                                    </View>



                                    <View style={styles.bottom_wrapper}>
                                        {
                                            this.make_bottom()
                                        }
                                    </View>
                                </View>
                            </ScrollView>

                        ) :
                        <SearchModeScreen
                            isSearchMode={true}
                            doSearch={this.searchManager.doSearch.bind(this)}
                            onSelectSearchResult={this.navigateToDetailView.bind(this)}
                            cancelSearch={this.searchManager.cancelSearch.bind(this)}

                        />


                    }
                </View>
            )
        }
    }
}

PlanedListScreen.navigationOptions = {
    header: null,
};

PlanedListScreen.propTypes = {
    productList: PropTypes.array,
};

