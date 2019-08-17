import {MY_PAGE_ACCOUNT_ACTION, MY_PAGE_GET_COUNT, MY_PAGE_GET_COUNT_ACTION} from "../actionTypes/myPage";
import {combineReducers} from 'redux';

const initialState = {
    userId: 'userId',
    userEmail: 'abc@culor.com',
    totalNumberOfDiaryCount: 0,
    likedDiaryCount: 0,
    exhibitionCount: 0,
    concertCount: 0,
    musicalCount: 0,
    playCount: 0,
    etcCount: 0,
    error: undefined,
};

export function getMyPageCountActions(state = initialState, action) {
    switch (action.type) {
        case MY_PAGE_GET_COUNT_ACTION.REQUEST:
            return {
                ...state,
            };

        case MY_PAGE_GET_COUNT_ACTION.SUCCESS:
            return {
                ...state,
                totalNumberOfDiaryCount: action.result.totalNumberOfDiaryCount,
                likedDiaryCount: action.result.likedDiaryCount,
                exhibitionCount: action.result.exhibitionCount,
                concertCount: action.result.concertCount,
                musicalCount: action.result.musicalCount,
                playCount: action.result.playCount,
                etcCount: action.result.etcCount,
            };
        case MY_PAGE_GET_COUNT_ACTION.FAILURE:
            return {
                ...state,
                error: action.error,
            }
    }
}

export function getMyPageAccountActions(state = initialState, action) {
    switch (action.type) {
        case MY_PAGE_ACCOUNT_ACTION.REQUEST :
            return {
                ...state,

            };

        case MY_PAGE_ACCOUNT_ACTION.SUCCESS :
            return {
                ...state,
                userId: action.result.userId,
                userEmail: action.result.userEmail,
            };

        case MY_PAGE_ACCOUNT_ACTION.FAILURE :
            return {
                ...state,
                error: action.error,
            }
    }
}

export function myPageRootActions(state = initialState, action) {
    let prefix = action.type.replace(/_((REQUEST)|(SUCCESS)|(FAILURE))/, '');

    switch (prefix) {
        case MY_PAGE_GET_COUNT :
            return getMyPageCountActions(state, action);
        case MY_PAGE_ACCOUNT_ACTION:
            return getMyPageAccountActions(state, action);
        default:
            return state;
    }
}

export default combineReducers({
    myPageRootActions,
})