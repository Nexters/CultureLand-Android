import {GET_MAIN_NOTELIST_ACTION, GET_MAIN_WISHLIST_ACTION, GET_MAIN_NOTELIST, GET_MAIN_WISHLIST} from "../actionTypes/main";
import {combineReducers} from 'redux';

const initialState = {
    yearType: '2019',
    noteList : [],
    wishList : [],
    loading :false,
    error : '',
};


export function getMainNoteList(state = initialState, action) {
    switch (action.type) {
        case GET_MAIN_NOTELIST_ACTION.REQUEST:
            return {
                ...state,
                loading: true,
                yearType: action.payload.yearType, // 2019
            };
        case GET_MAIN_NOTELIST_ACTION.SUCCESS:
            return {
                ...state,
                loading: false,
                noteList: action.result.noteList,
            };
        case GET_MAIN_NOTELIST_ACTION.FAILURE:
            return {
                ...state,
                loading: false,
                noteList: [],
                error : action.error,
            };
        default:
            return state
    }
}

export function getMainWishList(state = initialState, action) {
    switch (action.type) {

        case GET_MAIN_WISHLIST_ACTION.REQUEST:
            return {
                ...state,
                loading: true,
                isWished : action.payload.isWished,
            };

        case GET_MAIN_WISHLIST_ACTION.SUCCESS:
            return {
                ...state,
                loading: false,
                wishList: action.result.wishList,
            };
        case GET_MAIN_WISHLIST_ACTION.FAILURE:
            return {
                ...state,
                loading: false,
                wishList: [],
                error: action.error,
            };
        default:
            return state
    }
}

export function getMainNoteActions(state = initialState, action){

    let prefix = action.type.replace(/_((REQUEST)|(SUCCESS)|(FAILURE))/,'');
    switch(prefix){
        case GET_MAIN_NOTELIST :
            return getMainNoteList(state,action);
        case GET_MAIN_WISHLIST :
            return getMainWishList(state,action);
        default:
            return state;
    }
}

export default combineReducers({
    getMainNoteActions
})