import {connect} from 'react-redux';
import template from "./SearchModeTemplate";
import {
    getSearchedProductList,
    getSearchedProductError,
    getSearchedProductKeyword, getSubmitted
} from "../../selectors/searchProductSelector";
import {searchProduct, submitSearchResult} from '../../actions/searchProduct'
import {getItemDetailAction, isWishedAction} from "../../actions/itemDetail";


function mapStateToProps(state) {

    const searchedProductList = getSearchedProductList(state);
    const searchedProductError = getSearchedProductError(state);
    const searchedProductKeyword = getSearchedProductKeyword(state);
    const submitted = getSubmitted(state);
    return {
        searchedProductList,
        searchedProductError,
        searchedProductKeyword,
        submitted,
    }
}

const mapDispatchToProps = {
    getItemInfo: getItemDetailAction.request,
    isWishedRequest: isWishedAction.request,
    searchRequest: searchProduct.request,
    submitSearchRequest : submitSearchResult.request,

};

export default connect(mapStateToProps, mapDispatchToProps)(template);

