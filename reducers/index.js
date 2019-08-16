import {combineReducers} from 'redux'

import productListReducer from './productListReducer';
import searchProductReducer from './serachProductReducer';
import noteItemReducer from './noteItemReducer';
export default combineReducers({
    productListReducer : productListReducer,
    searchProductReducer : searchProductReducer,
    noteItemReducer : noteItemReducer,

})