
import { GET_DIARY_LIST_ACTION , GET_ADDITIONAL_DIARY_LIST_ACTION} from "../actionTypes/diaryList";



export const getDiaryList = {
    request : (listType) => ({
        type : GET_DIARY_LIST_ACTION.REQUEST,
        payload : {
            listType , // 카테고리 or 날짜
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