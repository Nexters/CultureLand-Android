import {
    ACCESS_TOKEN, EXPIRED_AT, OAUH_SOCIAL_SERVICE, SERVICE_ACCESS_TOKEN, SOCIAL_ACCESS_TOKEN,
    trimCurrentMillisTo10Fig
} from "../util";

const jwtDecode = require('jwt-decode');
const FACE_BOOK = "facebook";
const GOOGLE = "google";

import * as SecureStore from 'expo-secure-store';

class ClientClass {
    constructor() {
        this.baseURL = "http://54.180.34.154:8080";
        this.token = null;
        this.socialService = null;
        this.socialAccessToken = null;
        this.serverAccessToken = null;
        this.expiredAt = null;
    }

    getSocialService() {
        return this.socialService;
    }

    setSocialService(socialService) {
        this.socialService = socialService;
    }

    setServerAccessToken(token) {
        this.serverAccessToken = token;
    }

    setSocialAccessToken(token) {
        this.socialAccessToken = token;
    }

    getServerToken() {
        return this.serverAccessToken;
    }

    getSocialToken() {
        return this.socialAccessToken;
    }

    setExpiredAt(expiredAt) {
        this.expiredAt = expiredAt;
    }

    async init() {
        let serverToken = await SecureStore.getItemAsync(SERVICE_ACCESS_TOKEN);
        let socialToken = await SecureStore.getItemAsync(SOCIAL_ACCESS_TOKEN);
        let socialService = await SecureStore.getItemAsync(OAUH_SOCIAL_SERVICE);
        this.setSocialService(socialService);
        this.setServerAccessToken(serverToken)
        this.setSocialAccessToken(socialToken);
    }

    getBaseURL() {
        return this.baseURL;
    }

    getSignInOrUpURL(snsName) {
        return `${this.getBaseURL()}/signInOrUp?snsName=${snsName}`;
    }

    getUserBaseURL() {
        return `${this.getBaseURL()}/users`;
    }

    getDiaryBaseURL() {
        return `${this.getBaseURL()}/diaries`;
    }

    getDiaryByDiaryIdURL(diaryId) {
        return `${this.getDiaryBaseURL()}/${diaryId}`;
    }

    getDiariesByCategoryURL(category) {
        return `${this.getDiaryBaseURL()}?category=${category}`;
    }

    getDiariesByDateURL(date) {
        return `${this.getDiaryBaseURL()}?date=${date}`;
    }

    getDiaryLikeURL(diaryId) {
        return `${this.getDiaryBaseURL()}/${diaryId}/like`;
    }

    getDiaryImageS3UploadURL() {
        return `${this.getDiaryBaseURL()}/upload/image`;
    }

    getMonthDiariesListByYearURL(year) {
        return `${this.getDiaryBaseURL()}/all/summaries?year=${year}`;
    }

    getMyPageDiaryCountURL() {
        return `${this.getDiaryBaseURL()}/all/counts`;
    }

    getWishListBaseURL() {
        return `${this.getUserBaseURL()}/wishList`;
    }

    setItemWishedByIdURL(cultureInfoId) {
        return `${this.getWishListBaseURL()}?cultureInfoId=${cultureInfoId}`;
    }

    getWishedItemByIdURL(cultureInfoId) {
        return `${this.getWishListBaseURL()}/find?cultureInfoId=${cultureInfoId}`;
    }

    getDeleteWishedItemURL(wishListId) {
        return `${this.getWishListBaseURL()}/${wishListId}`;
    }

    getCultureInfoBaseURL() {
        return `${this.getBaseURL()}/cultureInfos`;
    }

    /*
    getCultureInfoByQueriesURL(category, sort, page) {
        return `${this.getCultureInfoBaseURL()}?category=${category}\
        &sort=${sort}&page=${page}`;
    }
    */
    getCultureInfoByQueriesURL(category, sort, page) {
        return `${this.getCultureInfoBaseURL()}?category=${category}&sort=${sort}&page=${page}`;
    }

    getAllCultureQueriesURL(sort, page) {
        return `${this.getCultureInfoBaseURL()}?sort=${sort}&page=${page}`;
    }


    getCultureSearchURL(keyword) {
        return `${this.getCultureInfoBaseURL()}/search?query=${keyword}`;
    }

    getCultureByIdURL(cultureId) {
        return `${this.getCultureInfoBaseURL()}/id/${cultureId}`;
    }

    getCultureListByTitleURL(title) {
        return `${this.getCultureInfoBaseURL()}/title?title=${title}`;
    }


    signInOrUp(socialService) {
        return fetch(this.getSignInOrUpURL(socialService), {

            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                accessToken: this.getSocialToken(),
            })

        }).then((res) => {
            return res.json();
        }).catch(err => {
            return {error: err}
        })
    }

    async credentialCall(url, options) {


        await SecureStore.getItemAsync(EXPIRED_AT).then(async expiredDate => {

            let currentTime = trimCurrentMillisTo10Fig();
            if (expiredDate < currentTime) {

                console.log(`Token 갱신요청 expired_at [${expiredDate}] 
                current is [${currentTime}] `);

                let response = await this.signInOrUp(this.socialService);

                console.log("인증후 서버 :" + JSON.stringify(response));
                const decodedToken = jwtDecode(response.message.token);
                this.setServerAccessToken(response.message.token);
                await SecureStore.setItemAsync(SERVICE_ACCESS_TOKEN, response.message.token);
                await SecureStore.setItemAsync(EXPIRED_AT, decodedToken.exp.toString());
                await SecureStore.getItemAsync(EXPIRED_AT).then((expiredDate) => {
                    Client.setExpiredAt(expiredDate);
                });
                await SecureStore.getItemAsync(SERVICE_ACCESS_TOKEN).then((token) => {
                    Client.setServerAccessToken(token);
                });

                this.setExpiredAt(decodedToken.exp.toString());


            } else {
                console.log(`Token이 유효함  [${expiredDate}]`);
            }
        }).catch(e => {
            console.log(`credentialCall 예외발생 [ ${e} ]`);
        });

        let defaultContentType = "application/json; charset=utf-8";
        if (options.headers) {
            defaultContentType = options.headers["Content-Type"];
        }

        let credentialOptions = {
                headers: {
                    "Content-Type": `${defaultContentType}`,
                    "Authorization": `Bearer ${this.serverAccessToken}`,
                },

            };

        if(options.body){
            credentialOptions["body"] = options.body
        }

        try {
            credentialOptions["method"] = options["method"]
        } catch (e) {
            console.log("credential exception :  " + e);
        }


        return fetch(url, credentialOptions).then((res) => {
            return res.json();
        }).catch(err => {
            return {err}
        });
    }

    getUser() { // VERIFIED
        return this.credentialCall(this.getUserBaseURL(), {
            method: "GET",
        })
    }

    getAllDiaries() { // VERIFIED
        return this.credentialCall(this.getDiaryBaseURL(), {
            method: "GET",
        })
    }

    // DIARY API //

    writeNewDiary(title, someTime, place, withWho, content, cultureName, imageUrl) { // VERIFIED
        return this.credentialCall(this.getDiaryBaseURL(), {
            method: "POST",
            body: JSON.stringify({
                "title": title,
                "sometime": someTime,
                "place": place,
                "withWho": withWho,
                "content": content,
                "cultureName": cultureName,
                "imageUrl": imageUrl,
            })
        })
    }

    getDiariesByCategory(category) {
        return this.credentialCall(this.getDiariesByCategoryURL(category), {
            method: "GET",
        })
    }

    getDiariesByDate(date) {
        return this.credentialCall(this.getDiariesByDateURL(date), {
            method: "GET",
        })
    }

    getDiaryByDiaryId(diaryId) {
        return this.credentialCall(this.getDiaryByDiaryIdURL(diaryId), {
            method: "GET",
        })
    }

    getMonthDiariesInfoByYear(year) {
        return this.credentialCall(this.getMonthDiariesListByYearURL(year), {
            method: "GET",
        })
    }

    uploadImageToS3(imageBinary) {

        return this.credentialCall(this.getDiaryImageS3UploadURL(), {
            method: "POST",
            headers: {
                "Content-Type" : "multipart/form-data; charset=utf-8; boundary=--------------------------605340083993630461301957",

            },
            body : imageBinary,
        })
    }

    getMyPageDiaryCount() {
        return this.credentialCall(this.getMyPageDiaryCountURL(), {
            method: "GET",
        })
    }

    setDiaryLikeState(diaryId) {
        return this.credentialCall(this.getDiaryLikeURL(diaryId), {
            method: "GET",
        })
    }

    deleteDiaryById(diaryId) { // VERIFIED
        return this.credentialCall(this.getDiaryByDiaryIdURL(diaryId), {
            method: "DELETE",
        })
    }

    // CULTUREINFO API GROUP //

    getAllCultureByQueries(sort, page) {
        return this.credentialCall(this.getAllCultureQueriesURL(sort, page), {
            method: "GET",
        })
    }

    getCultureByQueries(category, sort, page) { // VERIFIED
        return this.credentialCall(this.getCultureInfoByQueriesURL(category, sort, page), {
            method: "GET",
        })
    }

    searchCultureByQuery(keyword) { // VERIFIED
        return this.credentialCall(this.getCultureSearchURL(keyword), {
            method: "GET",
        })
    }

    getCultureDetailById(cultureId) { // VERIFIED
        return this.credentialCall(this.getCultureByIdURL(cultureId), {
            method: "GET",
        })
    }

    getCultureListByTitle(title) {
        return this.credentialCall(this.getCultureListByTitleURL(title), {
            method: "GET",
        })
    }

    // WISH LIST API GROUP //


    getAllWishList() { // VERIFIED : /users/dibs
        return this.credentialCall(this.getWishListBaseURL(), {
            method: "GET",
        })
    }


    getWishItemById(wishId) { // VERIFIED users/wishList/find
        return this.credentialCall(this.getWishedItemByIdURL(wishId), {
            method: "GET",
        })
    }

    // TODO 파라미터 이용해서 call 하는 걸로 수정하기
    addNewWishItem(id) { // VERIFIED /users/dibs
        return this.credentialCall(this.setItemWishedByIdURL(id), {
            method: "POST",
        })
    }

    deleteWishItem(wishId) { // VERIFIED /users/wishList/:wishListId
        return this.credentialCall(this.getDeleteWishedItemURL(wishId), {
            method: "DELETE",
        })
    }


}

export const Client = new ClientClass();