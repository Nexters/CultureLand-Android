
import { GET_DIARY_LIST_ACTION , GET_ADDITIONAL_DIARY_LIST_ACTION} from "../actionTypes/diaryList";
import {CANCEL_LIKED_ACTION, IS_LIKED_ACTION, SET_LIKED_ACTION} from "../actionTypes/noteItem";



export const getDiaryList = {
    request : (listType,listTitle) => ({
        type : GET_DIARY_LIST_ACTION.REQUEST,
        payload : {
            listType , // 카테고리 or 날짜
            listTitle,
        }
    }),

    success : () => ({
        type : GET_DIARY_LIST_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : GET_DIARY_LIST_ACTION.FAILURE,
    })
};

export const getAdditionalList = {
    request : (lastItemIndex) => ({
        type : GET_ADDITIONAL_DIARY_LIST_ACTION.REQUEST,
        payload : {
            lastItemIndex, // 카테고리 or 날짜
        }
    }),

    success : () => ({
        type : GET_ADDITIONAL_DIARY_LIST_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : GET_ADDITIONAL_DIARY_LIST_ACTION.FAILURE,
    })
};


// ISLIKED
export const isLiked = {
    request : (id) => ({
        type : IS_LIKED_ACTION.REQUEST,
        payload : {
            id,
        }
    }),

    success : () => ({
        type : IS_LIKED_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : IS_LIKED_ACTION.FAILURE,
    })
};

// SETLIKED
export const setLiked = {

    request : (id) => ({
        type : SET_LIKED_ACTION.REQUEST,
        payload : {
            id,
        }
    }),

    success : () => ({
        type : SET_LIKED_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : SET_LIKED_ACTION.FAILURE,
    })
};

// CANCELLIKED
export const cancelLiked = {

    request : (id) => ({
        type : CANCEL_LIKED_ACTION.REQUEST,
        payload : {
            id,
        }
    }),

    success : () => ({
        type : CANCEL_LIKED_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : CANCEL_LIKED_ACTION.FAILURE,
    })

};