import {
    GET_NOTE_ACTION,
    CREATE_NOTE_ACTION,
    UPDATE_NOTE_ACTION,
    REMOVE_NOTE_ACTION,
    IS_LIKED_ACTION, 
    SET_LIKED_ACTION,
    CANCEL_LIKED_ACTION,
} from "../actionTypes/noteItem";
import {call, put, take} from "redux-saga/effects";


function getNote(id){
    // MOCK
    return {
        error : null,
        result : {
            id : null,
            note: {
                title: '야근이라네',
                category: '콘서트',
                sometime: '2019-08-18',
                place: '마루180',
                withWho: '컬쳐랜드',
                content: '야아그으은 행복하다 하하',
                image: 'https://t1.daumcdn.net/movie/af91402ca4d84418b7becf6624043eb61563411826019',
                isLiked: false,
            },
            error : false,

        }
    };
}
export function* getNoteFlow(){

    while(true){

        const request = yield take(GET_NOTE_ACTION.REQUEST);
        let response = yield call(getNote, request.payload.id);

        if(response.error){

            yield put({
                type : GET_NOTE_ACTION.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : GET_NOTE_ACTION.SUCCESS,
            })
        }
    }
}

function createNote(){
    // MOCK
}
export function* createNoteFlow(){

    while(true){

        const request = yield take(CREATE_NOTE_ACTION.REQUEST);
        let response = yield call(createNote);

        if(response.error){

            yield put({
                type : CREATE_NOTE_ACTION.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : CREATE_NOTE_ACTION.SUCCESS,
            })
        }
    }
}

function updateNote(id, payload){
    // MOCK
}
export function* updateNoteFlow(){

    while(true){

        const request = yield take(UPDATE_NOTE_ACTION.REQUEST);
        let response = yield call(updateNote, request.payload.id);

        if(response.error){

            yield put({
                type : UPDATE_NOTE_ACTION.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : UPDATE_NOTE_ACTION.SUCCESS,
            })
        }
    }
}


function removeNote(id){
    // MOCK
}
export function* removeNoteFlow(){

    while(true){

        const request = yield take(REMOVE_NOTE_ACTION.REQUEST);
        let response = yield call(removeNote,request.payload.id);

        if(response.error){

            yield put({
                type : REMOVE_NOTE_ACTION.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : REMOVE_NOTE_ACTION.SUCCESS,
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
