import React from 'react';
import {Dimensions, Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ItemDetailScreen from '../screens/ItemDetail/index'
import MyPageScreen from "../screens/MyPage/index"
import PlanedListScreen from '../screens/PlannedList/index'
import MainScreen from '../screens/Main/index';
import NoteDetailScreen from '../screens/NoteDetail/index';
import NoteEditScreen from '../screens/NoteEdit/index';
import DiaryListScreen from '../screens/diaryListScreen/index';
import SignScreen from '../screens/Sign/index';

import HomeIcon from '../assets/images/icon/navigationBar/home/unselected.svg';
import HomeSelectedIcon from '../assets/images/icon/navigationBar/home/selected.svg';
import ListIcon from '../assets/images/icon/navigationBar/list/unselected.svg';
import ListSelectedIcon from '../assets/images/icon/navigationBar/list/selected.svg';
import MypageIcon from '../assets/images/icon/navigationBar/mypage/unselected.svg';
import MypageSelectedIcon from '../assets/images/icon/navigationBar/mypage/selected.svg';

import styleFn from "../screens/PlannedList/styles";
import {RatioCalculator} from "../util";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);


const config = Platform.select({
    web: {headerMode: 'none'},
    default: {
        
    },
});


const CultureStack = createStackNavigator(
    {
        Culture:PlanedListScreen,
        CultureDetail:ItemDetailScreen,
    },
    {
        initialRouteName : 'Culture',
        header: null,
        headerMode: 'none',
    },
    // config
);

CultureStack.navigationOptions = {
    tabBarLabel: '문화 리스트',
    tabBarIcon: ({focused}) => (
        focused ?
        <ListSelectedIcon
            width={34} height={34}
        />
        :
        <ListIcon
            width={34} height={34}
        />
    ),
    tabBarOnPress: ({ navigation, defaultHandler }) => {
        navigation.navigate('Culture')
        defaultHandler();
    }
};

CultureStack.path = '';

const HomeStack = createStackNavigator(
    {
        Home: MainScreen,
        DiaryList: DiaryListScreen,
        NoteDetail: NoteDetailScreen,
        NoteEdit: NoteEditScreen,
    },
    {
        initialRouteName : 'Home',
        headerMode: 'none',
    },
    // config
);

HomeStack.navigationOptions = {
    tabBarLabel: '홈',
    tabBarIcon: ({focused}) => (
        focused ?
        <HomeSelectedIcon
            width={34} height={34}
        />
        :
        <HomeIcon
            width={34} height={34}
        />
    ),
    tabBarOnPress: ({ navigation, defaultHandler }) => {
        navigation.navigate('Home')
        defaultHandler();
    }
};

HomeStack.path = '';

const MypageStack = createStackNavigator(
    {
        Mypage: MyPageScreen,
    },
    {
        initialRouteName : 'Mypage',
        header: null,
        headerMode: 'screen',
    },
    // config
);

MypageStack.navigationOptions = {
    tabBarLabel: '마이페이지',
    tabBarIcon: ({focused}) => (
        focused ?
        <MypageSelectedIcon
            width={34} height={34}
        />
        :
        <MypageIcon
            width={34} height={34}
        />
    ),
    tabBarOnPress: ({ navigation, defaultHandler }) => {
        navigation.navigate('Mypage')
        defaultHandler();
    }
};

MypageStack.path = '';

const tabNavigator = createBottomTabNavigator({
        CultureStack,
        HomeStack,
        MypageStack,
    }, 
    {
        initialRouteName: 'HomeStack',
        header: null,
        headerMode: 'none',
        backBehavior: 'initialRoute',
        tabBarOptions: {
            labelStyle: {
                width: 1,
                height: 1,
                overflow: 'hidden',
            },
            style : {
                height : calc.getRegHeightDp(60),
                backgroundColor: "#292929"
            }
        },
    },
);

tabNavigator.path = '';




export default tabNavigator;
