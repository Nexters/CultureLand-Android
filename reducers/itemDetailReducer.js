import {
    GET_ITEM_DETAIL,
    GET_ITEM_DETAIL_ACTION,
    IS_WISHED_ACTION,
    CANCEL_WISHED_ACTION,
    SET_WISHED_ACTION, CANCEL_WISHED, SET_WISHED, IS_WISHED
} from "../actionTypes/itemDetail";

import {combineReducers} from 'redux';


const initialState = {

    id : 0,
    imageUrl : '',
    title : '문화정보',
    category : '뮤지컬',
    startDate : '2019.08.18',
    endDate : '2019.08.18',
    place : '충무로',
    isWished: true,
    error : false,

};

function isWishedActions(state = initialState, action) {
    switch (action.type) {

        case IS_WISHED_ACTION.REQUEST:
            return {
                ...state,
                error : null,
            };

        case IS_WISHED_ACTION.SUCCESS:
            return {
                ...state,
                error : null,
                isWished : action.result.isWished,
            };
        case IS_WISHED_ACTION.FAILURE:
            return {
                ...state,
                isWished : false,
                error: action.error,
            };
        default:
            return state
    }
}


function setWishedActions(state = initialState, action){
    switch (action.type) {

        case SET_WISHED_ACTION.REQUEST:
            return {
                ...state,
                error : null,
            };
        case SET_WISHED_ACTION.SUCCESS:
            return {
                ...state,
                isWished : true,
            };
        case SET_WISHED_ACTION.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}

function cancelWishedActions(state = initialState, action){
    switch (action.type) {

        case CANCEL_WISHED_ACTION.REQUEST:
            return {
                ...state,
                error : null,
            };

        case CANCEL_WISHED_ACTION.SUCCESS:
            return {
                ...state,
                isWished : false,
            };
        case CANCEL_WISHED_ACTION.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}


function getItemDetailAction(state = initialState, action) {


    switch (action.type) {
        case GET_ITEM_DETAIL_ACTION.REQUEST:
            return {
                ...state,
            };
        case GET_ITEM_DETAIL_ACTION.SUCCESS:

            return {
                ...state,
                id : action.result.id,
                imageUrl : action.result.imageUrl,
                title : action.result.title,
                category : action.result.category,
                startDate : action.result.startDate,
                endDate : action.result.endDate,
                place :action.result.place,
                error : null,
            };
        case GET_ITEM_DETAIL_ACTION.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}


export function itemDetailRootAction(state = initialState, action){
    let prefix = action.type.replace(/_((REQUEST)|(SUCCESS)|(FAILURE))/,'');
    switch(prefix){
        case GET_ITEM_DETAIL :
            return getItemDetailAction(state,action);
        case IS_WISHED :
            return isWishedActions(state,action);
        case SET_WISHED :
            return setWishedActions(state,action);
        case CANCEL_WISHED :
            return cancelWishedActions(state,action);
        default:
            return state;
    }
}


export default combineReducers({
    itemDetailRootAction,
})