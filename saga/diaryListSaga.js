
import {GET_DIARY_LIST_ACTION,GET_ADDITIONAL_DIARY_LIST_ACTION} from "../actionTypes/diaryList";
import {call, put, take} from "redux-saga/effects";
import {LIST_TYPE} from "../util";
import {Client} from "../api/Client";
import {SET_WISHED_ACTION} from "../actionTypes/itemDetail";
import {CANCEL_LIKED, CANCEL_LIKED_ACTION, SET_LIKED_ACTION} from "../actionTypes/noteItem";


async function varyDiaryLikedStateAction(id){
    const response = await Client.setDiaryLikeState(id);

    if(response.error){
        return { error : response.error }
    }

    return {
        error : null,
        result : {

        },
    }
}

export function* setLikeFlow() {

    while(true) {

        const request = yield take(SET_LIKED_ACTION.REQUEST);

        let response = yield call(varyDiaryLikedStateAction,request.payload.id);

        if (response.error) {
            // 실패
            yield put({
                type: SET_LIKED_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            // 성공

            yield  put({
                type: SET_LIKED_ACTION.SUCCESS,
                result : response.result,
            })
        }
    }
}


export function* cancelLikeFlow() {

    while(true) {

        const request = yield take(CANCEL_LIKED_ACTION.REQUEST);

        let response = yield call(varyDiaryLikedStateAction,request.payload.id);

        if (response.error) {
            // 실패
            yield put({
                type: CANCEL_LIKED_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            // 성공

            yield  put({
                type: CANCEL_LIKED_ACTION.SUCCESS,
                result : response.result,
            })
        }
    }
}


async function getDiariesAction(listType,listTitle){

    let response;

    if(listType===LIST_TYPE.FOR_CATEGORY){
        response = await Client.getDiariesByCategory(listTitle);
    }else{
        response = await Client.getDiariesByDate(listTitle);
    }

    if(response.error){
        return { error : response.error }
    }
    return {
        error : null,
        result : {
            culture_list : response.message.content,
        },
    }

}

export function* getDiariesFlow(){

    while(true) {

        const request = yield take(GET_DIARY_LIST_ACTION.REQUEST);

        let response = yield call(getDiariesAction,request.payload.listType,
            request.payload.listTitle
        );

        if (response.error) {
            // 실패
            yield put({
                type: GET_DIARY_LIST_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            // 성공

            yield  put({
                type: GET_DIARY_LIST_ACTION.SUCCESS,
                result : response.result,
            })
        }
    }
}
