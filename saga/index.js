import {GET_PRODUCT_LIST} from "../actionTypes/productList";

/*
    컨벤션
    api 콜의 결과는 { result, error } pair 이고
    error != null 일 경우 result == null
    error == null 일 경우 result != null 임을 보장한다.??
    따라서,

    let response = yield call(api 콜 함수, ...params)
    if(response.error) {
        실패시 처리루틴
        error : response.error
    }else{
        result : response.result
    }
    와 같이 받아서, reducer 내에서 구체적인 result,error 로 바꾼다


 */
function* getProductListAction(category) {
    // 서버로 fetch 를 보낸다
    return {
        result : [
        {title: "캣츠"},
        {title: "안중근"}
    ],
    error : "대충 에러"
    }

}

function* getProductListFlow() {
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
                product_list: response.result,
            })
        }
    }
}

function* getProductListFlow(){


    }
}

export default function* root() {
    yield fork
}