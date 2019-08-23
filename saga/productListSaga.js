import {GET_PRODUCT_LIST_ACTION, CHANGE_PRODUCT_LIST_ACTION, CHANGE_SORT_LIST_ACTION} from "../actionTypes/productList";
import {call, put, take} from "redux-saga/effects";
import {Client} from "../api/Client";
import {CATEGORY, SORT_BY_NEW, SORT_BY_POPULAR} from "../util";


async function getProductListAction(category,sort,page) {

    // MOCK //


    let response;
    if(category === CATEGORY.ALL_PRODUCT){
        response = await Client.getAllCultureByQueries(sort,page);
    }else {
        response = await Client.getCultureByQueries(category,sort,page);
    }


    if(response.error){
        console.log(`getProductListAction error = > [${response.error}]`);
        return { error : response.error }
    }else{
        return {
            error : null,
            result : {
                product_list : response.message.contents,
                nextPage : response.message.nextPage,
            }
        }
    }
}



export function* changeProductListSortFlow(){
    while(true) {

        const request = yield take(CHANGE_SORT_LIST_ACTION.REQUEST);


        let response = yield call(getProductListAction,
            request.payload.category,
            request.payload.sort,
            0
        ); // 블로킹됨

        if (response.error) {
            // 실패
            yield put({
                type: CHANGE_SORT_LIST_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            // 성공

            yield  put({
                type: CHANGE_SORT_LIST_ACTION.SUCCESS,
                result : response.result,
            })
        }
    }
}

export function* changeProductListFlow(){
    while(true) {

        const request = yield take(CHANGE_PRODUCT_LIST_ACTION.REQUEST);


        let response = yield call(getProductListAction,
            request.payload.category,
            request.payload.sort,
            request.payload.page,
        ); // 블로킹됨

        if (response.error) {
            // 실패
            yield put({
                type: CHANGE_PRODUCT_LIST_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            // 성공

            yield  put({
                type: CHANGE_PRODUCT_LIST_ACTION.SUCCESS,
                result : response.result,
            })
        }
    }
}

export function* getProductListFlow() {
    while(true) {

        const request = yield take(GET_PRODUCT_LIST_ACTION.REQUEST);


        let response = yield call(getProductListAction,
            request.payload.category,
            request.payload.sort,
            request.payload.page,
            ); // 블로킹됨

        if (response.error) {
            // 실패
            yield put({
                type: GET_PRODUCT_LIST_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            // 성공

            yield  put({
                type: GET_PRODUCT_LIST_ACTION.SUCCESS,
                result : response.result,
            })
        }
    }
}
