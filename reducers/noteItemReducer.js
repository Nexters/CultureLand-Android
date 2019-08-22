import {
    GET_NOTE,
    CREATE_NOTE,
    UPDATE_NOTE,
    REMOVE_NOTE,
    IS_LIKED,
    SET_LIKED,
    CANCEL_LIKED,
    GET_NOTE_ACTION,
    CREATE_NOTE_ACTION,
    UPDATE_NOTE_ACTION,
    REMOVE_NOTE_ACTION,
    IS_LIKED_ACTION,
    SET_LIKED_ACTION,
    CANCEL_LIKED_ACTION,
} from "../actionTypes/noteItem";

import {combineReducers} from 'redux';


const initialState = {
    id: '',
    title: '',
    sometime: '',
    place: '',
    withWho: '',
    content: '',
    image: '',
    cultureName : '',
    isLiked: false,
    error: false,
    loading : false,
};

export function getNoteItemActions(state = initialState, action) {
    switch (action.type) {
        case GET_NOTE_ACTION.REQUEST:
            return {
                ...state,
                loading : true,
            };
        case GET_NOTE_ACTION.SUCCESS:
            return {
                ...state,
                id : action.result.id,
                title : action.result.title,
                sometime : action.result.sometime,
                content : action.result.content,
                place : action.result.place,
                withWho : action.result.withWho,
                isLiked : action.result.isLiked,
                cultureName : action.result.cultureName,
                image : action.result.image,
                loading : false,
            };
        case GET_NOTE_ACTION.FAILURE:
            return {
                ...state,
                loading : false,
                error: action.error,
            };
        default:
            return state
    }
}

export function createNoteItemActions(state = initialState, action) {
    switch (action.type) {
        case CREATE_NOTE_ACTION.REQUEST:
            return {
                ...state,
                loading : true,
            };
        case CREATE_NOTE_ACTION.SUCCESS:
            return {
                ...state,
                loading : false,
            };
        case CREATE_NOTE_ACTION.FAILURE:
            return {
                ...state,
                loading : false,
                error: action.error,
            };
        default:
            return state
    }
}

export function updateNoteItemActions(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NOTE_ACTION.REQUEST:
            return {
                ...state,
                id: action.result.id,
                note: action.result.note,
            };
        case UPDATE_NOTE_ACTION.SUCCESS:
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === id) {
                        return {...note}
                    }
                    return note
                }),
            };
        case UPDATE_NOTE_ACTION.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}

export function removeNoteItemActions(state = initialState, action) {
    switch (action.type) {
        case REMOVE_NOTE_ACTION.REQUEST:
            return {
                ...state,
            }
        case REMOVE_NOTE_ACTION.SUCCESS:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== note_id),
            };
        case REMOVE_NOTE_ACTION.FAILURE:
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

        case IS_LIKED_ACTION.REQUEST:
            return {
                ...state,
            };

        case IS_LIKED_ACTION.SUCCESS:
            return {
                ...state,
                isLiked: action.result.isLiked,
            };
        case IS_LIKED_ACTION.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}

export function setLikedActions(state = initialState, action) {
    switch (action.type) {

        case SET_LIKED_ACTION.REQUEST:
            return {
                ...state,
            };
        case SET_LIKED_ACTION.SUCCESS:
            return {
                ...state,
                isLiked: true,
            };
        case SET_LIKED_ACTION.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}

export function cancelLikedActions(state = initialState, action) {
    switch (action.type) {

        case CANCEL_LIKED_ACTION.REQUEST:
            return {
                ...state,
            };

        case CANCEL_LIKED_ACTION.SUCCESS:
            return {
                ...state,
                isLiked: false,
            };
        case CANCEL_LIKED_ACTION.FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}


export function noteItemActions(state = initialState, action) {

    let prefix = action.type.replace(/_((REQUEST)|(SUCCESS)|(FAILURE))/, '');
    switch (prefix) {
        case GET_NOTE :
            return getNoteItemActions(state, action);
        case CREATE_NOTE :
            return createNoteItemActions(state, action);
        case UPDATE_NOTE :
            return updateNoteItemActions(state, action);
        case REMOVE_NOTE :
            return removeNoteItemActions(state, action);
        case IS_LIKED :
            return isLikedActions(state, action);
        case SET_LIKED :
            return setLikedActions(state, action);
        case CANCEL_LIKED:
            return cancelLikedActions(state, action);
        default:
            return state;
    }
}


export default combineReducers({
    noteItemActions,
})