import { connect } from 'react-redux';
import template from "./plannedListTemplate";
import {getMyPageAccount, getMyPageCount} from "../../actions/myPage";



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
    getMyPageAccount : getMyPageAccount.request,
    getMypageCount : getMyPageCount.request,
};

export default connect(mapStateToProps,mapDispatchToProps)(template);

