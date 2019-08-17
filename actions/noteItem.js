import {
    GET_NOTE_ITEM,
    CREATE_NOTE_ITEM,
    UPDATE_NOTE_ITEM,
    REMOVE_NOTE_ITEM,
    CANCEL_LIKED_ACTION,
    IS_LIKED_ACTION, 
    SET_LIKED_ACTION
} from "../actionTypes/noteItem";

// GET
export const getNoteItem = {
    request : (id) => ({
        type : GET_NOTE_ITEM.REQUEST,
        payload: {
            id,
        }
    }),
    success : () => ({
        type : GET_NOTE_ITEM.SUCCESS,
    }),
    failure : () => ({
        type : GET_NOTE_ITEM.FAILURE,
    })
};

// CREATE
export const createNoteItem = {
    request : () => ({
        type : CREATE_NOTE_ITEM.REQUEST,
    }),

    success : () => ({
        type : CREATE_NOTE_ITEM.SUCCESS,
    }),

    failure : () => ({
        type : CREATE_NOTE_ITEM.FAILURE,
    })
};

// UPDATE
export const updateNoteItem = {
    request : (id) => ({
        type : UPDATE_NOTE_ITEM.REQUEST,
        payload: {
            id,
        }
    }),

    success : () => ({
        type : UPDATE_NOTE_ITEM.SUCCESS,
    }),

    failure : () => ({
        type : UPDATE_NOTE_ITEM.FAILURE,
    })
};

// REMOVE
export const removeNoteItem = {
    request : (id) => ({
        type : REMOVE_NOTE_ITEM.REQUEST,
        payload: {
            id,
        }
    }),

    success : () => ({
        type : REMOVE_NOTE_ITEM.SUCCESS,
    }),

    failure : () => ({
        type : REMOVE_NOTE_ITEM.FAILURE,
    })
};

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