import {CANCEL_WISHED, GET_ITEM_DETAIL, IS_WISHED, SET_WISHED} from "../actionTypes/itemDetail";

export const getItemDetail = {
    request : (id) => ({
       type : GET_ITEM_DETAIL.REQUEST,
       payload : {
           id,
       }
    }),

    success : () => ({
        type : GET_ITEM_DETAIL.SUCCESS,
    }),

    failure : () => ({
        type : GET_ITEM_DETAIL.FAILURE,
    })
};

export const isWished = {
    request : (id) => ({
        type : IS_WISHED.REQUEST,
        payload : {
            id,
        }
    }),

    success : () => ({
        type : IS_WISHED.SUCCESS,
    }),

    failure : () => ({
        type : IS_WISHED.FAILURE,
    })
};

export const setWished = {

    request : (id) => ({
        type : SET_WISHED.REQUEST,
        payload : {
            id,
        }
    }),

    success : () => ({
        type : SET_WISHED.SUCCESS,
    }),

    failure : () => ({
        type : SET_WISHED.FAILURE,
    })
};

export const cancelWished = {

    request : (id) => ({
        type : CANCEL_WISHED.REQUEST,
        payload : {
            id,
        }
    }),

    success : () => ({
        type : CANCEL_WISHED.SUCCESS,
    }),

    failure : () => ({
        type : CANCEL_WISHED.FAILURE,
    })

};