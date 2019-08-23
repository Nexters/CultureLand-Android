import { connect } from 'react-redux';
import template from "./plannedListTemplate";
import {changeProductList, changeProductListSort, getProductList} from "../../actions/productList";
import {getItemDetailAction, isWishedAction} from "../../actions/itemDetail";



function mapStateToProps(state) {

    const productList = state.productListReducer.productListRootActions.product_list;

    return {
        productList,
        category : state.productListReducer.productListRootActions.category,
        filter : state.productListReducer.productListRootActions.filter,
        searchWord : state.productListReducer.productListRootActions.search_word,
        loading : state.productListReducer.productListRootActions.loading,
        page : state.productListReducer.productListRootActions.page,
        isNextPageExists : state.productListReducer.productListRootActions.isNextPageExists,
        getProductListError : state.productListReducer.productListRootActions.getProductListError,
        searchProductListError : state.productListReducer.productListRootActions.searchProductListError,
    }
}

const mapDispatchToProps = {
    getItemInfo : getItemDetailAction.request,
    isWishedRequest : isWishedAction.request,
    getProductList : getProductList.request,
    changeProductList : changeProductList.request,
    changeProductListSort : changeProductListSort.request,
};
export default connect(mapStateToProps,mapDispatchToProps)(template);

