import {combineReducers} from 'redux'

import productListReducer from './productListReducer';
import searchProductReducer from './serachProductReducer';
export default combineReducers({
    productListReducer : productListReducer,
    searchProductReducer : searchProductReducer

})