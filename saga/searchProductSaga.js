import { SEARCH_PRODUCT } from "../actionTypes/searchProduct";
import {call, put, take} from "redux-saga/effects";

function* searchProduct(keyword){
    // MOCK //

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
}

export function* searchProductFlow(){

    while(true){

        const request = yield take(SEARCH_PRODUCT.REQUEST);

        let response = yield call(searchProduct,request.keyword);

        if(response.error){

            yield put({
                type : SEARCH_PRODUCT.FAILURE,
                error : response.error,
            })

        }else{

            yield put({
                type : SEARCH_PRODUCT.SUCCESS,
                result : response.result,
            })
        }
    }
}