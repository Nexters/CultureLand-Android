
class Client {
    constructor() {
        this.baseURL = "127.0.0.1";
    }
    getBaseURL() {
        return this.baseURL;
    }
    getSignupURL(){
        return `${this.getBaseURL()}/signInOrUp`;
    }

    getUserBaseURL(){
        return `${this.getBaseURL()}/users`;
    }

    getDiaryBaseURL(){
        return `${this.getBaseURL()}/diaries`;
    }

    getDiaryByDiaryIdURL(diaryId){
        return `${this.getAllDiaryURL()}/${diaryId}`;
    }

    editDiaryByDiaryIdURL(diaryId){
        return `${this.getAllDiaryURL()}/${diaryId}`;
    }

    deleteDiaryByDiaryIdURL(diaryId){
        return `${this.getAllDiaryURL()}/${diaryId}`;
    }

    getWishListBaseURL(){
        return `${this.getUserBaseURL()}/dibs`;
    }

    writeWishedItem(){
        return this.getWishListBaseURL();
    }

    getWishedItemByItemIdURL(dibsId){
        return `${this.getWishListBaseURL()}/${dibsId}`
    }
    deleteWishedItemByItemIdURL(dibsId){
        return this.getWishedItemByItemIdURL(dibsId);
    }
}

export default new Client();
