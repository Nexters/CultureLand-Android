import key_mirror from 'key-mirror';

export const GET_PRODUCT_LIST = {
    REQUEST : "GET_PRODUCT_LIST_REQUEST",
    SUCCESS : "GET_PRODUCT_LIST_SUCCESS",
    FAILURE : "GET_PRODUCT_LIST_FAILURE",
};

export const CATEGORY = key_mirror({
    ALL_PRODUCT : null,
    EXHIBITION : null,
    CONCERT : null,
    MUSICAL : null,
    PLAY : null,
    ETC : null,
});

export const PRODUCT_LIST_FILTER = key_mirror({
    NEW : null,
    POPULARITY : null,
});
