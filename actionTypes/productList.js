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

/**
 * @return {number}
 */
export function CATEGORY_KEY(category){
    switch(category){
        case CATEGORY.ALL_PRODUCT:
            return 0;
        case CATEGORY.EXHIBITON:
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