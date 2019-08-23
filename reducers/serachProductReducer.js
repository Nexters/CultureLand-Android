import {SEARCH_PRODUCT_ACTION, SEARCH_PRODUCT, SUBMIT_SEARCH_RESULT_ACTION,SUBMIT_SEARCH_RESULT} from "../actionTypes/searchProduct";
import {combineReducers} from 'redux';


const initialState = {
    searched_product_list : [],
    searchedProductError : '',
    keyword : '',
    submitted : false,
};


function searchProductAction(state = initialState, action) {
    switch (action.type) {
        case SEARCH_PRODUCT_ACTION.REQUEST:
            return {
                ...state,
                submitted : false,
            };
        case SEARCH_PRODUCT_ACTION.SUCCESS:
            return {
                ...state,
                searched_product_list: action.result.searched_product_list

            };
        case SEARCH_PRODUCT_ACTION.FAILURE:
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


function submitSearchResultAction(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_SEARCH_RESULT_ACTION.REQUEST:
            return {
                ...state,
                submitted : true,
            };
        case SUBMIT_SEARCH_RESULT_ACTION.SUCCESS:
            return {
                ...state,
                searched_product_list: action.result.searched_product_list
            };
        case SUBMIT_SEARCH_RESULT_ACTION.FAILURE:
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

function searchProductRootAction(state = initialState, action){
    let prefix = action.type.replace(/_((REQUEST)|(SUCCESS)|(FAILURE))/, '');
    switch(prefix){
        case SEARCH_PRODUCT:
            return searchProductAction(state,action);
        case SUBMIT_SEARCH_RESULT:
            return submitSearchResultAction(state,action);
        default:
            return state;
    }
}


export default combineReducers({
    searchProductRootAction
});