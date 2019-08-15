import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import React, {useState} from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import {Provider} from 'react-redux'
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {Dimensions, Platform, StatusBar, StyleSheet, View} from 'react-native';
import rootSaga from './saga';
import rootReducer from './reducers/index';
import {Ionicons} from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';

import LoginScreen from './screens/Sign/index';
import ItemDetailScreen from './screens/ItemDetail';
import MyPageScreen from './screens/MyPage';
import SearchModeScreen from './screens/SearchMode'
import SearchBar from "./components/SearchBar";
import SplashScreen from './screens/Splash';
import SignScreen from './screens/Sign';
import MainScreen from './screens/Main';
import NoteDetailScreen from './screens/NoteDetail';
import NoteEditScreen from './screens/NoteEdit';
import NoteListScreen from './screens/NoteList';
import MyPageListScreen from './screens/MyPageList';

//<MyPageScreen  style={styles.container}/>
const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(sagaMiddleware);

const store = createStore(
    rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

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
                    <AppNavigator/>
                    {/* <NoteDetailScreen/> */}
                </View>
            </Provider>
        );
    }
}

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            require('./assets/images/robot-dev.png'),
            require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
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


