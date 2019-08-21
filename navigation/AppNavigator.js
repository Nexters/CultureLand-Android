import React from 'react';
<<<<<<< HEAD
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
=======
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
>>>>>>> 5f71b2af4a7cd09b4cc514ec480bd3f4128e4a63

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

<<<<<<< HEAD
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
=======
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: SignLoadingScreen,
      App: MainTabNavigator,
      Auth: SignScreen
    },
    {
      initialRouteName : 'AuthLoading',
      header: null,
      navigationOptions : {
        headerMode: 'none',
      }
    },
  )
>>>>>>> 5f71b2af4a7cd09b4cc514ec480bd3f4128e4a63
);
