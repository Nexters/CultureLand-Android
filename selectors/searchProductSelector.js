
export function getSearchedProductList(state){
    return state.searchProductReducer.searchProductRootAction.searched_product_list;
}
export function getSearchedProductError(state){
    return state.searchProductReducer.searchProductRootAction.searchedProductError;
}

export function getSearchedProductKeyword(state){
    return state.searchProductReducer.searchProductRootAction.keyword;
}

export function getSubmitted(state){
    return state.searchProductReducer.searchProductRootAction.submitted;
}