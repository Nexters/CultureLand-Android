import {SEARCH_PRODUCT} from "../actionTypes/searchProduct";
import {call, put, take} from "redux-saga/effects";
import {Client} from '../api/Client';

async function searchProduct(keyword) {

    let result = await Client.searchCultureByQuery(keyword);

    if (result.error) {
        console.log("오류발생 : "+result.error);
        return {error: result.error}

    } else {
        console.log("검색결과 : "+JSON.stringify(result.message));

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

        const request = yield take(SEARCH_PRODUCT.REQUEST);
        let response = yield call(searchProduct, request.payload.keyword);

        if (response.error) {

            yield put({
                type: SEARCH_PRODUCT.FAILURE,
                error: response.error,
            })

        } else {

            yield put({
                type: SEARCH_PRODUCT.SUCCESS,
                result: response.result,
            })
        }
    }
}