import {
    GET_NOTE_ITEM,
    CREATE_NOTE_ITEM,
    UPDATE_NOTE_ITEM,
    REMOVE_NOTE_ITEM
} from "../actionTypes/noteItem";

// GET
export const getNoteItem = {
    request : (id) => ({
        type : GET_NOTE_ITEM.REQUEST,
        payload: {
            id
        }
    }),
    success : (id) => ({
        type : GET_NOTE_ITEM.SUCCESS,
        payload: {
            id
        }
    }),
    failure : () => ({
        type : GET_NOTE_ITEM.FAILURE,
    })
};

// CREATE
export const createNoteItem = {
    request : (note) => ({
        type : CREATE_NOTE_ITEM.REQUEST,
        payload: note
    }),

    success : (note) => ({
        type : CREATE_NOTE_ITEM.SUCCESS,
        payload: note
    }),

    failure : () => ({
        type : CREATE_NOTE_ITEM.FAILURE,
    })
};

// UPDATE
export const updateNoteItem = {
    request : (note) => ({
        type : UPDATE_NOTE_ITEM.REQUEST,
        payload: note
    }),

    success : (note) => ({
        type : UPDATE_NOTE_ITEM.SUCCESS,
        payload: note
    }),

    failure : () => ({
        type : UPDATE_NOTE_ITEM.FAILURE,
    })
};

// REMOVE
export const removeNoteItem = {
    request : (noteId) => ({
        type : REMOVE_NOTE_ITEM.REQUEST,
        payload: {
            noteId,
        }
    }),

    success : (noteId) => ({
        type : REMOVE_NOTE_ITEM.SUCCESS,
        payload: {
            noteId
        }
    }),

    failure : () => ({
        type : REMOVE_NOTE_ITEM.FAILURE,
    })
};