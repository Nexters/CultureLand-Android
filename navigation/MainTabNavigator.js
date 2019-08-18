import React from 'react';
import {Dimensions, Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ItemDetailScreen from '../screens/ItemDetail/ItemDetailTemplate'
import MyPageScreen from "../screens/MyPage"
import PlanedListScreen from '../screens/PlannedList/index'
import MainScreen from '../screens/Main';
import NoteDetailScreen from '../screens/NoteDetail';
import SignScreen from '../screens/Sign';

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


const HomeStack = createStackNavigator(
    {
        Home:NoteDetailScreen,
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

const LinksStack = createStackNavigator(
    {

        Links: PlanedListScreen,
    },
    config
);

LinksStack.navigationOptions = {
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

LinksStack.path = '';

const SettingsStack = createStackNavigator(
    {
        Settings: MainScreen,
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: ' ',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
        LinksStack,
        HomeStack,
        SettingsStack,
    }, {
        tabBarOptions: {
            style : {
                height : calc.getRegHeightDp(60)
            }
        }
    }
);

tabNavigator.path = '';



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
