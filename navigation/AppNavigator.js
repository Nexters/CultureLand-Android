import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignScreen from '../screens/Sign/index';
import SignLoadingScreen from '../screens/SignLoading/index';

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
);
