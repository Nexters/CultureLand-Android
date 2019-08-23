import {
    MY_PAGE_ACCOUNT,
    MY_PAGE_COUNT,
    MY_PAGE_ACCOUNT_ACTION,
    MY_PAGE_COUNT_ACTION} from "../actionTypes/myPage";
import {combineReducers} from 'redux';

const initialState = {

    userId: '김컬쳐',
    userEmail: 'culture_kim@culor.com',
    totalNumberOfDiaryCount: 0,
    likedDiaryCount: 0,
    exhibitionCount: 0,
    concertCount: 0,
    musicalCount: 0,
    playCount: 0,
    etcCount: 0,
    loading : false,
    error: undefined,
};

export function getMyPageCountActions(state = initialState, action) {
    switch (action.type) {

        case MY_PAGE_COUNT_ACTION.REQUEST:
            return {
                loading : true,
                ...state,
            };

        case MY_PAGE_COUNT_ACTION.SUCCESS:
            return {
                ...state,
                totalNumberOfDiaryCount: action.result.totalNumberOfDiaryCount,
                likedDiaryCount: action.result.likedDiaryCount,
                exhibitionCount: action.result.exhibitionCount,
                concertCount: action.result.concertCount,
                musicalCount: action.result.musicalCount,
                playCount: action.result.playCount,
                etcCount: action.result.etcCount,
                loading : false,
            };
        case MY_PAGE_COUNT_ACTION.FAILURE:
            return {
                ...state,
                error: action.error,
                loading : false,
            }
    }
}

export function getMyPageAccountActions(state = initialState, action) {
    switch (action.type) {
        case MY_PAGE_ACCOUNT_ACTION.REQUEST :
            return {
                loading : true,
                ...state,
            };

        case MY_PAGE_ACCOUNT_ACTION.SUCCESS :
            return {
                ...state,
                userId: action.result.userId,
                userEmail: action.result.userEmail,
                loading : false,
            };

        case MY_PAGE_ACCOUNT_ACTION.FAILURE :
            return {
                ...state,
                error: action.error,
                loading : false,
            }
    }
}

export function myPageRootAction(state = initialState, action) {
    let prefix = action.type.replace(/_((REQUEST)|(SUCCESS)|(FAILURE))/, '');

    switch (prefix) {
        case MY_PAGE_COUNT :
            return getMyPageCountActions(state, action);
        case MY_PAGE_ACCOUNT:
            return getMyPageAccountActions(state, action);
        default:
            return state;
    }
}

export default combineReducers({
    myPageRootAction,
})