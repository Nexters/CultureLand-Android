import {GET_PRODUCT_LIST} from "../actionTypes/productList";
import {searchProductFlow,submitSearchResultFlow} from "./searchProductSaga";
import {fork} from "redux-saga/effects";

import {getProductListFlow,changeProductListFlow,changeProductListSortFlow} from "./productListSaga"
import {isWishedFlow, cancelWishedFlow, setWishedFlow, getItemDetailFlow} from "./itemDetailSaga";
import {myPageAccountFlow, myPageCountFlow} from "./myPageSaga";
import {cancelWishFlow, mainNoteCountFlow, mainWishListFlow} from "./mainSaga";

import {
    getNoteFlow,
    setLikedFlow,
    createNoteFlow,
    updateNoteFlow,
    removeNoteFlow,
    isLikedFlow,
} from "./noteItemSaga";
import {cancelLikeFlow, getDiariesFlow, setLikeFlow} from "./diaryListSaga";
import {changeProductListSort} from "../actions/productList";


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

export default function* root() {
    yield fork(getProductListFlow);
    yield fork(searchProductFlow);
    yield fork(isWishedFlow);
    yield fork(setWishedFlow);
    yield fork(cancelWishedFlow);
    yield fork(myPageCountFlow);
    yield fork(myPageAccountFlow);
    yield fork(getNoteFlow);
    yield fork(createNoteFlow);
    yield fork(updateNoteFlow);
    yield fork(removeNoteFlow);
    yield fork(isLikedFlow);
    yield fork(setLikeFlow);
    yield fork(cancelLikeFlow);
    yield fork(mainNoteCountFlow);
    yield fork(mainWishListFlow);
    yield fork(getItemDetailFlow);
    yield fork(getDiariesFlow);
    yield fork(changeProductListFlow);
    yield fork(changeProductListSortFlow);
    yield fork(setLikedFlow);
    yield fork(submitSearchResultFlow);
    yield fork(cancelWishFlow);

}