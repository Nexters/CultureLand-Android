import React from 'react';

import { createSwitchNavigator, createAppContainer,createStackNavigator } from 'react-navigation';


import MainTabNavigator from './MainTabNavigator';
import SignScreen from '../screens/Sign/index';
import SignLoadingScreen from '../screens/SignLoading/index';
import ItemDetailScreen from '../screens/ItemDetail/index';
const AppStack = createStackNavigator({
    MainTabNavigator: {
        screen: MainTabNavigator,
        navigationOptions: {
            header: null,
        }
    }
});
const AuthStack = createStackNavigator({
    Signup: {
        screen: SignScreen,
        navigationOptions: {
            header: null,
        },
    },
});

const ItemDetailStack = createStackNavigator({
    ItemDetail : {
        screen : ItemDetailScreen,
        navigationOptions : {
            header : null,
        },
    },
});



export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: SignLoadingScreen,
            App: AppStack,
            Auth: AuthStack,
            ItemDetail : ItemDetailStack,
        },
        {
            initialRouteName: 'AuthLoading',

        }
    )
);
