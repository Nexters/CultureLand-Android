import { GET_MAIN_NOTELIST_ACTION, GET_MAIN_WISHLIST_ACTION } from "../actionTypes/main";

export const getMainCount = {

    request : (yearType) => ({
        type : GET_MAIN_NOTELIST_ACTION.REQUEST,
        payload : {
            yearType , // 2019
        }
    }),

    success : () => ({
        type : GET_MAIN_NOTELIST_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : GET_MAIN_NOTELIST_ACTION.FAILURE,
    }),
};

export const getMainWishlist = {

    request : (isWished) => ({
        type : GET_MAIN_WISHLIST_ACTION.REQUEST,
        payload : {
            isWished, // boolean
        }
    }),

    success : () => ({
        type : GET_MAIN_WISHLIST_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : GET_MAIN_WISHLIST_ACTION.FAILURE,
    }),
};
