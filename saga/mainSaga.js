import {GET_MAIN_NOTELIST_ACTION, GET_MAIN_WISHLIST_ACTION} from "../actionTypes/main";
import {call, put, take} from "redux-saga/effects";


function getMainNotelistAction(){
    return {
        error : null,
        result : {
            noteList : []
        }
    }

}

export function* mainNotelistFlow () {
    while(true) {

        const request = yield take(GET_MAIN_NOTELIST_ACTION.REQUEST);


        let response = yield call(getMainNotelistAction, request.payload.yearType);

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

function getMainWishlistAction(){
    return {
        error : null,
        result : {
            wishList : []
        }
    }

}

export function* mainWishlistFlow(){

    while(true) {

        const request = yield take(GET_MAIN_WISHLIST_ACTION.REQUEST);

        let response = yield call(getMainWishlistAction,request.payload.isWished); 

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
