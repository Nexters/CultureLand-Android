import {MY_PAGE_GET_COUNT} from "../actionTypes/myPage";


const initialState = {
    totalNumberOfDiaryCount : 0,
    likedDiaryCount : 0,
    exhibitionCount : 0,
    concertCount : 0,
    musicalCount : 0,
    playCount : 0,
    etcCount : 0,
    error : undefined,
};

export function getMyPageCount(state = initialState, action){
    switch(action.type){
        case MY_PAGE_GET_COUNT.REQUEST:
            return {
                ...state,
            };

        case MY_PAGE_GET_COUNT.SUCCESS:
            return {
                ...state,
                totalNumberOfDiaryCount: action.result.totalNumberOfDiaryCount,
                likedDiaryCount : action.result.likedDiaryCount,
                exhibitionCount : action.result.exhibitionCount,
                concertCount : action.result.concertCount,
                musicalCount : action.result.musicalCount,
                playCount : action.result.playCount,
                etcCount : action.result.etcCount,
            };
        case MY_PAGE_GET_COUNT.FAILURE:
            return {
                ...state,
                error : action.error,
            }
    }
}