
import { MY_PAGE_ACCOUNT_ACTION, MY_PAGE_COUNT_ACTION} from "../actionTypes/myPage";

export const getMyPageAccount = {

    request : () => ({
        type : MY_PAGE_ACCOUNT_ACTION.REQUEST,
        payload : {
            credentials : '',
        }
    }),

    success : () => ({
        type : MY_PAGE_ACCOUNT_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : MY_PAGE_ACCOUNT_ACTION.FAILURE,
    }),
};

export const getMyPageCount = {

    request : () => ({
        type : MY_PAGE_COUNT_ACTION.REQUEST,
    }),

    success : () => ({
        type : MY_PAGE_COUNT_ACTION.SUCCESS,
    }),

    failure : () => ({
        type : MY_PAGE_COUNT_ACTION.FAILURE,
    }),
};