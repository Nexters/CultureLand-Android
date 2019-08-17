import {
    GET_NOTE_ITEM,
    CREATE_NOTE_ITEM,
    UPDATE_NOTE_ITEM,
    REMOVE_NOTE_ITEM,
    CANCEL_LIKED_ACTION,
    IS_LIKED_ACTION, 
    SET_LIKED_ACTION
} from "../actionTypes/noteItem";
import {call, put, take} from "redux-saga/effects";

function removeNote(id){
    // MOCK
}
export function* removeNoteFlow(){

    while(true){

        const request = yield take(REMOVE_NOTE_ITEM.REQUEST);
        let response = yield call(getNote,request.payload.id);

        if(response.error){

            yield put({
                type : REMOVE_NOTE_ITEM.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : REMOVE_NOTE_ITEM.SUCCESS,
            })
        }
    }
}

function updateNote(id){
    // MOCK
}
export function* updateNoteFlow(){

    while(true){

        const request = yield take(UPDATE_NOTE_ITEM.REQUEST);
        let response = yield call(getNote,request.payload.id);

        if(response.error){

            yield put({
                type : UPDATE_NOTE_ITEM.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : UPDATE_NOTE_ITEM.SUCCESS,
            })
        }
    }
}

function createNote(){
    // MOCK
}
export function* createNoteFlow(){

    while(true){

        const request = yield take(CREATE_NOTE_ITEM.REQUEST);
        let response = yield call(getNote);

        if(response.error){

            yield put({
                type : CREATE_NOTE_ITEM.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : CREATE_NOTE_ITEM.SUCCESS,
            })
        }
    }
}


function getNote(id){
    // MOCK
}
export function* getNoteFlow(){

    while(true){

        const request = yield take(GET_NOTE_ITEM.REQUEST);
        let response = yield call(getNote,request.payload.id);

        if(response.error){

            yield put({
                type : GET_NOTE_ITEM.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : GET_NOTE_ITEM.SUCCESS,
            })
        }
    }
}

function setLiked(){
    // MOCK
}
export function* setLikedFlow(){

    while(true){

        const request = yield take(SET_LIKED_ACTION.REQUEST);
        let response = yield call(setLiked,request.payload.id);

        if(response.error){

            yield put({
                type : CANCEL_LIKED_ACTION.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : CANCEL_LIKED_ACTION.SUCCESS,
            })
        }
    }
}

function cancelLiked(id){
    //MOCK
}
export function* cancelLikedFlow(){
    while(true){
        const request = yield take(CANCEL_LIKED_ACTION.REQUEST);
        let response = yield call(cancelLiked,request.payload.id);

        if(response.error){

            yield put({
                type : CANCEL_LIKED_ACTION.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : CANCEL_LIKED_ACTION.SUCCESS,
            })
        }
    }
}

export function isLiked(id){
    //MOCK
}
export function* isLikedFlow(){
    while(true){
        const request = yield take(IS_LIKED_ACTION.REQUEST);
        let response = yield call(isLiked,request.payload.id);

        if(response.error){

            yield put({
                type : IS_LIKED_ACTION.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : IS_LIKED_ACTION.SUCCESS,
                result : response.result,
            })
        }
    }
}