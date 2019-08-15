
import {
    GET_PRODUCT_LIST
} from "../actionTypes/productList";

export const getProductList = {

    request : (category) => ({

        type : GET_PRODUCT_LIST.REQUEST,
        payload : {
            category
        }
    }),

    success : () => ({
        type : GET_PRODUCT_LIST.SUCCESS,
    }),

    failure : () => ({
        type : GET_PRODUCT_LIST.FAILURE,
    })

};