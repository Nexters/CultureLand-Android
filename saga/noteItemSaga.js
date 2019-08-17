import {
    GET_NOTE_ITEM,
    CREATE_NOTE_ITEM,
    UPDATE_NOTE_ITEM,
    REMOVE_NOTE_ITEM
} from "../actionTypes/noteItem";
import {call, put, take} from "redux-saga/effects";

export function* getNoteItemAction() {

}

export function* getNoteItemFlow() {
    while(true) {

        const request = yield take(GET_NOTE_ITEM.REQUEST);

        let response = yield call(getNoteItemAction, request.payload.id);

        if (response.error) {
            // 실패
            yield put({
                type: GET_NOTE_ITEM.FAILURE,
                error: response.error,
            })
        } else {
            // 성공
            yield  put({
                type: GET_NOTE_ITEM.SUCCESS,
                result : response.result,
            })
        }
    }
}

export function* createNoteItemAction() {

}

export function* createNoteItemFlow() {
    while(true) {

        const request = yield take(CREATE_NOTE_ITEM.REQUEST);


        let response = yield call(createNoteItemAction, request.payload);

        if (response.error) {
            // 실패
            yield put({
                type: CREATE_NOTE_ITEM.FAILURE,
                error: response.error,
            })
        } else {
            // 성공
            yield  put({
                type: CREATE_NOTE_ITEM.SUCCESS,
                result : response.result,
            })
        }
    }
}

export function* updateNoteItemAction() {

}

export function* updateNoteItemFlow() {
    while(true) {

        const request = yield take(UPDATE_NOTE_ITEM.REQUEST);


        let response = yield call(updateNoteItemAction, request.payload);

        if (response.error) {
            // 실패
            yield put({
                type: UPDATE_NOTE_ITEM.FAILURE,
                error: response.error,
            })
        } else {
            // 성공
            yield  put({
                type: UPDATE_NOTE_ITEM.SUCCESS,
                result : response.result,
            })
        }
    }
}

export function* removeNoteItemAction() {

}

export function* removeNoteItemFlow() {
    while(true) {

        const request = yield take(REMOVE_NOTE_ITEM.REQUEST);


        let response = yield call(removeNoteItemAction, request.payload.id);

        if (response.error) {
            // 실패
            yield put({
                type: REMOVE_NOTE_ITEM.FAILURE,
                error: response.error,
            })
        } else {
            // 성공
            yield  put({
                type: REMOVE_NOTE_ITEM.SUCCESS,
                result : response.result,
            })
        }
    }
}
