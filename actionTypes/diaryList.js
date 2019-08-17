
import key_mirror from 'key-mirror';

export const GET_DIARY_LIST = "GET_DIARY_LIST";

export const LIST_TYPE = key_mirror({
    BYMONTH  : null,
    BYCATEGORY : null,
});

export const GET_DIARY_LIST_ACTION = {
    REQUEST: `${GET_DIARY_LIST}_REQUEST`,
    SUCCESS: `${GET_DIARY_LIST}_SUCCESS`,
    FAILURE: `${GET_DIARY_LIST}_FAILURE`
};

