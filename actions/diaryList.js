
import { GET_DIARY_LIST_ACTION } from "../actionTypes/diaryList";



export const getDiaryList = {
    request : (id) => ({
        type : GET_DIARY_LIST_ACTION.REQUEST,
        payload : {
            itemType , // 카테고리 or 날짜
        }
    }),

    success : () => ({
        type : GET_DIARY_LIST_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : GET_DIARY_LIST_ACTION.FAILURE,
    })
}