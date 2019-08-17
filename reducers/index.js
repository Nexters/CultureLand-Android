import
{combineReducers} from 'redux'

import productListReducer from './productListReducer';
import searchProductReducer from './serachProductReducer';

import itemDetailReducer from './itemDetailReducer';
import myPageReducer from './myPageReducer';
export default combineReducers({
    productListReducer : productListReducer,
    searchProductReducer : searchProductReducer,
    itemDetailReducer : itemDetailReducer,
    myPageReducer : myPageReducer,

})