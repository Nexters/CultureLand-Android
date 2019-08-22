import React from 'react';

import { createSwitchNavigator, createAppContainer,createStackNavigator } from 'react-navigation';


import MainTabNavigator from './MainTabNavigator';
import SignScreen from '../screens/Sign/index';
import SignLoadingScreen from '../screens/SignLoading/index';
import ItemDetailScreen from '../screens/ItemDetail/index';
import NoteDetailScreen from '../screens/NoteDetail/index';
import NoteEditScreen from '../screens/NoteEdit/index';

const AppStack = createStackNavigator({
    MainTabNavigator: {
        screen: MainTabNavigator,
        navigationOptions: {
            header: null,
        }
    },
    NoteDetail : {
        screen : NoteDetailScreen,
        navigationOptions : {
            header : null,
            tabBarVisible: false,
        },
    },
    ItemDetail : {
        screen : ItemDetailScreen,
        navigationOptions : {
            header : null,
            tabBarVisible: false,
        },
    },
    NoteEdit : {
        screen : NoteEditScreen,
        navigationOptions : {
            header : null,
            tabBarVisible: false,
        },
    },
});
const AuthStack = createStackNavigator({
    Signup: {
        screen: SignScreen,
        navigationOptions: {
            header: null,
        },
    },
});



export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: SignLoadingScreen,
            App: AppStack,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'App',

        }
    )
);