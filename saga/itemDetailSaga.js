import {call, put, take} from "redux-saga/effects";
import {
    IS_WISHED_ACTION,
    SET_WISHED_ACTION,
    CANCEL_WISHED_ACTION, GET_ITEM_DETAIL_ACTION
} from "../actionTypes/itemDetail";

// 서버로 부터 온 데이터를 자체 디자인 가이드와 타입설계에 맞는 오브젝트로 바꾸어줌
function getItemDetailRefiner(response){
    return {
        error : response.error,
        id : response.id,
        imageUrl : response.imageUrl,
        title : function(){
            if(response.title.length > 14){
                return `${response.title.slice(0,14)}${"\n"}${response.title.slice(14)}`;
            }else{
                return response.title;
            }
        }(),
        period : response.period,
        place : response.place,
        category : response.category,
    }
}
function getItemDetail() {
    return getItemDetailRefiner({
        error: null,
        id: 1,
        imageUrl: "http://t.011st.com/Down/Perf/201905/11m_27.jpg",
        title: '김사월 : 누구라도 상관없이 당신이 좋겠어',
        period: "2019.08.18 ~ 2019.08.19",
        place: "대학로",
        category: "공연"
    })
}

export function* getItemDetailFlow() {

    while (true) {

        const request = yield take(GET_ITEM_DETAIL_ACTION.REQUEST);
        let response = yield call(getItemDetail, request.payload.id);

        if (response.error) {

            yield put({
                type: GET_ITEM_DETAIL_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: GET_ITEM_DETAIL_ACTION.SUCCESS,
                result: response,

            })
        }
    }

}

function setWished() {
    return {
        error: null,
        result: {}
    }
}

export function* setWishedFlow() {

    while (true) {

        const request = yield take(SET_WISHED_ACTION.REQUEST);
        let response = yield call(setWished, request.payload.id);

        if (response.error) {

            yield put({
                type: SET_WISHED_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: SET_WISHED_ACTION.SUCCESS,
                error: null,
            })
        }
    }
}

function cancelWished(id) {
    return {
        error: null,
        result: {}
    }
}

export function* cancelWishedFlow() {
    while (true) {
        const request = yield take(CANCEL_WISHED_ACTION.REQUEST);
        let response = yield call(cancelWished, request.payload.id);

        if (response.error) {
            console.log("Cancel wished action fail");
            yield put({
                type: CANCEL_WISHED_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            console.log("Cancel wished action success");
            yield put({
                type: CANCEL_WISHED_ACTION.SUCCESS,
            })
        }
    }
}

export function isWished(id) {
    return {
        error: null,
        result: {}
    }
}

export function* isWishedFlow() {
    while (true) {
        const request = yield take(IS_WISHED_ACTION.REQUEST);
        let response = yield call(isWished, request.payload.id);

        if (response.error) {

            yield put({
                type: IS_WISHED_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: IS_WISHED_ACTION.SUCCESS,
                result: response.result,
            })
        }
    }
}



