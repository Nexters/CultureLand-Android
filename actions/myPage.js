
import { MY_PAGE_ACCOUNT, MY_PAGE_GET_COUNT} from "../actionTypes/myPage";

export const getMyPageAccount = {

    request : () => ({
        type : MY_PAGE_ACCOUNT.REQUEST,
    }),

    success : () => ({
        type : MY_PAGE_ACCOUNT.SUCCESS,
    }),

    failure : () => ({
        type : MY_PAGE_ACCOUNT.FAILURE,
    }),
};

export const getMyPageCount = {

    request : () => ({
        type : MY_PAGE_GET_COUNT.REQUEST,
    }),

    success : () => ({
        type : MY_PAGE_GET_COUNT.SUCCESS,
    }),

    failure : () => ({
        type : MY_PAGE_GET_COUNT.FAILURE,
    }),
};