import React from 'react';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignScreen from '../screens/Sign/index';
import SignLoadingScreen from '../screens/SignLoading/index';

const AppStack = createStackNavigator({
    MainTabNavigator: {
        screen: MainTabNavigator,
        navigationOptions: {
            header: null,
        }
    }
});
const AuthStack = createStackNavigator({Signup: SignScreen});

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: SignLoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: 'AuthLoading',

        }
    )
);
