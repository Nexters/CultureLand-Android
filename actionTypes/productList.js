import key_mirror from 'key-mirror';

export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const CHANGE_PRODUCT_LIST = "CHANGE_PRODUCT_LIST";
export const CHANGE_SORT_LIST = "CHANGE_SORT_LIST";

export const GET_PRODUCT_LIST_ACTION = {
    REQUEST : "GET_PRODUCT_LIST_REQUEST",
    SUCCESS : "GET_PRODUCT_LIST_SUCCESS",
    FAILURE : "GET_PRODUCT_LIST_FAILURE",
};

export const CHANGE_PRODUCT_LIST_ACTION={
    REQUEST : `${CHANGE_PRODUCT_LIST}_REQUEST`,
    SUCCESS : `${CHANGE_PRODUCT_LIST}_SUCCESS`,
    FAILURE : `${CHANGE_PRODUCT_LIST}_FAILURE`,
};

export const CHANGE_SORT_LIST_ACTION={
    REQUEST : `${CHANGE_SORT_LIST}_REQUEST`,
    SUCCESS : `${CHANGE_SORT_LIST}_SUCCESS`,
    FAILURE : `${CHANGE_SORT_LIST}_FAILURE`,
};



export const CATEGORY = {
    ALL_PRODUCT : "all",
    EXHIBITION : "exhibition", // "EXHIBITION"
    CONCERT : "concert", // "concert"
    MUSICAL : "musical",
    PLAY : "play",
    ETC : "etc",
};


export const PRODUCT_LIST_FILTER = key_mirror({
    NEW : null,
    POPULARITY : null,
});

/**
 * @return {number}
 */
export function CATEGORY_KEY(category){
    switch(category){
        case CATEGORY.ALL_PRODUCT:
            return 0;
        case CATEGORY.EXHIBITION:
            return 1;
        case CATEGORY.CONCERT:
            return 2;
        case CATEGORY.MUSICAL:
            return 3;
        case CATEGORY.PLAY:
            return 4;
        case CATEGORY.ETC:
            return 5;
    }
}