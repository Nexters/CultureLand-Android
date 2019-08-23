
import {
    SEARCH_PRODUCT_ACTION,SUBMIT_SEARCH_RESULT_ACTION
} from "../actionTypes/searchProduct";

export const searchProduct = {

    request : (keyword) => ({
        type : SEARCH_PRODUCT_ACTION.REQUEST,
        payload : {
            keyword
        }
    }),
    success : () => ({
        type : SEARCH_PRODUCT_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : SEARCH_PRODUCT_ACTION.FAILURE,
    })
};

export const submitSearchResult = {

    request : (keyword) => ({
        type : SUBMIT_SEARCH_RESULT_ACTION.REQUEST,
        payload : {
            keyword
        }
    }),
    success : () => ({
        type : SUBMIT_SEARCH_RESULT_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : SUBMIT_SEARCH_RESULT_ACTION.FAILURE,
    })
};