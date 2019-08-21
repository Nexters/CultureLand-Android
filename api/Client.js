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
        this.baseURL = "http://54.180.86.141:8080";
        this.token = null;
        this.socialService = null;
        this.socialAccessToken = null;
        this.serverAccessToken = null;
        this.expiredAt = null;
    }

    getSocialService(){
        return this.socialService;
    }
    setSocialService(socialService){
        this.socialService = socialService;
    }
    setServerAccessToken(token){
        this.serverAccessToken = token;
    }
    setSocialAccessToken(token){
        this.socialAccessToken = token;
    }
    getServerToken(){
        return this.serverAccessToken;
    }
    getSocialToken(){
        return this.socialAccessToken;
    }
    setExpiredAt(expiredAt){
        this.expiredAt =  expiredAt;
    }

    async init(){
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

    getWishListBaseURL() {
        return `${this.getUserBaseURL()}/dibs`;
    }

    getWishedItemByIdURL(dibsId) {
        return `${this.getWishListBaseURL()}/${dibsId}`;
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
    getCultureInfoByQueriesURL(category, page) {
        return `${this.getCultureInfoBaseURL()}?category=${category}\
        &page=${page}`;
    }

    getCultureSearchURL(keyword) {
        return `${this.getCultureInfoBaseURL()}/search?query=${keyword}`;
    }

    getCultureByIdURL(cultureId) {
        return `${this.getCultureInfoBaseURL()}/id/${cultureId}`;
    }



    signInOrUp(socialService){
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
            return { err }
        })
    }

    async credentialCall(url, options) {


        await SecureStore.getItemAsync(EXPIRED_AT).then(async expiredDate => {

            let currentTime = trimCurrentMillisTo10Fig();
            if (expiredDate < currentTime) {

                console.log(`Token 갱신요청 expired_at [${expiredDate}] 
                current is [${currentTime}] `);

                let response = await this.signInOrUp(this.socialService);

                const decodedToken = jwtDecode(response.message);
                this.setServerAccessToken(response.message);

                await SecureStore.setItemAsync(SERVICE_ACCESS_TOKEN, response.message);
                await SecureStore.setItemAsync(EXPIRED_AT, decodedToken.exp.toString());
                await SecureStore.getItemAsync(EXPIRED_AT).then((expiredDate) => {
                    CLient.setExpiredAt(expiredDate);
                });
                await SecureStore.getItemAsync(SERVICE_ACCESS_TOKEN).then((token) => {
                    Client.setServerAccessToken(token);
                });

                this.setExpiredAt(decodedToken.exp.toString());



            }else{
                console.log(`Token이 유효함  [${expiredDate}]`);
            }
        }).catch(e => {
            console.log(`credentialCall 예외발생 [ ${e} ]`);
        });

        const credentialOptions = {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": `Bearer ${this.serverAccessToken}`
            },
            ...options
        };

        return fetch(url, credentialOptions).then((res) => {
            return res.json();
        }).catch(err => {
            return { err }
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

    writeNewDiary(title, time, place, withWho, content) { // VERIFIED
        return this.credentialCall(this.getDiaryBaseURL(), {
            method: "POST",
            body: JSON.stringify({
                "title": "테스트다이어리",
                "sometime": "2019-07-31T17:00:33.903", "place": "place",
                "withWho": "컬러팀",
                "content": "아아아아아아",
                "cultureName": "concert",
            })
        })
    }

    deleteDiaryById(diaryId) { // VERIFIED
        return this.credentialCall(this.getDiaryByDiaryIdURL(diaryId), {
            method: "DELETE",
        })
    }

    // CULTUREINFO API GROUP //

    getCultureByQueries(category, page) { // VERIFIED
        return this.credentialCall(this.getCultureInfoByQueriesURL(category, page), {
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

    // WISH LIST API GROUP //


    getAllWishList() { // VERIFIED : /users/dibs
        return this.credentialCall(this.getWishListBaseURL(), {
            method: "GET",
        })
    }


    getWishItemById(wishId) { // VERIFIED users/dibs/:wishId
        return this.credentialCall(this.getWishedItemByIdURL(wishId), {
            method: "GET",
        })
    }

    // TODO 파라미터 이용해서 call 하는 걸로 수정하기
    addNewWishItem(imgUrl, title, place, startDate, endDate) { // VERIFIED /users/dibs
        return this.credentialCall(this.getWishListBaseURL(), {
            method: "POST",
            body: JSON.stringify({
                "imgUrl": imgUrl,
                "title": title,
                "place": place,
                "startDate": startDate,
                "endDate": endDate
            })
        })
    }

    deleteWishItem(wishId) { // VERIFIED /users/dibs/:wishId
        return this.credentialCall(this.getWishedItemByIdURL(wishId), {
            method: "DELETE",
        })
    }


}

export const Client = new ClientClass();