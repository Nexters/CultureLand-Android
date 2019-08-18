import { MY_PAGE_ACCOUNT_ACTION,MY_PAGE_COUNT_ACTION} from "../actionTypes/myPage";
import {call, put, take} from "redux-saga/effects";

// 서버로 부터 온 데이터를 자체 디자인 가이드와 타입설계에 맞는 오브젝트로 바꾸어줌
function getMyPageCountActionRefiner(response){

}

function getMyPageCountAction(){
    return {
        error : null,
        result : {
            totalNumberOfDiaryCount : 13,
            likedDiaryCount : 4,
            exhibitionCount : 5,
            concertCount : 3,
            musicalCount : 4,
            playCount : 1,
            etcCount : 0,
        }
    }

}

export function* myPageCountFlow () {
    while(true) {

        const request = yield take(MY_PAGE_COUNT_ACTION.REQUEST);


        let response = yield call(getMyPageCountAction); // 블로킹됨
        if (response.error) {
            // 실패
            yield put({
                type: MY_PAGE_COUNT_ACTION.FAILURE,
                error: response.error
            })
        } else {
            // 성공
            console.log("리서트 : "+ JSON.stringify(response.result));
            yield  put({
                type: MY_PAGE_COUNT_ACTION.SUCCESS,
                result : response.result,
            })
        }
    }
}

// 서버로 부터 온 데이터를 자체 디자인 가이드와 타입설계에 맞는 오브젝트로 바꾸어줌
function getMyPageAccountActionRefiner(response){

}
function getMyPageAccountAction(){
    return {
        error : null,
        result : {
            userId : "이컬쳐",
            userEmail : "helloworld@gmail.com",
        }
    }
}
export function* myPageAccountFlow(){

    while(true) {

        const request = yield take(MY_PAGE_ACCOUNT_ACTION.REQUEST);

        let response = yield call(getMyPageAccountAction,request.payload.credential); // 블로킹됨

        if (response.error) {
            // 실패
            yield put({
                type: MY_PAGE_ACCOUNT_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            // 성공
            yield  put({
                type: MY_PAGE_ACCOUNT_ACTION.SUCCESS,
                result : response.result,
            })
        }
    }
}

