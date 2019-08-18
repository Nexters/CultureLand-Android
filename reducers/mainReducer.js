import {GET_MAIN_NOTELIST_ACTION, GET_MAIN_WISHLIST_ACTION, GET_MAIN_NOTELIST, GET_MAIN_WISHLIST} from "../actionTypes/main";
import {combineReducers} from 'redux';

const initialState = {
    dateType: '201908',
    noteList : [
        {
            count: 3,
            imageUrl: "www.naver.com"
        },
        {
            count: 6,
            imageUrl: "www.naver.com"
        }
    ],
    wishList : [],
    loading :false,
    error : '',
};


export function getMainNoteList(state = initialState, action) {
    switch (action.type) {
        case GET_MAIN_NOTELIST_ACTION.REQUEST:
            return {
                ...state,
                dateType: action.payload.dateType, // 201906
                loading: true,
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
                isWished : action.payload.isWished,
            };

        case GET_MAIN_WISHLIST_ACTION.SUCCESS:
            return {
                ...state,
                wishList: action.result.wishList,
            };
        case GET_MAIN_WISHLIST_ACTION.FAILURE:
            return {
                ...state,
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