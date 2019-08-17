import {GET_DIARY_LIST_ACTION,LIST_TYPE} from "../actionTypes/diaryList";
import {GET_DIARY_LIST_ACTION} from "../actionTypes/diaryList";
import {combineReducers} from 'redux';


const initialState = {
    culture_list : [],
    loading :false,
    error : '',
};


export function getDiaryList(state = initialState, action) {
    switch (action.type) {
        case GET_DIARY_LIST_ACTION.REQUEST:
            return {
                ...state,
                listType : action.payload.listType, // 날짜 or 카테고리
                detailType : action.payload.detailType, // 201906 or concert
                loading: true,
            };
        case GET_DIARY_LIST_ACTION.SUCCESS:
            return {
                ...state,
                loading: false,
                culture_list: action.result.culture_list,
            };
        case GET_DIARY_LIST_ACTION.FAILURE:
            return {
                ...state,
                loading: false,
                error : action.error,
            };
        default:
            return state
    }
}


export default combineReducers({
    getDiaryList,

})