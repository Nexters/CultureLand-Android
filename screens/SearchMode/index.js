import { connect } from 'react-redux';
import template from "./SearchModeTemplate";
import {getSearchedProductList, getSearchedProductError, getSearchedProductKeyword} from "../../selectors/searchProductSelector";
import {searchProduct} from '../../actions/searchProduct'



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
      searchRequest : searchProduct.request,
};

export default connect(mapStateToProps,mapDispatchToProps)(template);

