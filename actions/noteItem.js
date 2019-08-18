import {
    GET_NOTE_ACTION,
    CREATE_NOTE_ACTION,
    UPDATE_NOTE_ACTION,
    REMOVE_NOTE_ACTION,
    IS_LIKED_ACTION, 
    SET_LIKED_ACTION,
    CANCEL_LIKED_ACTION,
} from "../actionTypes/noteItem";

// GET
export const getNoteItem = {
    request : (id) => ({
        type : GET_NOTE_ACTION.REQUEST,
        payload: {
            id,
        }
    }),
    success : () => ({
        type : GET_NOTE_ACTION.SUCCESS,
    }),
    failure : () => ({
        type : GET_NOTE_ACTION.FAILURE,
    })
};

// CREATE
export const createNoteItem = {
    request : () => ({
        type : CREATE_NOTE_ACTION.REQUEST,
    }),

    success : () => ({
        type : CREATE_NOTE_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : CREATE_NOTE_ACTION.FAILURE,
    })
};

// UPDATE
export const updateNoteItem = {
    request : (id) => ({
        type : UPDATE_NOTE_ACTION.REQUEST,
        payload: {
            id,
        }
    }),

    success : () => ({
        type : UPDATE_NOTE_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : UPDATE_NOTE_ACTION.FAILURE,
    })
};

// REMOVE
export const removeNoteItem = {
    request : (id) => ({
        type : REMOVE_NOTE_ACTION.REQUEST,
        payload: {
            id,
        }
    }),

    success : () => ({
        type : REMOVE_NOTE_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : REMOVE_NOTE_ACTION.FAILURE,
    })
};

// ISLIKED
export const isLiked = {
    request : (id) => ({
        type : IS_LIKED_ACTION.REQUEST,
        payload : {
            id,
        }
    }),

    success : () => ({
        type : IS_LIKED_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : IS_LIKED_ACTION.FAILURE,
    })
};

// SETLIKED
export const setLiked = {

    request : (id) => ({
        type : SET_LIKED_ACTION.REQUEST,
        payload : {
            id,
        }
    }),

    success : () => ({
        type : SET_LIKED_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : SET_LIKED_ACTION.FAILURE,
    })
};

// CANCELLIKED
export const cancelLiked = {

    request : (id) => ({
        type : CANCEL_LIKED_ACTION.REQUEST,
        payload : {
            id,
        }
    }),

    success : () => ({
        type : CANCEL_LIKED_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : CANCEL_LIKED_ACTION.FAILURE,
    })

};