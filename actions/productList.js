
import {
    GET_PRODUCT_LIST_ACTION, CHANGE_PRODUCT_LIST_ACTION, CHANGE_SORT_LIST_ACTION
} from "../actionTypes/productList";

export const getProductList = {

    request : (category,sort,page) => ({

        type : GET_PRODUCT_LIST_ACTION.REQUEST,
        payload : {
            category,
            sort,
            page
        }
    }),

    success : () => ({
        type : GET_PRODUCT_LIST_ACTION.SUCCESS,

    }),

        failure : () => ({
        type : GET_PRODUCT_LIST_ACTION.FAILURE,
    })
};

export const changeProductList = {

    request : (category,sort,page) => ({

        type : CHANGE_PRODUCT_LIST_ACTION.REQUEST,
        payload : {
            category,
            sort,
            page
        }
    }),

    success : () => ({
        type : CHANGE_PRODUCT_LIST_ACTION.SUCCESS,

    }),

    failure : () => ({
        type : CHANGE_PRODUCT_LIST_ACTION.FAILURE,
    })
};

export const changeProductListSort = {

    request : (category,sort) => ({

        type : CHANGE_SORT_LIST_ACTION.REQUEST,
        payload : {
            category,
            sort,
        }
    }),

    success : () => ({
        type : CHANGE_SORT_LIST_ACTION.SUCCESS,

    }),

    failure : () => ({
        type : CHANGE_SORT_LIST_ACTION.FAILURE,
    })
};