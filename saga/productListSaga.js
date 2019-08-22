import {CATEGORY, GET_PRODUCT_LIST} from "../actionTypes/productList";
import {call, put, take} from "redux-saga/effects";
import {Client} from "../api/Client";

async function getProductListAction(category,page) {

    // MOCK //



    if(category === CATEGORY.ALL_PRODUCT){

    }

    let response = await Client.getCultureByQueries(category,page);
    if(response.error){
        console.log(`getProductListAction error = > [${response.error}]`);
        return { error : response.error }
    }else{
        return {
            error : null,
            result : {
                product_list : response.message.contents,
            }
        }
    }
}

export function* getProductListFlow() {
    while(true) {

        const request = yield take(GET_PRODUCT_LIST.REQUEST);


        let response = yield call(getProductListAction,
            request.payload.category,
            request.payload.page,
            ); // 블로킹됨

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
