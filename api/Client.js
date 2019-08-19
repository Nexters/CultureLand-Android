import {ACCESS_TOKEN, EXPIRED_DATE} from "../util";

const jwtDecode = require('jwt-decode');
const FACE_BOOK = "facebook";
const GOOGLE = "google";

import * as SecureStore from 'expo-secure-store';

class ClientClass {
    constructor() {
        this.baseURL = "http://54.180.86.141:8080";
        this.token = null;

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

    getCultureInfoByQueriesURL(category, sort, page) {
        return `${this.getCultureInfoBaseURL()}?category=${category}\
        &sort=${sort}&page=${page}`;
    }

    getCultureSearchURL(keyword) {
        return `${this.getCultureInfoBaseURL()}/search?query=${keyword}`;
    }

    getCultureByIdURL(cultureId) {
        return `${this.getCultureInfoBaseURL()}/id/${cultureId}`;
    }


    setToken(token) {
        console.log("토큰저장");
        this.token = token;
    }

    signInOrUpFacebook(token) {

        return fetch(this.getSignInOrUpURL(FACE_BOOK), {

            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                accessToken: token
            })

        })


    }

    async credentialCall(url, options) {


        await SecureStore.getItemAsync(EXPIRED_DATE, (expiredDate => {

            if (expiredDate < Date.now()) {
                // 갱신요청
                console.log(`Token 갱신요청 expired_at [${expiredDate}] 
                current is [${Date.now()}] `);
                // setToken(새로운토큰)
            }
        })).catch(e => {
            console.log(`credentialCall 예외발생 [ ${e} ]`);
        });

        const credentialOptions = {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": `Bearer ${this.token}`
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
                "imgUrl": "//t.011st.com/Down/Perf/201907/11m_148.jpg",
                "title": "알게되었ㄴㄴ데 너를 울리지 않고 ㄲ아껴주는법",
                "place": "세월ㅇㄴ왜 널 잊는법을 알려주지않고",
                "startDate": "20190808",
                "endDate": "20190808"
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