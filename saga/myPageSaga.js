import { MY_PAGE_ACCOUNT_ACTION,MY_PAGE_COUNT_ACTION} from "../actionTypes/myPage";
import {call, put, take} from "redux-saga/effects";

export function* getProductListAction(category) {
    // MOCK //
    switch(category) {
        case CATEGORY.ALL_PRODUCT :
            return {
                error : null,
                result : {
                    category: "all",
                    product_list : [
                        {title: "캣츠"},
                        {title: "안중근"},
                        {title: "엠씨더맥스"},
                        {title: "샤갈 색채의 마술사"}
                    ]

                }
            };
        case CATEGORY.EXHIBITION :
            return {
                error : null,
                result: {
                    category: "all",
                    product_list: [
                        {title: "캣츠"},
                        {title: "안중근"},
                        {title: "엠씨더맥스"},
                        {title: "샤갈 색채의 마술사"}
                    ]
                }
            };
        default:
            return {
                error : category,
                result: {
                    category: "all",
                    product_list: [
                        {title: "캣츠"},
                        {title: "안중근"},
                        {title: "엠씨더맥스"},
                        {title: "샤갈 색채의 마술사"}
                    ]
                }
            };


    }
}

function getMyPageCountAction(){
    return {
        error : 'null',
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


        let response = yield call(getMyPageCountAction, request.payload.category); // 블로킹됨

        if (response.error) {
            // 실패
            yield put({
                type: MY_PAGE_COUNT_ACTION.FAILURE,
                error: response.erro,r
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

function getMyPageAccountAction(){
    return {
        error : 'null',
        result : {
            userId : "김컬쳐",
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
