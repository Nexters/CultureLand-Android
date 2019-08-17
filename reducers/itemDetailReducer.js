import {
    GET_ITEM,
    IS_WISHED,
    SET_WISHED,
    CANCEL_WISHED,
    GET_ITEM_DETAIL,
    IS_WISHED_ACTION,
    CANCEL_WISHED_ACTION,
    SET_WISHED_ACTION} from "../actionTypes/itemDetail";

import {combineReducers} from 'redux';


const initialState = {

    id : '',
    imageUrl : '',
    title : '',
    category : '',
    period : '',
    place : '',
    isWished: false,
    error : false,

};

export function isWishedActions(state = initialState, action) {
    switch (action.type) {

        case IS_WISHED.REQUEST:
            return {
                ...state,
            };

        case IS_WISHED.SUCCESS:
            return {
                ...state,
                isWished : action.result.isWished,
            };
        case IS_WISHED.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}

export function setWishedActions(state = initialState, action){
    switch (action.type) {

        case SET_WISHED.REQUEST:
            return {
                ...state,
            };
        case SET_WISHED.SUCCESS:
            return {
                ...state,
                isWished : true,
            };
        case SET_WISHED.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}

export function cancelWishedActions(state = initialState, action){
    switch (action.type) {

        case CANCEL_WISHED.REQUEST:
            return {
                ...state,
            };

        case CANCEL_WISHED.SUCCESS:
            return {
                ...state,
                isWished : false,
            };
        case CANCEL_WISHED.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}


export function getItemDetailAction(state = initialState, action) {
    switch (action.type) {
        case GET_ITEM_DETAIL.REQUEST:
            return {
                ...state,
                id : action.result.id,
                imageUrl : action.result.imageUrl,
                title : action.result.title,
                category : action.result.category,
                startDate : action.result.startDate,
                endDate : action.result.endDate,
            };
        case GET_ITEM_DETAIL.SUCCESS:
            return {
                ...state,
            };
        case GET_ITEM_DETAIL.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}


export function itemDetailActions(state = initialState, action){

    let prefix = action.type.replace(/_((REQUEST)|(SUCCESS)|(FAILURE))/,'');
    switch(prefix){
        case GET_ITEM :
            return getItemDetailAction(state,action);
        case IS_WISHED :
            return isWishedActions(state,action);
        case SET_WISHED :
            return setWishedActions(state,action);
        case CANCEL_WISHED:
            return cancelWishedActions(state,action);
    }
}


export default combineReducers({
    itemDetailActions
})