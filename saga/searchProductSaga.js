import {SEARCH_PRODUCT_ACTION, SUBMIT_SEARCH_RESULT_ACTION} from "../actionTypes/searchProduct";
import {call, put, take} from "redux-saga/effects";
import {Client} from '../api/Client';

async function searchProduct(keyword) {

    const result = await Client.searchCultureByQuery(keyword);

    if (result.error) {
        return {error: result.error}

    } else {

        if(result.message === undefined){
            result.message = [];
        }

        return {
            error: null,
            result: {
                category: "all",
                searched_product_list: result.message
            },
        }
    }
}

export function* searchProductFlow() {

    while (true) {

        const request = yield take(SEARCH_PRODUCT_ACTION.REQUEST);
        let response = yield call(searchProduct, request.payload.keyword);

        if (response.error) {

            yield put({
                type: SEARCH_PRODUCT_ACTION.FAILURE,
                error: response.error,
            })

        } else {

            yield put({
                type: SEARCH_PRODUCT_ACTION.SUCCESS,
                result: response.result,
            })
        }
    }
}



async function submitSearchResult(keyword){

    const response =  await Client.getCultureListByTitle(keyword);
    if(response.error){
        return { error : response.error }
    }

    return {
        error : null,
        result : {
            searched_product_list: response.message,
        }
    }
}
export function* submitSearchResultFlow() {

    while (true) {

        const request = yield take(SUBMIT_SEARCH_RESULT_ACTION.REQUEST);
        let response = yield call(submitSearchResult, request.payload.keyword);

        if (response.error) {

            yield put({
                type: SUBMIT_SEARCH_RESULT_ACTION.FAILURE,
                error: response.error,
            })

        } else {

            yield put({
                type: SUBMIT_SEARCH_RESULT_ACTION.SUCCESS,
                result: response.result,
            })
        }
    }
}