import {combineReducers} from 'redux'

import account from './accountReducer'
import productList from './productListReducer';
export default combineReducers({
    account,
    productList
})