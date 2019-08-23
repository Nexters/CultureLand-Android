import {GET_DIARY_LIST,GET_DIARY_LIST_ACTION} from "../actionTypes/diaryList";
import {combineReducers} from 'redux';
import {CANCEL_LIKED, CANCEL_LIKED_ACTION, SET_LIKED, SET_LIKED_ACTION} from "../actionTypes/noteItem";
import {CANCEL_WISHED, GET_ITEM_DETAIL, IS_WISHED, SET_WISHED} from "../actionTypes/itemDetail";


const initialState = {
    title : '기본 타이틀',
    culture_list : [],
    loading :false,
    error : '',

};


export function getDiaryListAction(state = initialState, action) {
    switch (action.type) {
        case GET_DIARY_LIST_ACTION.REQUEST:
            return {
                ...state,
                listType : action.payload.listType, // 날짜 or 카테고리
                listTitle : action.payload.listTitle, // 201906 or concert
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


export function setLikeAction(state = initialState, action){
    switch (action.type) {
        case SET_LIKED_ACTION.REQUEST:
            return {
                ...state,
                loading : true,
            };
        case SET_LIKED_ACTION.SUCCESS:
            return {
                ...state,
                loading : false,
            };
        case SET_LIKED_ACTION.FAILURE:
            return {
                ...state,
                loading : false,
            };
        default:
            return state;
    }
}

export function cancelLikedAction(state = initialState, action){
    switch (action.type) {
        case CANCEL_LIKED_ACTION.REQUEST:
            return {
                ...state,
                loading : true,
            };
        case CANCEL_LIKED_ACTION.SUCCESS:
            return {
                ...state,
                loading : false,
            };
        case CANCEL_LIKED_ACTION.FAILURE:
            return {
                ...state,
                loading : false,
            };
        default:
            return state;
    }
}

export function diaryListRootAction(state = initialState, action){
    let prefix = action.type.replace(/_((REQUEST)|(SUCCESS)|(FAILURE))/,'');
    switch(prefix){
        case GET_DIARY_LIST:
            return getDiaryListAction(state,action);
        case SET_LIKED:
            return setLikeAction(state,action);
        case CANCEL_LIKED:
            return cancelLikedAction(state,action);
        default:
            return state;
    }
}


export default combineReducers({
    diaryListRootAction,

})