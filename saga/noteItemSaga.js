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
import {Client} from '../api/Client';
import {CATEGORY_KOR} from "../util";

async function getNote(id) {
    // MOCK

    const response = await Client.getDiaryByDiaryId(id);

    if (response.error) {
        return {error: response.error}
    }

    return {
        error: null,
        result: {
            id: response.message.id,
            title: response.message.title,
            sometime: response.message.sometime,
            content: response.message.content,
            withWho: response.message.withWho,
            place: response.message.place,
            isLiked: response.message.favorite,
            cultureName: response.message.culture,
            imageUrl: response.message.imageUrl,
        },

    };
}

export function* getNoteFlow() {

    while (true) {

        const request = yield take(GET_NOTE_ACTION.REQUEST);
        let response = yield call(getNote, request.payload.id);

        if (response.error) {

            yield put({
                type: GET_NOTE_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: GET_NOTE_ACTION.SUCCESS,
                result: response.result,
            })
        }
    }
}

async function createNote(title, sometime, place, withWho, content, cultureName, image) {
    console.log("업로드 리퀘스트 : " + JSON.stringify(image));

    const imageUploadResponse = await Client.uploadImageToS3(image);

    console.log("업로드 리스폰스 : " + JSON.stringify(imageUploadResponse));

    if (imageUploadResponse.error) {
        console.log("이미지 업로드 에러 : " + JSON.stringify(imageUploadResponse.error));
        return {error: imageUploadResponse.error}

    }

    const response = await Client.writeNewDiary(title, sometime, place,
        withWho, content, cultureName,
        imageUploadResponse.message
        );

    console.log("다이어리 쓰기 응답 : " + JSON.stringify(response));

    if (response.error) {
        return {error: response.error}
    }

    return {
        error: null,
        result: {}
    }

}

export function* createNoteFlow() {

    while (true) {

        const request = yield take(CREATE_NOTE_ACTION.REQUEST);
        let response = yield call(createNote,
            request.payload.title, request.payload.sometime,
            request.payload.place, request.payload.withWho,
            request.payload.content, request.payload.cultureName,
            request.payload.image);

        if (response.error) {

            yield put({
                type: CREATE_NOTE_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: CREATE_NOTE_ACTION.SUCCESS,
            })
        }
    }
}


function updateNote(id, payload) {
    // MOCK
}

export function* updateNoteFlow() {

    while (true) {

        const request = yield take(UPDATE_NOTE_ACTION.REQUEST);
        let response = yield call(updateNote, request.payload.id);

        if (response.error) {

            yield put({
                type: UPDATE_NOTE_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: UPDATE_NOTE_ACTION.SUCCESS,
            })
        }
    }
}


function removeNote(id) {
    const response = Client.deleteDiaryById(id);


    if(response.error){
        return { error : response.error}
    }

    return {
        error : null,
        result : response.message
    }
}

export function* removeNoteFlow() {

    while (true) {

        const request = yield take(REMOVE_NOTE_ACTION.REQUEST);
        let response = yield call(removeNote, request.payload.id);

        if (response.error) {

            yield put({
                type: REMOVE_NOTE_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: REMOVE_NOTE_ACTION.SUCCESS,
            })
        }
    }
}


async function isLiked(diaryId) {

}

export function* isLikedFlow() {
    while (true) {
        const request = yield take(IS_LIKED_ACTION.REQUEST);
        let response = yield call(isLiked, request.payload.id);

        if (response.error) {

            yield put({
                type: IS_LIKED_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: IS_LIKED_ACTION.SUCCESS,
                result: response.result,
            })
        }
    }
}

async function setLiked(diaryId) {
    // MOCK
    const response = await Client.setDiaryLikeState(diaryId);
    if (response.error) {
        return {error: response.error}
    }
    return {
        error: null,
        result: {}
    }
}

export function* setLikedFlow() {

    while (true) {

        const request = yield take(SET_LIKED_ACTION.REQUEST);
        let response = yield call(setLiked, request.payload.id);

        if (response.error) {

            yield put({
                type: CANCEL_LIKED_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: CANCEL_LIKED_ACTION.SUCCESS,
            })
        }
    }
}

function cancelLiked(id) {
    //MOCK
}

export function* cancelLikedFlow() {
    while (true) {
        const request = yield take(CANCEL_LIKED_ACTION.REQUEST);
        let response = yield call(cancelLiked, request.payload.id);

        if (response.error) {

            yield put({
                type: CANCEL_LIKED_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: CANCEL_LIKED_ACTION.SUCCESS,
            })
        }
    }
}
