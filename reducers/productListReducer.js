import {
    CATEGORY, PRODUCT_LIST_FILTER, CHANGE_PRODUCT_LIST_ACTION, GET_PRODUCT_LIST_ACTION,
    GET_PRODUCT_LIST, CHANGE_PRODUCT_LIST, CHANGE_SORT_LIST_ACTION, CHANGE_SORT_LIST
} from "../actionTypes/productList";
import {combineReducers} from 'redux';


const initialState = {
    product_list: [],
    category: CATEGORY.ALL_PRODUCT,
    filter: PRODUCT_LIST_FILTER.NEW,
    search_word: '',
    loading: true,
    page: 0,
    isNextPageExists: true,
    getProductListError: '',
    searchProductListError: '',

};


function changeProductListSort(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SORT_LIST_ACTION.REQUEST:
            return {
                ...state,
                category: action.payload.category,
                loading: true,
            };
        case CHANGE_SORT_LIST_ACTION.SUCCESS:
            return {
                ...state,
                loading: false,
                product_list: action.result.product_list,
                page: 0,
                isNextPageExists: action.result.nextPage,
            };
        case CHANGE_SORT_LIST_ACTION.FAILURE:
            return {
                ...state,
                loading: false,
                getProductListError: action.error
            };
        default:
            return state;
    }

}

function changeProductListCategory(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PRODUCT_LIST_ACTION.REQUEST:
            return {
                ...state,
                category: action.payload.category,
                loading: true,
            };
        case CHANGE_PRODUCT_LIST_ACTION.SUCCESS:
            return {
                ...state,
                loading: false,
                product_list: action.result.product_list,
                page: 0,
                isNextPageExists: action.result.nextPage,
            };
        case CHANGE_PRODUCT_LIST_ACTION.FAILURE:
            return {
                ...state,
                loading: false,
                getProductListError: action.error
            };
        default:
            return state;
    }

}

 function getProductList(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_LIST_ACTION.REQUEST:
            return {
                ...state,
                category: action.payload.category,
                loading: true,
            };
        case GET_PRODUCT_LIST_ACTION.SUCCESS:
            return {
                ...state,
                loading: false,
                product_list: state.product_list.concat(action.result.product_list),
                page: state.page + 1,
                isNextPageExists: action.result.nextPage,
            };
        case GET_PRODUCT_LIST_ACTION.FAILURE:
            return {
                ...state,
                loading: false,
                getProductListError: action.error
            };
        default:
            return state;
    }
}

export function productListRootActions(state = initialState, action) {
    let prefix = action.type.replace(/_((REQUEST)|(SUCCESS)|(FAILURE))/, '');

    switch (prefix) {
        case  GET_PRODUCT_LIST:
            return getProductList(state, action);
        case CHANGE_PRODUCT_LIST:
            return changeProductListCategory(state,action);
        case CHANGE_SORT_LIST:
            return changeProductListSort(state,action);

        default:
            return state;
    }
}

export default combineReducers({
    productListRootActions
})