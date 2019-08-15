import {CATEGORY, PRODUCT_LIST_FILTER} from "../actionTypes/productList";
import {GET_PRODUCT_LIST} from "../actionTypes/productList";
import {combineReducers} from 'redux';


const initialState = {
    product_list: [],
    category: CATEGORY.ALL_PRODUCT,
    filter: PRODUCT_LIST_FILTER.NEW,
    search_word: '',
    loading: false,
    getProductListError : '',
    searchProductListError : '',

};


export function getProductList(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_LIST.REQUEST:
            return {
                ...state,

                category: action.payload.category,
                loading: true
            };
        case GET_PRODUCT_LIST.SUCCESS:
            return {
                ...state,
                loading: false,
                product_list: action.result.product_list
            };
        case GET_PRODUCT_LIST.FAILURE:
            return {
                ...state,
                loading: false,
                product_list: [],
                getProductListError : action.error
            };
        default:
            return state
    }
}


export default combineReducers({
    getProductList

})