import {call, put, take} from "redux-saga/effects";
import {
    IS_WISHED_ACTION,
    SET_WISHED_ACTION,
    CANCEL_WISHED_ACTION, GET_ITEM_DETAIL_ACTION
} from "../actionTypes/itemDetail";
import {Client} from "../api/Client";
import {CATEGORY_KOR} from "../util";

// 서버로 부터 온 데이터를 자체 디자인 가이드와 타입설계에 맞는 오브젝트로 바꾸어줌
function getItemDetailRefiner(response) {
    return {
        error: response.error,
        result: {
            id: response.id,
            imageUrl: response.imageUrl,
            title: function () {

                let title = response.title;

                if(!title){
                    return '';
                }

                if(title.length <= 14){
                    return title;
                }

                for(let i=1; i <= 3; i++){

                }
                let narrowChars = title.slice(0,14).match(/(\[)|(\])|(\()|(\))|(\.)|(\,)/g);
                let temp;
                if(narrowChars) {

                    let count = narrowChars.length;

                    temp = title.slice(0, 14 + count) + "\n";
                }


                if (response.title.length > 14) {
                    return `${response.title.slice(0, 14)}${"\n"}${response.title.slice(14)}`;
                } else {
                    return response.title;
                }




            }(),
            startDate: response.startDate,
            endDate: response.endDate,
            place: response.place,
            category: response.category,
        },
    }
}

async function getItemDetail(id) {
    let response = await Client.getCultureDetailById(id);


    if (response.error) {
        return {error: response.error}
    }

    return getItemDetailRefiner({
        error: null,
        id: response.message.id,
        imageUrl: `http:${response.message.imageUrl}`,
        title: response.message.title,
        startDate: `${response.message.startDate}`,
        endDate: `${response.message.endDate}}`,
        place: response.message.place,
        category: CATEGORY_KOR(response.message.cultureName)
    })
}

export function* getItemDetailFlow() {

    while (true) {
        const request = yield take(GET_ITEM_DETAIL_ACTION.REQUEST);
        let response = yield call(getItemDetail, request.payload.id);

        if (response.error) {

            yield put({
                type: GET_ITEM_DETAIL_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: GET_ITEM_DETAIL_ACTION.SUCCESS,
                result: response.result,

            })
        }
    }

}

async function setWished(id) {


    const response = await Client.addNewWishItem(id);

    if (response.error) {
        return {error: response.error};
    }
    return {
        error: null,
        result: {}
    }
}


export function* setWishedFlow() {

    while (true) {
        const request = yield take(SET_WISHED_ACTION.REQUEST);
        let response = yield call(setWished, request.payload.id);

        if (response.error) {

            yield put({
                type: SET_WISHED_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: SET_WISHED_ACTION.SUCCESS,
                error: null,
            })
        }
    }
}

async function cancelWished(id) {

    const response = await Client.deleteWishItem(id);

    console.log("위시아이템 삭제 : " + JSON.stringify(response)  +" , 아이디 : "+id);

    if(response.error){
        return { error : response.error }
    }

    return {
        error: null,
        result: {}
    }
}

export function* cancelWishedFlow() {
    while (true) {
        const request = yield take(CANCEL_WISHED_ACTION.REQUEST);
        let response = yield call(cancelWished, request.payload.id);

        if (response.error) {
            console.log("Cancel wished action fail");
            yield put({
                type: CANCEL_WISHED_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            console.log("Cancel wished action success");
            yield put({
                type: CANCEL_WISHED_ACTION.SUCCESS,
            })
        }
    }
}

async function isWished(id) {

    const response = await Client.getWishItemById(id);

    console.log("이즈위시드 : "+ JSON.stringify(response) +" , 아이디 : "+id);
    if(response.error){
        return { error : response.error }
    }
    return {
        error: null,
        result: {}
    }
}


export function* isWishedFlow() {
    while (true) {
        const request = yield take(IS_WISHED_ACTION.REQUEST);
        let response = yield call(isWished, request.payload.id);

        if (response.error) {

            yield put({
                type: IS_WISHED_ACTION.FAILURE,
                error: response.error,
            })
        } else {
            yield put({
                type: IS_WISHED_ACTION.SUCCESS,
                result: response.result,
            })
        }
    }
}



