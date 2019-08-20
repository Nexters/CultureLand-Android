import {SEARCH_PRODUCT} from "../actionTypes/searchProduct";
import {combineReducers} from 'redux';


const initialState = {
    searched_product_list : [],
    searchedProductError : '',
    keyword : '',
};


export function searchProduct(state = initialState, action) {
    switch (action.type) {
        case SEARCH_PRODUCT.REQUEST:
            return {
                ...state,
                keyword : action.payload.keyword,
            };
        case SEARCH_PRODUCT.SUCCESS:
            return {
                ...state,
                searched_product_list: action.result.searched_product_list
            };
        case SEARCH_PRODUCT.FAILURE:
            return {
                ...state,
                loading: false,
                searched_product_list: [],
                getProductListError : action.error
            };
        default:
            return state
    }
}


export default combineReducers({
    searchProduct
});