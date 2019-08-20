import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignScreen from '../screens/Sign/index';
import SignLoadingScreen from '../screens/SignLoading/index';
// import PlanedListScreen from '../screens/PlannedList/index'

const AppStack = createStackNavigator({ MainTabNavigator: MainTabNavigator });
const AuthStack = createStackNavigator({ Signup: SignScreen  });
// const AuthLoadingStack = createStackNavigator({ Signup: SignLoadingScreen  });

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
