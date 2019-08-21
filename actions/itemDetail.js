import {
    CANCEL_WISHED_ACTION, GET_ITEM_DETAIL, GET_ITEM_DETAIL_ACTION, IS_WISHED_ACTION,
    SET_WISHED_ACTION
} from "../actionTypes/itemDetail";

export const getItemDetailAction = {
    request : (id) => ({
       type : GET_ITEM_DETAIL_ACTION.REQUEST,
       payload : {
           id,
       }
    }),

    success : () => ({
        type : GET_ITEM_DETAIL_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : GET_ITEM_DETAIL_ACTION.FAILURE,
    })
};

export const isWishedAction = {
    request : (id) => ({
        type : IS_WISHED_ACTION.REQUEST,
        payload : {
            id,
        }
    }),

    success : () => ({
        type : IS_WISHED_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : IS_WISHED_ACTION.FAILURE,
    })
};

export const setWishedAction = {

    request : (itemObj) => ({
        type : SET_WISHED_ACTION.REQUEST,
        payload : {
            itemObj,
        }
    }),

    success : () => ({
        type : SET_WISHED_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : SET_WISHED_ACTION.FAILURE,
    })
};

export const cancelWishedAction = {

    request : (id) => ({
        type : CANCEL_WISHED_ACTION.REQUEST,
        payload : {
            id,
        }
    }),

    success : () => ({
        type : CANCEL_WISHED_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : CANCEL_WISHED_ACTION.FAILURE,
    })

};