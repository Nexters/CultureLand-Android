import {call, put, take} from "redux-saga/effects";
import {GET_ITEM_DETAIL,
IS_WISHED_ACTION,
   SET_WISHED_ACTION,
   CANCEL_WISHED_ACTION
} from "../actionTypes/itemDetail";

export function getItemDetailFlow(){

}

function setWished(){
    // MOCK
}
export function setWishedFlow(){
    while(true){
        const request = yield take(SET_WISHED_ACTION.REQUEST);
        let response = yield call(setWished,request.payload.id);

        if(response.error){

            yield put({
                type : CANCEL_WISHED_ACTION.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : CANCEL_WISHED_ACTION.SUCCESS,
            })
        }
    }
}

function cancelWished(id){
    //MOCK
}
export function cancelWishedFlow(){
    while(true){
        const request = yield take(CANCEL_WISHED_ACTION.REQUEST);
        let response = yield call(isWished,request.payload.id);

        if(response.error){

            yield put({
                type : CANCEL_WISHED_ACTION.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : CANCEL_WISHED_ACTION.SUCCESS,
            })
        }
    }
}

export function isWished(id){
    //MOCK
}
export function isWishedFlow(){
    while(true){
        const request = yield take(IS_WISHED_ACTION.REQUEST);
        let response = yield call(isWished,request.payload.id);

        if(response.error){

            yield put({
                type : IS_WISHED_ACTION.FAILURE,
                error : response.error,
            })
        }else {
            yield put({
                type : IS_WISHED_ACTION.SUCCESS,
                result : response.result,
            })
        }
    }
}



