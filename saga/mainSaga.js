import
{GET_MAIN_NOTELIST_ACTION, GET_MAIN_WISHLIST_ACTION} from "../actionTypes/main";
import {call, put, take} from "redux-saga/effects";
import {Client} from '../api/Client';


async function getMainNoteCountAction(year){

    const response = await Client.getMonthDiariesInfoByYear(year);

    if(response.error){
        return { error : response.error }
    }
    return {
        error : null,
        result : {
            noteList : response.message
        }
    }
}


export function* mainNoteCountFlow () {
    while(true) {

        const request = yield take(GET_MAIN_NOTELIST_ACTION.REQUEST);

        console.log("리퀘 : "+ JSON.stringify(request));
        let response = yield call(getMainNoteCountAction, request.payload.yearType);

        if (response.error) {
            // 실패
            yield put({
                type: GET_MAIN_NOTELIST_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            // 성공
            yield  put({
                type: GET_MAIN_NOTELIST_ACTION.SUCCESS,
                result : response.result,
            })
        }
    }
}


async function getMainWishListAction(){

    const response = await Client.getAllWishList();

    console.log("모든 희망목록 : "+ JSON.stringify(response));

    if(response.error){
        return { error : response.error }
    }


    return {
        error : null,
        result : {
            wishList : response.message,
        }
    }

}

export function* mainWishListFlow(){

    while(true) {

        const request = yield take(GET_MAIN_WISHLIST_ACTION.REQUEST);

        let response = yield call(getMainWishListAction,request.payload.isWished);

        if (response.error) {
            // 실패
            yield put({
                type: GET_MAIN_WISHLIST_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            // 성공

            yield  put({
                type: GET_MAIN_WISHLIST_ACTION.SUCCESS,
                result : response.result,
            })
        }
    }
}


