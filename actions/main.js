import {CANCEL_WISH_ITEM_ACTION, GET_MAIN_NOTELIST_ACTION, GET_MAIN_WISHLIST_ACTION} from "../actionTypes/main";

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

export const getMainWishList = {

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

export const cancelWishItemAction = {

    request : (id) => ({
        type : CANCEL_WISH_ITEM_ACTION.REQUEST,
        payload : {
            id,
        }
    }),

    success : () => ({
        type : CANCEL_WISH_ITEM_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : CANCEL_WISH_ITEM_ACTION.FAILURE,
    }),
};
