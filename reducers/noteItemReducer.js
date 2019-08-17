import {
    GET_NOTE_ITEM,
    CREATE_NOTE_ITEM,
    UPDATE_NOTE_ITEM,
    REMOVE_NOTE_ITEM,
    CANCEL_LIKED,
    IS_LIKED, 
    SET_LIKED
} from "../actionTypes/noteItem";

import {combineReducers} from 'redux';


const initialState = {

    id : '',
    title: '',
    category: '',
    sometime: '',
    place: '',
    withWho: '',
    content: '',
    image: '',
    isLiked: false,
    error : false,

};

export function getNoteItemActions(state = initialState, action){
    switch (action.type) {
        // ------------- GET NOTE ITEM --------------
        case GET_NOTE_ITEM.REQUEST:
            return {
                ...state,
                id : action.result.id,
                title : action.result.title,
                category : action.result.category,
                sometime : action.result.sometime,
                place : action.result.place,
                withWho : action.result.withWho,
                content : action.result.content,
                image : action.result.image,
                isLiked : action.result.isLiked,
            };
        case GET_NOTE_ITEM.SUCCESS:
            return {
                ...state,
            };
        case GET_NOTE_ITEM.FAILURE:
            return {
                ...state,
                error: action.error,
            };
            
        // ------------- CREATE NOTE ITEM --------------
        case CREATE_NOTE_ITEM.REQUEST:
            return {
                ...state,
            }
        case CREATE_NOTE_ITEM.SUCCESS:
            return {
                ...state,
                // items: [action.payload].concat(state.items),
            };
        case CREATE_NOTE_ITEM.FAILURE:
            return {
                ...state,
                error: action.error,
            };

        // ------------- UPDATE NOTE ITEM --------------
        case UPDATE_NOTE_ITEM.REQUEST:
            return {
                ...state,
            }
        case UPDATE_NOTE_ITEM.SUCCESS:
            return {
                ...state,
                // items: state.items.map(note => {
                //     if (note.id === id) {
                //         return { ...note }
                //     }
                //     return note
                // }),
            };
        case UPDATE_NOTE_ITEM.FAILURE:
            return {
                ...state,
                error: action.error,
            };

        // ------------- DELETE NOTE ITEM --------------
        case REMOVE_NOTE_ITEM.REQUEST:
            return {
                ...state,
            }
        case REMOVE_NOTE_ITEM.SUCCESS:
            return {
                ...state,
                // items: state.items.filter(note => note.id !== note_id),
            };
        case REMOVE_NOTE_ITEM.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}

export function isLikedActions(state = initialState, action) {
    switch (action.type) {

        case IS_LIKED.REQUEST:
            return {
                ...state,
            };

        case IS_LIKED.SUCCESS:
            return {
                ...state,
                isLiked : action.result.isLiked,
            };
        case IS_LIKED.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}

export function setLikedActions(state = initialState, action){
    switch (action.type) {

        case SET_LIKED.REQUEST:
            return {
                ...state,
            };
        case SET_LIKED.SUCCESS:
            return {
                ...state,
                isLiked : true,
            };
        case SET_LIKED.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}

export function cancelLikedActions(state = initialState, action){
    switch (action.type) {

        case CANCEL_LIKED.REQUEST:
            return {
                ...state,
            };

        case CANCEL_LIKED.SUCCESS:
            return {
                ...state,
                isLiked : false,
            };
        case CANCEL_LIKED.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}


export function noteItemActions(state = initialState, action){

    let prefix = action.type.replace(/_((REQUEST)|(SUCCESS)|(FAILURE))/,'');
    switch(prefix){
        case GET_NOTE_ITEM :
            return getNoteItemActions(state,action);
        case IS_LIKED :
            return isLikedActions(state,action);
        case SET_LIKED :
            return setLikedActions(state,action);
        case CANCEL_LIKED:
            return cancelLikedActions(state,action);
        default:
            return state;
    }
}


export default combineReducers({
    noteItemActions,
})