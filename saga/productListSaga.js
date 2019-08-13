import {CATEGORY, GET_PRODUCT_LIST} from "../actionTypes/productList";
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

export function* getProductListFlow() {
    while(true) {


        const request = yield take(GET_PRODUCT_LIST.REQUEST);


        let response = yield call(getProductListAction, request.category); // 블로킹됨

        if (response.error) {
            // 실패
            yield put({
                type: GET_PRODUCT_LIST.FAILURE,
                error: response.error,
            })
        } else {
            // 성공

            yield  put({
                type: GET_PRODUCT_LIST.SUCCESS,
                result : response.result,
            })
        }
    }
}
