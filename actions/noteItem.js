import {
    GET_NOTE_ITEM,
    CREATE_NOTE_ITEM,
    UPDATE_NOTE_ITEM,
    REMOVE_NOTE_ITEM
} from "../actionTypes/noteItem";


export const getNoteItem = {
    request : () => ({
        type : GET_NOTE_ITEM.REQUEST,
    }),
    success : () => ({
        type : GET_NOTE_ITEM.SUCCESS,
    }),
    failure : () => ({
        type : GET_NOTE_ITEM.FAILURE,
    })
};

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

export const updateNoteItem = {
    request : (diaryId) => ({
        type : UPDATE_NOTE_ITEM.REQUEST,
        payload: {
            diaryId,
        }
    }),

    success : () => ({
        type : UPDATE_NOTE_ITEM.SUCCESS,
    }),

    failure : () => ({
        type : UPDATE_NOTE_ITEM.FAILURE,
    })
};

export const removeNoteItem = {
    request : (diaryId) => ({
        type : REMOVE_NOTE_ITEM.REQUEST,
        payload: {
            diaryId,
        }
    }),

    success : () => ({
        type : REMOVE_NOTE_ITEM.SUCCESS,
    }),

    failure : () => ({
        type : REMOVE_NOTE_ITEM.FAILURE,
    })
};