import
{combineReducers} from 'redux'

import productListReducer from './productListReducer';
import searchProductReducer from './serachProductReducer';
import itemDetailReducer from './itemDetailReducer';
export default combineReducers({
    productListReducer : productListReducer,
    searchProductReducer : searchProductReducer,
    itemDetailReducer : itemDetailReducer,
})