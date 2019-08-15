
import {
    SEARCH_PRODUCT
} from "../actionTypes/searchProduct";

export const searchProduct = {

    request : (keyword) => ({
        type : SEARCH_PRODUCT.REQUEST,
        payload : {
            keyword
        }
    }),
    success : () => ({
        type : SEARCH_PRODUCT.SUCCESS,
    }),

    failure : () => ({
        type : SEARCH_PRODUCT.FAILURE,
    })
};