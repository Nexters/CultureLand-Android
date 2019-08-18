import

{combineReducers} from 'redux'

import productListReducer from './productListReducer';
import searchProductReducer from './serachProductReducer';

import itemDetailReducer from './itemDetailReducer';
import myPageReducer from './myPageReducer';
import diaryListReducer from './diaryListReducer';
import noteItemReducer from "./noteItemReducer";
import mainReducer from "./mainReducer";

export default combineReducers({
    diaryListReducer : diaryListReducer,
    itemDetailReducer : itemDetailReducer,
    myPageReducer : myPageReducer,
    noteItemReducer : noteItemReducer,
    productListReducer : productListReducer,
    searchProductReducer : searchProductReducer,
    mainReducer : mainReducer,
})