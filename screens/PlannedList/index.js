import { connect } from 'react-redux';
import template from "./plannedListTemplate";
import {getProductList} from "../../actions/productList";
import {getItemDetailAction, isWishedAction} from "../../actions/itemDetail";



function mapStateToProps(state) {

    const productList = state.productListReducer.getProductList.product_list;

    return {
        productList,
        category : state.productListReducer.getProductList.category,
        filter : state.productListReducer.getProductList.filter,
        searchWord : state.productListReducer.getProductList.search_word,
        loading : state.productListReducer.getProductList.loading,
        getProductListError : state.productListReducer.getProductList.getProductListError,
        searchProductListError : state.productListReducer.getProductList.searchProductListError,
    }
}

const mapDispatchToProps = {
    getItemInfo : getItemDetailAction.request,
    isWishedRequest : isWishedAction.request,
    getProductList : getProductList.request,
};

export default connect(mapStateToProps,mapDispatchToProps)(template);

