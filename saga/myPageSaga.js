import { MY_PAGE_ACCOUNT_ACTION,MY_PAGE_COUNT_ACTION} from "../actionTypes/myPage";
import {call, put, take} from "redux-saga/effects";
import {Client} from "../api/Client";

// 서버로 부터 온 데이터를 자체 디자인 가이드와 타입설계에 맞는 오브젝트로 바꾸어줌
function getMyPageCountActionRefiner(response){

}

function zeroIfNone(value){
    if(!value){
        return 0
    }else{
        return value;
    }
}

async function getMyPageCountAction(){

    const response = await Client.getMyPageDiaryCount();
    if(response.error){
        return { error : response.error }
    }



    return {
        error : null,
        result : {
            totalNumberOfDiaryCount : zeroIfNone(response.message.totalNumberOfDiaryCount),
            likedDiaryCount : zeroIfNone(response.message.likedDiaryCount),
            exhibitionCount : zeroIfNone(response.message.exhibitionCount),
            concertCount : zeroIfNone(response.message.concertCount),
            musicalCount : zeroIfNone(response.message.musicalCount),
            playCount : zeroIfNone(response.message.playCount),
            etcCount : zeroIfNone(response.message.etcCount),
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
async function getMyPageAccountAction(){

    let user = await Client.getUser();

    if(user.error){
        return { error : user.error };
    }else{

        console.log("그ㅓㄱ : " + JSON.stringify(user));
        return {
            error : null,
            result : {
                userId : user.message.userId,
                userName : user.message.userName,
                email : user.message.email,
            }
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

