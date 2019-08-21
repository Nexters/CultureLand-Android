import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function back(options) {
  _navigator.dispatch(NavigationActions.back(options));
}

function push(routeName, params) {
  _navigator.dispatch(
    StackActions.push({
      routeName,
      params
    })
  );
}

function pop(options) {
  _navigator.dispatch(StackActions.pop(options));
}

function popToTop(options) {
  _navigator.dispatch(StackActions.popToTop(options));
}

function reset(options) {
  _navigator.dispatch(StackActions.reset(options));
}

export default {
  navigate,
  back,
  push,
  pop,
  popToTop,
  reset,
  setTopLevelNavigator,
};