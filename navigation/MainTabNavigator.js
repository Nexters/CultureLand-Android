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
import SignScreen from '../screens/Sign/index';

import styleFn from "../screens/PlannedList/styles";
import {RatioCalculator} from "../util";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);


const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});


const CultureStack = createStackNavigator(
    {
        Culture:PlanedListScreen,
    },
    config
);

CultureStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

CultureStack.path = '';

const HomeStack = createStackNavigator(
    {
        Home: MainScreen ,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

HomeStack.path = '';

const MypageStack = createStackNavigator(
    {
        Mypage: MyPageScreen,
    },

    config
);

MypageStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};

MypageStack.path = '';

const tabNavigator = createBottomTabNavigator({
        CultureStack,
        HomeStack,
        MypageStack,
    }, {
        tabBarOptions: {
            style : {
                height : calc.getRegHeightDp(60)
            }
        }
    }
);

tabNavigator.path = '';

//////// CUSTOM //////

const ItemDetailStack = createStackNavigator(
    {
        ItemDetail: ItemDetailScreen,
    },
    config
);

ItemDetailStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};

ItemDetailStack.path = '';







export default tabNavigator;
