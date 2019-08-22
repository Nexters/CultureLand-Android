import {connect} from 'react-redux';
import template from "./SearchModeTemplate";
import {
    getSearchedProductList,
    getSearchedProductError,
    getSearchedProductKeyword
} from "../../selectors/searchProductSelector";
import {searchProduct} from '../../actions/searchProduct'
import {getItemDetailAction, isWishedAction} from "../../actions/itemDetail";


function mapStateToProps(state) {

    const searchedProductList = getSearchedProductList(state);
    const searchedProductError = getSearchedProductError(state);
    const searchedProductKeyword = getSearchedProductKeyword(state);

    return {
        searchedProductList,
        searchedProductError,
        searchedProductKeyword
    }
}

const mapDispatchToProps = {
    getItemInfo: getItemDetailAction.request,
    isWishedRequest: isWishedAction.request,
    searchRequest: searchProduct.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(template);

