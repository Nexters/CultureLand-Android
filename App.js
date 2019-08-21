import {Client} from './api/Client';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import React, {useState} from 'react';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {Provider} from 'react-redux'
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {Dimensions, Platform, StatusBar, StyleSheet, View} from 'react-native';
import rootSaga from './saga';
import rootReducer from './reducers/index';
import {Ionicons} from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';
import NavigatorService from './util/NavigatorService';

import LoginScreen from './screens/Sign/signTemplate';
import ItemDetailScreen from './screens/ItemDetail/index';
import MyPageScreen from './screens/MyPage';
import SearchModeScreen from './screens/SearchMode'
import SearchBar from "./components/SearchBar";
import SplashScreen from './screens/Splash';
import SignScreen from './screens/Sign/signTemplate';
import MainScreen from './screens/Main';
import NoteDetailScreen from './screens/NoteDetail';
import NoteEditScreen from './screens/NoteEdit';
import PlanedListScreen from "./screens/PlannedList/index";
import * as SecureStore from "expo-secure-store/build/SecureStore";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(sagaMiddleware);

const store = createStore(
    rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

Client.init();


export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);




    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    } else {


        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {/* <SignScreen/> */}
                    <AppNavigator
                        ref={navigatorRef => {
                            NavigatorService.setTopLevelNavigator(navigatorRef);
                        }}
                    />
                    {/* <AppNavigator/> */}

                </View>
            </Provider>
        );
    }
}


async function loadResourcesAsync() {


    await Promise.all([
        Asset.loadAsync([
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'noto-sans': require('./assets/fonts/NotoSansCJKkr-Regular.otf'),
            'noto-sans-bold': require('./assets/fonts/NotoSansCJKkr-Bold.otf'),
            'noto-sans-mid' : require('./assets/fonts/NotoSansCJKkr-Medium.otf'),
            'noto-sans-demi' : require('./assets/fonts/NotoSansCJKkr-DemiLight.otf'),
            'noto-sans-light' : require('./assets/fonts/NotoSansCJKkr-Light.otf'),
            'noto-sans-thin' : require('./assets/fonts/NotoSansCJKkr-Thin.otf'),

        }),

    ]);
}

function handleLoadingError(error) {

    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {

    setLoadingComplete(true);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loginScreen: {
        padding: 30,
        margin: 30,
    }

});


