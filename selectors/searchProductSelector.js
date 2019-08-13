
export function getSearchedProductList(state){
    return state.searchProductReducer.searchProduct.searched_product_list;
}
export function getSearchedProductError(state){
    return state.searchProductReducer.searchProduct.searchedProductError;
}

export function getSearchProductKeyword(state){
    return state.searchProductReducer.searchProduct.keyword;
}